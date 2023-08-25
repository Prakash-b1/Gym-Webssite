import { ClassType, SelectedPage } from "@/shared/Types";
import Image1 from "@/assets/image1.png"
import Image2 from "@/assets/image2.png"
import Image3 from "@/assets/image3.png"

import Image4 from "@/assets/image4.png"
import Image5 from "@/assets/image5.png"
import Image6 from "@/assets/image6.png"
import {motion} from "framer-motion"
import Htext from "@/shared/Htext";
import Class from "./Class";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const classes :Array<ClassType> = [
    {
        name:"Weight training classes",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, asperiores. Error sequi, provident quos consectetur ratione reprehenderit? Numquam dicta praesentium quibusdam id, ratione atque cupiditate, illo consectetur commodi voluptatibus aperiam?",
        image:Image1
    },
    {
        name:"Weight training classes",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, asperiores. Error sequi, provident quos consectetur ratione reprehenderit? Numquam dicta praesentium quibusdam id, ratione atque cupiditate, illo consectetur commodi voluptatibus aperiam?",
        image:Image2
    },
    {
        name:"Weight training classes",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, asperiores. Error sequi, provident quos consectetur ratione reprehenderit? Numquam dicta praesentium quibusdam id, ratione atque cupiditate, illo consectetur commodi voluptatibus aperiam?",
        image:Image3
    },
    {
        name:"Weight training classes",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, asperiores. Error sequi, provident quos consectetur ratione reprehenderit? Numquam dicta praesentium quibusdam id, ratione atque cupiditate, illo consectetur commodi voluptatibus aperiam?",
        image:Image4
    },
    {
        name:"Weight training classes",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, asperiores. Error sequi, provident quos consectetur ratione reprehenderit? Numquam dicta praesentium quibusdam id, ratione atque cupiditate, illo consectetur commodi voluptatibus aperiam?",
        image:Image5
    },
    {
        name:"Weight training classes",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, asperiores. Error sequi, provident quos consectetur ratione reprehenderit? Numquam dicta praesentium quibusdam id, ratione atque cupiditate, illo consectetur commodi voluptatibus aperiam?",
        image:Image6
    }
]  
const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section className="bg-primary-100 w-full p-10 " id="ourclasses">
         <motion.div
         onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{duration:0.5}}
          variants={{
           hidden:{opacity:0,x:-50},
           visible:{opacity:1,x:0}
          }}>
            <div>
                <Htext>Our Classes</Htext>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, dicta. Aperiam, a quisquam animi sunt fugiat voluptas. Molestiae, nihil! Aut maxime rem quidem earum aperiam perferendis, amet esse sunt est!
                </p>
            </div>

            </motion.div>

            <div className="mt-10 overflow-x-auto overflow-y-hidden h-[355px] w-full">
                 <div className="whitespace-nowrap w-[3000px] ">
                    {classes.map((item,index)=>(
                      <Class name={item.name} key={`${item.name}+${index}`} description={item.description} image={item.image} />
                    ))}
                 </div>
            </div>
         </motion.div>
    </section>
  )
}

export default OurClasses