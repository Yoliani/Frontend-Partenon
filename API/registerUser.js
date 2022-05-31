import {post} from './fetcher';
import {auth_url} from './urls';

const registerUser = async (data, callback = () => {}) => {
  const {
    nickname,
    name,
    lastname,
    age,
    email,
    password,
    password_confirmation,
  } = data;

  const response = await post(auth_url, {
    body: JSON.stringify({
      user: {
        nickname,
        name,
        lastname,
        age,
        email,
        password,
        password_confirmation,
      },
    }),
  });
  if (!response.ok) {
    const jsonClient = await response.json();
    throw jsonClient;
  } else if (response.ok) {
    callback();
  }
};

export default registerUser;
