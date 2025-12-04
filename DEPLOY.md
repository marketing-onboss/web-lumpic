# Instruções de Deploy - Lumpic Web

Este documento fornece instruções passo a passo para deploy da aplicação Lumpic Web em diferentes plataformas de hospedagem.

## Requisitos Gerais

Antes de prosseguir com o deploy, certifique-se de ter:

- Node.js 18+ instalado (recomendado: Node.js 20)
- NPM ou Yarn
- Git (para clonar o repositório se necessário)
- O código-fonte do projeto (pasta lumpic-web.zip descompactada)

## Preparação do Projeto para Deploy

Antes de realizar o deploy em qualquer plataforma, execute os seguintes comandos para garantir que o projeto está pronto:

```bash
# Instalar dependências
npm install

# Construir o projeto para produção
npm run build
```

## 1. Deploy no Netlify

O Netlify é uma excelente escolha para hospedar aplicações React/Vite com backend serverless.

### Via Interface Web:

1. Acesse [app.netlify.com](https://app.netlify.com/) e faça login
2. Clique em "Add new site" > "Import an existing project"
3. Conecte ao seu repositório Git ou faça upload manual do diretório do projeto
4. Configure as seguintes opções:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em "Deploy site"

### Via Netlify CLI:

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Login na sua conta Netlify
netlify login

# Iniciar o processo de deploy
netlify deploy

# Quando solicitado, use as seguintes configurações:
# - Create & configure a new site
# - Build command: npm run build
# - Directory to deploy: dist

# Para deploy final em produção
netlify deploy --prod
```

## 2. Deploy na Vercel

A Vercel oferece uma experiência otimizada para aplicações React/Next.js.

### Via Interface Web:

1. Acesse [vercel.com](https://vercel.com/) e faça login
2. Clique em "New Project"
3. Importe seu repositório Git ou faça upload do diretório do projeto
4. Configure as seguintes opções:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em "Deploy"

### Via Vercel CLI:

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Login na sua conta Vercel
vercel login

# Deploy do projeto
vercel

# Para deploy final em produção
vercel --prod
```

## 3. Deploy no Vultr

O Vultr fornece servidores VPS que são adequados para hospedar a aplicação completa.

1. Crie uma conta no [Vultr](https://www.vultr.com/)
2. Implante um novo servidor com Ubuntu 22.04 LTS
3. Conecte-se ao servidor via SSH
4. Instale as dependências necessárias:

```bash
sudo apt update
sudo apt install -y nodejs npm nginx
```
rsync -avz --delete dist/public/ forge@your-server:/home/forge/your-site/current/public/
## Deploy (resumo pragmático)

Este documento resume o fluxo de deploy recomendado para o estado atual do projeto: o frontend é um SPA construído com Vite e o backend de leads é um endpoint PHP leve em `public/api/leads.php`.

Objetivo principal
- Produzir os artefatos estáticos do cliente (`dist/public/`) e publicá-los em `public/` do release no servidor (Forge). O servidor de produção NÃO precisa de Node.

Recomendações rápidas
- Recomendo **build no CI** (GitHub Actions) e envio dos arquivos estáticos ao Forge. Alternativa: build durante o deploy no Forge.
- Não exponha chaves sensíveis no `VITE_` — só use `VITE_` para valores públicos (Measurement IDs, pixel IDs). A chave `BREVO_API_KEY` deve ser configurada apenas no ambiente do servidor (Forge) e NUNCA empacotada como `VITE_` em produção.

Variáveis importantes
- Variáveis de build (expostas ao cliente, definidas **no build**):
  - `VITE_GA_MEASUREMENT_ID` (GA4)
  - `VITE_FACEBOOK_PIXEL_ID`
  - `VITE_CLARITY_ID`
  - `VITE_BREVO_LIST_FREELANCERS`, `VITE_BREVO_LIST_EMPRESAS` (opcionais)

- Variáveis de runtime (somente servidor):
  - `BREVO_API_KEY` (usada por `public/api/leads.php`) — defina no painel do Forge (site → Environment) ou no servidor.

Nota: valores `VITE_` são lidos apenas no momento do build; alterar um `VITE_` requer rebuild e redeploy.

## Variáveis de ambiente necessárias (produção)

Defina as variáveis abaixo em produção. Observação importante: **valores que começam com `VITE_` são expostos ao cliente** e devem conter apenas IDs públicos (measurement IDs, pixel IDs, list IDs). **Chaves secretas nunca devem começar com `VITE_`** — coloque-as como variáveis de runtime no painel do servidor (Forge) ou em seu provedor.

- `BREVO_API_KEY` (runtime — servidor) — Chave privada da Brevo/Sendinblue usada por `public/api/leads.php` para encaminhar leads. **Defina esta variável apenas no painel do Forge (Environment) ou no ambiente do servidor; não a coloque em `VITE_`.**
- `VITE_GA_MEASUREMENT_ID` (build-time) — Google Analytics 4 Measurement ID (ex: `G-XXXXXXXXXX`). Defina como secret no CI (ou no Environment do Forge se você buildar no Forge).
- `VITE_FACEBOOK_PIXEL_ID` (build-time) — Facebook Pixel ID (número). Defina no build (CI secrets ou Forge Environment).
- `VITE_CLARITY_ID` (build-time) — Microsoft Clarity project ID. Defina no build.
- `VITE_BREVO_LIST_FREELANCERS` (build-time, opcional) — ID da lista Brevo para freelancers (número) usada pelo cliente.
- `VITE_BREVO_LIST_EMPRESAS` (build-time, opcional) — ID da lista Brevo para empresas (número) usada pelo cliente.

Se sua pipeline faz o build no GitHub Actions (recomendado), adicione os `VITE_` como `secrets` do repositório e injete-os no passo de build. Exemplo:

```yaml
env:
  VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
  VITE_FACEBOOK_PIXEL_ID: ${{ secrets.VITE_FACEBOOK_PIXEL_ID }}
  VITE_CLARITY_ID: ${{ secrets.VITE_CLARITY_ID }}
```

No Forge (se você construir no servidor), defina os `VITE_` na seção Environment do site **antes** do passo de build do release para que o Vite os injete no bundle.

Variáveis auxiliares de deploy (opcionais, apenas se usar rsync/SSH no workflow):
- `SSH_HOST` / `SSH_USERNAME` / `SSH_PRIVATE_KEY` / `TARGET_DIR` — usadas pelo CI para copiar `dist/public/` para o servidor.

Resumo: coloque os IDs públicos em `VITE_` durante o build; coloque `BREVO_API_KEY` (segredo) **somente** no runtime do servidor.

Build & Deploy (exemplos)

1) Build no CI (recomendado)

- Configure secrets no GitHub (`VITE_GA_MEASUREMENT_ID`, `VITE_FACEBOOK_PIXEL_ID`, etc.).
- No workflow: instale dependências, rode `npm run build:client`, e em seguida envie `dist/public/` para o servidor (rsync/SSH) ou para seu destino estático.

Exemplo (trecho GitHub Action):

```yaml
- name: Build and deploy
  run: |
    npm ci
    npm run build:client
    rsync -avz --delete dist/public/ forge@${{ secrets.SSH_HOST }}:${{ secrets.TARGET_DIR }}
  env:
    VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
    VITE_FACEBOOK_PIXEL_ID: ${{ secrets.VITE_FACEBOOK_PIXEL_ID }}
    VITE_CLARITY_ID: ${{ secrets.VITE_CLARITY_ID }}
```

2) Build no Forge (alternativa)

