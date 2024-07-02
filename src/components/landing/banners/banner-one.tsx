import { Avatar, AvatarFallback } from "@dentist/components/ui/avatar"
import { Button } from "@dentist/components/ui/button"


export const BannerOne = () => {
  return (
    <section className="hidden lg:block container m-auto my-10  h-[320px]">
      <div className="grid grid-cols-3 gap-4 h-full">
        <div className="relative">
          <div className="absolute left-0">
            <Avatar className="w-36 h-36">
              <AvatarFallback className="bg-red-300">MJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute left-48 top-28">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-red-400">MJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute bottom-0 left-8">
            <Avatar className="w-28 h-28">
              <AvatarFallback className="bg-red-100">MJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex space-y-10 flex-col">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magni sunt adipisci explicabo, nostrum cumque!</p>
          <Button>Lorem, ipsum dolor.</Button>
        </div>
        <div className="relative">
          <div className="absolute right-5">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-red-300">MJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute left-5 top-20">
            <Avatar className="w-28 h-28">
              <AvatarFallback className="bg-red-400">MJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute bottom-0 right-0">
            <Avatar className="w-32 h-32">
              <AvatarFallback className="bg-red-100">MJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  )
}
