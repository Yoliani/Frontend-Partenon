import {post} from '../../API/fetcher';
import {auth_url} from '../../API/urls';
import Router from 'next/router';
import {getUser} from '../../services/authentication';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';
import {setAlertFail} from './formActions';

export const login = data => async dispatch => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  const {email, password} = data;

  const response = await post(`${auth_url}/sign_in`, {
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.ok) {
    console.log(response.headers.get('client'));
    localStorage.setItem('token', response.headers.get('access-token'));
    localStorage.setItem(
      'userAuth',
      JSON.stringify({
        client: response.headers.get('client'),
        token: response.headers.get('access-token'),
        expiry: response.headers.get('expiry'),
        uid: response.headers.get('uid'),
        'token-type': response.headers.get('token-type'),
      })
    );
    Router.push('/');

    const {data} = await response.json();

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    getUser();
  } else if (!response.ok) {
    const {errors} = await response.json();
    console.log(errors);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: '',
    });
    dispatch(setAlertFail(errors[0]));
  }
};
