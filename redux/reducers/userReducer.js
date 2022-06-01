import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

export const userLoginReducer = (
  state = {
    userInfo: null,
    isAuthenticated: false,
    loading: false,
  },
  action
) => {
  const {type, payload} = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {...state, loading: true};

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        isAuthenticated: true,
      };

    case USER_LOGIN_FAIL:
      return {loading: false, error: payload};

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
