# Solução de Problemas com a Importação no Elementor

Se você estiver enfrentando problemas ao importar os templates no Elementor, aqui estão algumas soluções:

## Erro "JSON Inválido" ou "Arquivo Inválido"

### Causas Comuns
1. Versão do Elementor incompatível
2. Formato de arquivo JSON corrompido
3. Permissões insuficientes no WordPress

### Soluções

#### 1. Importação por Seções
O método mais seguro é importar cada seção individualmente:
- Importe primeiro `hero-section.json`
- Depois `dor-empresario-section.json`
- E assim por diante

#### 2. Verifique a Versão do Elementor
- Certifique-se de estar usando Elementor 3.0 ou superior
- Para melhor compatibilidade, use Elementor Pro

#### 3. Use uma Instalação Limpa
- Teste em uma instalação WordPress nova
- Use o tema Hello Elementor (oficial)
- Desative plugins que podem interferir

#### 4. Edição Manual do JSON
Se persistir o erro, você pode tentar:
1. Abrir o arquivo JSON em um editor de texto
2. Verificar se há caracteres especiais ou inválidos
3. Validar o JSON em um validador online (jsonlint.com)

## Erros de Estilo Após Importação

### Problemas Comuns
1. Elementos não respeitando o espaçamento
2. Cores diferentes do esperado
3. Fontes incorretas

### Soluções

#### 1. Verifique os Estilos Globais do Elementor
- Vá para Elementor > Configurações > Estilos
- Defina as cores primárias e secundárias
- Configure as fontes padrão

#### 2. Inclua o CSS Personalizado
- Certifique-se de ter adicionado o arquivo `clipup-styles.css`
- Verifique se está sendo carregado na página

#### 3. Ajuste Responsivo
- Use o modo responsivo do Elementor
- Ajuste os tamanhos para tablet e mobile

## Animações Não Funcionam

### Causas Comuns
1. Arquivo JS não carregado
2. Conflitos com outros scripts
3. Cache do navegador

### Soluções

#### 1. Verifique a Inclusão do Script
- Confirme que `animations.js` está sendo carregado
- Verifique se há erros no console do navegador

#### 2. Limpe o Cache
- Limpe o cache do navegador
- Use modo privado/anônimo para testar

#### 3. Desative Outros Scripts Temporariamente
- Desative plugins que manipulam JavaScript
- Teste com tema padrão temporariamente

---

Se você precisar de mais ajuda, considere consultar a documentação oficial do Elementor ou entre em contato através dos dados fornecidos no README.