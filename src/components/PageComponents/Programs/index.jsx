import image from "../../../assets/images";
import Image from "../../Utilites/Image";
import Reveal from "../../Utilites/Reveal";

function Programs() {
  return (
    <section id="chuongtrinh" className="text-white w-full py-20 px-20">
      <Reveal
        hiddenX={-500}
        className="uppercase event-heading font-nokia text-left text-[40px] mb-[60px]"
      >
        <h1>Các chương trình</h1>
      </Reveal>
      <Reveal hiddenY={200}>
        <div className="flex flex-wrap justify-between">
          <div className="w-[40%] mb-20">
            <h3 className="font-bold text-xl mb-7 w-[90%]">
              Trao đổi học sinh trường TH, THCS và THPT Hy Vọng
            </h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Tổ chức đón các em học sinh về Đà Nẵng nhập học
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Trao học bổng Trường TH, THCS và THPT Hy Vọng cho các học sinh
                có cha, mẹ, người giám hộ hoặc cả cha và mẹ mất do Covid- 19, có
                hoàn cảnh khó khăn
              </p>
            </div>
          </div>
          <div className="w-[40%] mb-20">
            <h3 className="font-bold text-xl mb-7 w-[90%]">
              Hội thảo: Thu hút đầu tư trong thị trường đỏ lửa
            </h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Bối cảnh đầu tư xã hội ở Việt Nam
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Startup - Hướng tới những giá trị bền vững cho xã hội
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Các bên Khởi nghiệp xã hội cần làm gì để thích ứng với công
                nghệ?
              </p>
            </div>
          </div>
          <div className="w-[40%] mb-20">
            <h3 className="font-bold text-xl mb-7 w-[90%]">
              Hội thảo Web3.0 và đột phá trong lĩnh vực công nghệ tài chính
            </h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Lịch sử phát triển của Internet
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Kiến thức cơ bản về công nghệ hệ thống phân tán
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Ứng dụng của Web3 trong Công nghệ tài chính
              </p>
            </div>
          </div>
          <div className="w-[40%] mb-20">
            <h3 className="font-bold text-xl mb-7 w-[90%]">
              Hội thảo Ngôn ngữ của Dữ liệu
              <p className="text-transparent">Hội thảo Ngôn ngữ của Dữ liệu</p>
            </h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Kiến thức cơ bản về mô hình ngôn ngữ lớn
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Ảnh hưởng của ngôn ngữ lớn lên thời đại
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Programs;
