import React from "react";
import { Image } from "antd";
import { ImageContainerProps } from "@/types/ImageModal";
import SpinContainer from "../UI/SpinContainer";

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl, isLoading = false }) => {
  return (
    <div className="image-container">
      {isLoading 
        ? <SpinContainer /> 
        : <Image src={imageUrl} alt="Preview" width="100%" className="flickr-image" />
      }
    </div>
  );
};


export default ImageContainer;
