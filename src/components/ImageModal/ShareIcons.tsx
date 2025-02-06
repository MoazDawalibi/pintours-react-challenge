import { ShareIconsProps } from "@/types/ImageModal";
import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { TbShare2 } from "react-icons/tb";

const ShareIcons: React.FC<ShareIconsProps> = ({ onToggleComments, onShare }) => {
  return (
    <div className="share-icons">
      <FaRegComment onClick={onToggleComments} />
      <TbShare2 onClick={onShare} />
    </div>
  );
};

export default ShareIcons;