- No painel do Forge, adicione `VITE_` vars como Environment (serão visíveis no build step). Configure também `BREVO_API_KEY` como runtime no painel.
- Exemplo de passos no script de deploy do Forge:

```bash
npm ci
npm run build:client
# mover/copy dist/public/ para public/
rsync -av --delete dist/public/ public/
chown -R forge:forge public || true
```

Endpoint de leads (produção)
- O repositório inclui `public/api/leads.php` que encaminha leads para Brevo usando `BREVO_API_KEY` do ambiente do servidor. Em produção, use esse endpoint para não expor chaves no cliente.

Testes locais rápidos
- Gerar build local e servir com PHP embutido para testar `public/api/leads.php`:

```bash
npm ci
npm run build:client
# servir a pasta public (ex.: testar endpoint PHP)
php -S 127.0.0.1:8080 -t public/
```

Segurança e boas práticas
- Nunca commite chaves reais em arquivos `.env` no repositório.
- Configure `BREVO_API_KEY` diretamente no painel do Forge (ou em variáveis de ambiente no servidor). Use `VITE_` apenas para IDs públicos.
- Após alterar `VITE_` no painel do Forge ou no CI, é necessário rebuild + redeploy para o cliente receber a nova configuração.

Resumo final
- Recomendado: build no CI com `VITE_` definidos em secrets e deploy dos artefatos estáticos para o Forge; definir `BREVO_API_KEY` no painel do Forge para runtime.
- `public/api/leads.php` é o endpoint seguro no servidor para enviar leads (usa `BREVO_API_KEY`).

