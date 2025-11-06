import React, { useState, useCallback } from "react";

interface hookProps {
  initVal?: boolean;
}

type returnType = [boolean, () => void, () => void, () => void];

const useToggle = ({ initVal = false }: hookProps): returnType => {
  const [value, setValue] = useState(initVal);
  function toggle() {
    setValue((prev) => !prev);
  }

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, setTrue, setFalse];
};

export default useToggle;
