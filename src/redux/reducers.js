import { SET_REPOSITORIES, TOGGLE_MODAL } from "./actions";

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
    default:
      return state;
  }
};

export default reducer;
