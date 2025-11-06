import React from "react";

interface returnProps {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
}

interface propsType {
  step: number;
  initVal: number;
}

const useCounter = ({ initVal = 0, step = 0 }: propsType): returnProps => {
  const [count, setCount] = React.useState<number>(initVal);

  const inc = () => {
    setCount((prev) => prev + step);
  };
  const dec = () => {
    setCount((prev) => prev - step);
  };

  const reset = () => {
    setCount(initVal);
  };

  return { count, inc, dec, reset };
};

export default useCounter;
