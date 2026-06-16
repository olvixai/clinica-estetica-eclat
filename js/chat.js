/**
 * Éclat — AI Chat Widget
 * Connects to n8n AI Agent via Chat Trigger webhook
 *
 * n8n Chat URL:
 * https://n8n-n8n.1ru8gh.easypanel.host/webhook/dac78e1d-f24c-45fc-b664-1fa0dea5ebe7/chat
 */

(function () {
  'use strict';

  /* ─── Configuration ─────────────────────── */
  const CONFIG = {
    webhookUrl: 'https://n8n-n8n.1ru8gh.easypanel.host/webhook/dac78e1d-f24c-45fc-b664-1fa0dea5ebe7/chat',
    welcomeMessage: 'Hola 👋\n¿En qué puedo ayudarte hoy?',
    suggestions: [
      '¿Qué tratamientos ofrece la clínica?',
      '¿Cuánto cuesta el bótox?',
      'Quiero pedir cita',
    ],
    storageKey: 'eclat_chat_session',
  };

  /* ─── State ──────────────────────────────── */
  let sessionId = null;
  let isOpen = false;
  let isWaiting = false;
  let hasGreeted = false;

  /* ─── DOM References ──────────────────────── */
  const trigger = document.getElementById('echat-trigger');
  const panel = document.getElementById('echat-panel');
  const closeBtn = document.getElementById('echat-close');
  const messages = document.getElementById('echat-messages');
  const form = document.getElementById('echat-form');
  const input = document.getElementById('echat-input');
  const sendBtn = document.getElementById('echat-send');
  const typing = document.getElementById('echat-typing');
  const badge = document.getElementById('echat-badge');
  const iconChat = trigger.querySelector('.echat__trigger-icon--chat');
  const iconClose = trigger.querySelector('.echat__trigger-icon--close');

  /* ─── Session Management ──────────────────── */
  function getOrCreateSession() {
    let stored = sessionStorage.getItem(CONFIG.storageKey);
    if (!stored) {
      stored = 'eclat_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
      sessionStorage.setItem(CONFIG.storageKey, stored);
    }
    return stored;
  }

  /* ─── Time Formatting ──────────────────────── */
  function getTime() {
    return new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  }

  /* ─── Render Message ──────────────────────── */
  function appendMessage(text, role) {
    const wrapper = document.createElement('div');
    wrapper.className = `echat__message echat__message--${role === 'assistant' ? 'bot' : 'user'}`;
    if (role === 'error') wrapper.classList.add('echat__message--error');

    const bubble = document.createElement('div');
    bubble.className = 'echat__message-bubble';
    bubble.textContent = text;

    const time = document.createElement('span');
    time.className = 'echat__message-time';
    time.textContent = getTime();

    wrapper.appendChild(bubble);
    wrapper.appendChild(time);
    messages.appendChild(wrapper);

    scrollToBottom();
    return wrapper;
  }

  /* ─── Render Welcome + Suggestions ─────────── */
  function renderWelcome() {
    if (hasGreeted) return;
    hasGreeted = true;

    const msgEl = appendMessage(CONFIG.welcomeMessage, 'assistant');

    // Suggestion chips
    const chips = document.createElement('div');
    chips.className = 'echat__suggestions';

    CONFIG.suggestions.forEach((text) => {
      const chip = document.createElement('button');
      chip.className = 'echat__suggestion-chip';
      chip.textContent = text;
      chip.addEventListener('click', () => {
        chips.remove();
        sendMessage(text);
      });
      chips.appendChild(chip);
    });

    msgEl.appendChild(chips);
    scrollToBottom();
  }

  /* ─── Scroll to Bottom ──────────────────────── */
  function scrollToBottom() {
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  }

  /* ─── Typing Indicator ──────────────────────── */
  function showTyping() {
    typing.style.display = 'flex';
    typing.setAttribute('aria-hidden', 'false');
    scrollToBottom();
  }

  function hideTyping() {
    typing.style.display = 'none';
    typing.setAttribute('aria-hidden', 'true');
  }

  /* ─── Toggle Panel ──────────────────────────── */
  function openChat() {
    isOpen = true;
    panel.classList.add('echat__panel--open');
    panel.setAttribute('aria-hidden', 'false');
    trigger.setAttribute('aria-expanded', 'true');
    iconChat.style.display = 'none';
    iconClose.style.display = 'flex';
    badge.classList.add('echat__trigger-badge--hidden');

    renderWelcome();
    setTimeout(() => input.focus(), 350);
  }

  function closeChat() {
    isOpen = false;
    panel.classList.remove('echat__panel--open');
    panel.setAttribute('aria-hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    iconChat.style.display = 'flex';
    iconClose.style.display = 'none';
  }

  function toggleChat() {
    isOpen ? closeChat() : openChat();
  }

  /* ─── Auto-grow Textarea ────────────────────── */
  function autoGrow() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
  }

  /* ─── Enable / Disable Send Button ─────────── */
  function updateSendState() {
    const hasText = input.value.trim().length > 0;
    sendBtn.disabled = !hasText || isWaiting;
  }

  /* ─── Send Message to n8n ───────────────────── */
  async function sendMessage(text) {
    if (!text || isWaiting) return;

    isWaiting = true;
    updateSendState();

    // Show user bubble
    appendMessage(text, 'user');

    // Clear input
    input.value = '';
    input.style.height = 'auto';

    // Show typing
    showTyping();

    try {
      const response = await fetch(CONFIG.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          action: 'sendMessage',
          sessionId: sessionId,
          chatInput: text,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      // n8n chat trigger response format: { output: "..." } or { text: "..." }
      const reply =
        data.output ||
        data.text ||
        data.message ||
        (Array.isArray(data) && data[0]?.output) ||
        'Lo siento, no pude procesar tu consulta. Por favor, inténtalo de nuevo.';

      hideTyping();
      appendMessage(reply, 'assistant');

    } catch (err) {
      console.error('[Éclat Chat]', err);
      hideTyping();
      appendMessage(
        'Lo siento, ocurrió un error de conexión. Por favor, inténtalo de nuevo en unos instantes.',
        'error'
      );
    } finally {
      isWaiting = false;
      updateSendState();
      input.focus();
    }
  }

  /* ─── Event Listeners ───────────────────────── */
  trigger.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', closeChat);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text && !isWaiting) sendMessage(text);
  });

  input.addEventListener('input', () => {
    autoGrow();
    updateSendState();
  });

  // Enter to send (Shift+Enter for newline)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const text = input.value.trim();
      if (text && !isWaiting) sendMessage(text);
    }
  });

  // Close on backdrop click (outside panel, not on trigger)
  document.addEventListener('click', (e) => {
    if (
      isOpen &&
      !panel.contains(e.target) &&
      !trigger.contains(e.target)
    ) {
      closeChat();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeChat();
  });

  /* ─── Init ───────────────────────────────────── */
  sessionId = getOrCreateSession();

})();
