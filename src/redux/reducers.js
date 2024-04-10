/* eslint-disable no-case-declarations */
import { SET_REPOSITORIES, TOGGLE_MODAL, TOGGLE_REMOVE } from "./actions";

const initialState = {
  repositories: [],
  modalVisible: false,
  modalData: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalVisible: !state.modalVisible,
        modalData: action.payload,
      };
      case TOGGLE_REMOVE:
        return {
          ...state,
          repositories: state.repositories.filter(item =>  item.name !== action.payload.name),
        }
    default:
      return state;
  }
};

export default reducer;