import "../../../App.css";
import TLComp from './TLComp'

function TimeLine() {
  return (
    <div className="flex flex-col w-full items-center bg-black/60">
      <div className="flex flex-col w-fit mt-20">
        <p class="font-bold text-[50px] light-purple text-white ">Time Line</p>
        <span class="horizontal-bar"></span>
      </div>
      <div className="flex flex-col w-full items-center my-24 " >
        <TLComp />
        <TLComp left={false} />
        <TLComp />
        <TLComp left={false} />
        <TLComp />
        <TLComp left={false} />
      </div>
    </div>
  );
}

export default TimeLine;
