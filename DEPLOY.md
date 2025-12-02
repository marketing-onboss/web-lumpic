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

5. Configure o NGINX como proxy reverso:

```bash
sudo nano /etc/nginx/sites-available/lumpic

# Adicione a seguinte configuração:
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;

## Deploy no Laravel Forge (sem Node em produção)

Se você estiver usando o Laravel Forge para hospedar o site e quer evitar executar Node em runtime
(usar Node apenas para construir os assets durante o deploy), siga estas recomendações rápidas:


Exemplo de etapas a incluir no script de deploy do Forge (executado dentro do diretório do release):

```bash
# instalar dependências e construir apenas o cliente
npm ci
npm run build:client

# copiar o build gerado para a pasta public do release (script incluído no repositório)
bash ./deploy/01_copy_public.sh "$release_path"

# (Opcional) rodar migrações ou outros comandos PHP
php artisan migrate --force || true
```

Se preferir, eu posso criar um exemplo `deploy/forge-deploy.sh` que executa a construção e copia o `dist/public` para `public` durante o deploy.

### Script de deploy recomendado para Forge (exemplo)

Crie ou cole o seguinte trecho no painel do Forge como script de deploy (substitua caminhos se necessário):

```bash
$CREATE_RELEASE()

cd $FORGE_RELEASE_DIRECTORY

# instalar dependências
npm ci || npm install

# construir apenas o cliente (Vite)
npx vite build

# copiar build para public/
rsync -av --delete dist/public/ public/

# garantir permissões
chown -R forge:forge public || true

# (opcional) rodar migrações
php artisan migrate --force || true

$ACTIVATE_RELEASE()
```

Ou copie o script `deploy/forge-deploy.sh` do repositório e chame `bash ./deploy/forge-deploy.sh "$FORGE_RELEASE_DIRECTORY"` no painel do Forge.

Observações:
- O repositório contém `deploy/01_copy_public.sh` que faz `rsync --delete` de `dist/public/` para `public/` e ajusta permissões para `forge:forge`.
- O `package.json` foi atualizado com `build:client` e `build:server`. Use `build:client` no deploy do Forge para evitar empacotar/rodar código Node no servidor.
- Se você migrar totalmente para Laravel/PHP no backend, remova ou ignore `build:server` e `start` no processo de deploy para reduzir tempo e evitar dependências Node em produção.

### Deploy sem Node no servidor (Recomendado)

Se o servidor de produção não pode ter Node instalado, use este fluxo: faça o build localmente e envie apenas os arquivos estáticos (`dist/public/`) para o diretório `public/` do release no Forge. O servidor só precisa servir arquivos estáticos via Nginx/PHP.

Fluxo sugerido (local):

1. No seu computador, instale dependências e gere o build do cliente:

```bash
# instalar dependências (uma vez)
npm ci

# construir apenas o cliente Vite
npm run build:client
```

2. Copie os arquivos gerados (`dist/public/`) para o servidor Forge usando `rsync` (exemplo):

```bash
# exemplo: ajuste host e caminho do site
rsync -avz --delete dist/public/ forge@your-server:/home/forge/lumpic.com/current/public/
```

3. Ajuste permissões e verifique:

```bash
ssh forge@your-server "chown -R forge:forge /home/forge/lumpic.com/current/public || true"
ssh forge@your-server "ls -la /home/forge/lumpic.com/current/public/index.html"
```

4. Se o Nginx continuar retornando 404 para rotas da SPA, confirme no painel do Forge que a configuração do site tem:

```
location / {
  try_files $uri $uri/ /index.html;
}
```

Script helper local (no repositório):

Use o script `deploy/local-rsync.sh` para automatizar build + rsync (já incluído no repositório).

Exemplo de uso:

```bash
# torna executável (uma vez)
chmod +x deploy/local-rsync.sh

# executar (substitua host e caminho)
./deploy/local-rsync.sh forge@your-server /home/forge/lumpic.com/current/public
```

Vantagens deste fluxo:
- Nenhum Node em produção.
- Deploy rápido e previsível (apenas arquivos estáticos enviados).
- Evita problemas com versões de Node no servidor e reduz superfície de ataque.

Se quiser, eu posso adicionar um exemplo pronto de script de deploy (arquivo `deploy/forge-deploy.sh`) e atualizar o `DEPLOY.md` com instruções passo-a-passo para o Forge.
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. Ative o site e reinicie o NGINX:

```bash
sudo ln -s /etc/nginx/sites-available/lumpic /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

7. Clone o repositório e configure a aplicação:

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/lumpic-web.git
cd lumpic-web

# Instalar dependências e construir
npm install
npm run build

# Iniciar o servidor em modo produção
NODE_ENV=production npm start
```

8. Configure um serviço systemd para manter a aplicação em execução:

```bash
sudo nano /etc/systemd/system/lumpic.service

# Adicione:
[Unit]
Description=Lumpic Web App
After=network.target

[Service]
Type=simple
User=seu-usuario
WorkingDirectory=/caminho/para/lumpic-web
ExecStart=/usr/bin/npm start
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

9. Inicie e habilite o serviço:

```bash
sudo systemctl start lumpic
sudo systemctl enable lumpic
```

## 4. Deploy no Railway

Railway é uma plataforma PaaS moderna com configuração simplificada.

1. Crie uma conta no [Railway](https://railway.app/)
2. Instale a CLI do Railway:

```bash
npm i -g @railway/cli
railway login
```

3. No diretório do projeto, inicialize e configure:

```bash
railway init
```

4. Deploy para o Railway:

```bash
railway up
```

5. Configure as variáveis de ambiente na interface web do Railway se necessário.

## Verificações Pós-Deploy

Após completar o deploy em qualquer plataforma, verifique:

1. Se a aplicação está acessível via URL fornecida pela plataforma
2. Se todas as rotas estão funcionando corretamente
3. Se o sistema de temas (claro/escuro) está operando como esperado
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