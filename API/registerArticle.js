import {post} from './fetcher';
import {articles_url} from './urls';

const registerClient = async (data, callback = () => {}) => {
  const {titulo, cuerpo, resumen, tema} = data;

  const response = await post(articles_url, {
    body: JSON.stringify({
      articulo: {
        titulo,
        cuerpo,
        resumen,
        tema_id: tema,
      },
    }),
  });
  if (!response.ok) {
    const jsonClient = await response.json();
    //METODOMAPPING(jsonClient
    throw jsonClient;
  } else if (response.ok) {
    callback();
  }
};

export default registerClient;
