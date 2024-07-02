import { Button } from "@dentist/components/ui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const mostPopular = ['Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit.']
const cards = []

export const LandingPricing = () => {
  return (
    <section id="pricings" className="lg:h-[650px] container m-auto lg:flex gap-10 my-10">
      <article className="lg:w-1/3 flex flex-col justify-between bg-white h-full rounded-lg px-10 py-10 lg:px-16 lg:py-20 text-center scale-y-95">
        <div className="text-primary">
          <h3>Family</h3>
          <h6 className="my-4">Lorem ipsum dolor sit.</h6>

          <h2 className="lg:text-6xl text-4xl font-black">$149.99</h2>
        </div>

        <div className="space-y-5 my-6 text-primary">
          {mostPopular.map((item) => {
            return (
              <div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle />
                  <small className="m-0 p-0">{item}</small>
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
          <Button variant="default">Obtener Promoción</Button>
        </div>
      </article>
      

      <article className="lg:w-1/3 flex flex-col justify-between h-full bg-primary rounded-lg px-10 py-10 lg:px-16 lg:py-20 text-center">
        <div className="flex justify-center mb-4 lg:mb-4">
          <p className="border border-white rounded-full text-white py-2 w-2/3 lg:w-1/2">Most popular</p>
        </div>
        <div className="text-white">
          <h3>Family</h3>
          <h6 className="my-4">Lorem ipsum dolor sit.</h6>

          <h2 className="lg:text-6xl text-4xl font-black">$149.99</h2>
        </div>

        <div className="space-y-5 my-6 text-white">
          {mostPopular.map((item) => {
            return (
              <div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle />
                  <small className="m-0 p-0">{item}</small>
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
          <Button variant="white">Obtener Promoción</Button>
        </div>
      </article>

      <article className="lg:w-1/3 flex flex-col justify-between bg-white h-full rounded-lg px-10 py-10 lg:px-16 lg:py-20 text-center scale-y-95">
        <div className="text-primary">
          <h3>Family</h3>
          <h6 className="my-4">Lorem ipsum dolor sit.</h6>

          <h2 className="lg:text-6xl text-4xl font-black">$149.99</h2>
        </div>

        <div className="space-y-5 my-6 text-primary">
          {mostPopular.map((item) => {
            return (
              <div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle />
                  <small className="m-0 p-0">{item}</small>
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
          <Button variant="default">Obtener Promoción</Button>
        </div>
      </article>
    </section>
  )
}
