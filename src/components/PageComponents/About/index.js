import "../../../App.css";
import Reveal from "../../Utilites/Reveal";
function About() {
  return (
    <section
      id="tongquan"
      className="bg-black/70 w-full text-white flex flex-col items-center justify-center tracking-wider py-20 phone:py-10 phone:pt-20"
    >
      <div className="w-full flex justify-center items-center flex-col">
        <Reveal className="w-full" duration={1} scale={0.7} opacity={0}>
          <h2 className="uppercase text-center font-extrabold event-heading font-nokia text-[50px] phone:text-[30px] mb-10">
            Tổng quan
          </h2>
        </Reveal>
        <Reveal
          className="w-[55%] l:w-[90%] flex justify-center relative my-10"
          duration={1}
          scale={0.7}
          opacity={0}
          delay={0.25}
          preanimation={true}
        >
          <p className="text-justify text-[20px] leading-9 w-full phone:text-base">
          <div className="mb-4 indent-10 phone:indent-6">  Câu lạc bộ Kiến tạo Địa cầu thành phố Hà Nội (Global Shapers Hanoi Hub) là một phần (hub) của Cộng đồng kiến tạo Địa cầu (Global Shaper Community) được thành lập dưới sự bảo trợ của Diễn đàn Kinh tế Thế giới (WEF). Cộng đồng Kiến tạo Địa cầu là Cộng đồng những nhà lãnh đạo trẻ có ảnh hưởng trên thế giới. </div>
          <div className="indent-10 phone:indent-6 ">Dưới sự chỉ đạo của Thành Đoàn thành phố Hà Nội  Global Shaper Community phối hợp cùng mạng lưới các clb khởi nghiệp, đổi mới sáng tạo và chuyển đổi số Hub Network và Tập Đoàn FPT và tổ chức Đại hội đại biểu Câu lạc bộ Kiến tạo Địa cầu, nhiệm kỳ 2023 - 2025 và Hub Forum - The Execution, là sự kiện hướng tới cộng đồng giải quyết các vấn đề xã hội và môi trường. Với mục đích tạo cơ hội để các Doanh nghiệp Xã hội, các chuyên gia và các nhà nghiên cứu lĩnh vực Công nghệ đổi mới sáng tạo được gặp gỡ, giao lưu và trao đổi kiến thức.</div>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
