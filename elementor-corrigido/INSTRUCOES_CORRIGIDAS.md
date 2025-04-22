# Instruções Atualizadas para Importação no Elementor

## Arquivos Corrigidos
Devido a problemas de compatibilidade, criamos versões novas dos arquivos para importação:

- `hero-section-corrigido.json` - Seção Hero (use este arquivo)
- `dor-empresario-corrigido.json` - Seção "Dor do Empresário" (use este arquivo)

## Como Importar Corretamente

1. **NÃO USE** os arquivos anteriores (hero-section.json, dor-empresario-section.json)
2. Use **APENAS** os arquivos com sufixo `-corrigido`

### Passos para Importação:

1. No editor do Elementor, clique no ícone de pasta (Biblioteca)
2. Selecione "Importar Template"
3. Selecione o arquivo `hero-section-corrigido.json`
4. Após importar, insira esta seção na página
5. Repita o processo com `dor-empresario-corrigido.json`

## O Que Foi Alterado?

A estrutura dos arquivos JSON foi modificada para seguir exatamente o formato esperado pelo Elementor:

- Corrigimos a hierarquia dos elementos
- Adicionamos os campos exatos esperados pelo Elementor
- Seguimos a estrutura do exemplo funcionando
- Mantivemos todos os elementos visuais e conteúdo

## Estrutura Correta do JSON

Os arquivos agora seguem esta estrutura básica:
```json
{
    "id": "identificador",
    "elType": "section",
    "settings": { ... },
    "elements": [
        {
            "id": "coluna-id",
            "elType": "column",
            "settings": { ... },
            "elements": [
                {
                    "id": "widget-id",
                    "elType": "widget",
                    "settings": { ... },
                    "widgetType": "heading|button|text-editor|etc"
                }
            ]
        }
    ]
}
```

## Solução de Problemas

Se continuar tendo problemas:

1. Certifique-se de estar usando uma versão recente do Elementor (3.0+)
2. Tente importar em uma página nova, vazia
3. Desative outros plugins que possam interferir temporariamente

## Scripts e Estilos

Não esqueça de incluir:
- `scripts/animations.js`
- `scripts/clipup-styles.css`

Conforme as instruções no README principal.