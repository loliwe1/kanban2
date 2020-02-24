import React from "react";
import PropTypes from 'prop-types'
import "./NewCardForm.css";

const NewCardForm = ({ setRef, addCard, closeForm, }) => (
  <div className="NewCardForm">
    <input
      autoFocus
      className="NewCardFormTextarea"
      placeholder="Enter card title"
      ref={setRef}
    />
    <button onClick={addCard} className="AddCardButton">
      Add Card
    </button>
    <button onClick={closeForm} className="CloseCreateButton">
      Close
    </button>
  </div>
);

NewCardForm.propTypes = {
  setRef: PropTypes.func,
  addCard: PropTypes.func,
  closeForm: PropTypes.func,
}



export default NewCardForm;
