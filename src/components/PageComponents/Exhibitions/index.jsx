import "../../../App.css";
import logo from "../../../assets/logo";
import Image from "../../Utilites/Image/Image";
import Reveal from "../../Utilites/Reveal";
import Tilt from "react-parallax-tilt"
function Exhibitions() {
  return (
    <div className="flex justify-center items-center flex-col bg-black/60 xxl-min:h-[700px] w-full  sm-max:!py-8  py-20 px-10 relative">
      <Reveal hiddenY={200}  className="font-nokia text-[50px] event-heading xl-max:text-[40px] xl:text-[30px] xl:text-center sm-max:!text-[30px]">Triển Lãm</Reveal>
<div className="w-full h-0 xl-max:h-full flex flex-wrap justify-evenly mt-10" >
        <Tilt  glareEnable={true}
        glareMaxOpacity={0.5}
        glareBorderRadius='24px'
        glarePosition="all"  className="absolute p-4 floating-box-animation-delay hover:animate-none xl-max:!animate-none xl-max:!relative sm2-max:mx-10 phone:!w-1/2 phone:!my-4 phone:!h-[40vw] xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10 bg-[rgba(255,255,255,0.2)] flex justify-center items-center w-32 h-32   rounded-3xl xxl-min:top-[200px] xxl-min:left-[13vw]">
          <Image src={logo.meta} className="phone:w-full phone:h-full" alt="logo" />
        </Tilt>
        <Tilt glareEnable={true}
        glareMaxOpacity={0.5}
        glareBorderRadius='24px'
        glarePosition="all" className="absolute p-4 floating-box-animation flex hover:animate-none  xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-1/2 phone:!my-4 phone:!h-[40vw] xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10 justify-center items-center w-24 h-24 bg-[rgba(255,255,255,0.2)] rounded-3xl xxl-min:top-[100px] xxl-min:left-[30vw]">
          <Image src={logo.ihub} className="phone:w-full phone:h-full" alt="logo" />
        </Tilt>
        <Tilt glareEnable={true}
        glareMaxOpacity={0.5}
        glareBorderRadius='24px'
        glarePosition="all" className="absolute p-4 floating-box-animation-delay hover:animate-none xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-1/2 phone:!my-4  phone:!h-[40vw] xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10  flex justify-center items-center w-40 h-40 bg-[rgba(255,255,255,0.2)] rounded-3xl xxl-min:bottom-[100px] xxl-min:left-[20vw]">
          <Image src={logo.nerd} className="phone:w-full phone:h-full" alt="logo" />
        </Tilt>
        <Tilt glareEnable={true}
        glareMaxOpacity={0.5}
        glareBorderRadius='24px'
        glarePosition="all" className="absolute p-4 floating-box-animation flex hover:animate-none xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-1/2 phone:!my-4 phone:!h-[40vw] xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10 justify-center items-center w-40 h-40 bg-[rgba(255,255,255,0.2)] rounded-3xl xxl-min:top-[140px] xxl-min:right-[22vw]">
          <Image src={logo.touree} className="phone:w-full phone:h-full" alt="logo" />
        </Tilt>
        <Tilt glareEnable={true}
        glareMaxOpacity={0.5}
        glareBorderRadius='24px'
        glarePosition="all" className="absolute p-4 floating-box-animation flex hover:animate-none xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-1/2 phone:!my-4 phone:!h-[40vw] xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10 justify-center items-center w-32 h-32 bg-[rgba(255,255,255,0.2)] rounded-3xl xxl-min:top-[300px] xxl-min:right-[9vw]">
          <Image src={logo.coffuel} className="phone:w-full phone:h-full" alt="logo" />
        </Tilt>
        <Tilt glareEnable={true}
        glareMaxOpacity={0.5}
        glareBorderRadius='24px'
        glarePosition="all" className="absolute p-4 floating-box-animation-delay hover:animate-none xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-1/2 phone:!my-4 phone:!h-[40vw] xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10  flex justify-center items-center w-44 h-44 bg-[rgba(255,255,255,0.2)] rounded-3xl xxl-min:bottom-[60px] xxl-min:right-[25vw]">
          <Image src={logo.navi} className="phone:w-full phone:h-full" alt="logo" />
        </Tilt>
</div>
    </div>
  );
}

export default Exhibitions;
