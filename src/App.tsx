import useToggle from "./hooks/useToggle";

const App = () => {
  const [value, toggle, setTrue, setFalse] = useToggle({ initVal: false });
  return (
    <>
      {value ? "anisha is active" : "anisha is sleepy"}
      <button onClick={toggle}>Change my state</button>
      <button onClick={setTrue}>Set active</button>
      <button onClick={setFalse}>Set lazy</button>
    </>
  );
};

export default App;
