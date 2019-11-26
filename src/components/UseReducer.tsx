import React, { useReducer } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const counterReducer = (state: { count: number }, action: { type: 'INCREASE' | 'DECREASE' }) => {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Card>
      <h1>Counter with useReducer</h1>
      <p>Count: {state.count}</p>
      <div>
        <Button intent="default" onClick={() => dispatch({ type: 'INCREASE' })}>
          +
        </Button>{" "}
        <Button intent="default" onClick={() => dispatch({ type: 'DECREASE' })}>
          -
        </Button>
      </div>
    </Card>
  );
};

export default UseReducer;