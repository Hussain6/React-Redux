import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className='text-center my-3'>
      <h2>Buy Shoes for 50 rs</h2>
      {/* <button
        className='btn btn-primary'
        onClick={() => dispatch(actionCreators.withdrawMoney(100))}
      >
        -
      </button> */}
      <button className='btn btn-primary' onClick={() => withdrawMoney(100)}>
        -
      </button>
      Add to cart
      {/* <button
        className='btn btn-primary'
        onClick={() => dispatch(actionCreators.depositMoney(100))}
      >
        +
      </button> */}
      <button className='btn btn-primary' onClick={() => depositMoney(100)}>
        +
      </button>
    </div>
  );
};

export default Shop;
