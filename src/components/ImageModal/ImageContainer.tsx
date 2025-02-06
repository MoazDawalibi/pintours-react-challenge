import React from "react";
import { Image } from "antd";
import { ImageContainerProps } from "@/types/ImageModal";
import SpinContainer from "../UI/SpinContainer";

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl,isLoading }) => {
  return (
    <div className="image-container">
      {
        isLoading 
        ? <SpinContainer/>
        : <Image src={imageUrl} alt="Preview" width="100%" className="filckr-image" />
      }
    </div>
  );
};

export default ImageContainer;