4. Se o sistema de idiomas está funcionando adequadamente
5. Se o lightbox de vídeo e outros componentes interativos estão operacionais

## Solução de Problemas Comuns

### Erro 404 em Rotas da Aplicação

Se você encontrar erros 404 ao navegar diretamente para uma rota específica (ex: /freelancer), será necessário configurar o redirecionamento para o index.html:

- **Netlify**: Crie um arquivo `_redirects` na pasta `public` com o conteúdo:
  ```
  /* /index.html 200
  ```

- **Vercel**: Crie um arquivo `vercel.json` na raiz do projeto com:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

- **NGINX**: Modifique a configuração para incluir:
  ```
  location / {
      try_files $uri $uri/ /index.html;
  }
  ```

### Problemas com API Backend

Se o backend não estiver funcionando corretamente após o deploy:

1. Verifique se as variáveis de ambiente estão configuradas corretamente
2. Confirme se as portas necessárias estão abertas (se estiver usando VPS)
3. Verifique os logs da aplicação para identificar possíveis erros

## Manutenção e Updates

Para atualizar a aplicação após o deploy inicial:

1. Faça as alterações necessárias no código
2. Reconstrua o projeto: `npm run build`
3. Reimplante usando o mesmo método utilizado no deploy inicial

Para plataformas como Netlify e Vercel, você pode configurar deploy automático a partir do seu repositório Git para que cada push desencadeie uma nova implantação.

## Subir commits e testar no Forge (passo a passo)

Siga estes passos para commitar as mudanças locais (ex.: novo script em `deploy/01_copy_public.sh`) e disparar o deploy no Forge.

- Verifique o status do Git e inclua apenas os arquivos desejados:

```bash
git status --porcelain
git add deploy/01_copy_public.sh DEPLOY.md
git commit -m "chore(deploy): add copy script and deploy instructions"
```

- Se preferir revisar antes do commit, use `git add -p` ou abra o diff com `git diff`.

- Envie para a branch `master` (ou a branch que o Forge está configurado para usar):

```bash
# substituir origin se seu remote tiver outro nome
git push origin master
```

- No painel do Forge:
  - Confirme que o site está conectado ao repositório/branch correto.
  - Verifique o script de deploy (Deployment Script).
  - Recomendado (Node-free): faça o build no CI e use o deploy script que copia os artefatos já construídos.

```bash
# CI-built artifacts expected. This script copies dist/public -> public on the server
bash ./deploy/forge-deploy.sh "$FORGE_RELEASE_DIRECTORY"
```

  - Nota: o script acima espera que `dist/public/` já exista (produzido pelo CI). Se preferir
    construir no Forge (não recomendado para um servidor sem Node), garanta que Node esteja
    instalado no servidor e configure as variáveis `VITE_` no painel do Forge antes do build.

- Alternativas:
  - Se o Forge estiver configurado para executar um script definido no `package.json`, você pode usar `npm run deploy:forge` no campo de deploy.
  - Se preferir não executar Node no servidor, faça o build localmente e use `deploy/local-rsync.sh` para enviar apenas `dist/public/` para o servidor.

Observações importantes antes do push:
- Garanta que o Forge tem Node.js (LTS) instalado ou que o deploy faça provisionamento/instalação.
- Defina as variáveis de ambiente de produção no painel do Forge (`VITE_API_BASE_URL`, chaves etc.).
- Se o `npm ci` falhar localmente por problemas de OpenSSL/permissões no Windows, isso não necessariamente acontecerá no servidor Linux do Forge — ainda assim é bom testar o build em uma máquina que consiga rodar `npm ci`.

Se quiser, eu posso:
- executar os comandos `git add/commit/push` aqui na sua workspace (preciso da sua confirmação), ou
- gerar um `forge-deploy.sh` mais completo e colocá-lo em `deploy/` para você usar no painel do Forge.