export const Btns = ({ update }) => {
  return (
    <>
      <button onClick={() => update("+")}>+</button>
      <button onClick={() => update("-")}>-</button>
      <button onClick={() => update("reset")}>Reset</button>
    </>
  );
};
