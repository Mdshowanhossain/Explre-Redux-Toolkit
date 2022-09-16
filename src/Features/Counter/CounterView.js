import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction, resetAction } from "./CounterSlice";

const CounterView = () => {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  console.log(count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="counter-container">
        <div className="counter-content">
          <h1>Redux Tool kit</h1>
          <h4>Counter App Redux</h4>

          <h1>{count}</h1>
          <div className="btn-container">
            <button
              onClick={() => {
                dispatch(decrementAction());
              }}
            >
              Decrement
            </button>
            <button onClick={() => dispatch(resetAction())}>Reset</button>
            <button onClick={() => dispatch(incrementAction())}>
              Increment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterView;
