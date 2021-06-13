import { AnyAction } from 'redux';
import { fetchData } from '../actions/actionTypes';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

const productsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case fetchData.FETCH:
      console.log('hello from fetch reducer');
      return {
        ...state,
        loading: true,
      };
    case fetchData.FETCH_SUCCESS:
      console.log('hello from fetch succes reducer');
      console.log(action.payload, 'payload');
      return {
        loading: false,
        products: action.payload,
        error: '',
      };
    case fetchData.FETCH_FAILURE:
      console.log('hello from fetch failure reducer');
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
