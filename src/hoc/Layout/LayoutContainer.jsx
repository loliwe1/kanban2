import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from './Layout';

class LayoutContainer extends Component {
  render() {
    let popupCard;
    let popupCardColumn;
    if (this.props.popupId) {
      popupCard = this.props.cards.find(card => card.id === this.props.popupId);
      popupCardColumn = this.props.columns.find(
        column => column.id === popupCard.columnId
      ).title;
    }

    return (
      <Layout
        popupCardColumn={popupCardColumn}
        popupCard={popupCard}
        columns = {this.props.columns}
        name = {this.props.name}

      />
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  columns: state.columns,
  app: state.app,
  name: state.app.name,
  popupId: state.popupCard.id
});

LayoutContainer.propTypes = {
  columns: PropTypes.array,
  name: PropTypes.string
}

export default connect(mapStateToProps)(LayoutContainer);
