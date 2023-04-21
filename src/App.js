import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App m-5">
      <h1 className="text-dark">Redux Counter: {counter}</h1>
      <button className="btn btn-primary mx-5" onClick={() => dispatch(increment(1))}>+</button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement(1))}>-</button>
      {isLogged ? <h2>Sensitive information</h2> : ''}
    </div>
  );
}

export default App;
