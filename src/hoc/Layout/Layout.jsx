import React from 'react';
import PropTypes from 'prop-types'
import './Layout.css';
import ColumnContainer from '../../components/Column/ColumnContainer';
import PopupNameContainer from '../../components/PopupName/PopupNameContainer';
import PopupCardContainer from '../../components/PopupCard/PopupCardContainer';

const Layout = ({ columns, name, popupCard, popupCardColumn }) => (
  <div className="Layout">
    {columns.map(column => {
      return (
        <ColumnContainer
          key={column.id}
          id={column.id}
          title={column.title}
        />
      );
    })}
    {!name && <PopupNameContainer />}
    {popupCard && (
      <PopupCardContainer
        creator={popupCard.creator}
        cardId={popupCard.id}
        title={popupCard.title}
        description={popupCard.description}
        column={popupCardColumn}
      />
    )}
  </div>
);

Layout.propTypes = {
  columns: PropTypes.array,
  name: PropTypes.string,
  popupCard: PropTypes.object,
  popupCardColumn: PropTypes.string,
}

export default Layout;
