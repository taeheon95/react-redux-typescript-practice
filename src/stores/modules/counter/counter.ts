import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCount } from "../../../apis/counterAPI";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const increaseByAsync = createAsyncThunk(
  'counter/increaseByAsync',
  async(amount:number)=>{
    const response = await fetchCount(amount);
    return response.data;
  }
)

export const decreaseByAsync = createAsyncThunk(
  'counter/decreaseByAsync',
  async(amount:number)=>{
    const response = await fetchCount(amount);
    return response.data;
  }
)

const counter = createSlice({
  name:"counter",
  initialState,
  reducers:{
    increase:(state)=>{
      state.value  += 1;
    },
    decrease:(state)=>{
      state.value -= 1;
    },
    increaseBy:(state, action:PayloadAction<number|string>)=>{
      state.value += typeof action.payload === "number"? 
        action.payload: Number(action.payload);
    },
    decreaseBy:(state, action:PayloadAction<number|string>)=>{
      state.value -= typeof action.payload === "number"? 
        action.payload: Number(action.payload);
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(increaseByAsync.pending,(state)=>{
      state.status = 'loading';
    })
    .addCase(increaseByAsync.fulfilled,(state, action)=>{
      state.status='idle';
      state.value+=action.payload;
    })
    .addCase(decreaseByAsync.pending,(state)=>{
      state.status = 'loading'
    })
    .addCase(decreaseByAsync.fulfilled, (state, action)=>{
      state.status="idle";
      state.value-=action.payload;
    })
  }
})

export const {
  increase,
  decrease,
  increaseBy,
  decreaseBy
} = counter.actions

export default counter.reducer;