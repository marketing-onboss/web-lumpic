// Use the global fetch available in modern Node.js (v18+).
// If not available, an explicit polyfill (node-fetch) can be installed.
const BREVO_API_KEY = process.env.VITE_BREVO_API_KEY || process.env.BREVO_API_KEY || '';
const BREVO_API_URL = 'https://api.brevo.com/v3';

export async function sendToBrevoServer(leadData: any) {
  if (!BREVO_API_KEY) {
    console.warn('BREVO API key not configured on server');
    return { success: false, message: 'Brevo API key not configured on server' };
  }

  try {
    const isFreelancer = leadData.type === 'freelancer';

    const contact = {
      email: leadData.email,
      attributes: isFreelancer
        ? {
            FIRSTNAME: leadData.nome,
            IDADE: leadData.idade,
            GENERO: leadData.genero,
            CIDADE: leadData.cidade,
            AREA_ATUACAO: leadData.areaAtuacao,
            PORTFOLIO: leadData.portfolio || '',
            CONVITE_ANTECIPADO: leadData.conviteAntecipado,
            USER_TYPE: 'freelancer',
          }
        : {
            FIRSTNAME: leadData.nomeEmpresa,
            EMPRESA: leadData.nomeEmpresa,
            CNPJ: leadData.cnpj,
            TELEFONE: leadData.telefoneEmpresa || '',
            SEGMENTO: leadData.segmentoEmpresa,
            TAMANHO: leadData.tamanhoEmpresa || '',
            CIDADE: leadData.cidadeEmpresa,
            SITE: leadData.siteEmpresa || '',
            INSTAGRAM: leadData.instagramEmpresa || '',
            USER_TYPE: 'empresa',
          },
      listIds: [isFreelancer ? Number(process.env.VITE_BREVO_LIST_FREELANCERS || process.env.BREVO_LIST_FREELANCERS || 2) : Number(process.env.VITE_BREVO_LIST_EMPRESAS || process.env.BREVO_LIST_EMPRESAS || 3)],
      updateEnabled: true,
    };

    const response = await fetch(`${BREVO_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      if (response.status === 400) {
        // try to update
        const updateResp = await fetch(`${BREVO_API_URL}/contacts/${encodeURIComponent(leadData.email)}`, {
          method: 'PUT',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
          body: JSON.stringify({ attributes: contact.attributes, listIds: contact.listIds }),
        });

        if (!updateResp.ok) {
          if (updateResp.status === 404) {
            // Contact doesn't exist, try POST again or create with different format
            console.warn('Contact not found for update, trying PATCH instead');
            const patchResp = await fetch(`${BREVO_API_URL}/contacts`, {
              method: 'POST',
              headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'api-key': BREVO_API_KEY,
              },
              body: JSON.stringify(contact),
            });

            if (!patchResp.ok) {
              const text = await patchResp.text();
              throw new Error(`Failed to create contact: ${patchResp.status} ${text}`);
            }

            return { success: true, action: 'created' };
          }

          const text = await updateResp.text();
          throw new Error(`Failed to update contact: ${updateResp.status} ${text}`);
        }

        return { success: true, action: 'updated' };
      }

      const text = await response.text();
      throw new Error(`Brevo API error: ${response.status} ${text}`);
    }

    const data = await response.json();
    return { success: true, action: 'created', data };
  } catch (err) {
    console.error('Server Brevo error', err);
    return { success: false, message: (err as Error).message };
  }
}
