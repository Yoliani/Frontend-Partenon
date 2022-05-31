import fetcher from '../../API/fetcher';
import {articles_url, themes_url} from '../../API/urls';
import camelcaseKeys from 'camelcase-keys';
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
} from '../constants/formConstants';

export const fetchFormArticles = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_FORM_ARTICLES_REQUEST,
    });

    const articles = await fetcher(`${articles_url}?includes=tema`);
    dispatch({
      type: FETCH_FORM_ARTICLES_SUCCESS,
      payload: articles,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FORM_ARTICLES_FAIL,
      payload: error.message,
    });
    dispatch(setAlertFail('Error fetching articles'));
  }
};

export const fetchFormThemes = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_FORM_THEMES_REQUEST,
    });

    const themes = await fetcher(`${themes_url}?includes=tema`);
    dispatch({
      type: FETCH_FORM_THEMES_SUCCESS,
      payload: themes,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FORM_THEMES_FAIL,
      payload: error.message,
    });
    dispatch(setAlertFail('Error fetching articles'));
  }
};

export const setAlertFail = message => async dispatch => {
  dispatch({
    type: SET_ALERT_FAIL,
    payload: {
      message,
      error: true,
    },
  });
  setTimeout(() => {
    dispatch({
      type: SET_ALERT_RESET,
    });
  }, 2000);
};
export const setAlertSuccess = message => async dispatch => {
  dispatch({
    type: SET_ALERT_SUCCESS,
    payload: {
      message,
      error: false,
    },
  });
  setTimeout(() => {
    dispatch({
      type: SET_ALERT_RESET,
    });
  }, 2000);
};
