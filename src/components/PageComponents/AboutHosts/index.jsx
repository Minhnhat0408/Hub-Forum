import image from "../../../assets/images";
import Image from "../../Utilites/Image";
import logo from "../../../assets/logo";

import Reveal from "../../Utilites/Reveal";

function AboutHosts() {
  return (
    <section
      id="doitac"
      className="text-white overflow-hidden w-full pt-20 px-20 xl:px-7  sm-max:!py-8"
    >
      <Reveal
        hiddenX={500}
        className="uppercase event-heading text-right font-nokia text-[40px] mb-[60px]  xl:text-[30px] xl:text-center sm-max:!text-[21px] sm2-max:mt-10"
      >
        <h1>Đơn Vị Triển Khai</h1>
      </Reveal>
      <Reveal hiddenY={200}>
        <div className="flex justify-between flex-wrap ">
          <div className="w-1/3 mb-20 sm2-max:mb-10 p-6 phone:p-4 phone:py-0 sm2-max:!w-full flex flex-col ">
            <Image
              src={logo.three}
              alt="logo"
              className="w-40 sm2-max:w-2/3 sm2-max:self-center  h-auto transform transition duration-500 hover:scale-125"
            />

            <h3 className="font-bold text-xl mb-7 w-[90%] whitespace-nowrap">Hub NetWork</h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1 phone:w-3" />
              <p className="  text-slate-300 leading-7 phone:text-sm">
              Mạng lưới hỗ trợ thanh niên khởi nghiệp hơn 20 trường đại học trên toàn quốc được bảo trợ hợp pháp bởi chính quyền thành phố
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1 phone:w-3" />
              <p className="  text-slate-300 leading-7 phone:text-sm">
              Lan toả và nâng cao tinh thần khởi nghiệp cho người trẻ
              </p>
            </div>
          </div>
          <div className="w-1/3 mb-20 sm2-max:mb-10 p-6 phone:p-4 sm2-max:!w-full phone:py-0  flex flex-col">
            <Image
              src={logo.hubglobal}
              alt="logo"
              className="w-40 sm2-max:w-2/3 sm2-max:self-center sm2-max:h-auto transform transition duration-500 hover:scale-125"
            />
            <h3 className="font-bold text-xl mb-7 w-[90%] whitespace-nowrap">Hub Global</h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1 phone:w-3" />
              <p className="  text-slate-300 leading-7 phone:text-sm">
                Quỹ đầu tư vào các giải pháp ứng dụng blockchain.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1 phone:w-3" />
              <p className="  text-slate-300 leading-7 phone:text-sm">
                Cộng đồng công nghệ blockchain và thử nghiệm sandbox.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1 phone:w-3" />
              <p className="  text-slate-300 leading-7 phone:text-sm">
                Xây dựng và thương mại hóa các dự án blockchain quốc tế.
              </p>
            </div>
          </div>
          <div className="w-1/3 mb-20 sm2-max:mb-10 p-6 phone:p-4 sm2-max:!w-full phone:py-0  flex flex-col">
            <Image
              src={logo.five}
              alt="logo"
              className="w-40 sm2-max:w-2/3 sm2-max:self-center sm2-max:h-auto transform transition duration-500 hover:scale-125"
            />
            <h3 className="font-bold text-xl mb-7 w-[90%] whitespace-nowrap">
              Global Shapers Community
            </h3>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1 phone:w-3" />
              <p className="  text-slate-300 leading-7 phone:text-sm">
                Cộng đồng những nhà lãnh đạo trẻ có ảnh hưởng trên thế giới.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1 phone:w-3" />
              <p className="  text-slate-300 leading-7 phone:text-sm">
                Các hoạt động ảnh hưởng trực tiếp tới xã hội và cộng đồng.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image src={image.ball} className="w-4 h-4 mr-2 mt-1 phone:w-3" />
              <p className="  text-slate-300 leading-7 phone:text-sm">
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
