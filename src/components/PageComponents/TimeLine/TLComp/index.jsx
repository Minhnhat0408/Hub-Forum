import "./styling.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Image from "../../../Utilites/Image/Image";
import image from "../../../../assets/images";
function TLComp({ left = true,title,time,detail = [] }) {
  return (
    <div
      className={
        "w-full h-fit flex items-center " +
        (left ? "justify-start" : " justify-end")
      }
    >
      {left ? (
        <>
          <div className="h-full w-1/2 p-6 pr-14 flex justify-end relative ">
            <div
              style={{ boxShadow: "0 0 15px 8 px #8a2be2" }}
              className="flex flex-col p-6 bg-transparent text-white w-3/4 border-4 border-purple-500 rounded-xl before:absolute before:w-8 before:h-8 before:bg-white before:rotate-45 before:right-[-16px]"
            >
              <h3 className="font-bold text-xl ">
                {title}
              </h3>
              <div className="italic flex items-center my-2">
                <FontAwesomeIcon
                  icon={faClock}
                  className="font-xl text-white mx-2"
                />
                <span>{time}</span>
              </div>
              <div className="flex flex-col">{ detail.map((d) => {
                return <div className="flex items-start mb-2">
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
          <div className="h-full w-1/2 p-6 pl-14 flex justify-start relative">
            <div
              style={{ boxShadow: "0 0 15px 0 #8a2be2" }}
              className=" flex flex-col p-6 bg-transparent text-white w-3/4 border-4 border-purple-500 rounded-xl before:absolute before:w-8 before:h-8 before:bg-white before:rotate-45 before:left-[-16px]"
            >
              <h3 className="font-bold text-xl ">
              {title}
              </h3>
              <div className="italic flex items-center my-2">
                <FontAwesomeIcon
                  icon={faClock}
                  className="font-xl text-white mx-2"
                />
                <span>{time}</span>
              </div>
              <div className="flex flex-col">{ detail.map((d) => {
                return <div className="flex items-start mb-2">
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
