import { Reducer } from "redux";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
export const INCREASE_BY = "counter/INCREASE_BY" as const;
export const DECREASE_BY = "counter/DECREASE_BY" as const;
export const INCREASE_BY_ASYNC = "counter/INCREASE_BY_ASYNC" as const;
export const DECREASE_BY_ASYNC = "counter/DECREASE_BY_ASYNC" as const;
const START_ASYNC = "counter/START_ASYNC" as const;
const END_ASYNC = "counter/END_ASYNC" as const;

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

export const decreaseBy = (diff: number) => ({
  type: DECREASE_BY,
  payload: diff,
});

export const increaseByAsync = (diff: number) => ({
  type: INCREASE_BY_ASYNC,
  payload: diff,
});

export const decreaseByAsync = (diff: number) => ({
  type: DECREASE_BY_ASYNC,
  payload: diff,
});

export const startAsync = () => ({
  type: START_ASYNC,
});

export const endAsync = () => ({
  type: END_ASYNC,
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>
  | ReturnType<typeof decreaseBy>
  | ReturnType<typeof increaseByAsync>
  | ReturnType<typeof decreaseByAsync>
  | ReturnType<typeof startAsync>
  | ReturnType<typeof endAsync>;

const CounterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, value: state.value + 1 };
    case DECREASE:
      return { ...state, value: state.value - 1 };
    case INCREASE_BY:
      console.log(action);
      return { ...state, value: state.value + action.payload };
    case DECREASE_BY:
      return { ...state, value: state.value - action.payload };
    case START_ASYNC:
      return { ...state, stauts: "loading" };
    case END_ASYNC:
      return { ...state, status: "idle" };
    default:
      return state;
  }
};

export default CounterReducer;
