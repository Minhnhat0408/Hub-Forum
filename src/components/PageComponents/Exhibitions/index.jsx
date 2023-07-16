import "../../../App.css";
import logo from "../../../assets/logo";
import Image from "../../Utilites/Image/Image";
import Reveal from "../../Utilites/Reveal";

function Exhibitions() {
  return (
    <div className="flex justify-center items-center flex-col bg-black/60 xxl-min:h-[700px] w-full py-20 px-10 relative">
      <Reveal hiddenY={200}  className="font-nokia text-[50px] event-heading xl-max:text-[40px] xl:text-[30px] xl:text-center sm-max:!text-[30px]">Triển Lãm</Reveal>
<div className="w-full h-0 xl-max:h-full flex flex-wrap justify-evenly mt-10" >
        <div   className="absolute p-4 floating-box-animation-delay xl-max:!animate-none xl-max:!relative sm2-max:mx-10 phone:!w-2/3 phone:aspect-square xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10  flex flex-col w-32 h-32 xxl-min:border-4 xxl-min:shadow-[0_0_15px_8px_#8a2be2] xxl-min:border-purple-500 rounded-3xl xxl-min:top-[200px] xxl-min:left-[13vw]">
          <Image src={logo.coffuel} alt="logo" />
        </div>
        <div  className="absolute p-4 floating-box-animation flex  xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-2/3 phone:aspect-square xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10 flex-col w-24 h-24 xxl-min:border-4 xxl-min:shadow-[0_0_15px_8px_#8a2be2] xxl-min:border-purple-500 rounded-3xl xxl-min:top-[100px] xxl-min:left-[30vw]">
          <Image src={logo.coffuel} alt="logo" />
        </div>
        <div  className="absolute p-4 floating-box-animation-delay xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-2/3 phone:aspect-square xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10  flex flex-col w-40 h-40 xxl-min:shadow-[0_0_15px_8px_#8a2be2] xxl-min:border-4 xxl-min:border-purple-500 rounded-3xl xxl-min:bottom-[100px] xxl-min:left-[20vw]">
          <Image src={logo.nerd} alt="logo" />
        </div>
        <div  className="absolute p-4 floating-box-animation flex  xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-2/3 phone:aspect-square xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10 flex-col w-40 h-40 xxl-min:border-4 xxl-min:shadow-[0_0_15px_8px_#8a2be2] xxl-min:border-purple-500 rounded-3xl xxl-min:top-[140px] xxl-min:right-[22vw]">
          <Image src={logo.touree} alt="logo" />
        </div>
        <div  className="absolute p-4 floating-box-animation flex  xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-2/3 phone:aspect-square xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10 flex-col w-32 h-32 xxl-min:border-4 xxl-min:shadow-[0_0_15px_8px_#8a2be2] xxl-min:border-purple-500 rounded-3xl xxl-min:top-[300px] xxl-min:right-[9vw]">
          <Image src={logo.coffuel} alt="logo" />
        </div>
        <div  className="absolute p-4 floating-box-animation-delay xl-max:!animate-none xl-max:!relative sm2-max:mx-6 phone:!w-2/3 phone:aspect-square xl-max:w-40 xl-max:h-40 xl-max:mx-20 xl-max:my-10  flex flex-col w-44 h-44 xxl-min:border-4 xxl-min:shadow-[0_0_15px_8px_#8a2be2] xxl-min:border-purple-500 rounded-3xl xxl-min:bottom-[60px] xxl-min:right-[25vw]">
          <Image src={logo.navi} alt="logo" />
        </div>
</div>
    </div>
  );
}

export default Exhibitions;
