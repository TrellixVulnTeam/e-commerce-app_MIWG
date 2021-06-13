import { fetchData } from './actionTypes';

const fetchProductsData = () => {
  console.log('start fetch');
  return {
    type: fetchData.FETCH,
  };
};

const fetchSuccess = (data: any) => {
  console.log('success fetch');
  return {
    type: fetchData.FETCH_SUCCESS,
    payload: data,
  };
};

const fetchFailure = (err: string) => {
  return {
    type: fetchData.FETCH_FAILURE,
    payload: err,
  };
};

export const fetchProducts = () => {
  return function (dispatch: any) {
    console.log('fetch thunk');
    fetch('http://localhost:5000/api/products/shirts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data, 'data from fetch');
        dispatch(fetchSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchFailure(err));
      });
  };
};
