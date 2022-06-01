import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {formReducer} from './reducers/formReducer';
import {userLoginReducer} from './reducers/userReducer';

const reducer = combineReducers({
  form: formReducer,
  user: userLoginReducer,
});
const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 100,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
