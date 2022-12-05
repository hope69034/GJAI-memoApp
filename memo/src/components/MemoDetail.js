import React from 'react';
//import { setTimeForm } from '../utils/utils';
 
const MemoDetail = props => {
  const {
    targetMemo: {
      id,
      title,
      content,
      createdAt
    }
  } = props;
 
  const convertNewlineSpace = content => {
    return content.split('\n').map((line, i) => (
      <p key={i}>
        {line.split(' ').map((word, i) => <span key={i}>{word}&nbsp;</span>)}
      </p>
    ))
  };
 
  return (
    <div
      className="memo-detail"
      key={id}
    >
      <h3 className="memo-title">{title}</h3>
      <div className="memo-content">
        {convertNewlineSpace(content)}
      </div>
      <div className="data-area">
        <span className="memo-date">
         {/*  {setTimeForm(createdAt)} */}
        </span>
      </div>
    </div>
  );
};
 
export default MemoDetail;