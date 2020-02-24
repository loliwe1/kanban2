import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Comment from './Comment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeComment } from '../../store/actions/actions';
import { saveComment } from '../../store/actions/actions';

class CommentContainer extends Component {
  state = {
    redactComment: false,
  };

  redact = () => {
    if (this.props.name !== this.props.author) return;
    this.setState({
      redactComment: true,
    });
  };

  setRef = element => {
    this.inputText = element;
  };

  saveComment = () => {
    if (!this.inputText.value) {
      this.setState({ redactComment: false });
      return;
    }
    const { saveComment, id } = this.props;

    saveComment(id, this.inputText.value);
    this.setState({ redactComment: false });
  };

  removeComment = () => {
    if (this.props.name !== this.props.author) return;
    const { removeComment, id } = this.props;

    removeComment(id);
  };
  render() {
    return (
      <Comment
        removeComment={this.removeComment}
        redactComment={this.state.redactComment}
        redact={this.redact}
        saveComment={this.saveComment}
        setRef={this.setRef}
        author={this.props.author}
        textComment={this.props.textComment}
      />
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeComment,
  saveComment,
}, dispatch);

CommentContainer.propTypes = {
  removeComment: PropTypes.func,
  saveComment: PropTypes.func,
  textComment: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.number,
}

export default connect(null, mapDispatchToProps)(CommentContainer);
