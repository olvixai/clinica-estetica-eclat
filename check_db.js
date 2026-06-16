const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://znrlvugkavcgebeohwmy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpucmx2dWdrYXZjZ2ViZW9od215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzkxNTMsImV4cCI6MjA5MTkxNTE1M30.HXC8TIDdDGv7swGp6a7cZHh4dpd8Bd5MXlKN3oajpvI'
);

(async () => {
  console.log('Consultando slugs en la base de datos...');
  const { data, error } = await supabase
    .from('businesses')
    .select('name, slug');
    
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Negocios encontrados:');
    console.log(data);
    const exists = data.some(b => b.slug === 'clinica-estetica-eclat');
    console.log(`\n¿Existe 'clinica-estetica-eclat'?: ${exists ? 'SÍ' : 'NO'}`);
  }
})();
