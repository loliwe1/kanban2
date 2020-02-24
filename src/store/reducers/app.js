import { ADD_NAME, ADD_CARD, ADD_COMMENT } from "../actions/actions";

const initialState = {
  name: localStorage.getItem("name") || "",
  nextCardId: JSON.parse(localStorage.getItem("nextCardId")) || 1,
  nextCommentId: JSON.parse(localStorage.getItem("nextCommentId")) || 1,
};

const name = (state = initialState, action) => {
  let localState;
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.name
      };
    case ADD_CARD:
      localState = {...state, nextCardId: state.nextCardId + 1}
      localStorage.setItem('nextCardId', JSON.stringify(localState.nextCardId))
      return localState

    case ADD_COMMENT:
      localState = {...state, nextCommentId: state.nextCommentId + 1}
      localStorage.setItem('nextCommentId', JSON.stringify(localState.nextCommentId))
      return localState
      
    default:
      return state;
  }
};

export default name;
