
import image from "../../../assets/images";
import Image from "../../Utilites/Image"


function Navbar() {
  return (
    <div className="h-[100px] bg-black/70 w-full flex items-center justify-around fixed z-50">
      <Image src={image.hubForum} alt="logo" className="w-60 h-fit" />
      {/* <Scrollspy
        items={["section-1", "section-2", "section-3"]}
        currentClassName="text-[60px]"
      >
        <li className="text-white">
          <a href="#section-1">section 1</a>
        </li>
        <l className="text-white">
            <a href="#section-2">section 2</a>
          </l>
        <l className="text-white">
          <a href="#section-3">section 3</a>
        </l>
      </Scrollspy> */}
      {/* <button className="cyberpunk-button ">Đăng ký ngay </button> */}
    </div>
  );
}

export default Navbar;
