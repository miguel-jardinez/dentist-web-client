import { Avatar, AvatarFallback, AvatarImage } from "@dentist/components/ui/avatar"
import { Button } from "@dentist/components/ui/button"


export const BannerOne = () => {
  return (
    <section className="hidden lg:block container m-auto my-10  h-[320px]">
      <div className="grid grid-cols-3 gap-4 h-full">
        <div className="relative">
          <div className="absolute left-0">
            <Avatar className="w-36 h-36">
              <AvatarImage className="object-cover" src="/banner-01.jpg" alt="" />
              <AvatarFallback className="bg-red-300">MJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute left-48 top-28">
            <Avatar className="w-20 h-20">
              <AvatarImage className="object-cover" src="/banner-02.jpg" alt="" />
              <AvatarFallback className="bg-red-400">MJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute bottom-0 left-8">
            <Avatar className="w-28 h-28">
              <AvatarImage className="object-cover" src="/banner-03.jpg" alt="" />
              <AvatarFallback className="bg-red-100">MJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex space-y-10 flex-col">
          <h2 className="text-center">Somos lo que has estado buscando en cuidado dental.</h2>
          <p className="text-center">
            Descubre con nosotros la confianza, honestidad y el cuidado dental sin dolor que necesitas. Tu sonrisa merece lo mejor.
          </p>
          <Button>Agenda ahora</Button>
        </div>
        <div className="relative">
          <div className="absolute right-5">
            <Avatar className="w-20 h-20">
              <AvatarImage className="object-cover" src="/banner-04.jpg" alt="" />
              <AvatarFallback className="bg-red-300">MJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute left-5 top-20">
            <Avatar className="w-28 h-28">
              <AvatarImage className="object-cover" src="/banner-05.jpg" alt="" />
              <AvatarFallback className="bg-red-400">MJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute bottom-0 right-0">
            <Avatar className="w-32 h-32">
              <AvatarImage className="object-cover" src="/banner-06.jpg" alt="" />
              <AvatarFallback className="bg-red-100">MJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  )
}
