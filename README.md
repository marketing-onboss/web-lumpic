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

## Variáveis de ambiente (build-time)

O Vite expõe ao código cliente apenas variáveis que comecem com `VITE_`. Essas variáveis são incorporadas no momento do *build* — ou seja, você precisa defini-las no ambiente onde roda `npm run build` (no CI ou painel de hospedagem).

Recomendações rápidas:
- Não comite valores reais em `.env` ou `.env.production`; mantenha exemplos em `.env.example` ou `.env.production.example`.
- Defina as variáveis no painel do seu provedor (Vercel, Netlify, Render, etc.) ou como *secrets* no seu CI.
- Trocar o valor depois do build exige rebuild + redeploy.

Exemplo de variáveis (arquivo local de exemplo):
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXX
VITE_FACEBOOK_PIXEL_ID=YOUR_PIXEL_ID
VITE_CLARITY_ID=YOUR_CLARITY_ID
```

PowerShell — build local com variáveis temporárias:
```powershell
$env:VITE_GA_MEASUREMENT_ID='G-XXXXXXX'
$env:VITE_FACEBOOK_PIXEL_ID='1234567890'
npm run build
```

GitHub Actions (exemplo mínimo):
```yaml
steps:
  - uses: actions/checkout@v4
  - name: Install
    run: npm ci
  - name: Build
    run: npm run build
    env:
      VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
      VITE_FACEBOOK_PIXEL_ID: ${{ secrets.VITE_FACEBOOK_PIXEL_ID }}
```

Se preferir alterar valores sem rebuild, implemente uma configuração em tempo de execução (ex.: `GET /config.json`) que o cliente busca no carregamento, mas isso exige código adicional.

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
