import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Column from "./Column";
import { changeTitleColumn } from "../../store/actions/actions";
import { openPopupCard } from "../../store/actions/actions";

class ColumnContainer extends React.Component {
  state = {
    isOpen: false
  };

  openPopupCard = id => {
    const { openPopupCard } = this.props;

    openPopupCard(id);
  };

  changeTitleColumn = () => {
    const { changeTitleColumn, id } = this.props;
    const value = this.textInput.textContent;

    changeTitleColumn(value, id);
  };

  setRef = element => {
    this.textInput = element;
  };

  openForm = () => {
    this.setState({ isOpen: true });
  };

  closeForm = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Column
        openPopupCard={this.openPopupCard}
        comments={this.props.comments}
        cards={this.props.cards.filter(card => card.columnId === this.props.id)}
        renderCards={this.renderCards}
        columnId={this.props.id}
        isOpen={this.state.isOpen}
        openForm={this.openForm}
        closeForm={this.closeForm}
        setRef={this.setRef}
        changeTitleColumn={this.changeTitleColumn}
        title={this.props.title}
      />
    );
  }
}
const mapStateToProps = state => ({
  comments: state.comments,
  cards: state.cards
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeTitleColumn,
      openPopupCard
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
