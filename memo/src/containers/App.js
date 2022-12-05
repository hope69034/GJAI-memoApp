import { connect } from 'react-redux';
import { getMemoListApi,delMemoApi } from '../api/api';
import * as action from '../actions/index';
import { camelizeKey } from '../utils/utils';
import App from '../components/App';
 
const mapStateToProps = state => {
    const {
      memoList
    } = state.loadReducer;
   
    const props = {
      ...state.delReducer,
      ...state.sendReducer,
      ...state.loadReducer
    }
   
    if (!memoList) {
      return props;
    }
   
    return {
      ...props,
      memoList: camelizeKey(memoList)
    };
  }
   
  const mapDispatchToProps = dispatch => ({
    onMemoListLoad: () => {
      getMemoListApi(dispatch);
    },
    onMemoDelete: async (memoId) => {
      try {
        dispatch(action.delMemoPending());
   
        await delMemoApi(memoId);
   
        dispatch(action.delMemoSuccess());
      } catch (error) {
        alert('삭제가 실패했습니다. 잠시 후 다시 시도해주세요.');
        dispatch(action.delMemoFailure());
      }
    }
  });

   
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  
  