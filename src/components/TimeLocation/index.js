import "../../App.css";
import Reveal from "../Reveal/Reveal";

function TimeLocation() {
  return (
    <div className="time-location bg-black w-full flex items-center flex-col justify-center text-white py-[130px] px-10 leading-[36px] text-[22px]">
      <Reveal delay={0.3}>
        <div className="uppercase text-center pb-1">
          8h00 - 19h00 - 15/07/2023
        </div>
        <div className="uppercase text-center">
          Tòa nhà FPT Tower, Số 10 Phạm Văn Bạch, Cầu Giấy, Hà Nội
        </div>
        <h2 className="deadline-dang-ky text-center">
          Hạn đăng ký: 12h00 ngày 21/12/2022
        </h2>
        <div className="flex items-center justify-center">
          <button className="cyberpunk-button">Đăng ký ngay </button>
        </div>
      </Reveal>
    </div>
  );
}

export default TimeLocation;
