import {post} from './fetcher';
import {auth_url} from './urls';

const loginUser = async (data, callback = () => {}) => {
  const {email, password} = data;

  const response = await post(`${auth_url}/sign_in`, {
    body: JSON.stringify({
      user: {
        email,
        password,
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

export default loginUser;
