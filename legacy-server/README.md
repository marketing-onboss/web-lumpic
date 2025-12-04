Arquivos do servidor Node/Express movidos para histórico.

Este diretório contém um apontamento para os artefatos do servidor original que rodavam em Node/Express.

Motivo: o deployment foi migrado para operar sem Node em runtime. O frontend é construído com Vite e os assets gerados são servidos estaticamente via Nginx/PHP-FPM. O endpoint `/api/leads` foi reimplementado em `public/api/leads.php` e deve ser usado em produção.

Se precisar restaurar o servidor Node original, recupere o commit anterior no histórico do Git que contém a pasta `server/`.
