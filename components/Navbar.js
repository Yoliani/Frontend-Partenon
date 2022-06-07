import React, {useState} from 'react';
import {Transition} from '@headlessui/react';
import Image from 'next/image';
import logo from '../public/logos/partenon.svg';
import icono from '../public/robot.png';

import Link from 'next/link';
import {getUser} from '@/services/authentication';
import {useSelector} from 'react-redux';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(state => state.user.userInfo);

  return (
    <div className="overflow-hidden fixed top-0 w-full z-50">
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-20 w-20">
                <Image className="" src={logo} alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="ml-96 flex items-end space-x-7">
                  <div className="text-black hover:bg-orangeOxford hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/">Inicio</Link>
                  </div>

                  <div className="text-black hover:bg-orangeOxford hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {' '}
                    <Link href="/articles">Publicaciones</Link>
                  </div>
                  <div className="text-black hover:bg-orangeOxford hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {' '}
                    <Link href="/createArticle">Crear articulo</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black hover:bg-orangeOxford hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              {' '}
              {getUser() === null ? (
                <Link href="/login">Iniciar Sesión</Link>
              ) : (
                <>
                  <Link href="/">
                    <div className="fle flex-row items-center justify-center space-x-2">
                      <Image
                        className=""
                        src={icono}
                        alt="Workflow"
                        width={'30%'}
                        height={'30%'}
                      />

                      {user?.nickname}
                    </div>
                  </Link>
                  <Link href="/" onClick={() => {}}>
                    <div className="fle flex-row items-center justify-center space-x-2">
                      <Image
                        className=""
                        src={icono}
                        alt="Workflow"
                        width={'30%'}
                        height={'30%'}
                      />
                      Desconectarse
                    </div>
                  </Link>
                </>
              )}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="hover:bg-orangeOxford text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inicio
                </Link>

                <Link
                  href="/articles"
                  className="hover:bg-orangeOxford text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Publicaciones
                </Link>
                <Link
                  href="/createArticle"
                  className="hover:bg-orangeOxford text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Crear Articulo
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
