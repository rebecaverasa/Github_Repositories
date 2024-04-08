import { SET_REPOSITORIES, OPEN_MODAL, CLOSE_MODAL } from "./actions";

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
    case OPEN_MODAL:
      return {
        ...state,
        modalVisible: true,
        modalData: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalVisible: false,
        modalData: {},
      };
    default:
      return state;
  }
};

export default reducer;
