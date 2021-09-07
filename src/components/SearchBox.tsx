import { useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { setKeyword } from "../stores/modules/keyword";

const Box = styled.div`
  background-color: #f8f8f8;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #9b9b9b;
`;

const Input = styled.input`
  flex: 1;
  font-size: medium;
  padding: 10px;
  outline-color: #28adfa;
`;

const SearchBox = () => {
  const keyword = useAppSelector((state) => state.keyword.keyword);
  const dispatch = useAppDispatch();
  const _setKeyword = useCallback(
    (keyword: string) => {
      dispatch(setKeyword(keyword));
    },
    [dispatch]
  );
  return (
    <Box>
      <Input
        value={keyword}
        onChange={(e) => {
          _setKeyword(e.target.value);
        }}
        placeholder="검색어를 입력하세요."
      />
    </Box>
  );
};

export default SearchBox;
