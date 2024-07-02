import { FaRegMessage } from "react-icons/fa6";
import { MdCopyAll, MdOutlineDateRange } from "react-icons/md";
import { IconType } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";


const labelTrusth = ['Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.', 'Lorem, ipsum.']



const Step = ({ title, description, Icon }: { title: string, description: string, Icon: IconType }) => {
  return (
    <div className="bg-white flex px-8 py-4 items-center rounded-lg">
      <div className="bg-blue-50 h-20 aspect-square rounded-lg flex items-center justify-center mr-6">
        <Icon size={25} className="text-primary" />
      </div>
      <div>
        <h6 className="font-bold mb-2">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  )
}

export const StepsSection = () => {
  return (
    <section id="how-schedule" className="container m-auto py-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
        <div className="flex flex-col justify-center space-y-5">
          <h5>Lorem ipsum dolor sit amet.</h5>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae nulla minus illum ipsam cumque adipisci dolor aut quidem vel.</p>

          <div className="flex flex-wrap lg:w-2/3 w-full">
            {labelTrusth.map((item, index) => (
              <div key={index} className="w-1/2 p-2">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500" />
                  <h6 className="ml-2 font-semibold">{item}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
        <Step 
            title="Lorem, ipsum." 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni cumque in repudiandae soluta sunt." 
            Icon={FaRegMessage}
          />
          <Step 
            title="Lorem, ipsum." 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni cumque in repudiandae soluta sunt." 
            Icon={MdCopyAll}
          />
          <Step 
            title="Lorem, ipsum." 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni cumque in repudiandae soluta sunt." 
            Icon={MdOutlineDateRange}
          />
          <Step 
            title="Lorem, ipsum." 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni cumque in repudiandae soluta sunt." 
            Icon={FaCheckCircle}
          />
        </div>
      </div>
    </section>
  )
}
