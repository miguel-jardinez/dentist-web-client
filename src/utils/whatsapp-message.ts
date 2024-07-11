export const whatsAppMessage = (service: string) => {
  const message = encodeURIComponent(`¡Hola! Estoy interesado/a en el servicio ${service} me gustaría una cita. ¿Podría proporcionarme días y horarios disponibles por favor? ¡Gracias!`)

  return `https://wa.me/527711167920?text=${message}`
}