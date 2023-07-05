import image from "../../assets/images";
import Image from "../Image/Image";
import "../../App.css";
function Cover({ children }) {
  return (
    <div className="w-full cover mt-20 flex relative items-center overflow-hidden justify-center">
      {/* <Image src={image.cover} alt="cover" className='w-full h-3/4 object-cover'/> */}
      {children}
    </div>
  );
}

export default Cover;
