export const SET_REPOSITORIES = "SET_REPOSITORIES";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const setRepositories = (repositories) => ({
  type: SET_REPOSITORIES,
  payload: repositories,
});

export const openModal = (modalData) => ({
  type: OPEN_MODAL,
  payload: modalData,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
