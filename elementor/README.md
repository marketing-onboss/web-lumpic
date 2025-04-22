# ClipUp Elementor - Instruções de Uso

Este diretório contém os arquivos necessários para implementar o site ClipUp no Elementor usando a estrutura clássica (sem Flexbox), mantendo o design visual idêntico à versão em React.

## Conteúdo da Pasta

### Arquivos JSON para Importação
- `hero-section.json` - Seção Hero principal (importar primeiro)
- `dor-empresario-section.json` - Seção "Dor do Empresário" (segunda seção)
- `clipup-home.json` - Template completo (alternativa - para referência)

### Scripts e Estilos
- `scripts/animations.js` - Script para animações e efeitos 
- `scripts/clipup-styles.css` - Estilos complementares para Elementor

### Ferramentas e Referências
- `home-structure.html` - Arquivo de referência para estrutura (não é usado na importação)
- `validate.js` - Script para validar arquivos JSON

## Requisitos

1. WordPress 5.8 ou superior
2. Plugin Elementor (versão Pro recomendada, mas funciona com a versão gratuita)
3. Tema compatível com Elementor (recomendado: Hello Elementor)

## Instruções de Importação

### 1. Método por Seções (Recomendado)

1. Primeiro, crie uma nova página no WordPress
2. Edite a página com o Elementor
3. No Elementor, clique no ícone de Pasta (Biblioteca de Templates)
4. Selecione "Importar Template"
5. Importe primeiro o arquivo `hero-section.json`
6. Insira esta seção na página
7. Repita o processo para `dor-empresario-section.json`
8. Continue importando as demais seções à medida que for testando

### 2. Método Template Completo (Alternativo)

1. No WordPress, navegue até Elementor > Templates > Páginas
2. Clique em "Importar Templates"
3. Selecione o arquivo `clipup-home.json`
4. Aguarde a conclusão da importação
5. Aplique o template a uma nova página

> **Nota**: Recomendamos o método por seções para evitar problemas de compatibilidade

### 2. Adicione os Scripts e Estilos

**Método 1: Usando um plugin de cabeçalho e rodapé**

1. Instale e ative um plugin como "Header Footer Code Manager" ou similar
2. Adicione o conteúdo do arquivo `scripts/animations.js` dentro de uma tag `<script>` no rodapé do site
3. Adicione o conteúdo do arquivo `scripts/clipup-styles.css` dentro de uma tag `<style>` no cabeçalho do site

**Método 2: Diretamente no tema**

1. Copie os arquivos `animations.js` e `clipup-styles.css` para a pasta do seu tema
2. Adicione o seguinte código ao arquivo `functions.php` do seu tema:

```php
function clipup_enqueue_scripts() {
    wp_enqueue_style('clipup-styles', get_template_directory_uri() . '/clipup-styles.css');
    wp_enqueue_script('clipup-animations', get_template_directory_uri() . '/animations.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'clipup_enqueue_scripts');
```

## Estrutura dos Elementos Elementor

O template segue estritamente a estrutura clássica do Elementor:

```
Section
└── Column
    └── Widget
```

Não foram utilizados containers ou Flexbox, garantindo máxima compatibilidade com qualquer versão do Elementor.

## Classes CSS Personalizadas

Diversas classes CSS personalizadas foram adicionadas para reproduzir os efeitos visuais do site em React:

- `clipup-animate` - Para elementos com animações de entrada
- `clipup-hover` - Para elementos com efeitos de hover
- `clipup-float` - Para elementos com animação flutuante
- `clipup-pulse` - Para elementos com animação de pulso
- `clipup-rotate` - Para elementos com animação de rotação
- `clipup-card` - Para cards com efeitos de hover
- `clipup-hero-gradient` - Para o gradiente de fundo do hero

## Solução de Problemas

- **Animações não funcionam**: Verifique se o arquivo JavaScript foi corretamente carregado no site.
- **Estilos ausentes**: Confirme se o arquivo CSS foi incluído no cabeçalho do site.
- **Erro na importação**: Verifique se o formato do JSON não foi alterado e se você está usando um WordPress e Elementor atualizados.

## Personalização Adicional

- As cores são definidas usando as variáveis globais do Elementor, para alterar o esquema de cores, modifique as cores globais nas configurações do Elementor.
- Os ícones usam FontAwesome 5, já incluído no Elementor.
- Para altas taxas de conversão, recomenda-se otimizar todas as imagens para tamanhos web responsivos.

## Compatibilidade com Dispositivos Móveis

O layout foi projetado para ser totalmente responsivo. Certifique-se de usar a visualização de dispositivos móveis e tablets no editor do Elementor para refinar a experiência em diferentes tamanhos de tela.

---

Este template foi criado especificamente para converter o design React em uma estrutura clássica do Elementor, preservando a mesma experiência visual e interativa para o usuário final.