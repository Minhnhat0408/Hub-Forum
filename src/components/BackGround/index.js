import { useEffect, useRef, useState } from "react";
import "../../App.css";
function BackGround({ children, className }) {
    const ref = useRef();
    const [isSticky, setIsSticky] = useState(false);
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 800) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      console.log(scrollPosition)
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={`${className} ${isSticky ? 'bg-fixed' : ''}`} ref={ref}>
        {children}
      </div>
    );
  }
  

export default BackGround;
