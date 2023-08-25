import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "@/components/navbar";
import { SelectedPage } from "@/shared/Types.ts";
import Home from "@/components/home";
import Benefits from "./components/benefits";
import OurClasses from "./components/ourClasses";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0)setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // this will allow us to remove this otherwise we have some memory leaks and certain bugs
  }, []);

  return (
    <>
      <Navbar
        selectedPage={selectedPage}
        isTopOfPage={isTopOfPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </>
  );
}

export default App;
