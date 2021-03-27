import { GET_USERS, AUTH_ERROR } from '../types';

const initialState = {
  loading: true,
  users: [],
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case AUTH_ERROR:
    default:
      return state;
  }
};
