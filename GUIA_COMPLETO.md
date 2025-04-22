# Guia Completo do ClipUp - Projeto de Três Partes

Este guia explica a estrutura e a implementação do projeto ClipUp, que consiste em três partes interconectadas:

1. **Página Institucional** - Página principal com links para as seções de empresa e freelancer
2. **Área de Empresa** - Interface para contratantes/empresas
3. **Área de Freelancer** - Interface para criadores de conteúdo/freelancers

## Arquivos Disponíveis para Download

- `clipup-completo.zip` - Projeto completo com as três partes
- `clipup-institucional.zip` - Apenas a página institucional
- `clipup-empresa.zip` - Apenas a interface para empresas
- `clipup-freelancer.zip` - Apenas a interface para freelancers

## Estrutura do Projeto

Cada parte do projeto segue a mesma estrutura base:

```
/
├── client/               # Frontend React
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── hooks/        # Hooks personalizados
│   │   └── lib/          # Utilitários e configurações
│   └── index.html        # Arquivo HTML base
├── server/               # Backend Express
│   ├── index.ts          # Ponto de entrada do servidor
│   ├── routes.ts         # Rotas da API
│   └── storage.ts        # Camada de armazenamento
└── shared/               # Arquivos compartilhados
    └── schema.ts         # Esquema de dados
```

## Características Específicas de Cada Parte

### Página Institucional

- Design neutro que apresenta as duas opções (empresa ou freelancer)
- Menu de navegação compartilhado que permite mudar entre seções
- Seções informativas sobre o funcionamento da plataforma
- Links diretos para as áreas específicas

### Área de Empresa

- Focada em contratantes que buscam vídeos autênticos
- Apresenta benefícios para marcas e negócios
- Destaca ROI (retorno sobre investimento) e casos de sucesso
- Informações sobre a moeda Lumpz para contratantes

### Área de Freelancer

- Focada em criadores de conteúdo
- Apresenta oportunidades de ganho
- Mostra exemplos de vídeos que podem ser criados
- Calculadora de ganhos com base nos tipos de vídeo
- Informações sobre a moeda Lumpz para freelancers

## Como Instalar e Executar

### Requisitos

- Node.js 16+ e NPM
- Acesso ao servidor (preferencialmente Vult)

### Passos para Instalação Local (Desenvolvimento)

1. Descompacte o arquivo `clipup-completo.zip`
2. Navegue até a pasta desejada (institucional, empresa ou freelancer)
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
5. Acesse:
   - Institucional: `http://localhost:3000`
   - Empresa: `http://localhost:3001` (configure a porta conforme necessário)
   - Freelancer: `http://localhost:3002` (configure a porta conforme necessário)

### Configuração no Servidor Vult

Veja o arquivo `README_VULT.md` para instruções detalhadas de instalação no servidor Vult.

## Navegação entre as Partes

A navegação entre as três partes do site é facilitada pelo componente `SharedNavbar`, que está presente em todas as seções.

### Fluxo de Navegação

1. O usuário inicia na página institucional
2. Escolhe entre "Sou Empresa" ou "Sou Freelancer"
3. É direcionado para a seção correspondente
4. Pode navegar entre seções a qualquer momento usando o menu

### URLs de Navegação

- `/` - Página institucional
- `/empresa` - Interface para empresas
- `/freelancer` - Interface para freelancers

## Personalização e Edição

### Alterando Textos

1. Encontre o componente correspondente na pasta `client/src/components/`
2. Edite os textos diretamente nos elementos JSX
3. Salve o arquivo e reinicie o servidor se necessário

### Alterando Cores

1. Edite o arquivo `theme.json` na raiz do projeto
2. Modifique as variáveis de cores conforme necessário:
   ```json
   {
     "primary": "#3B82F6",
     "variant": "professional",
     "appearance": "light",
     "radius": 0.5
   }
   ```

### Adicionando Novas Páginas

1. Crie um novo arquivo em `client/src/pages/`
2. Adicione a rota em `client/src/App.tsx`
3. Atualize a navegação em `client/src/components/SharedNavbar.tsx`

## Moeda Lumpz

A plataforma utiliza uma moeda virtual chamada Lumpz:

- **Valor**: 1 Lumpz = 5 reais
- **Para Freelancers**: Recebem Lumpz por vídeos aprovados
- **Para Empresas**: Compram Lumpz para contratar criadores

## Suporte

Para obter ajuda adicional com a plataforma, consulte a documentação específica em cada pasta do projeto ou entre em contato com o suporte técnico.