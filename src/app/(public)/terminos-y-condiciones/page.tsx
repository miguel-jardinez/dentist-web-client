const Page = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-3xl px-4 py-10 space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Perla del Esmalte
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-sm text-muted-foreground">
            Última actualización: 5 de noviembre de 2025
          </p>
        </header>

        <section className="space-y-3 text-sm leading-relaxed">
          <p>
            Bienvenido(a) al asistente virtual de{" "}
            <span className="font-medium">Perla del Esmalte</span> (“nosotros”,
            “nuestro”, “la clínica”). Al interactuar con nuestro chatbot o
            cualquier canal automatizado (como Facebook Messenger, WhatsApp o
            nuestra página web), aceptas estos{" "}
            <span className="font-medium">Términos y Condiciones</span> y
            nuestra{" "}
            <a
              href="/politica-de-privacidad"
              className="text-primary underline hover:text-primary/80"
            >
              Política de Privacidad
            </a>
            .
          </p>
          <p>
            Te pedimos leer este documento atentamente antes de continuar con el
            uso de nuestro asistente virtual.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            1. Propósito del Chatbot
          </h2>
          <p className="text-sm leading-relaxed">
            Nuestro asistente virtual está diseñado para brindar{" "}
            <span className="font-medium">orientación general</span> sobre los
            servicios odontológicos de Perla del Esmalte, con el objetivo de:
          </p>
          <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
            <li>Ofrecer información sobre tratamientos y servicios.</li>
            <li>Orientar sobre precios aproximados y disponibilidad.</li>
            <li>Ayudar a agendar citas con nuestros especialistas.</li>
            <li>
              Compartir información educativa relacionada con la salud bucal.
            </li>
          </ul>
          <p className="text-sm leading-relaxed">
            El chatbot <span className="font-semibold">no</span> realiza
            diagnósticos médicos ni prescribe tratamientos. Toda la información
            que ofrece es de carácter general y debe ser validada siempre por un
            profesional durante una consulta presencial.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            2. Datos que Recopilamos
          </h2>
          <p className="text-sm leading-relaxed">
            Durante tu conversación con el asistente, podremos recopilar y
            almacenar la siguiente información:
          </p>
          <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
            <li>Nombre completo.</li>
            <li>Número de teléfono.</li>
            <li>
              Historial de conversación, para mejorar nuestros procesos de
              atención.
            </li>
            <li>
              Estado o progreso de la conversación (por ejemplo, si ya
              saludaste, solicitaste información o confirmaste una cita).
            </li>
            <li>
              Tipo de interacción, que puede incluir:
              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                <li>Bienvenida y presentación del servicio.</li>
                <li>Solicitud de información o precios.</li>
                <li>
                  Consulta sobre tratamientos y servicios disponibles de la
                  clínica.
                </li>
                <li>
                  Interés en artículos informativos o contenido educativo sobre
                  salud bucal.
                </li>
                <li>
                  Proceso de agendamiento de cita (inicio, propuesta de fecha y
                  hora, confirmación).
                </li>
                <li>Solicitud de ubicación o dirección de la clínica.</li>
                <li>Mensajes de despedida o seguimiento.</li>
                <li>
                  Casos en los que se requiere atención directa de la doctora.
                </li>
              </ul>
            </li>
            <li>
              Fecha y hora de la cita, en caso de que el paciente decida
              agendar.
            </li>
            <li>Confirmación de asistencia a la cita.</li>
          </ul>
          <p className="text-sm leading-relaxed">
            No recopilamos información sensible (como datos médicos, financieros
            o de identificación oficial). Toda la información se utiliza
            únicamente para mejorar la experiencia del paciente y optimizar
            nuestro servicio.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            3. Finalidad del Tratamiento de Datos
          </h2>
          <p className="text-sm leading-relaxed">
            Los datos recopilados se utilizan con los siguientes propósitos:
          </p>
          <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
            <li>Gestionar citas y recordatorios.</li>
            <li>
              Brindar seguimiento personalizado a pacientes y conversaciones.
            </li>
            <li>
              Analizar y mejorar la calidad del servicio ofrecido por el
              chatbot.
            </li>
            <li>
              Elaborar campañas informativas y publicitarias para mantenerte al
              tanto de promociones, novedades o recordatorios de revisión
              dental.
            </li>
          </ul>
          <p className="text-sm leading-relaxed">
            Tus datos <span className="font-semibold">no</span> serán vendidos,
            cedidos ni compartidos con terceros sin tu autorización expresa.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            4. Consentimiento
          </h2>
          <p className="text-sm leading-relaxed">
            Al iniciar una conversación con nuestro chatbot, aceptas de manera
            voluntaria estos Términos y Condiciones y nos autorizas a tratar tus
            datos personales conforme a lo descrito en este documento y en
            nuestra{" "}
            <a
              href="/politica-de-privacidad"
              className="text-primary underline hover:text-primary/80"
            >
              Política de Privacidad
            </a>
            .
          </p>
          <p className="text-sm leading-relaxed">
            Si en cualquier momento deseas revocar tu consentimiento o solicitar
            la eliminación de tus datos, puedes hacerlo enviando un correo a:{" "}
            <a
              href="mailto:perladelesmalte@gmail.com"
              className="text-primary underline hover:text-primary/80"
            >
              perladelesmalte@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            5. Limitaciones de Responsabilidad
          </h2>
          <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
            <li>
              La información proporcionada por el chatbot no sustituye una
              valoración profesional.
            </li>
            <li>
              Perla del Esmalte no se responsabiliza por decisiones tomadas por
              el usuario basadas en la información proporcionada por el
              asistente.
            </li>
            <li>
              Los precios, horarios y disponibilidad están sujetos a cambios sin
              previo aviso.
            </li>
            <li>
              El chatbot puede derivar tu caso a la doctora o a nuestro equipo
              cuando sea necesario, especialmente en situaciones que requieran
              evaluación profesional.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            6. Derechos del Usuario
          </h2>
          <p className="text-sm leading-relaxed">
            De acuerdo con la legislación vigente, tienes derecho a:
          </p>
          <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
            <li>Acceder a los datos personales que conservamos sobre ti.</li>
            <li>Solicitar la corrección o actualización de tus datos.</li>
            <li>Solicitar la eliminación de tus datos personales.</li>
            <li>
              Limitar el uso de tus datos para fines específicos, cuando sea
              aplicable.
            </li>
            <li>Revocar tu consentimiento en cualquier momento.</li>
          </ul>
          <p className="text-sm leading-relaxed">
            Puedes ejercer estos derechos escribiendo a:{" "}
            <a
              href="mailto:perladelesmalte@gmail.com"
              className="text-primary underline hover:text-primary/80"
            >
              perladelesmalte@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            7. Modificaciones
          </h2>
          <p className="text-sm leading-relaxed">
            Perla del Esmalte se reserva el derecho de actualizar estos Términos
            y Condiciones en cualquier momento. Las modificaciones se publicarán
            en esta misma página con la nueva fecha de actualización.
          </p>
          <p className="text-sm leading-relaxed">
            El uso continuado del chatbot o de nuestros servicios digitales
            después de dichas modificaciones implica la aceptación de los
            cambios.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">8. Contacto</h2>
          <p className="text-sm leading-relaxed">
            Si tienes dudas o comentarios sobre estos Términos y Condiciones,
            puedes contactarnos en:
          </p>
          <div className="space-y-1 text-sm leading-relaxed">
            <p>
              <a
                href="mailto:perladelesmalte@gmail.com"
                className="text-primary underline hover:text-primary/80"
              >
                perladelesmalte@gmail.com
              </a>
            </p>
            <p>
              📍{" "}
              <span className="font-medium">
                Retroexcavadora 508, Mineral de la Reforma, Pachuca, Hidalgo,
                México
              </span>
            </p>
            <p>
              <span className="font-medium">Horario de atención:</span>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lunes a viernes de 11:00 a 20:00 hrs.</li>
              <li>Sábados de 9:00 a 14:00 hrs.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Page;