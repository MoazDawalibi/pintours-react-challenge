import { ModalHeaderProps } from "@/types/ImageModal";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <header>
      <FaArrowLeft onClick={onClose} />
      <h4>Comments</h4>
      <BsThreeDotsVertical />
    </header>
  );
};

export default ModalHeader;
