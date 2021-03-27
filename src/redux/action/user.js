import { GET_USERS, AUTH_ERROR } from '../types';
import { API } from '../../config/api';

export const getUser = () => async (dispatch) => {
  try {
    const response = await API('/?results=28');
    dispatch({
      type: GET_USERS,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
    console.log(error);
  }
};
