import "../../../App.css";
import logo from "../../../assets/logo";
import Image from "../../Utilites/Image";
import Reveal from "../../Utilites/Reveal";
function Organization() {
  return (
    <div className="flex flex-wrap text-white justify-between items-center w-full bg-black/60 h-[52vh] lgx-max:h-full px-10 py-20 phone:py-10">
      <Reveal
        duration={2}
        opacity={0}
        delay={0.5}
        className="w-[20%] lgx-max:w-[38%] phone-big:!w-[100%] phone-big:mb-10"
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[30px] pb-8 laptop-big:text-[24px] laptop-small:text-[20px] lgx-max:!text-[24px]">
            ĐƠN VỊ CHỈ ĐẠO
          </h2>
          <div className="flex items-center justify-evenly w-full px-3">
            <Image
              src={logo.one}
              alt="logo"
              className="w-[45%] phone-big:w-[30%] h-auto mr-3 transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.two}
              alt="logo"
              className="w-[45%] phone-big:w-[30%] h-auto transform transition duration-500 hover:scale-125"
            />
          </div>
        </div>
      </Reveal>
      <Reveal
        duration={2}
        opacity={0}
        delay={0.5}
        className="w-[30%] lgx-max:w-[57%] phone-big:w-[100%]"
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[30px] pb-8 laptop-big:text-[24px] laptop-small:text-[20px] lgx-max:!text-[24px]">
            ĐƠN VỊ TỔ CHỨC
          </h2>
          <div className="flex items-center justify-between w-full">
            <Image
              src={logo.three}
              alt="logo"
              className="w-[30%] h-auto transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.four}
              alt="logo"
              className="w-[30%] h-auto mx-3 transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.five}
              alt="logo"
              className="w-[30%] h-auto transform transition duration-500 hover:scale-125"
            />
          </div>
        </div>
      </Reveal>
      <Reveal
        duration={2}
        opacity={0}
        delay={0.5}
        className="w-[40%] lgx-max:w-[100%] lg-max:mt-10 phone-big:w-[100%]"
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[30px] pb-8 laptop-big:text-[24px] laptop-small:text-[20px] lgx-max:!text-[24px]">
            ĐƠN VỊ TRIỂN KHAI
          </h2>
          <div className="flex items-center justify-evenly w-full px-4 lgx-max:w-[70%]">
            <Image
              src={logo.six}
              alt="logo"
              className="w-[22%] lgx-max:w-[25%] phone-big:w-[40%] ml-2 h-auto transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.seven}
              alt="logo"
              className="w-[22%] lgx-max:w-[25%] phone-big:w-[40%] ml-2 h-auto transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.eight}
              alt="logo"
              className="w-[22%] lgx-max:w-[25%] phone-big:w-[40%] ml-2 h-auto transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.nine}
              alt="logo"
              className="w-[22%] lgx-max:w-[25%] phone-big:w-[40%] ml-2 h-auto transform transition duration-500 hover:scale-125"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Organization;
