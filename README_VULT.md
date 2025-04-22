# Configuração ClipUp para Servidor Vult

Este guia fornece instruções para configurar o projeto ClipUp em um servidor Vult, incluindo a instalação de dependências, configuração do ambiente e implantação da aplicação.

## Estrutura do Projeto

O projeto ClipUp está dividido em duas aplicações distintas:

- **empresa/** - Versão para empresas/contratantes
- **freelancer/** - Versão para freelancers/criadores

Cada versão contém uma aplicação React completa com sua própria estrutura cliente-servidor.

## Pré-requisitos

- Servidor Vult com Ubuntu 20.04 ou superior
- Node.js 16+ e NPM instalados
- Git instalado
- Acesso SSH ao servidor

## Instruções de Instalação

### 1. Preparar o Servidor

```bash
# Conectar ao servidor via SSH
ssh usuario@seu-servidor-vult

# Atualizar pacotes
sudo apt update
sudo apt upgrade -y

# Instalar Node.js e NPM (se não estiverem instalados)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar o gerenciador de processos PM2 para manter a aplicação em execução
sudo npm install -g pm2

# Criar diretório para a aplicação
mkdir -p /var/www/clipup
cd /var/www/clipup
```

### 2. Transferir os Arquivos para o Servidor

Opção 1: Usando SCP (do seu computador local):

```bash
# Para a versão de empresa
scp -r empresa/* usuario@seu-servidor-vult:/var/www/clipup/empresa/

# Para a versão de freelancer
scp -r freelancer/* usuario@seu-servidor-vult:/var/www/clipup/freelancer/
```

Opção 2: Usando Git (recomendado para atualizações futuras):

```bash
# No servidor
cd /var/www/clipup
git clone https://seu-repositorio-git/clipup.git .
```

### 3. Configurar e Iniciar a Versão para Empresas

```bash
# Entrar no diretório da versão para empresas
cd /var/www/clipup/empresa

# Instalar dependências
npm install

# Compilar o projeto para produção
npm run build

# Iniciar o servidor usando PM2
pm2 start "npm run start" --name clipup-empresa
```

### 4. Configurar e Iniciar a Versão para Freelancers

```bash
# Entrar no diretório da versão para freelancers
cd /var/www/clipup/freelancer

# Instalar dependências
npm install

# Compilar o projeto para produção
npm run build

# Iniciar o servidor usando PM2
pm2 start "npm run start" --name clipup-freelancer
```

### 5. Configurar o Nginx como Proxy Reverso (recomendado)

```bash
# Instalar Nginx
sudo apt install -y nginx

# Criar configuração para o domínio de empresas
sudo nano /etc/nginx/sites-available/empresa.clipup.com
```

Adicione a seguinte configuração:

```nginx
server {
    listen 80;
    server_name empresa.clipup.com;

    location / {
        proxy_pass http://localhost:3000;  # Ajuste a porta conforme necessário
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Faça o mesmo para a versão dos freelancers:

```bash
sudo nano /etc/nginx/sites-available/freelancer.clipup.com
```

Com o conteúdo:

```nginx
server {
    listen 80;
    server_name freelancer.clipup.com;

    location / {
        proxy_pass http://localhost:3001;  # Ajuste a porta conforme necessário
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Ative as configurações:

```bash
sudo ln -s /etc/nginx/sites-available/empresa.clipup.com /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/freelancer.clipup.com /etc/nginx/sites-enabled/
sudo nginx -t  # Verificar sintaxe
sudo systemctl restart nginx
```

### 6. Configurar SSL com Certbot (Recomendado)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d empresa.clipup.com -d freelancer.clipup.com
```

## Manutenção e Atualizações

### Monitoramento da Aplicação

```bash
# Ver status das aplicações
pm2 status

# Ver logs
pm2 logs clipup-empresa
pm2 logs clipup-freelancer
```

### Reiniciar Aplicações

```bash
# Reiniciar aplicações
pm2 restart clipup-empresa
pm2 restart clipup-freelancer
```

### Atualizar a Aplicação

```bash
# Para a versão de empresa
cd /var/www/clipup/empresa
git pull  # Se estiver usando Git
npm install
npm run build
pm2 restart clipup-empresa

# Para a versão de freelancer
cd /var/www/clipup/freelancer
git pull  # Se estiver usando Git
npm install
npm run build
pm2 restart clipup-freelancer
```

## Customização de URLs

Se você quiser executar as aplicações em subdiretorios ao invés de domínios separados, modifique as seguinte configurações no Nginx:

```nginx
server {
    listen 80;
    server_name clipup.com;

    location /empresa {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /freelancer {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Solução de Problemas

### A aplicação não inicia

Verifique os logs de erro:

```bash
pm2 logs clipup-empresa
```

Ou tente iniciar a aplicação manualmente para ver os erros:

```bash
cd /var/www/clipup/empresa
node server/index.js
```

### Problemas com portas

Certifique-se de que as portas utilizadas não estão sendo bloqueadas pelo firewall:

```bash
sudo ufw allow 3000
sudo ufw allow 3001
```

## Suporte

Para obter ajuda adicional, entre em contato conosco em suporte@clipup.com.br