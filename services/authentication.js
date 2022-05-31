export const AUTH_KEY = 'token';
export const USER_AUTH_KEY = 'userAuth';

export const isBrowser = () => {
  return typeof window !== 'undefined';
};
export const getUser = () => {
  const token = isBrowser() && window.localStorage.getItem(AUTH_KEY);
  return token;
};
export const setUser = user => {
  window.localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};
export const isLoggedIn = () => {
  const user = getUser();
  return !!user['Access-Token'];
};
export const getCurrentUser = () => {
  const token = isBrowser() && window.localStorage.getItem(USER_AUTH_KEY);
  const data = JSON.parse(token);
  return data ? data : {};
};

export const logout = () => {
  localStorage.clear();
};
