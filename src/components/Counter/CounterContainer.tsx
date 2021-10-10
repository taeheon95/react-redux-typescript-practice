import React, { PureComponent } from "react";
import { CounterProps } from "./index";
import CounterPresenter from "./CounterPresenter";

interface State {
  amount: number;
}

export class CounterContainer extends PureComponent<CounterProps, State> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  handleAmount(e:React.ChangeEvent<HTMLInputElement>) {
    this.setState((state) => ({ ...state, amount: Number(e.target.value) }));
  }

  handleIncrease() {
    this.props.increase();
  }

  handleDecrease() {
    this.props.decrease();
  }

  handleIncreaseBy() {
    this.props.increaseBy(this.state.amount);
  }

  handleDecreaseBy() {
    this.props.decreaseBy(this.state.amount);
  }

  handleIncreaseByAsync() {
    this.props.increaseByAsync(this.state.amount);
  }

  handleDecreaseByAsync() {
    this.props.decreaseByAsync(this.state.amount);
  }

  render() {
    return (
      <CounterPresenter
        counterValue={this.props.counterValue}
        amount={this.state.amount}
        handleAmount={this.handleAmount.bind(this)}
        increase={this.handleIncrease.bind(this)}
        decrease={this.handleDecrease.bind(this)}
        increaseBy={this.handleIncreaseBy.bind(this)}
        decreaseBy={this.handleDecreaseBy.bind(this)}
        increaseByAsync={this.handleIncreaseByAsync.bind(this)}
        decreaseByAsync={this.handleDecreaseByAsync.bind(this)}
      />
    );
  }
}

export default CounterContainer;
