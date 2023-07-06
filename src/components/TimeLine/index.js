import "../../App.css";
import TLComp from "./TLComp";

function TimeLine() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col w-fit">
        <p class="font-bold text-[50px] light-purple text-white">Time Line</p>
        <span class="horizontal-bar"></span>
      </div>
      <TLComp />
    </div>
  );
}

export default TimeLine;
