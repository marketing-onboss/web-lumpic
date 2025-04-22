# Instruções para Implementação do ClipUp no Elementor

Este documento contém instruções detalhadas para implementar a página ClipUp no Wordpress utilizando o Elementor, garantindo que o design seja idêntico à versão React.

## Pré-requisitos

- WordPress 6.0+
- Elementor Pro (recomendado)
- Tema Hello Elementor ou outro tema compatível com Elementor

## Procedimento Passo a Passo

### 1. Preparação do Ambiente

1. Instale e ative o plugin Elementor no WordPress
2. Instale e ative o tema Hello Elementor (recomendado)
3. Instale e ative o plugin "Header Footer Code Manager" ou similar

### 2. Configuração do CSS e JavaScript

1. No WordPress, acesse o plugin "Header Footer Code Manager"
2. Adicione um novo script para o **cabeçalho (header)** com o conteúdo do arquivo `scripts/clipup-styles.css`
3. Adicione um novo script para o **rodapé (footer)** com o conteúdo do arquivo `scripts/animations.js`
4. Certifique-se de marcar as opções para carregar os scripts em todas as páginas

### 3. Criação da Página no Elementor

1. Crie uma nova página no WordPress
2. Edite a página com o Elementor
3. Selecione o layout de página inteira (sem cabeçalho e rodapé do tema)

### 4. Adicionando as Seções HTML

Para cada seção do site:

1. No editor do Elementor, adicione um novo widget "HTML"
2. Cole o conteúdo HTML completo da seção correspondente
3. Salve as alterações
4. Visualize a página para garantir que tudo está sendo exibido corretamente

### 5. Ordem das Seções

Implemente as seções nesta ordem:

1. Navbar (`00-navbar.html`) - Menu de navegação
2. Hero (`01-hero.html`) - Seção principal com chamada para ação
3. Target Audience (`02-target-audience.html`) - Para quem é o serviço
4. Services Showcase (`03-services.html`) - Mostra os serviços disponíveis
5. Earnings Calculator (`04-earnings.html`) - Calculadora de ganhos/resultados
6. Blink Currency (`05-blink.html`) - Informações sobre moeda Blink
7. FAQ (`06-faq.html`) - Perguntas frequentes
8. CTA Section (`07-cta.html`) - Chamada final para ação
9. Footer (`08-footer.html`) - Rodapé do site

## Solução de Problemas

### Problema: Estilos CSS não aplicados
**Solução**: Verifique se o arquivo CSS foi adicionado corretamente no cabeçalho. Confirme se não há erros de sintaxe no código.

### Problema: Animações não funcionando
**Solução**: Verifique se o arquivo JavaScript foi adicionado corretamente no rodapé. Abra o console do navegador para verificar possíveis erros de JavaScript.

### Problema: Layout desalinhado em dispositivos móveis
**Solução**: Os códigos HTML já incluem classes responsivas, mas você pode fazer ajustes adicionais no CSS para dispositivos específicos.

### Problema: Conflitos com o tema ou outros plugins
**Solução**: Adicione prefixos específicos às classes CSS para evitar conflitos (já implementado com o prefixo "clipup-").

## Personalização

Para personalizar as cores e estilos:

1. Edite as variáveis CSS no início do arquivo `scripts/clipup-styles.css`
2. Atualize as cores primárias e secundárias conforme a identidade visual desejada
3. Ajuste os espaçamentos e tamanhos conforme necessário

## Recursos Adicionais

- Verifique se todas as fontes estão sendo carregadas corretamente
- Considere usar o plugin "Elementor Custom CSS" para ajustes específicos
- Para ícones adicionais, considere adicionar o FontAwesome ou outro pacote de ícones