import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingStrategy = async (businessName: string, niche: string): Promise<StrategyResult> => {
  try {
    const prompt = `
      You are a senior digital marketing strategist at Analitika Agency. 
      Analyze the following business:
      Business Name: ${businessName}
      Niche/Industry: ${niche}

      Provide 3 high-impact, actionable tips specifically for:
      1. Google Business Profile (Google Meu Negócio)
      2. High Conversion Website Design
      3. Paid Traffic (Google Ads/Meta Ads)

      Also provide a 1-sentence encouraging summary.
      The output must be in Portuguese (Brazil).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            gmbTip: { type: Type.STRING, description: "A specific tip for Google Business Profile optimization" },
            websiteTip: { type: Type.STRING, description: "A tip for improving website conversion rate" },
            trafficTip: { type: Type.STRING, description: "A strategy for paid traffic" },
            summary: { type: Type.STRING, description: "A short encouraging summary sentence" }
          },
          required: ["gmbTip", "websiteTip", "trafficTip", "summary"]
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("No response generated");
    }

    return JSON.parse(jsonText) as StrategyResult;

  } catch (error) {
    console.error("Error generating strategy:", error);
    // Return a fallback so the UI doesn't break
    return {
      gmbTip: "Mantenha suas informações de horário e contato sempre atualizadas e responda a todas as avaliações.",
      websiteTip: "Garanta que seu site carregue em menos de 3 segundos e tenha um botão de WhatsApp visível.",
      trafficTip: "Comece com campanhas de pesquisa para capturar a intenção de compra imediata.",
      summary: "O digital é o caminho para o crescimento escalável do seu negócio."
    };
  }
};