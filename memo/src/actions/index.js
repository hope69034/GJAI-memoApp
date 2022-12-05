	
import * as types from '../constants/actionTypes';
 
export const getMemoListSuccess = (memoList) => ({
  type: types.GET_MEMO_LIST_SUCCESS,
  memoList: memoList
});
 
export const getMemoListFailure = (error) => ({
  type: types.GET_MEMO_LIST_FAILURE,
  error
});

	
export const addNewMemoPending = () => ({
    type: types.ADD_NEW_MEMO_PENDING
  });
   
  export const addNewMemoSuccess = (newMemo) => ({
    type: types.ADD_NEW_MEMO_SUCCESS,
    newMemo: newMemo
  });
   
  export const addNewMemoFailure = (error) => ({
    type: types.ADD_NEW_MEMO_FAILURE,
    error
  });
   
  export const delMemoPending = () => ({
    type: types.DEL_MEMO_PENDING
  });
   
  export const delMemoSuccess = () => ({
    type: types.DEL_MEMO_SUCCESS
  });
   
  export const delMemoFailure = (error) => ({
    type: types.DEL_MEMO_FAILURE,
    error
  });