import React from 'react';
import PropTypes from 'prop-types'
import './Column.css';
import NewCardFormContainer from '../NewCardForm/NewCardFormContainer';
import Card from '../Card/Card';

const Column = ({
  setRef,
  changeTitleColumn,
  title,
  cards,
  openPopupCard,
  openForm,
  isOpen,
  closeForm,
  columnId,
  comments,
}) => (
  <div className="Column">
    <div
      ref={setRef}
      onBlur={changeTitleColumn}
      className="ColumnTitle"
      contentEditable={true}
      suppressContentEditableWarning={true}
    >
      {title}
    </div>
    {cards &&
      cards.map(card => {
        const commentsLength = comments.filter(
          comment => comment.cardId === card.id
        ).length;
        return (
          <Card
            title={card.title}
            key={card.id}
            id={card.id}
            openPopupCard={() => openPopupCard(card.id)}
            commentsLength={commentsLength}
          />
        );
      })}
    <p onClick={openForm}>&#10010; Добавить карточку</p>
    {isOpen && (
      <NewCardFormContainer
        closeForm={closeForm}
        columnId={columnId}
      />
    )}
  </div>
);

Column.propTypes = {
  setRef: PropTypes.func,
  changeTitleColumn: PropTypes.func,
  title: PropTypes.string,
  cards: PropTypes.array,
  openPopupCard: PropTypes.func,
  openForm: PropTypes.func,
  isOpen: PropTypes.bool,
  closeForm: PropTypes.func,
  columnId: PropTypes.number,
  comments: PropTypes.array,
}

export default Column;
