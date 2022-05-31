import {
  FETCH_FORM_ARTICLES_FAIL,
  FETCH_FORM_ARTICLES_REQUEST,
  FETCH_FORM_ARTICLES_SUCCESS,
  FETCH_FORM_THEMES_FAIL,
  FETCH_FORM_THEMES_REQUEST,
  FETCH_FORM_THEMES_SUCCESS,
  SET_ALERT_FAIL,
  SET_ALERT_RESET,
  SET_ALERT_SUCCESS,
} from '../../redux/constants/formConstants';

export const formReducer = (
  state = {
    form: {},
    articles: [],
    themes: [],
  },
  action
) => {
  const {type, payload} = action;
  switch (type) {
    case SET_ALERT_SUCCESS:
      return {
        ...state,
        alert: {message: payload.message, error: payload.error},
      };
    case SET_ALERT_FAIL:
      return {
        ...state,
        alert: payload,
      };
    case SET_ALERT_RESET:
      return {
        ...state,
        alert: null,
      };

    case FETCH_FORM_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FORM_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: payload,
      };

    case FETCH_FORM_ARTICLES_FAIL:
      return {
        ...state,
        error: payload,
      };
    case FETCH_FORM_THEMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FORM_THEMES_SUCCESS:
      return {
        ...state,
        loading: false,
        themes: payload,
      };

    case FETCH_FORM_THEMES_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
