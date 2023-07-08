import "./styling.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Image from "../../../Utilites/Image/Image";
import image from "../../../../assets/images";
function TLComp({ left = true,title,time,detail = [] }) {
  return (
    <div
      className={
        "w-full h-fit flex items-center sm-max:!justify-start " +
        (left ? "justify-start" : " justify-end")
      }
    >
      {left ? (
        <>
          <div className="h-full w-1/2 p-6 pr-14 flex justify-end relative sm-max:w-full sm-max:px-0 sm-max:pr-10">
            <div
              style={{ boxShadow: "0 0 15px 8px #8a2be2" }}
              className="flex flex-col p-6 bg-transparent text-white w-3/4 border-4 border-purple-500 rounded-xl before:absolute before:w-8 before:h-8 before:bg-white before:rotate-45 before:right-[-16px] sm-max:before:left-[34px]"
            >
              
              <h3 className="font-bold text-2xl lg-min:text-lg flex items-center ">
                <FontAwesomeIcon
                  icon={faClock}
                  className="font-xl text-white mx-2"
                />
                <span>{time}</span>
              </h3>
              <div className=" italic my-2 font-bold text-lg lg-min:text-base">
                {title}
              </div>
              <div className="flex flex-col">{ detail.map((d,id) => {
                return <div key={id} className="flex items-start mb-2">
                <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
                <p className="  text-slate-300 leading-7">
                  {d}
                </p>
              </div>
              })
            
            }
            </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-full w-1/2 p-6 pl-14 flex justify-start relative sm-max:w-full sm-max:justify-end sm-max:px-0 sm-max:pr-10 ">
            <div
              style={{ boxShadow: "0 0 15px 8px #8a2be2" }}
              className=" flex flex-col p-6 bg-transparent text-white w-3/4 border-4 border-purple-500 rounded-xl before:absolute before:w-8 before:h-8 before:bg-white before:rotate-45 before:left-[-16px] sm-max:before:left-[34px]"
            >
              <h3 className="font-bold text-2xl flex items-center lg-min:text-lg">
                <FontAwesomeIcon
                  icon={faClock}
                  className="font-xl text-white mx-2"
                />
                <span>{time}</span>
              </h3>
              <div className=" italic my-2 font-bold text-lg lg-min:text-base">
                {title}
              </div>
              <div className="flex flex-col">{ detail.map((d,id) => {
                return <div key={id} className="flex items-start mb-2">
                <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
                <p className="  text-slate-300 leading-7">
                  {d}
                </p>
              </div>
              })
            
            }
            </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TLComp;
