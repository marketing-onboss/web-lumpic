# Instruções para Implementação no Elementor

Este projeto foi adaptado para funcionar com o Elementor em WordPress, mantendo o mesmo design visual, porém usando a estrutura clássica (Section > Column > Widget) para máxima compatibilidade.

## Arquivos Disponíveis

Todos os arquivos para a versão Elementor estão na pasta `/elementor` e compactados no arquivo `clipup-elementor.zip` para facilitar o download.

## Conteúdo do Pacote

1. **Template JSON**  
   - `clipup-home.json` - Arquivo principal para importação no Elementor

2. **Scripts e Estilos**  
   - `scripts/animations.js` - Animações equivalentes ao framer-motion
   - `scripts/clipup-styles.css` - Estilos complementares para Elementor

3. **Arquivo de Referência**  
   - `home-structure.html` - Estrutura do layout para consulta

4. **Documentação**  
   - `README.md` - Instruções detalhadas de uso

5. **Ferramentas**  
   - `validate.js` - Script para validar o arquivo JSON
   - `validate-json.php` - Script PHP para validação em servidores PHP

## Como Implementar no WordPress

1. **Requisitos**
   - WordPress 5.8+
   - Elementor (versão Pro recomendada)
   - Um tema compatível com Elementor (Hello Elementor recomendado)

2. **IMPORTANTE: Método de Importação por Seções (Recomendado)**
   - Crie uma nova página no WordPress
   - Edite a página com o Elementor
   - No editor do Elementor, clique no ícone de Pasta (Biblioteca)
   - Selecione "Importar Template"
   - **Primeiro teste**: Importe apenas o arquivo `hero-section.json`
   - Se funcionar corretamente, continue com `dor-empresario-section.json`
   - Importe cada seção individualmente, não todas de uma vez

3. **Configuração de Scripts e Estilos**
   - Copie o conteúdo de `scripts/animations.js` e `scripts/clipup-styles.css` para o seu tema
   - Adicione-os seguindo as instruções no `README.md` dentro da pasta `elementor`

## Estrutura do Elementor

A versão Elementor segue estritamente a estrutura:

```
Section
└── Column
    └── Widget
```

Sem uso de Flexbox ou Container, garantindo compatibilidade com versões mais antigas do Elementor.

## Características

- Layout responsivo para todos os dispositivos
- Animações e transições equivalentes à versão React
- Cores baseadas nas variáveis globais do Elementor
- Compatibilidade com qualquer versão do Elementor

Consulte o arquivo `elementor/README.md` para instruções mais detalhadas sobre a implementação.