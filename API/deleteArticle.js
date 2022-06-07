import {del, put} from './fetcher';
import {articles_url} from './urls';

const deleteArticle = async (id, callback = () => {}) => {
  const response = await del(`${articles_url}/${id}`);
  if (!response.ok) {
    const jsonClient = await response.json();
    throw jsonClient;
  } else if (response.ok) {
    callback();
  }
};

export const updateArticle = async (id, callback = () => {}) => {
  const response = await put(`${articles_url}/${id}}`, {
    body: JSON.stringify({
      articulo: {
        status: true,
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

export default deleteArticle;
