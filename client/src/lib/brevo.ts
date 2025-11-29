// Serviço de integração com Brevo (Sendinblue)
// Para usar em produção, configure a API Key da Brevo nas variáveis de ambiente

interface BrevoContact {
  email: string;
  attributes: Record<string, any>;
  listIds?: number[];
  updateEnabled?: boolean;
}

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';
const BREVO_API_URL = 'https://api.brevo.com/v3';

// Log para debug
console.log('=== BREVO CONFIG DEBUG ===');
console.log('API Key disponível?', !!BREVO_API_KEY);
console.log('API Key value:', BREVO_API_KEY ? BREVO_API_KEY.substring(0, 20) + '...' : 'NÃO DEFINIDA');
console.log('Todas as env vars:', import.meta.env);
console.log('========================');

// IDs das listas na Brevo (configure nas variáveis de ambiente)
const BREVO_LISTS = {
  FREELANCERS: parseInt(import.meta.env.VITE_BREVO_LIST_FREELANCERS || '2'),
  EMPRESAS: parseInt(import.meta.env.VITE_BREVO_LIST_EMPRESAS || '3'),
};

export async function sendToBrevo(leadData: any) {
  if (!BREVO_API_KEY) {
    console.warn('VITE_BREVO_API_KEY não configurada. Dados do lead:', leadData);
    // Em desenvolvimento, apenas loga os dados
    return { success: true, mode: 'development' };
  }

  try {
    const isFreelancer = leadData.type === 'freelancer';
    
    // Preparar contato para Brevo
    const contact: BrevoContact = {
      email: leadData.email,
      attributes: isFreelancer ? {
        FIRSTNAME: leadData.nome,
        IDADE: leadData.idade,
        GENERO: leadData.genero,
        CIDADE: leadData.cidade,
        AREA_ATUACAO: leadData.areaAtuacao,
        PORTFOLIO: leadData.portfolio || '',
        CONVITE_ANTECIPADO: leadData.conviteAntecipado,
        USER_TYPE: 'freelancer'
      } : {
        FIRSTNAME: leadData.nomeEmpresa,
        EMPRESA: leadData.nomeEmpresa,
        CNPJ: leadData.cnpj,
        TELEFONE: leadData.telefoneEmpresa || '',
        SEGMENTO: leadData.segmentoEmpresa,
        TAMANHO: leadData.tamanhoEmpresa || '',
        CIDADE: leadData.cidadeEmpresa,
        SITE: leadData.siteEmpresa || '',
        INSTAGRAM: leadData.instagramEmpresa || '',
        USER_TYPE: 'empresa'
      },
      listIds: [isFreelancer ? BREVO_LISTS.FREELANCERS : BREVO_LISTS.EMPRESAS],
      updateEnabled: true
    };

    // Enviar para Brevo
    const response = await fetch(`${BREVO_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(contact)
    });

    if (!response.ok) {
      // Se o contato já existe (código 400), tentamos atualizar
      if (response.status === 400) {
        const updateResponse = await fetch(`${BREVO_API_URL}/contacts/${leadData.email}`, {
          method: 'PUT',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'api-key': BREVO_API_KEY
          },
          body: JSON.stringify({
            attributes: contact.attributes,
            listIds: contact.listIds
          })
        });

        if (!updateResponse.ok) {
          throw new Error('Erro ao atualizar contato na Brevo');
        }

        return { success: true, action: 'updated' };
      }

      throw new Error(`Erro na API Brevo: ${response.status}`);
    }

    const data = await response.json();

    return { success: true, data, action: 'created' };
  } catch (error) {
    console.error('Erro ao enviar para Brevo:', error);
    throw error;
  }
}

// Função para verificar se email já existe em uma lista específica
export async function checkEmailInList(email: string, userType: 'freelancer' | 'empresa'): Promise<boolean> {
  if (!BREVO_API_KEY) {
    console.warn('VITE_BREVO_API_KEY não configurada');
    return false;
  }

  try {
    const response = await fetch(`${BREVO_API_URL}/contacts/${email}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY
      }
    });

    if (response.status === 404) {
      // Email não existe em lugar nenhum
      return false;
    }

    if (response.status === 200) {
      const data = await response.json();
      const listIdToCheck = userType === 'freelancer' 
        ? BREVO_LISTS.FREELANCERS 
        : BREVO_LISTS.EMPRESAS;
      
      // Verificar se o contato está na lista específica
      return data.listIds.includes(listIdToCheck);
    }

    return false;
  } catch (error) {
    console.error('Erro ao verificar email na Brevo:', error);
    return false;
  }
}

// Função auxiliar para validar API key
export function isBrevoConfigured(): boolean {
  return !!BREVO_API_KEY;
}
