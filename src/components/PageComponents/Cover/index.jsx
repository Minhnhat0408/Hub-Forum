
import "../../../App.css";
import image from "../../../assets/images";
import Image from "../../Utilites/Image"
import Reveal from "../../Utilites/Reveal";
function Cover() {
  return (
    <div className="l:bg-[url('./assets/images/ava.png')] l:bg-[length:auto_70vh] xl:min-h-[70vh] bg-[length:100%_auto] xl:bg-[length:auto_70vh]  w-full cover bg-[url('./assets/images/cover.png')]  mt-20 phone:mt-[60px] flex relative items-center overflow-hidden justify-center">
      <Reveal
          hiddenX={-500}
          hiddenY={0}
          duration={1}
          className="h-full w-1/3 flex l:hidden  items-end"
        >
          <Image
            src={image.robotL}
            className="w-full xl:min-w-[250px] object-cover "
            alt="hub"
          />
        </Reveal>
        <div className="l:hidden flex w-1/2 xl:w-1/3 flex-col justify-start items-center relative h-full">
          <Reveal hiddenX={0} hiddenY={0} className={"w-1/2 xl:w-full xl:min-w-[300px] mt-8"}>
            <Image src={image.sponsor} className="w-full h-fit" alt="hub" />
          </Reveal> 
          <Reveal
            hiddenX={0}
            hiddenY={-400}
            scale={0}
            className={"w-full  mt-10 xl:mt-20 flex-1"}
          >
            <Image src={image.mexecution} className="w-full h-fit xl:scale-150" alt="hub" />
          </Reveal>
          <Reveal
            delay={1.2}
            hiddenX={0}
            hiddenY={0}
            className={"w-full absolute top-1/2"}
          >
            <Image
              src={image.hubForum}
              className="w-full scale-125 xl:scale-[200%] h-fit"
              alt="hub"
            />
          </Reveal>
          <Reveal hiddenX={0} hiddenY={400} scale={0} className={"w-1/4 xl:w-1/2 mb-2 xl:mb-14"}>
            <Image src={image.detail} className="w-full h-fit" alt="hub" />
          </Reveal>
        </div>

        <Reveal
          hiddenX={500}
          hiddenY={0}
          duration={1}
          className="h-full w-1/3 flex l:hidden items-end"
        >
          <Image
            src={image.robotR}
            className="w-full xl:min-w-[250px] object-cover "
            alt="hub"
          />
        </Reveal>
    </div>
  );
}

export default Cover;
