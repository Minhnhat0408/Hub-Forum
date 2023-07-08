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
    <div className="App overflow-x-hidden bg-[url('./assets/images/bg3.png')] bg-no-repeat bg-fixed bg-[length:100%_100vh] lg:bg-top lg:bg-[length:auto_100vh]  flex flex-col items-center h-fit">
      <Navbar showApply={show} />
      <Cover />
      <About />
      <TimeLocation ref={dangki} />
      <Organization />
      <MagicNumber />
      <TimeLine />
      <Programs />
      <AboutHosts />
      <Contact />
    </div>
  );
}

export default App;
