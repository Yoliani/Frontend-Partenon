import {fetchSingleFormArticles} from '@/redux/actions/formActions';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Layout from '../../../components/Layout';

const ShowArticles = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {id} = router.query;

  useEffect(() => {
    dispatch(fetchSingleFormArticles(id));
  }, [dispatch, id]);

  const article = useSelector(state => state.form.article);
  console.log(article);
  return (
    <>
      <Layout>
        <div className="wrapper bg-white w-full  mx-auto pt-36 items-center justify-center p-96">
          <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal ">
            <div className="font-sans">
              <p className="text-base md:text-sm text-orange-500 font-bold">
                &lt;{' '}
                <Link
                  href="/articles"
                  className="text-base md:text-sm text-orangeOxford font-bold no-underline hover:underline"
                >
                  VOLVER
                </Link>
              </p>
              <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                {article?.titulo}
              </h1>
              <p className="text-sm md:text-base font-normal text-gray-600">
                Publicado {article?.created_at}
              </p>
            </div>

            <p className="py-6">{article?.resumen}</p>

            <p className="py-6 pt-2">{article?.cuerpo}</p>
          </div>

          <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
        </div>
      </Layout>
    </>
  );
};

export default ShowArticles;
