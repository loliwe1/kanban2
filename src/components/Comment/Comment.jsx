import React from "react";
import PropTypes from 'prop-types'
import "./Comment.css";

const Comment = ({
  redactComment,
  saveComment,
  setRef,
  author,
  textComment,
  redact,
  removeComment 
}) => {
  if (redactComment) {
    return (
      <div style ={{marginTop: '10px'}}>
        <textarea
          className="CommentChangeTextArea"
          autoFocus
          defaultValue={textComment}
          ref={setRef}
        />
        <button onClick={saveComment} className="CommentChangeButton">
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div className="Comment">
        <p>
          <span>{author}&#160;:</span>
        </p>
        <p>{textComment}</p>
        <hr />
        <p onClick={redact} className="CommentRedact">
          Redact
        </p>
        <p onClick={removeComment} className="CommentRemove">
          Remove
        </p>
      </div>
    );
  }
};

Comment.propTypes = {
  redactComment: PropTypes.bool,
  commentText: PropTypes.string,
  saveComment: PropTypes.func,
  setRef: PropTypes.func,
  author: PropTypes.string,
  textComment: PropTypes.string,
  redact: PropTypes.func,
  removeComment: PropTypes.func, 
}

export default Comment;
