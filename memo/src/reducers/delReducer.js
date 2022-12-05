	
import * as types from '../constants/actionTypes';
 
const delInitState = {
  isDelError: false,
  isDeleting: false
}
 
const delReducer = (state = delInitState, action) => {
  switch (action.type) {
    case types.DEL_MEMO_PENDING:
      return {
        isDelError: false,
        isDeleting: true
      };
    case types.DEL_MEMO_SUCCESS:
      return {
        isDelError: false,
        isDeleting: false
      };
    case types.DEL_MEMO_FAILURE:
      return {
        isDelError: true,
        isDeleting: false
      };
    default:
      return state;
  }
};
 
export default delReducer;