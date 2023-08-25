import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/Types";
import ActionButton from "@/shared/ActionButton";
import HomeText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedbull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  const isAboveMediaScreen = useMediaQuery("(min-width:1025px)");
  return (
    <section id="home" className="gap-16 md:py-20 md:mb-10 bg-gray-20 md:h-full md:pb-0">
      {/* image and main header div */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center h-5/6"
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}
        <div className="md:basis-3/5 z-10 mt-32">
          {/* heading */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{duration:0.5}}
          variants={{
           hidden:{opacity:0,x:-50},
           visible:{opacity:1,x:0}
          }}
           className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomeText} alt="" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* actions */}
          <motion.div className="flex items-center gap-8 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{delay:0.2,duration:0.5}}
          variants={{
           hidden:{opacity:0,x:-50},
           visible:{opacity:1,x:0}
          }}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* image div */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="Home page graphics" />
        </div>
      </motion.div>

      {/* sponsors for phone screen */}
      {isAboveMediaScreen && (
        <div className="h-[150px] w-full py-10 bg-primary-100">
          <div className="w-5/6 mx-auto">
            <div  className="w-3/5 flex items-center justify-between gap-8">
              <img src={SponsorRedbull} alt="Redbull" />
              <img src={SponsorForbes} alt="Forbes" />
              <img src={SponsorFortune} alt="Fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default index;
