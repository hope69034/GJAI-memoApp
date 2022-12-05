	
import * as types from '../constants/actionTypes';
 
const sendInitState = {
  isSendError: false,
  isSending: false
}
 
const sendReducer = (state = sendInitState, action) => {
  switch (action.type) {
    case types.ADD_NEW_MEMO_PENDING:
      return {
        isSendError: false,
        isSending: true
      };
    case types.ADD_NEW_MEMO_SUCCESS:
      return {
        isSendError: false,
        isSending: false
      };
    case types.GET_MEMO_LIST_FAILURE:
      return {
        isSendError: true,
        isSending: false
      };
    default:
      return state;
  }
};
 
export default sendReducer;