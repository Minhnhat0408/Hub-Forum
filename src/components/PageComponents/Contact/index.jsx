import image from "../../../assets/images";
import Image from "../../Utilites/Image"

function Contact() {
    return ( 
        <div className="flex w-full h-full ">
            <Image src={image.ava} alt="ava" className="w-[300px] h-fit"/>
            <div className="flex-1 h-full">
                <div>
                    <h3>


                    </h3>
                    <p>

                    </p>
                </div>
                <div>
                    <div>
                        <Image/>
                        <span></span>
                    </div>
                    <div>
                        <Image/>
                        <span></span>
                    </div>
                    <div>
                        <Image/>
                        <span></span>
                    </div>
                    <div>
                        <Image/>
                        <span></span>
                    </div>
                    <div>
                        <Image/>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Contact;