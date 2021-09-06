import React from "react";

interface Props {
  counterValue: number;
  amount: number;
  handleAmount: Function;
  increase: Function;
  decrease: Function;
  increaseBy: Function;
  decreaseBy: Function;
  increaseByAsync: Function;
  decreaseByAsync: Function;
}

function CounterPresenter(props: Props) {
  return (
    <>
      카운터 값 : {props.counterValue}
      <br />
      카운터 증감 값 :
      <input
        value={props.amount}
        onChange={(e) => props.handleAmount(e.target.value)}
      />
      <br />1 씩 증감 :<button onClick={(e) => props.increase()}>+</button>
      <button onClick={(e) => props.decrease()}>-</button>
      <br />
      {props.amount} 씩 증감 :
      <button onClick={(e) => props.increaseBy()}>+</button>
      <button onClick={(e) => props.decreaseBy()}>-</button>
      <br />
      {props.amount} 씩 비동기 증감 :
      <button onClick={(e) => props.increaseByAsync()}>+</button>
      <button onClick={(e) => props.decreaseByAsync()}>-</button>
    </>
  );
}

export default CounterPresenter;
