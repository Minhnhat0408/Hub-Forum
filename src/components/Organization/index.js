import image from "../../assets/images";
import Image from "../Image/Image";
import Reveal from "../Reveal/Reveal";
import logo from "../../assets/logo";
function Organization() {
  return (
    <div className="flex flex-wrap text-white justify-between items-center w-full bg-black/70 h-[52vh] px-10 py-20">
      <Reveal duration={2} opacity={0} delay={0.5} className="w-[20%]">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[30px] pb-8">ĐƠN VỊ CHỈ ĐẠO</h2>
          <div className="flex items-center justify-between w-full px-3">
            <Image
              src={logo.one}
              alt="logo"
              className="w-[45%] h-auto mr-3 transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.two}
              alt="logo"
              className="w-[45%] h-auto transform transition duration-500 hover:scale-125"
            />
          </div>
        </div>
      </Reveal>
      <Reveal duration={2} opacity={0} delay={0.5} className="w-[30%]">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[30px] pb-8">ĐƠN VỊ TỔ CHỨC</h2>
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
      <Reveal duration={2} opacity={0} delay={0.5} className="w-[40%]">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[30px] pb-8">ĐƠN VỊ TRIỂN KHAI</h2>
          <div className="flex items-center justify-between w-full px-4">
            <Image
              src={logo.six}
              alt="logo"
              className="w-[22%] h-auto transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.seven}
              alt="logo"
              className="w-[22%] h-auto transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.eight}
              alt="logo"
              className="w-[22%] h-auto transform transition duration-500 hover:scale-125"
            />
            <Image
              src={logo.nine}
              alt="logo"
              className="w-[22%] h-auto transform transition duration-500 hover:scale-125"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Organization;
