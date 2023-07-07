
import "../../../App.css";
import image from "../../../assets/images";
import Image from "../../Utilites/Image"
import Reveal from "../../Utilites/Reveal";
function Cover() {
  return (
    <div className="w-full cover mt-20 flex relative items-center overflow-hidden justify-center">
      <Reveal
          hiddenX={-500}
          hiddenY={0}
          duration={1}
          className="h-full w-1/3 flex  items-end"
        >
          <Image
            src={image.robotL}
            className="w-full object-cover "
            alt="hub"
          />
        </Reveal>
        <div className="flex w-2/4 flex-col justify-start items-center relative h-full">
          <Reveal hiddenX={0} hiddenY={0} className={"w-1/2 mt-8"}>
            <Image src={image.sponsor} className="w-full h-fit" alt="hub" />
          </Reveal>
          <Reveal
            hiddenX={0}
            hiddenY={-400}
            scale={0}
            className={"w-[100%] mt-10 flex-1"}
          >
            <Image src={image.mexecution} className="w-full h-fit" alt="hub" />
          </Reveal>
          <Reveal
            delay={1.2}
            hiddenX={0}
            hiddenY={0}
            className={"w-full absolute top-1/2"}
          >
            <Image
              src={image.hubForum}
              className="w-full scale-125 h-fit"
              alt="hub"
            />
          </Reveal>
          <Reveal hiddenX={0} hiddenY={400} scale={0} className={"w-1/4 mb-2"}>
            <Image src={image.detail} className="w-full h-fit" alt="hub" />
          </Reveal>
        </div>

        <Reveal
          hiddenX={500}
          hiddenY={0}
          duration={1}
          className="h-full w-1/3 flex  items-end"
        >
          <Image
            src={image.robotR}
            className="w-full object-cover "
            alt="hub"
          />
        </Reveal>
    </div>
  );
}

export default Cover;
