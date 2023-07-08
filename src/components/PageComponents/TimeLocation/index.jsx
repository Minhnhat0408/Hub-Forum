import { forwardRef } from "react";
import "../../../App.css";
import Reveal from "../../Utilites/Reveal";

const TimeLocation = forwardRef(({ children }, ref) => {
  return (
    <section className="time-location bg-transparent w-full flex xl:flex-col xl:justify-center items-center justify-between text-white py-20 px-10 leading-[30px] tracking-wide text-[20px] xl:!px-4">
      <Reveal
        className="w-[70%] pl-10 xl:text-center xl:!w-[90%] xl:pl-0"
        hiddenX={-500}
        hiddenY={0}
        duration={1}
      >
        <div className="uppercase font-semibold pb-4 text-[24px]">
          Thời gian và Địa điểm:{" "}
        </div>
        <div className="uppercase pb-1 text-[16px]">
          8h00 - 19h00 - 15/07/2023
        </div>
        <div className="uppercase text-[16px]">
          Tòa nhà FPT Tower, Số 10 Phạm Văn Bạch, Cầu Giấy, Hà Nội
        </div>
        <h2 className="deadline-dang-ky font-semibold text-[24px]">
          Hạn đăng ký: 12h00 ngày 17/7/2023
        </h2>
      </Reveal>
      <Reveal
        className="w-[30%] h-full xl:w-full"
        hiddenX={500}
        hiddenY={0}
        duration={1}
      >
        <div
          ref={ref}
          className="flex items-center justify-center shake-button whitespace-nowrap"
        >
          <a
            className="cyberpunk-button xl:!overflow-visible mr-20 xl:mr-0  "
            href="https://docs.google.com/forms/d/e/1FAIpQLSeLvBYW50TyuCLsrWlVxI0tvcPW-p47fJ3XP-52NYUbDawhsg/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <p className="lg:text-base">Đăng ký ngay</p>
          </a>
        </div>
      </Reveal>
    </section>
  );
});

export default TimeLocation;
