import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage } from "@/shared/Types"
import {motion} from "framer-motion"
type Props ={
    icon :JSX.Element
    title:string
    description:string
    setSelectedPage :(value:SelectedPage)=>void

}
const childVariants ={
    hidden:{opacity:0,scale:0.9},
    visible:{opacity:1,scale:1}
}

const Benefit = ({icon,title,description,setSelectedPage}: Props) => {
  return (
    <motion.div
    variants={childVariants}
    className="mt-5 border-2 rounded-md border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            {/* icon */}
            <div className="border-2 bg-primary-100 rounded-full border-gray-100 p-4">
                {icon}
            </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
    </motion.div>
  )
}

export default Benefit