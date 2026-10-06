/**
 * Helpers para os eventos custom do TrackBR (window.TrackBR, injetado via
 * script no index.html). Silencioso se o script ainda não carregou.
 */

export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== 'undefined' && (window as any).TrackBR) {
    (window as any).TrackBR.event('whatsapp_click', { location }).catch(() => {});
  }
};
