import '../styles/globals.css';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import {NextQueryParamProvider} from 'next-query-params';

import {Provider} from 'react-redux';
import store from '../redux/store';

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <NextQueryParamProvider>
        <Component {...pageProps} />
      </NextQueryParamProvider>
    </Provider>
  );
}

export default MyApp;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
