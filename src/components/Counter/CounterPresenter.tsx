import React from "react";

interface Props {
  counterValue: number;
  amount: number;
  handleAmount: (amount: number) => void;
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
        onChange={(e) => handleAmount(Number(e.target.value))}
      />
      <br />1 씩 증감 :<button onClick={(e) => increase()}>+</button>
      <button onClick={(e) => decrease()}>-</button>
      <br />
      {props.amount} 씩 동기 증감 :
      <button onClick={(e) => increaseBy()}>+</button>
      <button onClick={(e) => decreaseBy()}>-</button>
      <br />
      {props.amount} 씩 비동기 증감 :
      <button onClick={(e) => increaseByAsync()}>+</button>
      <button onClick={(e) => decreaseByAsync()}>-</button>
    </>
  );
}

export default CounterPresenter;
