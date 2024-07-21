import { FaRegMessage } from "react-icons/fa6";
import { MdCopyAll, MdOutlineDateRange } from "react-icons/md";
import { IconType } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";
import { AnimatedReveal } from "./animated-reveal";

const labelTrusth = [
  {
    id: 1,
    label: 'Profesionalismo y técnicas actualizadas de calidad'
  },
  {
    id: 2,
    label: 'Ética y honestidad sin recomendaciones innecesarias.'
  },
  {
    id: 3,
    label: 'Trato empático y cuidadoso en los procedimientos'
  },
  {
    id: 4,
    label: 'Horarios flexibles y facilidad para agendar citas.'
  },
  {
    id: 5,
    label: 'Costos y formas de pago accesibles'
  },
  {
    id: 6,
    label: 'Compromiso con la satisfacción del paciente'
  }
]

const steps = [
  {
    id: 1,
    title: "Contactanos" ,
    description: "Mandanos un mensaje para programar tu cita." ,
    Icon: FaRegMessage,
  },
  {
    id: 2,
    title: "Información personal" ,
    description: "Te pediremos tus datos personales y detalles sobre el motivo de tu consulta.",
    Icon: MdCopyAll,
  },
  {
    id: 3,
    title: "Selecciona tu horario" ,
    description: "Selecciona el día y la hora de tu consulta",
    Icon: MdOutlineDateRange,
  },
  {
    id: 4,
    title: "Confirmación",
    description: "Te solicitamos la confirmación de tu cita un dia antes, nosotros te mandamos un mensaje.",
    Icon: FaCheckCircle,
  },
]



const Step = ({ title, description, Icon }: { title: string, description: string, Icon: IconType }) => {
  return (
    <div className="bg-white flex px-8 py-4 items-center rounded-lg">
      <div className="bg-blue-50 h-20 aspect-square rounded-lg flex items-center justify-center mr-6">
        <Icon size={25} className="text-primary" />
      </div>
      <div>
        <h6 className="font-bold text-lg text-red-400 mb-1">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  )
}

export const StepsSection = () => {
  return (
    <AnimatedReveal>
      <section id="how-schedule" className="container m-auto py-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
          <div className="flex flex-col justify-center">
            <div className="space-y-3">
              <h4>Estamos comprometidos contigo.</h4>
              <h3 className="md:text-5xl font-bold">Queremos verte <span className="text-red-400">sonreir</span> y mantener tu <span className="text-red-400">salud bucal</span></h3>
              <p>Por eso estamos seguros de que lo que te ofrecemos en el servicio que te brindamos es lo que necesitas y que es lo que  siempre has estado buscado.</p>
            </div>

            <div className="flex flex-wrap w-full mt-10">
              {labelTrusth.map((item) => (
                <div key={item.id} className="w-1/2 p-2">
                  <div className="flex items-start">
                    <div className="w-3 md:w-[5%] mt-1">
                      <FaCheckCircle className="text-red-400 w-full h-full" />
                    </div>
                    <div className="w-[95%]">
                      <h6 className="ml-2 font-semibold">{item.label}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {
              steps.map((items) => (
                <Step
                  key={items.id}
                  title={items.title}
                  description={items.description}
                  Icon={items.Icon}
                />
              ))
            }
          </div>
        </div>
      </section>
    </AnimatedReveal>
  )
}
