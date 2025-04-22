# ClipUp - Pacote Elementor Corrigido

Este pacote contém todos os arquivos necessários para implementar o site ClipUp usando o Elementor de forma otimizada, dividido em seções individuais para facilitar a importação e evitar problemas de compatibilidade.

## Estrutura do Pacote

### Arquivos de Template por Seção
- `hero-section-corrigido.json` - Seção principal de abertura do site
- `dor-empresario-corrigido.json` - Seção "Dor do Empresário"
- `cards-beneficios.json` - Cards de benefícios e vantagens
- `como-funciona.json` - Explicação do processo passo a passo
- `credibilidade.json` - Seção de depoimentos e credibilidade
- `services-showcase.json` - Mostruário de serviços disponíveis
- `earnings-calculator.json` - Calculadora de resultados e ROI
- `blink-currency.json` - Informações sobre a moeda Blink
- `faq.json` - Perguntas frequentes
- `cta-section.json` - Seção de chamada para ação
- `navbar.json` - Barra de navegação
- `footer.json` - Rodapé do site

### Arquivos de Suporte
- `scripts/animations.js` - Script para animações em JavaScript
- `scripts/clipup-styles.css` - Estilos e classes CSS personalizadas

## Instruções de Uso

### 1. Preparação
- Certifique-se de ter o WordPress 5.8+ instalado
- Instale e ative o Elementor (de preferência o Elementor Pro)
- Use um tema compatível com Elementor (recomendamos o Hello Elementor)

### 2. Importação Otimizada por Seções
1. Crie uma nova página no WordPress
2. Clique em "Editar com Elementor"
3. No editor do Elementor, clique no ícone de pasta (Biblioteca)
4. Selecione "Importar Template"
5. Siga esta ordem recomendada para importação das seções:
   - Primeiro: `navbar.json`
   - Segundo: `hero-section-corrigido.json`
   - Terceiro: `dor-empresario-corrigido.json`
   - Continue com as demais seções conforme necessário

### 3. Adição de Scripts e Estilos

Há duas formas de adicionar os scripts e estilos necessários:

#### Método 1: Plugin de Header e Footer
1. Instale um plugin como "Header Footer Code Manager"
2. Adicione o conteúdo de `scripts/animations.js` em uma tag `<script>` no rodapé
3. Adicione o conteúdo de `scripts/clipup-styles.css` em uma tag `<style>` no cabeçalho

#### Método 2: Integração ao Tema
1. Copie os arquivos para a pasta do seu tema
2. Adicione este código ao `functions.php`:

```php
function clipup_enqueue_scripts() {
    wp_enqueue_style('clipup-styles', get_template_directory_uri() . '/clipup-styles.css');
    wp_enqueue_script('clipup-animations', get_template_directory_uri() . '/animations.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'clipup_enqueue_scripts');
```

## Estrutura Elementor
Todas as seções seguem rigorosamente a estrutura clássica do Elementor:

```
Section
└── Column
    └── Widget
```

Não utilizamos containers ou flexbox para garantir compatibilidade máxima.

## Solução de Problemas
Caso encontre dificuldades:

1. Tente importar as seções individualmente
2. Verifique se seu Elementor está atualizado
3. Assegure-se de que os scripts e estilos foram corretamente incluídos
4. Consulte o arquivo `TROUBLESHOOTING.md` para mais orientações

## Animações
O arquivo animations.js adiciona efeitos similares aos do React com framer-motion:
- Animações de entrada suaves
- Efeitos de hover
- Contadores
- Efeitos parallax
- Animações sequenciais (staggered)

## Cores e Personalização
As cores são baseadas nas variáveis globais do Elementor. Para alterar o esquema de cores:
1. Vá para Elementor > Configurações > Estilo
2. Modifique as cores primária e secundária