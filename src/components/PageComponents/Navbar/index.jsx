import image from "../../../assets/images";
import Image from "../../Utilites/Image";
import Scrollspy from "react-scrollspy-highlight";
import Reveal from "../../Utilites/Reveal";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../../../App.css";
function Navbar({ showApply }) {
  const [reload,setReload] = useState(showApply);
  useEffect(()=>{
    const timerid = setTimeout(() =>{
      if(reload !== showApply){
        setReload(showApply)
      }
      console.log(reload,showApply)
    },[500])
    
    return () => clearInterval(timerid)
  },[showApply])
  return (
    <div className="h-[80px] overflow-hidden bg-black/70 w-full flex phone:justify-between items-center fixed z-50 px-10 lg:px-4 phone:!h-[60px] phone:!px-1">
      <Image
        src={image.hubForum}
        alt="logo"
        className="w-60 phone:w-[150px] phone:ml-1 h-auto"
        onClick = {() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      <Scrollspy
        items={["tongquan", "timeline", "chuongtrinh", "doitac", "lienhe"]}
        currentClassName="highlight"
        style={{
          display: "flex ",
          justifyContent: "",
          width: "calc(100% - 400px)",
        }}
        offset={-120}
      >
        <li className="text-white xl:hidden h-full font-bold ml-10 lg:mx-3 min-w-[110px] lg:min-w-[80px] text-center whitespace-nowrap">
          <a className="h-full block py-2" href="#tongquan">
            Tổng quan
          </a>
        </li>
        <li className="text-white xl:hidden h-full font-bold ml-10 lg:mx-3  min-w-[110px] lg:min-w-[80px] text-center whitespace-nowrap">
          <a className="h-full block py-2" href="#timeline">
            Timeline
          </a>
        </li>
        <li className="text-white xl:hidden h-full font-bold ml-10 lg:mx-3  min-w-[110px] lg:min-w-[80px] text-center whitespace-nowrap">
          <a className="h-full block py-2" href="#chuongtrinh">
            Chương trình
          </a>
        </li>
        <li className="text-white xl:hidden h-full font-bold ml-10 lg:mx-3  min-w-[110px] lg:min-w-[80px] text-center whitespace-nowrap">
          <a className="h-full block py-2" href="#doitac">
            Đối tác
          </a>
        </li>
        <li className="text-white xl:hidden h-full font-bold min-w-[110px] lg:min-w-[80px] text-center whitespace-nowrap">
          <a className="h-full block py-2" href="#lienhe">
            Liên hệ
          </a>
        </li>
      </Scrollspy>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {reload && (
          <Reveal
            className="w-100% h-fit phone:scale-[85%] phone:ml-3"
            hiddenY={20}
            duration={0.3}
          >
            <div className="flex items-center justify-center">
              <a
                className="cyberpunk-button small mr-20 lg:mr-6  whitespace-nowrap "
                href="https://docs.google.com/forms/d/e/1FAIpQLSeLvBYW50TyuCLsrWlVxI0tvcPW-p47fJ3XP-52NYUbDawhsg/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Đăng ký ngay
              </a>
            </div>
          </Reveal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
