
const services = [
  {
    image: '',
    title: '',
    description: ''
  },
  {
    image: '',
    title: '',
    description: ''
  },
  {
    image: '',
    title: '',
    description: ''
  },
  {
    image: '',
    title: '',
    description: ''
  },
  {
    image: '',
    title: '',
    description: ''
  },
  {
    image: '',
    title: '',
    description: ''
  },
]

const Services = ({ image, title, description } : {image: string, title: string, description: string}) => {
  return (
    <article className="relative w-full lg:w-1/3 p-4 lg:mb-10">
      <div className="h-[300px] mb-2">
        <div className="h-full w-full lg:w-3/5 bg-red-200 rounded-lg">

        </div>
      </div>
      <div className="flex justify-center -mt-10">
        <div className="
          lg:absolute 
          w-2/3
          lg:w-1/2
          text-center
          lg:text-start
          lg:top-[8rem]
          lg:left-[10rem]
          bg-white 
          rounded-xl 
          px-4 
          py-2"
        >
          <h3 className="text-lg font-bold">Hola</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, doloremque!</p>
        </div>
      </div>
    </article>

  )
}

export const SectionServices = () => {
  return (
    <section id="services" className="sm:container sm:m-auto py-8">
      <h4 className="text-center">Lorem, ipsum.</h4>
      <h3 className="text-center my-4">Lorem, ipsum dolor.</h3>
      <div className="lg:flex flex-wrap">
        {
          services.map((item) => <Services {...item}/>)
        }
      </div>
    </section>
  )
}
