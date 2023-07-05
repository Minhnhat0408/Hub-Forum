import image from "../../assets/images";
import Image from "../Image/Image";
import Reveal from "../Reveal/Reveal";
import "../../App.css";
function About() {
  return (
    <div className="bg-black/70 w-full text-white flex flex-col items-center justify-center tracking-wider pb-20 pt-10">
      <Reveal className="w-[61%]" duration={1} scale={0.7} opacity={0}>
        <div className="w-full">
          <h2 className="uppercase text-center about-heading">Tổng quan</h2>
          <p className="text-justify text-[20px] leading-9">
            Tiếp bước sự thành công của Hub Summit - The Vision. Hub Forum - The
            Execution là sự kiện hướng tới cộng đồng giải quyết các vấn đề xã
            hội và môi trường, do Thành Đoàn thành phố Hà Nội tổ chức với mục
            đích tạo cơ hội để các Doanh nghiệp Xã hội, các chuyên gia và các
            nhà nghiên cứu lĩnh vực Công nghệ đổi mới sáng tạo được gặp gỡ, giao
            lưu và trao đổi kiến thức.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

export default About;
