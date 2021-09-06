import React, { PureComponent } from "react";
import { CounterProps } from ".";
import CounterPresenter from "./CounterPresenter";

interface State {
  amount: number;
}

export class CounterContainer extends PureComponent<CounterProps> {
  state: State = {
    amount: 0,
  };

  handleAmount(value: number) {
    this.setState({ amount: value });
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
        handleAmount={this.handleAmount}
        increase={this.handleIncrease}
        decrease={this.handleDecrease}
        increaseBy={this.handleIncreaseBy}
        decreaseBy={this.handleDecreaseBy}
        increaseByAsync={this.handleIncreaseByAsync}
        decreaseByAsync={this.handleDecreaseByAsync}
      />
    );
  }
}

export default CounterContainer;
