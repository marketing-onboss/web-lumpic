# Sistema de Captura de Leads com Modal

Sistema completo de captura de leads integrado com Brevo (plataforma de e-mail marketing) que intercepta todos os CTAs do projeto.

## 📋 Arquitetura

### Componentes Criados

1. **`LeadCaptureModal.tsx`** - Modal de captura com fluxo completo:
   - Seleção de perfil (Freelancer/Empresa)
   - Formulários específicos para cada perfil
   - Tela de sucesso

2. **`LeadCaptureContext.tsx`** - Context global que gerencia:
   - Estado do modal (aberto/fechado)
   - Ações pendentes (executadas após captura)

3. **`useLeadCapture.ts`** - Hook para interceptar CTAs:
   ```tsx
   const handleCTA = useLeadCapture(() => {
     // Ação executada após captura de lead
     navigate('/alguma-rota');
   });
   ```

4. **`brevo.ts`** - Serviço de integração com Brevo API:
   - Criação/atualização de contatos
   - Envio de e-mails de boas-vindas
   - Segmentação por listas (Freelancers/Empresas)

## 🚀 Como Usar

### 1. Configuração Inicial

```bash
# Copiar arquivo de exemplo
cp .env.example .env

# Editar .env e adicionar sua chave da Brevo
VITE_BREVO_API_KEY=sua_chave_api_aqui
```

### 2. Configurar IDs no Brevo

Edite `client/src/lib/brevo.ts` e configure:

```typescript
const BREVO_LISTS = {
  FREELANCERS: 2, // ID da sua lista de freelancers
  EMPRESAS: 3,    // ID da sua lista de empresas
};

const TEMPLATE_IDS = {
  FREELANCER_WELCOME: 1, // ID do template de boas-vindas
  EMPRESA_WELCOME: 2,    // ID do template para empresas
};
```

### 3. Adicionar Captura em Novos CTAs

Em qualquer página/componente:

```tsx
import { useLeadCapture } from '@/hooks/useLeadCapture';
import { useLocation } from 'wouter';

function MeuComponente() {
  const [, setLocation] = useLocation();
  
  // CTA com navegação
  const handleCTA = useLeadCapture(() => {
    setLocation('/destino');
  });
  
  // CTA com ação personalizada
  const handleOutroCTA = useLeadCapture(() => {
    console.log('Lead capturado!');
    // Qualquer outra lógica
  });
  
  return (
    <button onClick={handleCTA}>
      Começar Agora
    </button>
  );
}
```

## 🔧 Fluxo de Funcionamento

1. Usuário clica em um botão CTA
2. Modal é exibido automaticamente
3. Usuário escolhe perfil (Freelancer/Empresa)
4. Preenche formulário correspondente
5. Dados são enviados para a Brevo
6. Tela de sucesso é exibida
7. Ação original do CTA é executada (navegação, etc)

## 📊 Dados Capturados

### Freelancer
- Nome completo
- E-mail
- Idade
- Gênero
- Cidade
- Área de atuação
- Portfólio (opcional)
- Deseja convite antecipado

### Empresa
- Nome da empresa
- E-mail corporativo
- CNPJ
- Telefone (opcional)
- Segmento
- Tamanho da empresa (opcional)
- Cidade
- Site (opcional)
- Instagram (opcional)

## 🎨 Personalização

### Cores e Estilos

O modal usa as variáveis de tema do projeto:
- `text-primary` / `bg-primary` - Cor primária
- `text-muted-foreground` - Textos secundários
- `bg-slate-800/900` - Fundos escuros

### Textos e Validações

Edite `client/src/components/LeadCaptureModal.tsx` para:
- Alterar textos e labels
- Adicionar/remover campos
- Customizar validações
- Modificar opções de select

## 🔐 Modo Desenvolvimento

Sem a chave da Brevo configurada:
- Modal funciona normalmente
- Dados são logados no console
- Não são enviados para a Brevo
- Útil para testes locais

## ✅ Páginas Atualizadas

CTAs já configurados com captura:
- ✅ Home (Hero, CTAs principais, rodapé)
- ✅ EmpresaPage (Hero principal)
- 🔄 FreelancerPage (pendente)
- 🔄 Outras páginas conforme necessário

## 📝 Próximos Passos

1. Configurar chave da Brevo em produção
2. Criar listas no Brevo para segmentação
3. Criar templates de e-mail de boas-vindas
4. Adicionar captura nos CTAs restantes
5. Testar fluxo completo em dispositivos móveis
6. Configurar automações no Brevo

## 🐛 Troubleshooting

**Modal não abre:**
- Verifique se `LeadCaptureProvider` está no `App.tsx`
- Confirme que o hook `useLeadCapture` está sendo usado corretamente

**Erro na API Brevo:**
- Verifique se a chave está correta no `.env`
- Confirme que os IDs das listas existem no Brevo
- Veja logs do console para detalhes

**Dados não chegam no Brevo:**
- Verifique conexão de rede (CORS, firewall)
- Confirme que a API key tem permissões corretas
- Teste com `isBrevoConfigured()` no console

## 📚 Referências

- [Brevo API Documentation](https://developers.brevo.com/)
- [Brevo Dashboard](https://app.brevo.com/)
