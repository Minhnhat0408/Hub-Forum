import image from "../../../assets/images";
import Image from "../../Utilites/Image";
import Scrollspy from "react-scrollspy-highlight";

function Navbar() {
  return (
    <div className="h-[80px] bg-black/70 w-full flex items-center justify-around fixed z-50 pl-10 pr-20">
      <Image
        src={image.hubForum}
        alt="logo"
        className="w-60 h-fit"
        onClick={() => {
          window.location.reload();
        }}
      />
      <Scrollspy
        items={["tongquan", "timeline", "chuongtrinh", "doitac", "lienhe"]}
        currentClassName="highlight"
        style={{
          display: "flex",
          justifyContent: "",
          width: "calc(100% - 400px)",
        }}
        offset={-120}
      >
        <li className="text-white font-bold ml-10 min-w-[110px] text-center">
          <a className="h-full" href="#tongquan">Tổng quan</a>
        </li>
        <li className="text-white font-bold ml-10 min-w-[110px] text-center">
          <a className="h-full" href="#timeline">Timeline</a>
        </li>
        <li className="text-white font-bold ml-10 min-w-[110px] text-center">
          <a className="h-full" href="#chuongtrinh">Chương trình</a>
        </li>
        <li className="text-white font-bold ml-10 min-w-[110px] text-center">
          <a className="h-full" href="#doitac">Đối tác</a>
        </li>
        <li className="text-white font-bold min-w-[110px] text-center">
          <a className="h-full" href="#lienhe">Liên hệ</a>
        </li>
      </Scrollspy>
    </div>
  );
}

export default Navbar;
