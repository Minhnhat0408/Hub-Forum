import image from "../../../assets/images";
import Image from "../../Utilites/Image";
import "../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section
      id="lienhe"
      className="flex relative  flex-col w-full h-fit bg-black/60 pt-[110px] phone:pt-0"
    >
      <div className="flex pb-14 bg-black xl:flex-wrap xl:justify-center md-max:pb-5 w-full">
        <div className="w-[45%] xl:w-full flex items-center flex-col justify-center -ml-20 xl:ml-0 xl:mt-10">
          <Image src={image.texecution} alt="ava" className="w-1/3 xl:w-1/2 h-fit" />
          <Image src={image.hubForum} alt="ava" className="w-1/2 xl:w-2/3 h-fit" />
        </div>
        <div className="flex xl:w-[90%] xl:justify-center">
          <div className="flex-1 h-full mt-[50px] xl:flex xl:flex-col xl:px-20 md-max:hidden">
            <h3 className="uppercase text-left text-white text-[30px] mb-5">
              Sitemap
            </h3>
            <div className="flex items-start mb-3">
              <Image src={image.ball} className="w-4 h-4 mr-3 mt-1" />
              <a
                className="text-slate-300 leading-7 hover:underline no-underline hover:text-white"
                href="#tongquan"
              >
                Tổng quan
              </a>
            </div>
            <div className="flex items-start mb-3">
              <Image src={image.ball} className="w-4 h-4 mr-3 mt-1" />
              <a
                className="text-slate-300 leading-7 hover:underline no-underline hover:text-white"
                href="#timeline"
              >
                Timeline
              </a>
            </div>
            <div className="flex items-start mb-3">
              <Image src={image.ball} className="w-4 h-4 mr-3 mt-1" />
              <a
                className="text-slate-300 leading-7 hover:underline no-underline hover:text-white"
                href="#chuongtrinh"
              >
                Chương trình
              </a>
            </div>
            <div className="flex items-start mb-3">
              <Image src={image.ball} className="w-4 h-4 mr-3 mt-1" />
              <a
                className="text-slate-300 leading-7 hover:underline no-underline hover:text-white"
                href="#doitac"
              >
                Đối tác
              </a>
            </div>
            <div className="flex items-start mb-3">
              <Image src={image.ball} className="w-4 h-4 mr-3 mt-1" />
              <a
                className="text-slate-300 leading-7 hover:underline no-underline hover:text-white"
                href="#lienhe"
              >
                Liên hệ
              </a>
            </div>
          </div>
          <div className="flex-[1.5] h-full mt-[50px] text-white pr-5 xl:flex xl:flex-col md-max:w-3/5 phone:text-sm">
            <h3 className="uppercase text-left text-white text-[30px] mb-5 md-max:text-center phone:text-[20px]">
              Liên Hệ
            </h3>
            <div className="flex mb-1 phone:flex-wrap phone:mb-2">
              <div className="flex min-w-[120px] mr-2 phone:w-full">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-white mr-3 text-base mt-1"
                />
                <div className="font-bold">Địa điểm: </div>
              </div>
              <div className="text-slate-300 leading-7 phone:w-full">
                Tòa nhà FPT Tower, Phạm Văn Bạch, Cầu Giấy, Hà Nội
              </div>
            </div>
            <div className="flex mb-1 phone:flex-wrap phone:mb-2">
              <div className="flex min-w-[120px] mr-2 phone:w-full">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-white mr-3 text-base mt-1"
                />
                <div className="font-bold">Hotline: </div>
              </div>
              <div>
                <div className="text-slate-300 leading-7">
                  {`0966 888 615 (Mr. Hieu / CEO Top CV / President of GSC)`}
                </div>
                <div className="text-slate-300 leading-7 phone:w-full">
                  {`0979 128 351 (Mr. Long / President of Hub Network)`}
                </div>
              </div>
            </div>
            <div className="flex mb-1 phone:flex-wrap phone:mb-2">
              <div className="flex min-w-[120px] mr-2 phone:w-full">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white mr-3 text-base mt-1"
                />
                <div className="font-bold">Email: </div>
              </div>
              <div className="phone:w-full">
                <div className="text-slate-300 leading-7">
                hieutran@topcv.vn
                </div>
                <div className="text-slate-300 leading-7">
                  longngh.hubnetwork@gmail.com
                </div>
              </div>
            </div>
            <div className="flex mb-1 phone:flex-wrap phone:mb-2">
              <div className="flex min-w-[120px] mr-2 phone:w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="text-white mr-3 text-base mt-1"
                >
                  <path
                    fill="currentColor"
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  />
                </svg>
                <div className="font-bold">Fanpage: </div>
              </div>
              <div className="text-blue-600 leading-7 phone:w-full ">
                <a
                  className="no-underline hover:underline block hover:text-white phone:mt-1"
                  href="https://www.facebook.com/GlobalShapersHanoiHub"
                >
                  WEF Global Shapers Hanoi Hub
                </a>
                <a
                  className="no-underline hover:underline hover:text-white"
                  href="https://www.facebook.com/unihubnetwork"
                >
                  Hub Network
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[90%] h-[1px] bg-slate-200"></div>
      <div className="flex flex-wrap w-full justify-between px-[5%] bg-black text-white py-6">
        <div className="sm-max:w-full sm-max:flex sm-max:flex-col sm-max:items-center phone:text-sm">
          <div className="mb-1">
            Designed by{" "}
            <span className="font-bold">
              {" "}
              <a
                href="https://www.facebook.com/quycoongg"
                className="font-bold hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Quý Công
              </a>{" "}
              -{" "}
              <a
                href="https://www.facebook.com/Minhatt048"
                className="font-bold hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Nhật Minh
              </a>
            </span>
          </div>
          <div>
            Developed by{" "}
            <span className="font-bold">
              <a
                href="https://www.facebook.com/Minhatt048"
                className="font-bold hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Nhật Minh
              </a>{" "}
              -{" "}
              <a
                href="https://www.facebook.com/Romcomgasukidesu"
                className="font-bold hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Thành Dũng
              </a>
            </span>
          </div>
        </div>
        <div className="sm-max:w-full sm-max:flex sm-max:flex-col sm-max:items-center sm-max:mt-2 phone:text-sm">
          <p>
            © Copyright 2023 <span className="font-bold">Hub - Forum</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
