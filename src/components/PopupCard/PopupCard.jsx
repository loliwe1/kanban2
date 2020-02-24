import React from 'react';
import PropTypes from 'prop-types'
import './PopupCard.css';
import CommentContainer from '../Comment/CommentContainer';

const PopupCard = ({
  commentFormFocus,
  closePopupCard,
  creator,
  name,
  setRef,
  changeCardTitle,
  title,
  column,
  description,
  changeCardDescription,
  setRefDesc,
  focusCommentForm,
  setRefComment,
  addComment,
  comments,
  removeCard,
}) => {
  const commentClass = ['WriteCommentWrap'];

  if (commentFormFocus) {
    commentClass.push('WriteCommentWrapFocus');
  }

  return (
    <div className="PopupCard">
      <div className="PopupCardWrap">
        <div className="PopupCardClose">
          <p className="PopupCardCloseLink" onClick={closePopupCard}>
            Close
          </p>
        </div>
        <div className="PopupCardTitle">
          {creator === name ? (
            <h1
              ref={setRef}
              className="TitleHeader"
              contentEditable={true}
              suppressContentEditableWarning={true}
              onBlur={changeCardTitle}
            >
              {title}
            </h1>
          ) : (
              <h1 className="TitleHeader">{title}</h1>
          )}
          <small>
            In column: <span>{column}</span>
          </small>
          <p>
            Created a card: <span>{creator}</span>
          </p>
        </div>
        {creator !== name ? (
          <div className="Description">{description || ''}</div>
        ) : (
          <div
            contentEditable={true}
            suppressContentEditableWarning={true}
            className="Description"
            onBlur={changeCardDescription}
            ref={setRefDesc}
          >
              {description || 'Enter a description for the card!'}
          </div>
        )}
        <div>Comments:</div>
        <div className={commentClass.join(' ')}>
          <textarea
            onFocus={focusCommentForm}
            className="WriteComment"
            placeholder="write a comment..."
            ref={setRefComment}
          />
          <button onClick={addComment} type="button" className="PostCommentButton">
            Save
          </button>
        </div>
        {comments
          && comments.map((comment) => {
            return (
              <CommentContainer
                author={comment.author}
                key={comment.id}
                textComment={comment.textComment}
                name={name}
                id={comment.id}
              />
            );
          })}
        <button onClick={removeCard} type="button" className="RemoveCard">
          Remove Card
        </button>
      </div>
    </div>
  );
};

PopupCard.propTypes = {
  commentFormFocus: PropTypes.bool,
  closePopupCard: PropTypes.func,
  creator: PropTypes.string,
  name: PropTypes.string,
  setRef: PropTypes.func,
  changeCardTitle: PropTypes.func,
  title: PropTypes.string,
  column: PropTypes.string,
  description: PropTypes.string,
  changeCardDescription: PropTypes.func,
  setRefDesc: PropTypes.func,
  focusCommentForm: PropTypes.func,
  setRefComment: PropTypes.func,
  addComment: PropTypes.func,
  comments: PropTypes.array,
  removeCard: PropTypes.func,
}

export default PopupCard;
