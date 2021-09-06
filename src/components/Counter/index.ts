import { connect } from "react-redux";
import {
  decrease,
  decreaseBy,
  decreaseByAsync,
  increase,
  increaseBy,
  increaseByAsync,
} from "../../stores/modules/counter/counter";
import { AppDispatch, RootState } from "../../stores/store";
import CounterContainer from "./CounterContainer";

const mapStateToProps = (state: RootState) => ({
  counterValue: state.counter.value,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
  increaseBy: (amount: number) => dispatch(increaseBy(amount)),
  decreaseBy: (amount: number) => dispatch(decreaseBy(amount)),
  increaseByAsync: (amount: number) => dispatch(increaseByAsync(amount)),
  decreaseByAsync: (amount: number) => dispatch(decreaseByAsync(amount)),
});

export interface CounterProps {
  counterValue: number;
  increase: () => void;
  decrease: () => void;
  increaseBy: (amount: number) => void;
  decreaseBy: (amount: number) => void;
  increaseByAsync: (amount: number) => void;
  decreaseByAsync: (amount: number) => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
