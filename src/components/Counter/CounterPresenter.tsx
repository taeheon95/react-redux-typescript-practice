import React from "react";

interface Props {
  counterValue: number;
  amount: number;
  handleAmount: (e:React.ChangeEvent<HTMLInputElement>) => void;
  increase: () => void;
  decrease: () => void;
  increaseBy: () => void;
  decreaseBy: () => void;
  increaseByAsync: () => void;
  decreaseByAsync: () => void;
}

function CounterPresenter(props: Props) {
  const {
    handleAmount,
    increase,
    decrease,
    increaseBy,
    decreaseBy,
    increaseByAsync,
    decreaseByAsync,
  } = props;
  return (
    <>
      카운터 값 : {props.counterValue}
      <br />
      카운터 증감 값 :
      <input
        value={props.amount}
        type="number"
        onChange={handleAmount}
      />
      <br />1 씩 증감 :<button onClick={(e) => increase()}>+</button>
      <button onClick={decrease}>-</button>
      <br />
      {props.amount} 씩 동기 증감 :
      <button onClick={increaseBy}>+</button>
      <button onClick={decreaseBy}>-</button>
      <br />
      {props.amount} 씩 비동기 증감 :
      <button onClick={increaseByAsync}>+</button>
      <button onClick={decreaseByAsync}>-</button>
    </>
  );
}

export default React.memo(CounterPresenter);
