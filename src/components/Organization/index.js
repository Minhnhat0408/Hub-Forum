import image from "../../assets/images";
import Image from "../Image/Image";
import Reveal from "../Reveal/Reveal";
import logo from "../../assets/logo";
function Organization() {
  return (
    <div className="flex flex-wrap text-white justify-between w-full bg-black/70 py-20 px-10">
      <Reveal duration={1} opacity={0.1} delay={0.3} className="w-[20%]">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[30px] pb-8">ĐƠN VỊ CHỈ ĐẠO</h2>
          <div className="flex items-center justify-between w-full">
            <Image src={logo.one} alt="logo" className="w-24 h-auto" />
            <Image src={logo.two} alt="logo" className="w-24 h-auto" />
          </div>
        </div>
      </Reveal>
      <Reveal duration={1} opacity={0.1} delay={0.3} className="w-[30%]">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[30px] pb-8">ĐƠN VỊ TỔ CHỨC</h2>
          <div className="flex items-center justify-between w-full">
            <Image src={logo.three} alt="logo" className="w-24 h-auto" />
            <Image src={logo.four} alt="logo" className="w-24 h-auto" />
            <Image src={logo.five} alt="logo" className="w-24 h-auto" />
          </div>
        </div>
      </Reveal>
      <Reveal duration={1} opacity={0.1} delay={0.3} className="w-[40%]">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[30px] pb-8">ĐƠN VỊ TRIỂN KHAI</h2>
          <div className="flex items-center justify-between w-full">
            <Image src={logo.six} alt="logo" className="w-24 h-auto" />
            <Image src={logo.seven} alt="logo" className="w-24 h-auto" />
            <Image src={logo.eight} alt="logo" className="w-24 h-auto" />
            <Image src={logo.nine} alt="logo" className="w-24 h-auto" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Organization;
