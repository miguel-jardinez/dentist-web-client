import { Button } from "@dentist/components/ui/button";
import { whatsAppMessage } from "@dentist/utils/whatsapp-message";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const mostPopular = ['Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit.']

const individualService = [
  {
    id: 1,
    label: 'Revisión dental completa'
  },
  {
    id: 2,
    label: 'Limpieza dental con ultrasonido'
  },
  {
    id: 3,
    label: 'Pulido dental completo'
  },
  {
    id: 4,
    label: '2 restauraciones de resina'
  }
]

const familiarService = [
  {
    id: 1,
    label: 'Limpieza dental completa con ultrasonido'
  },
  {
    id: 2,
    label: 'Pulido'
  },
  {
    id: 3,
    label: 'Aplicación tópica de flúor'
  },
  {
    id: 4,
    label: 'Kit de limpieza bucal para cada integrante'
  }
]

const coupleService = [
  {
    id: 1,
    label: 'Limpieza dental con ultrasonido'
  },
  {
    id: 2,
    label: 'Blanqueamiento dental'
  },
  {
    id: 3,
    label: 'Aplicación tópica de flúor'
  },
  {
    id: 4,
    label: 'Seguimiento en casa'
  }
]

const cards = []

export const LandingPricing = () => {
  return (
    <section id="pricings" className="lg:h-[650px] container m-auto lg:flex gap-10 my-10">
      <article className="lg:w-1/3 flex flex-col justify-between bg-white h-full rounded-lg px-10 py-10 lg:px-16 lg:py-20 text-center scale-y-95">
        <div className="text-primary">
          <h3>Individual</h3>
          <h6 className="my-4">Cuida de tu propia salud bucal</h6>

          <h2 className="lg:text-6xl text-4xl font-black">$900</h2>
        </div>

        <div className="space-y-5 my-6 text-primary">
          {individualService.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex space-x-3">
                  <FaCheckCircle />
                  <small className="m-0 p-0">{item.label}</small>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-between items-center gap-5 my-4">
          <div className="w-1/3 h-full bg-white flex items-center rounded-lg">
            <Image className="object-contain  aspect-video w-full" src="/visa.png" alt="" width={100} height={50} />
          </div>
          <div className="w-1/3 h-full bg-white flex items-center px-2 rounded-lg">
            <Image className="object-contain w-full" src="/mercado-pago.webp" alt="" width={100} height={50} />
          </div>
          <div className="w-1/3 h-full bg-white flex items-center px-5 rounded-lg">
            <Image className="object-contain w-full" src="/master-card.png" alt="" width={100} height={50} />
          </div>
        </div>

        <div>
          <Link href={whatsAppMessage('Paquete de una persona')} target="_blank">
            <Button variant="default">Obtener Promoción</Button>
          </Link>
        </div>
      </article>
      

      <article className="lg:w-1/3 flex flex-col justify-between h-full bg-primary rounded-lg px-10 py-10 lg:px-16 lg:py-20 text-center">
        <div className="flex justify-center mb-4 lg:mb-4">
          <p className="border border-white rounded-full text-white py-2 w-2/3 lg:w-1/2">Más popular</p>
        </div>
        <div className="text-white">
          <h3>Familiar</h3>
          <h6 className="my-4">Hasta 4 integrantes</h6>

          <h2 className="lg:text-6xl text-4xl font-black">$1,500</h2>
        </div>

        <div className="space-y-5 my-6 text-white">
          {familiarService.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex space-x-3">
                  <FaCheckCircle />
                  <small className="m-0 p-0 text-start">{item.label}</small>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-between items-center gap-5 mb-6">
          <div className="w-1/3 h-full bg-white flex items-center">
            <Image className="object-contain  aspect-video w-full" src="/visa.png" alt="" width={100} height={50} />
          </div>
          <div className="w-1/3 h-full bg-white flex items-center px-2">
            <Image className="object-contain w-full" src="/mercado-pago.webp" alt="" width={100} height={50} />
          </div>
          <div className="w-1/3 h-full bg-white flex items-center px-5">
            <Image className="object-contain w-full" src="/master-card.png" alt="" width={100} height={50} />
          </div>
        </div>

        <div>
          <Link href={whatsAppMessage('Paquete familiar')} target="_blank">
            <Button variant="white">Obtener Promoción</Button>
          </Link>
        </div>
      </article>

      <article className="lg:w-1/3 flex flex-col justify-between bg-white h-full rounded-lg px-10 py-10 lg:px-16 lg:py-20 text-center scale-y-95">
        <div className="text-primary">
          <h3>Pareja</h3>
          <h6 className="my-4">Para 2 personas</h6>

          <h2 className="lg:text-6xl text-4xl font-black">$2,100</h2>
        </div>

        <div className="space-y-5 my-6 text-primary">
          {coupleService.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle />
                  <small className="m-0 p-0">{item.label}</small>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-between items-center gap-5 mb-6">
          <div className="w-1/3 h-full bg-white flex items-center">
            <Image className="object-contain  aspect-video w-full" src="/visa.png" alt="" width={100} height={50} />
          </div>
          <div className="w-1/3 h-full bg-white flex items-center px-2">
            <Image className="object-contain w-full" src="/mercado-pago.webp" alt="" width={100} height={50} />
          </div>
          <div className="w-1/3 h-full bg-white flex items-center px-5">
            <Image className="object-contain w-full" src="/master-card.png" alt="" width={100} height={50} />
          </div>
        </div>

        <div>
          <Link href={whatsAppMessage('Paquete parejas')} target="_blank">
            <Button variant="default">Obtener Promoción</Button>
          </Link>
        </div>
      </article>
    </section>
  )
}
