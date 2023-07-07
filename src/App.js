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
function App() {
  return (
    <div className="App bg flex flex-col items-center h-fit">
      <Navbar />
      <Cover />
      <About />
      <TimeLocation />
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
