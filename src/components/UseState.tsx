import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <Card>
      <h1>Counter with useState</h1>
      <p>Count: {count}</p>

      <div>
        <Button intent="cda" onClick={handleIncrease}>
          +
        </Button>{" "}
        <Button intent="cda" onClick={handleDecrease}>
          -
        </Button>
      </div>
    </Card>
  );
};

export default UseState;