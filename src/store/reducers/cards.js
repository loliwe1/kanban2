import {
  ADD_CARD,
  REMOVE_CARD,
  CHANGE_CARD_DESCRIPTION,
  CHANGE_CARD_TITLE,
} from '../actions/actions';

const initialState = JSON.parse(localStorage.getItem('cards')) || [];

function cards(state = initialState, action) {
  let cards;
  switch (action.type) {
    case ADD_CARD:
      cards = [
        ...state,
        {
          title: action.title,
          id: action.id,
          columnId: action.columnId,
          description: '',
          creator: action.name,
        },
      ];
      localStorage.setItem('cards', JSON.stringify(cards))
      return cards;

    case REMOVE_CARD:
      cards = [...state.filter((card) => card.id !== action.cardId)]
      localStorage.setItem('cards', JSON.stringify(cards))
      return cards;

    case CHANGE_CARD_DESCRIPTION:
      cards = state.map((card) => {
        if (card.id === action.cardId) {
          card.description = action.description;
        }
        return card;
      });
      localStorage.setItem('cards', JSON.stringify(cards))
      return cards

    case CHANGE_CARD_TITLE:
      cards = state.map((card) => {
        if (card.id === action.cardId) {
          card.title = action.title;
        }
        return card;
      });
      localStorage.setItem('cards', JSON.stringify(cards))
      return cards;

    default:
      return state;
  }
}

export default cards;
