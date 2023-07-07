import { useState, forwardRef } from "react";
import image from "../../../assets/images";

const Image = forwardRef(
  ({ src, alt, className, fallBack = image.noImage, ...props }, ref) => {
    // fallBack => link to customize error image
    const [_fallBack, setFallBack] = useState("");
    const handleError = () => {
      setFallBack(fallBack);
    };
    
    return (
      <img
        draggable="false"
        {...props}
        className={className}
        ref={ref}
        src={_fallBack || src}
        alt={alt}
        onError={handleError}
      />
    );
  }
);

export default Image;
