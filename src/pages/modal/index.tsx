"use client";

import { useModalState } from "@/zustand/Model";
import { Modal, Spin } from "antd";
import React, { useEffect } from "react";
import { useShowComments } from "@/zustand/ShowComments";
import { useGetAllImagesComments } from "@/api/end-point/items-comments";
import { useRouter } from "next/router";
import { useRouter  as useRouterNavigate} from "next/navigation";
import { useGetImageDetails } from "@/api/end-point/items-details";
import CommentsSection from "@/components/ImageModal/CommentsSection";
import { getImageUrl } from "@/utils/getImageUrl";
import ModalHeader from "../../components/ImageModal/ModalHeader";
import ImageContainer from "../../components/ImageModal/ImageContainer";
import ShareIcons from "../../components/ImageModal/ShareIcons";

const SingleCard = () => {
  const { isOpen, setIsOpen } = useModalState();
  const { showComments, setShowComments } = useShowComments();
  const router = useRouter();
  const { photo_id } = router.query;
  const routerPush = useRouterNavigate();

  useEffect(() => {
    if (photo_id && !isOpen) {
      setIsOpen(true);
    }
  }, [photo_id]);

  
  const { data: details, isLoading: isDetailsLoading } = useGetImageDetails({
    photo_id: Number(photo_id),
  });
  
  const { data, isLoading: isCommentsLoading } = useGetAllImagesComments({
    photo_id: Number(photo_id),
  });

  const comments = Array.isArray(data?.comments?.comment) ? data.comments.comment : [];
  const imageUrl = getImageUrl(details);
  
  const handleCloseModal = () => {
    routerPush.replace("/")
    setIsOpen(false)};
  
  const handleShareOnWhatsApp = () => {
    const currentPageUrl = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(currentPageUrl)}`;
    window.open(whatsappUrl, "_blank");
  };
  

  return (
    <Modal footer={false} className="modal" open={isOpen} onCancel={handleCloseModal}>
      <ModalHeader onClose={handleCloseModal} />
      <ImageContainer imageUrl={imageUrl} isLoading={isDetailsLoading} />
      <ShareIcons onToggleComments={() => setShowComments(!showComments)} onShare={handleShareOnWhatsApp} />
      <CommentsSection comments={comments} isLoading={isCommentsLoading} showComments={showComments} />
    </Modal>
  );
};

export default SingleCard;
