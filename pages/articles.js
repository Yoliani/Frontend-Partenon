import Layout from '@/components/Layout';
import {fetchFormArticles} from '@/redux/actions/formActions';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const ShowArticles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFormArticles());
  }, [dispatch]);

  const articles = useSelector(state => state.form.articles);
  console.log(articles);
  return (
    <>
      <Layout>
        <div>
          {articles?.map((article, index) => {
            if (article.status) {
              return (
                <div
                  className="flex justify-center items-center mx-auto w-7/12 px-20 pt-20 pb-4"
                  key={index}
                >
                  <div className="border bg-white rounded-lg p-6 text-gray-100 relative z-10">
                    <div className="flex flex-wrap items-center">
                      <div className="flex w-full h-48 md:h-64 lg:h-72 relative">
                        <div className="w-8/12 pr-4 relative">
                          <img src="https://www.lancetalent.com/blog/wp-content/uploads/18909-NRZEZK.png" />
                        </div>

                        <div className="w-4/12 h-full">
                          <div className="flex flex-col w-full h-full">
                            <div className="flex-1 pb-2">
                              <div className="w-full h-full relative">
                                <img
                                  src="https://img.freepik.com/vector-gratis/cientifico-femenino-dibujado-mano-ilustracion_52683-31879.jpg?w=2000"
                                  className="absolute top-0 w-full h-full object-cover object-center rounded-lg bg-white"
                                />
                              </div>
                            </div>

                            <div className="flex-1 pt-2">
                              <div className="w-full h-full relative">
                                <img
                                  src="https://concepto.de/wp-content/uploads/2014/08/tecnologia-e1551386726435.jpg"
                                  className="absolute top-0 w-full h-full object-cover object-bottom rounded-lg bg-white"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full pt-8 flex flex-col justify-between text-black">
                        <div>
                          <h2 className="font-bold text-xl">
                            {article.titulo}
                          </h2>

                          <div className="flex flex-wrap text-center pt-4 mb-2 text-black">
                            <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                              {article.tema?.nombre}
                            </div>
                          </div>

                          <p className="text-xs leading-relaxed ">
                            {article.resumen}
                          </p>
                        </div>

                        <div className="w-full sm:flex-1  gap-4  pt-6">
                          <a
                            href={`articles/${article.id}`}
                            className="flex items-center justify-center text-center relative  font-bold text-sm bg-gray-200  px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75"
                          >
                            Ver articulo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </Layout>
    </>
  );
};

export default ShowArticles;
