
import Counter from "../../Utilites/Counter";
import "../../../App.css";
import Reveal from "../../Utilites/Reveal";
function MagicNumber() {
  return (

      <div className="flex justify-around text-white w-full py-20 px-10">
        <Reveal className="w-[30%]">
          <div className="w-full flex flex-col items-center">
            <Counter
              from={0}
              to={22}
              duration={2}
              className="font-bold text-[50px] light-purple"
              text="Trường Đại Học"
            />
          </div>
        </Reveal>
        <Reveal className="w-[30%]">
          <div className="w-full flex flex-col items-center">
            <Counter
              from={0}
              to={400}
              duration={2}
              className="font-bold text-[50px] light-purple"
              text="Sinh viên Bắc Nam"
            />
          </div>
        </Reveal>
        <Reveal className="w-[30%]">
          <div className="w-full flex flex-col items-center">
            <Counter
              from={0}
              to={40}
              duration={2}
              className="font-bold text-[50px] light-purple"
              text="Doanh Nghiệp"
            />
          </div>
        </Reveal>
      </div>
  );
}

export default MagicNumber;
