import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o diretório atual em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define o caminho para o arquivo JSON
// Obter o nome do arquivo dos argumentos da linha de comando ou usar padrão
const fileName = process.argv[2] || 'clipup-home.json';
const jsonPath = path.join(__dirname, fileName);

try {
  // Tenta ler o arquivo
  const jsonContent = fs.readFileSync(jsonPath, 'utf8');
  
  // Tenta fazer o parse do JSON
  const jsonData = JSON.parse(jsonContent);
  
  // Valida a estrutura básica do Elementor
  if (!jsonData.version || !jsonData.title || !jsonData.content) {
    console.error('❌ Estrutura de JSON inválida: Campos obrigatórios ausentes (version, title, content)');
    process.exit(1);
  }
  
  if (!Array.isArray(jsonData.content)) {
    console.error('❌ Estrutura de JSON inválida: "content" deve ser um array');
    process.exit(1);
  }
  
  // Verifica a estrutura básica de cada seção
  let isValid = true;
  jsonData.content.forEach((section, index) => {
    if (!section.id || !section.settings || !section.elements) {
      console.error(`❌ Seção ${index} inválida: faltam campos obrigatórios (id, settings, elements)`);
      isValid = false;
    }
  });
  
  if (!isValid) {
    process.exit(1);
  }
  
  console.log('✅ JSON válido para importação no Elementor');
  console.log(`Template: ${jsonData.title}`);
  console.log(`Número de seções: ${jsonData.content.length}`);
  
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error('❌ Arquivo não encontrado:', jsonPath);
  } else {
    console.error('❌ Erro ao validar JSON:', error.message);
  }
  process.exit(1);
}