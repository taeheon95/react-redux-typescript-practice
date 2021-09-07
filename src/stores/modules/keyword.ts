import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface KeywordState {
  keyword: string;
}

const initialState: KeywordState = {
  keyword: "",
};

const keyword = createSlice({
  name: "keyword",
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

export const { setKeyword } = keyword.actions;
export default keyword.reducer;
