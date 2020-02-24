import React from 'react';
import PropTypes from 'prop-types'
import './Card.css';

const Card = ({ title, openPopupCard, commentsLength }) => {
  return (
    <div onClick={openPopupCard} className="Card">
      <h3>{title}</h3>
      <small>
        Комментарии: <span>{commentsLength}</span>
      </small>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  openPopupCard: PropTypes.func,
  commentsLength: PropTypes.number,
}

export default Card;
