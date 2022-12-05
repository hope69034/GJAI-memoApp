import { connect } from 'react-redux';
import { sendMemoApi } from '../api/api';
import * as action from '../actions/index';
import MemoWrite from '../components/MemoWrite';
 
const mapDispatchToProps = dispatch => ({
  onMemoSubmit: async (id, title, content, time) => {
    try {
      const newMemo = {
        id,
        title,
        content,
        createdAt: time
      };
 
      dispatch(action.addNewMemoPending());
 
      await sendMemoApi(newMemo);
 
      dispatch(action.addNewMemoSuccess(newMemo));
    } catch (error) {
      alert('메모 추가가 실패하였습니다. 잠시 후 다시 시도해주세요.')
      dispatch(action.addNewMemoFailure(error));
    }
  }
});
 
export default connect(
  null,
  mapDispatchToProps
)(MemoWrite);