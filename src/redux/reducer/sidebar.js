import { SHOW_SIDEBAR, CLOSE_SIDEBAR } from '../types';

const initialState = {
  isShow: false,
};

export const sidebarReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        isShow: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isShow: false,
      };
    default:
      return state;
  }
};
