import {getCurrentUser} from '../services/authentication';
const user = getCurrentUser();
const AUTH_HEADER = {
  'access-token': user['token'],
  expiry: user['expiry'] ? user['expiry'] : '',
  uid: user['uid'] ? user['uid'] : '',
  client: user['client'] ? user['client'] : '',
  'token-type': user['token-type'] ? user['token-type'] : '',
};
const DEFAULT_HEADER = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.NEXT_API_KEY}`,
  ...AUTH_HEADER,
};
const fetcher = async url => {
  const res = await fetch(url, {
    headers: {...DEFAULT_HEADER},
  });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export const get = (url, opts = {headers: {}}) => {
  console.log(url, {
    method: 'GET',
    headers: {...DEFAULT_HEADER, ...opts.headers, ...AUTH_HEADER},
    ...opts,
  });
  return fetch(url, {
    method: 'GET',
    headers: {...DEFAULT_HEADER, ...opts.headers},
    ...opts,
  });
};

export const post = (url, opts = {headers: {}}) => {
  return fetch(url, {
    method: 'POST',
    headers: {...DEFAULT_HEADER, ...opts.headers},
    ...opts,
  });
};

export const put = (url, opts = {headers: []}) => {
  return fetch(url, {
    method: 'PUT',
    headers: {...DEFAULT_HEADER, ...opts.headers},
    ...opts,
  });
};

export default fetcher;
