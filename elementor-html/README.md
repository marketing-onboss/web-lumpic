# ClipUp - Implementação HTML para Elementor

## Este pacote contém a solução completa para implementar o site ClipUp no Elementor

Ao contrário da abordagem anterior que tentava usar apenas a estrutura JSON do Elementor (que não capturou corretamente todos os elementos visuais), esta abordagem usa HTML completo que pode ser inserido diretamente nas seções do Elementor.

## Instruções de Uso

### 1. Preparação do Ambiente
- WordPress 5.8+
- Elementor Pro (recomendado)
- Tema Hello Elementor

### 2. Configuração das Cores Globais
Configure o Elementor com as cores globais:
- Cor Primária: #3B82F6 (azul)
- Cor Secundária: #10B981 (verde)

### 3. Passos para Implementação

#### Passo 1: Configurar os Estilos Globais
- No WordPress, vá para Aparência > Personalizar
- Certifique-se de que o tema Hello Elementor esteja ativo
- Importe o arquivo `theme-style.json` nas configurações do tema se disponível

#### Passo 2: Adicionar os Scripts e Estilos
- Instale o plugin "Header Footer Code Manager"
- Adicione o conteúdo do arquivo `scripts/clipup-styles.css` no cabeçalho
- Adicione o conteúdo do arquivo `scripts/animations.js` no rodapé 

#### Passo 3: Construir a Página Seção por Seção
1. Crie uma nova página no WordPress
2. Edite com Elementor
3. Para cada seção, siga estes passos:
   - Adicione uma nova seção
   - Escolha o layout adequado (geralmente uma coluna)
   - Adicione um widget HTML
   - Cole o código HTML da seção correspondente
   - Salve e visualize

## Estrutura de Arquivos

```
/secoes
  /01-navbar.html         - Barra de navegação
  /02-hero.html           - Seção Hero principal
  /03-target-audience.html - Para quem (cards)
  /04-services.html       - Showcase de serviços
  /05-earnings.html       - Calculadora de resultados
  /06-blink.html          - Moeda Blink
  /07-faq.html            - Perguntas frequentes
  /08-cta.html            - Chamada para ação
  /09-footer.html         - Rodapé
/scripts
  /animations.js          - Animações JS
  /clipup-styles.css      - Estilos CSS
```

## Ordem de Implementação

Siga esta ordem exata para implementar as seções:

1. Navbar
2. Hero
3. Target Audience
4. Services Showcase
5. Earnings Calculator
6. Blink Currency
7. FAQ
8. CTA Section
9. Footer

## Solução de Problemas

Se encontrar problemas com a formatação:
1. Certifique-se de estar usando o widget HTML do Elementor
2. Verifique se todo o código HTML foi colado corretamente
3. Assegure-se de que o CSS e JS foram adicionados ao site
4. Valide se as fontes e FontAwesome estão carregados corretamente