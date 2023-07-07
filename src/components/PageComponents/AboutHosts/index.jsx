import image from "../../../assets/images";
import Image from "../../Utilites/Image";
import logo from "../../../assets/logo";

import Reveal from "../../Utilites/Reveal";

function AboutHosts() {
  return (
    <section
      id="doitac"
      className="text-white overflow-x-hidden w-full pt-20 px-20 bg-black/60"
    >
      <Reveal
        hiddenX={500}
        className="uppercase event-heading text-right text-[50px] mb-[60px]"
      >
        <h1>Các Đơn Vị Triển Khai</h1>
      </Reveal>
      <Reveal hiddenY={200}>
        <div className="flex justify-between ">
          <div className="flex-1 mb-20 p-6">
            <Image
              src={logo.three}
              alt="logo"
              className="w-[30%] h-auto transform transition duration-500 hover:scale-125"
            />

            <h3 className="font-bold text-xl mb-7 w-[90%]">Hub NetWork</h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Hỗ trợ và tư vấn các dự án khởi nghiệp cho thanh niên được bảo
                trợ hợp pháp bởi chính quyền thành phố.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Hỗ trợ và tư vấn sự phát triển cho thanh niên khởi nghiệp.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Hỗ trợ, đào tạo và cố vấn cho các trung tâm thanh niên và thành
                viên.
              </p>
            </div>
          </div>
          <div className="flex-1 mb-20 p-6">
            <Image
              src={logo.hubglobal}
              alt="logo"
              className="w-[30%] h-auto transform transition duration-500 hover:scale-125"
            />
            <h3 className="font-bold text-xl mb-7 w-[90%]">Hub Global</h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Quỹ đầu tư vào các giải pháp ứng dụng blockchain.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Cộng đồng công nghệ blockchain và thử nghiệm sandbox.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Xây dựng và thương mại hóa các dự án blockchain quốc tế.
              </p>
            </div>
          </div>
          <div className="flex-1 mb-20 p-6">
            <Image
              src={logo.five}
              alt="logo"
              className="w-[30%] h-auto transform transition duration-500 hover:scale-125"
            />
            <h3 className="font-bold text-xl mb-7 w-[90%]">
              Global Shapers Community
            </h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Cộng đồng những nhà lãnh đạo trẻ có ảnh hưởng trên thế giới.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Các hoạt động ảnh hưởng trực tiếp tới xã hội và cộng đồng.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1" />
              <p className="  text-slate-300 leading-7">
                Truyền cảm hứng nhằm xây dựng một thế giới hòa nhập, bền vững và
                công bằng hơn.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default AboutHosts;