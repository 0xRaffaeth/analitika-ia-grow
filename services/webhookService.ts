
/**
 * Serviço responsável por enviar dados do Frontend para o n8n (ou qualquer ferramenta de automação como Zapier/Make).
 */

// Substitua estas URLs pelas URLs reais do seu Webhook no n8n (Production URL)
const N8N_WIZARD_WEBHOOK = "https://seu-n8n-instance.com/webhook/estrategia-ia";
const N8N_CONTACT_WEBHOOK = "https://seu-n8n-instance.com/webhook/novo-lead";

export const sendStrategyToAutomation = async (data: {
  businessName: string;
  niche: string;
  email: string;
  strategy: any; // O objeto JSON retornado pelo Gemini
}) => {
  try {
    // Se a URL ainda for o placeholder, apenas simulamos para não quebrar o demo
    if (N8N_WIZARD_WEBHOOK.includes("seu-n8n-instance")) {
      console.log("Simulando envio para n8n (Wizard):", data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simula delay de rede
      return true;
    }

    const response = await fetch(N8N_WIZARD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return response.ok;
  } catch (error) {
    console.error("Erro ao enviar para n8n:", error);
    return false;
  }
};

export const sendLeadToAutomation = async (data: {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  serviceInterest: string;
}) => {
  try {
    // Se a URL ainda for o placeholder, apenas simulamos
    if (N8N_CONTACT_WEBHOOK.includes("seu-n8n-instance")) {
      console.log("Simulando envio para n8n (Lead):", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    }

    const response = await fetch(N8N_CONTACT_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return response.ok;
  } catch (error) {
    console.error("Erro ao enviar lead para n8n:", error);
    return false;
  }
};
