# Guia de Implementação ClipUp no Elementor

## Visão Geral

Este guia fornece instruções passo a passo para implementar o site ClipUp usando o Elementor. Diferente da abordagem anterior baseada em JSON, esta implementação usa HTML, CSS e JavaScript para replicar fielmente o design e funcionalidades da versão React original.

## Pré-requisitos

- WordPress 6.0+
- Elementor Pro (recomendado)
- Plugin "Header Footer Code Manager" ou equivalente para injetar CSS/JS

## Estrutura do Pacote

```
/secoes/               - Seções HTML individuais
  00-navbar.html       - Barra de navegação
  01-hero.html         - Seção principal (hero)
  02-target-audience.html - Público-alvo (cards)
  03-services.html     - Serviços disponíveis 
  04-earnings.html     - Calculadora de ganhos
  05-faq.html          - Perguntas frequentes
  06-cta.html          - Chamada para ação
  07-footer.html       - Rodapé
/scripts/
  clipup-styles.css    - Estilos CSS globais
  animations.js        - Scripts para animações
```

## Passos para Implementação

### 1. Configurar Estilos e Scripts Globais

1. Instale o plugin "Header Footer Code Manager"
2. Navegue até Configurações > Header Footer Code Manager
3. Crie uma nova entrada para o cabeçalho (header):
   - Nome: "ClipUp Styles"
   - Local: Cabeçalho (header)
   - Cole o conteúdo do arquivo `scripts/clipup-styles.css`
   - Ative para "Todas as páginas"
4. Crie uma nova entrada para o rodapé (footer):
   - Nome: "ClipUp Animations"
   - Local: Rodapé (footer)
   - Cole o conteúdo do arquivo `scripts/animations.js`
   - Ative para "Todas as páginas"

### 2. Criar a Página no Elementor

1. Crie uma nova página no WordPress chamada "ClipUp"
2. Clique em "Editar com Elementor"
3. Em "Configurações da página", escolha:
   - Layout: Elementor Canvas (sem cabeçalho/rodapé do tema)
   - Status: Publicado

### 3. Adicionar as Seções na Ordem Correta

Para cada seção, siga estas etapas:

1. Adicione um novo widget "HTML" ao Elementor
2. Copie o conteúdo HTML do arquivo correspondente da pasta `/secoes/`
3. Cole no editor do widget HTML
4. Salve as alterações do widget

**IMPORTANTE: Adicione as seções na seguinte ordem:**

1. 00-navbar.html
2. 01-hero.html
3. 02-target-audience.html
4. 03-services.html
5. 04-earnings.html
6. 05-faq.html
7. 06-cta.html
8. 07-footer.html

### 4. Verificar Âncoras e Navegação

Verifique se todas as âncoras estão funcionando corretamente:

- Navegação do menu principal
- Links "Saiba mais" 
- Botões CTA

## Ajustes Personalizados

### Alterando Cores

Para personalizar as cores, edite as variáveis CSS no início do arquivo `scripts/clipup-styles.css`:

```css
:root {
  --primary-color: #3B82F6;    /* Azul principal */
  --secondary-color: #10B981;  /* Verde secundário */
  /* outras variáveis */
}
```

### Responsividade

O CSS inclui classes responsivas prontas para uso:

- `.clipup-hidden-sm` - Oculta em telas pequenas (abaixo de 768px)
- `.clipup-hidden-md` - Oculta em telas médias (acima de 768px)
- `.md:clipup-w-1/2` - Largura de 50% em telas médias
- `.lg:clipup-grid-cols-3` - 3 colunas em telas grandes

## Solução de Problemas

### Problema: Estilos não estão carregando

- Verifique se o CSS foi adicionado corretamente no cabeçalho
- Confirme que não há conflitos de seletor com o tema WordPress
- Todas as classes CSS usam o prefixo `clipup-` para evitar conflitos

### Problema: Elementos HTML não aparecem corretamente

- Verifique se a importação de código HTML está completa
- Certifique-se de que está usando o widget HTML do Elementor
- Confira se não há caracteres inválidos no código HTML

### Problema: Animações não funcionam

- Verifique se o JavaScript foi adicionado corretamente no rodapé
- Abra o console do navegador para verificar possíveis erros de JavaScript
- Confirme que os IDs e classes referenciadas no JS existem no HTML

## Suporte

Se precisar de assistência adicional, por favor contate o suporte através de suporte@clipup.com.br