export type ShareIconsProps = {
  onToggleComments: () => void;
  onShare: () => void;
}

export type CommentsSectionProps =  {
    comments: any[];
    isLoading: boolean;
    showComments: boolean;
  }

export type ImageContainerProps = {
    imageUrl: string;
    isLoading:boolean;
  }

export type ModalHeaderProps = {
    onClose: () => void;
  }