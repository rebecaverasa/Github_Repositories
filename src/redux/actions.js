export const SET_REPOSITORIES = "SET_REPOSITORIES";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const TOGGLE_REMOVE = "TOGGLE_REMOVE";

export const setRepositories = (repositories) => ({
  type: SET_REPOSITORIES,
  payload: repositories,
});

export const toggleModal = (modalData) => ({
  type: TOGGLE_MODAL,
  payload: modalData,
});

export const remove = (data) => ({
  type: TOGGLE_REMOVE,
  payload: data,
});
