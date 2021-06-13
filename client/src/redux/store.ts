import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export const store = configureStore();

export default configureStore;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
