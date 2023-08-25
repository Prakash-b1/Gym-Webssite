import { useState } from "react";
import Logo from "@/assets/Logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/Types";

import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const backgroundScroll = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${backgroundScroll}`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side*/}
            <img src={Logo} alt="" />
            {/* right side */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Link
                    page="Sign In"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <div
                className="rounded-full bg-secondary-500 p-2 "
                onClick={() => {
                  setMenuToggle(!menuToggle);
                }}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu model */}
      {!isAboveMediumScreen && menuToggle && (
        <div className=" fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* X button */}
          <div className="flex justify-end px-10 py-8">
            <button
              className=" "
              onClick={() => {
                setMenuToggle(!menuToggle);
              }}
            >
              <XMarkIcon className="mr-4 h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu items */}
          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
