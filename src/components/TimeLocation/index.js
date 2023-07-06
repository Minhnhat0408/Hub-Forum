import "../../App.css";
import Reveal from "../Reveal/Reveal";

function TimeLocation() {
  return (
    <div className="time-location overflow-x-hidden bg-transparent w-full flex items-center justify-between text-white pt-[100px] pb-[60px] px-10 leading-[30px] tracking-wide text-[20px]">
      <Reveal
        className="w-[70%] pl-10 "
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
          Hạn đăng ký: 12h00 ngày 21/12/2022
        </h2>
      </Reveal>
      <Reveal className="w-[30%] h-full" hiddenX={500} hiddenY={0} duration={1}>
        <div className="flex items-center justify-center">
          <a
            className="cyberpunk-button mr-20 mt-11"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          >
            Đăng ký ngay{" "}
          </a>
        </div>
      </Reveal>
    </div>
  );
}

export default TimeLocation;
