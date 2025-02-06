export type Comment = {
  id?: string;
  text?: string;
  author?: string;
  _content?:any;
};

export type ShareIconsProps = {
  onToggleComments: () => void;
  onShare: () => void;
};

export type CommentsSectionProps = {
  comments: Comment[]; 
  isLoading: boolean;
  showComments: boolean;
};

export type ImageContainerProps = {
  imageUrl: string;
  isLoading: boolean;
};

export type ModalHeaderProps = {
  onClose: () => void;
};
