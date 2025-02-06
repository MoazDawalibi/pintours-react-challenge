import { CommentsSectionProps } from "@/types/ImageModal";
import SpinContainer from "../UI/SpinContainer";

const CommentsSection = ({ comments, isLoading, showComments }: CommentsSectionProps) => {
  if (isLoading) return <SpinContainer />;

  if (!comments.length) {
    return <div className='not-found-data'>There are no comments</div>;
  }

  return (
    <div className='body'>
      {showComments && (
        <div>
          {comments.map((e) => (
            <p key={e.id}>
              <span dangerouslySetInnerHTML={{ __html: e._content }} />
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
