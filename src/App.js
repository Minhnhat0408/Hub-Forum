import Cover from "./components/PageComponents/Cover";
import Navbar from "./components/PageComponents/Navbar";
import TimeLocation from "./components/PageComponents/TimeLocation";
import About from "./components/PageComponents/About";
import Organization from "./components/PageComponents/Organization";
import MagicNumber from "./components/PageComponents/MagicNumber";
import Programs from "./components/PageComponents/Programs";
import TimeLine from "./components/PageComponents/TimeLine";
import AboutHosts from "./components/PageComponents/AboutHosts";
import Contact from "./components/PageComponents/Contact";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "./components/Utilites/Image/Image";
import image from "./assets/images";
import Exhibitions from "./components/PageComponents/Exhibitions";
import Speakers from "./components/PageComponents/Speakers";
function App() {
  const dangki = useRef(null);
  const [show, setShow] = useState(true);
  const isInView = useInView(dangki);
  useEffect(() => {
    if (isInView) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [isInView]);

  return (
    <div className="App flex flex-col items-center h-fit">
   
      <Image
        src={image.cover}
        className=" fixed h-[100vh] w-[100vw] lg:object-cover -z-10 bg-black"
      />
      <Navbar showApply={show} />
      <Cover />
      <About />
      <TimeLocation ref={dangki} />
      <Organization />
      <MagicNumber />
      <TimeLine />
      <Programs />
      <Speakers />
      <Exhibitions />
      <AboutHosts />
      <Contact />
      {/* <iframe
          src="https://giphy.com/embed/3ohs7Sjl26eSQjem3K"  
          title="helo"
          className="giphy-embed fixed h-[100vh] w-[120vw] scale-125  lg-min:scale-150 phone:!scale-[280%] top-0 -z-10 bg-black"
          allowFullScreen
        ></iframe>
       */}
    </div>
  );
}

export default App;
