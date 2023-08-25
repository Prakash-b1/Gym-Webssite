import { SelectedPage } from "@/shared/Types";
import ContactPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();
  const inputStyles = `mb-4 w-full rounded-lg bg-primary-300 py-3 px-5 placeholder-white`;
  const submitHandler = async (e: any) => {
    const isvalid = await trigger();
    if (!isvalid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 text-left">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </Htext>
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            itaque perspiciatis quod architecto. Eos atque, quae repellendus
            inventore deserunt reprehenderit totam repudiandae eius officia
            magnam tempora esse recusandae expedita praesentium?
          </p>
        </motion.div>
        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              action="https://formsubmit.com/dakshaybishnoi@email.com"
              target="_blank"
              method="POST"
              onSubmit={submitHandler}
            >
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Charcters should be under 100."}
                </p>
              )}
              <input
                type="text"
                className={inputStyles}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" &&
                    "The provided mail Id is not correct."}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                className={inputStyles}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Charcters should be under 100."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay:0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          >
            <div className="w-full md:before:content-evolvetext before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img src={ContactPageGraphic} alt="Contact page graphics" className="w-full"/>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
