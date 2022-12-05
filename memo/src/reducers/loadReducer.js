import * as types from '../constants/actionTypes';
 

const initState = {
    isLoading: true,
    isError: false,
    memoList: null
  };
  
export default function loadReducer(state = initState, action)  {
    switch (action.type) {
      case types.GET_MEMO_LIST_SUCCESS:
        return {
          isLoading: false,
          isError: false,
          memoList: action.memoList
        };
      case types.GET_MEMO_LIST_FAILURE:
        return {
          isLoading: false,
          isError: true,
          memoList: state.memoList
        };
      default:
        return state;
    }
  };