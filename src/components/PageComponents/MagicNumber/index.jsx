
import Counter from "../../Utilites/Counter";
import "../../../App.css";
import Reveal from "../../Utilites/Reveal";
function MagicNumber() {
  return (

      <div className="flex lgx-max:flex-wrap justify-around text-white w-full py-20 px-10 phone:py-10 lgx-max:h-full">
        <Reveal className="w-[30%] lgx-max:w-1/3 sm-max:!w-full">
          <div className="w-full flex flex-col items-center whitespace-nowrap ">
            <Counter
              from={0}
              to={22}
              duration={2}
              className="font-bold font-nokia event-heading text-[40px] light-purple"
              text="Trường Đại Học"
            />
          </div>
        </Reveal>
        <Reveal className="w-[30%] lgx-max:w-1/3 sm-max:!w-full sm-max:mt-16">
          <div className="w-full flex flex-col items-center whitespace-nowrap ">
            <Counter
              from={0}
              to={400}
              duration={2}
              className="font-bold font-nokia event-heading text-[40px] light-purple"
              text="Sinh viên Bắc Nam"
            />
          </div>
        </Reveal>
        <Reveal className="w-[30%] lgx-max:w-1/2 lgx-max:mt-16 sm-max:!w-full">
          <div className="w-full flex flex-col items-center whitespace-nowrap ">
            <Counter
              from={0}
              to={40}
              duration={2}
              className="font-bold font-nokia event-heading text-[40px] light-purple"
              text="Doanh Nghiệp"
            />
          </div>
        </Reveal>
      </div>
  );
}

export default MagicNumber;
