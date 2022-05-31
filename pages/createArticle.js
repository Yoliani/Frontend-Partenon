import registerArticle from '@/API/registerArticle';
import Layout from '@/components/Layout';
import {
  fetchFormThemes,
  setAlertFail,
  setAlertSuccess,
} from '@/redux/actions/formActions';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import logo from '../public/logos/partenon.svg';

const CreateArticle = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchFormThemes());
  }, [dispatch]);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const fields = useSelector(state => state.form.themes);
  const onSubmit = data => {
    registerArticle(data, () => {
      dispatch(setAlertSuccess('Client create successfully.'));
      router.push('/');
    }).catch(() =>
      dispatch(setAlertFail('Fill the highlighted fields correctly.'))
    );
  };
  console.log(errors);
  return (
    <Layout>
      <section className="h-full w-full justify-center flex pt-12">
        <div className=" py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 w--full">
            <div className="w-full">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className=" px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <Image src={logo} alt="logo" width={100} height={100} />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          Crear Articulo
                        </h4>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Titulo"
                            {...register('titulo', {
                              required: true,
                              maxLength: 80,
                            })}
                          />
                        </div>
                        <div className="mb-4">
                          <textarea
                            className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Resumen"
                            {...register('resumen', {
                              required: true,
                            })}
                          ></textarea>
                        </div>
                        <div className="mb-4">
                          <textarea
                            className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Cuerpo"
                            {...register('cuepo', {
                              required: true,
                            })}
                          ></textarea>
                        </div>
                        <div className="mb-4">
                          <select
                            {...register('tema', {
                              required: true,
                            })}
                            className="form-control block w-full 2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          >
                            {fields?.map((item, i) => {
                              return (
                                <>
                                  <option
                                    key={`${i}-${item['id']}`}
                                    value={item['id']}
                                  >
                                    {item['nombre']}{' '}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs bg-orangeOxford leading-tight uppercase rounded shadow-md hover:bg-orange-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Crear Articulo
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateArticle;
