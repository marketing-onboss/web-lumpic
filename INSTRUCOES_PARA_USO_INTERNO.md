# Instruções para Uso Interno dos Arquivos ClipUp

Este documento explica a estrutura dos arquivos do projeto ClipUp e como usá-los internamente, sem a necessidade de hospedagem externa.

## Estrutura de Arquivos

### 1. Versão React (Para Desenvolvimento)

Todos os arquivos de código-fonte do React estão organizados nas seguintes pastas:

- `client/` - Contém todo o código front-end do site
  - `client/src/components/` - Os componentes visuais (Hero, Navbar, Footer, etc.)
  - `client/src/pages/` - As páginas completas do site
  - `client/src/assets/` - Imagens e outros recursos

- `server/` - Contém o código back-end (API) do site
  - Armazena dados e lida com requisições

- `shared/` - Arquivos compartilhados entre cliente e servidor
  - Definições de tipos e estruturas de dados

### 2. Versão Elementor (Para WordPress)

A versão para Elementor está contida nos seguintes arquivos:

- `clipup-elementor-html.zip` - Pacote completo para implementação no Elementor
  - `secoes/` - Contém cada seção do site como HTML independente
  - `scripts/` - CSS e JavaScript para estilo e funcionalidades

## Como Usar os Arquivos

### Para Referência Visual e de Design

Se você deseja apenas referência visual ou textos:

1. Navegue até `client/src/components/` para ver cada seção individual
2. Os arquivos têm nomes descritivos (ex: `Hero.tsx`, `Footer.tsx`)
3. Os textos e estrutura visual podem ser facilmente identificados

### Para Extrair Conteúdo e Textos

1. Abra os arquivos `.tsx` na pasta `client/src/components/`
2. Localize os textos entre aspas (") ou dentro de tags como `<p>Texto aqui</p>`
3. Extraia e reutilize conforme necessário em seus próprios materiais

### Para Usar no Elementor (WordPress)

1. Descompacte o arquivo `clipup-elementor-html.zip`
2. Cada arquivo na pasta `secoes/` contém HTML pronto para ser copiado
3. Adicione um widget HTML no Elementor e cole o conteúdo do arquivo
4. Siga as instruções no `GUIA_DE_IMPLEMENTACAO.md` incluído no ZIP

### Para Modificar Textos e Conteúdos

#### Na versão React:
1. Localize o arquivo do componente em `client/src/components/`
2. Procure os textos entre aspas ou dentro de tags HTML
3. Modifique conforme necessário

#### Na versão Elementor:
1. Abra os arquivos HTML em `secoes/` do zip `clipup-elementor-html.zip`
2. Encontre os textos e altere-os diretamente no HTML
3. Salve o arquivo modificado para uso futuro

## Dicas para Não-Programadores

1. **Use um editor de texto simples** como Notepad, Notepad++ ou VS Code para abrir os arquivos
2. **Procure por textos específicos** usando a função de busca (Ctrl+F)
3. **Faça backup** antes de modificar qualquer arquivo
4. **Mantenha a estrutura HTML** ao editar (não remova tags como `<div>`, apenas modifique o texto entre elas)

## Os Arquivos Mais Importantes

### Para Conteúdo de Marketing:

- `client/src/components/Hero.tsx` - Seção principal com mensagem de destaque
- `client/src/components/TargetAudience.tsx` - Seção sobre o público-alvo
- `client/src/components/ServicesShowcase.tsx` - Serviços oferecidos
- `client/src/components/FAQ.tsx` - Perguntas frequentes

### Para Elementos Visuais/Design:

- `theme.json` - Define as cores principais do site
- `client/src/components/ui/` - Componentes de interface como botões e cards

## Suporte Adicional

Se precisar de ajuda para encontrar ou modificar algo específico nos arquivos:

1. Descreva exatamente o que você está procurando para o ChatGPT
2. Especifique se está usando a versão React ou Elementor
3. Pergunte onde encontrar textos específicos ou elementos visuais

---

Esta documentação deve ajudá-lo a navegar e utilizar os arquivos do ClipUp para uso interno, sem necessidade de hospedagem ou conhecimento técnico avançado.