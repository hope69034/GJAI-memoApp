import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faPen, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MemoWrite from '../containers/MemoWrite';
import { setTimeForm } from '../utils/utils';
 
const MemoList = props => {
  const {
    memoList
  } = props;
 
  const [ isMemoWriteOpened, setMemoWriteStatus ] = useState(false);
 
  const hasMemo = memoList && memoList.length > 0;
 
  return (
    <>
      <div className="chk-write-wrap">
        <label className="chk-write-label">
          <FontAwesomeIcon
            icon={faPen}
          />
          <span className="sr-only">
            Write
          </span>
          <input
            className="chk-write"
            value={isMemoWriteOpened}
            type="checkbox"
            onChange={() => setMemoWriteStatus(!isMemoWriteOpened)}
          />
        </label>
      </div>
 
      {isMemoWriteOpened && <MemoWrite />}
 
      <ul className="memo-list">
        {!hasMemo && (
          <li className="no-memo">
            <div className="align-center">
              <h2 className="title">No Memos</h2>
              <p>
                Write anything you want!
              </p>
            </div>
          </li>
        )}
        {hasMemo &&
          memoList.map(memo => (
            <li key={memo.id}>
              <Link to={`/memos/${memo.id}`}>
                <h2 className="memo-title">{memo.title}</h2>
                <div className="memo-content">{memo.content}</div>
                <span className="memo-date">
                  {setTimeForm(memo.createdAt)}
                </span>
              </Link>
              <button
                type="button"
                className="btn-delete"
              >
                <FontAwesomeIcon
                  icon={faTimes}
                />
                <span
                  className="sr-only"
                >
                  delete
                </span>
              </button>
            </li>
          ))
        }
      </ul>
    </>
  );
};
 
export default MemoList;