/**
 * Google Tag Manager & dataLayer helper
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch (err) {
    console.error('dataLayer push error:', err);
  }
}

export function trackWhatsAppClick(ubicacion: string, especialidad?: string) {
  trackEvent('whatsapp_click', {
    ubicacion,
    especialidad: especialidad || 'general',
  });
}

export function trackPhoneClick(numero: string) {
  trackEvent('phone_click', {
    numero,
  });
}

export function trackBookingOnlineClick() {
  trackEvent('booking_online_click', {
    url: 'https://formed.cl/reserva',
  });
}

export function trackFormSubmit(especialidad: string) {
  trackEvent('form_submit', {
    especialidad,
  });
}

export function trackMapsClick(sede: string) {
  trackEvent('maps_click', {
    sede,
  });
}
