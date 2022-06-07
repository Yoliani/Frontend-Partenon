import deleteArticle, {updateArticle} from '@/API/deleteArticle';
import Layout from '@/components/Layout';
import {fetchFormArticles} from '@/redux/actions/formActions';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Review = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFormArticles());
  }, [dispatch]);
  const articles = useSelector(state => state.form.articles);
  const router = useRouter();
  return (
    <Layout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-24 m-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                Titulo
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Tema
              </th>
              <th scope="col" className="px-6 py-3">
                {' '}
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map(article => {
              return (
                <>
                  {' '}
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {article.id}
                    </th>
                    <td className="px-6 py-4">{article.titulo}</td>
                    <td className="px-6 py-4">
                      {article.status ? 'Aprobado' : 'No aprobado'}
                    </td>
                    <td className="px-6 py-4">{article.tema.nombre}</td>
                    <td className="px-6 py-4 space-x-3">
                      {' '}
                      <button
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs bg-orangeOxford leading-tight uppercase rounded shadow-md hover:bg-orange-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-fit mb-3"
                        type="submit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={() => {
                          updateArticle(article.id);
                          dispatch(fetchFormArticles());
                        }}
                      >
                        Aprobar
                      </button>
                      <button
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs bg-orangeOxford leading-tight uppercase rounded shadow-md hover:bg-orange-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-fit mb-3"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={() => {
                          router.push(`/admin/article/${article.id}`);
                        }}
                      >
                        Revisar
                      </button>
                      <button
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs bg-orangeOxford leading-tight uppercase rounded shadow-md hover:bg-orange-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-fit mb-3"
                        type="submit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={() => {
                          deleteArticle(article.id);
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Review;
