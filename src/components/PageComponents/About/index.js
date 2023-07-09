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
          <p className="text-justify text-[20px] leading-9 w-full phone:text-[16px]">
          Tiếp bước sự thành công của Hub Summit - The Vision. Dưới sự chỉ đạo của Thành Đoàn thành phố Hà Nội mạng lưới các clb khởi nghiệp, đổi mới sáng tạo và chuyển đổi số Hub Network phối hợp cùng Global Shaper Community tổ chức Hub Forum - The Execution là sự kiện hướng tới cộng đồng giải quyết các vấn đề xã hội và môi trường. Với mục đích tạo cơ hội để các Doanh nghiệp Xã hội, các chuyên gia và các nhà nghiên cứu lĩnh vực Công nghệ đổi mới sáng tạo được gặp gỡ, giao lưu và trao đổi kiến thức.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
