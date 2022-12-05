	
import React, { useState } from 'react';
 
const MemoWrite = props => {
  const [ memoTitle, setMemoTitle ] = useState('');
  const [ memoContent, setMemoContent ] = useState('');
 
  const {
    onMemoSubmit
  } = props;
 
  const handleChange = e => {
    if (e.target.name === 'memoTitle') {
      setMemoTitle(e.target.value);
    } else if (e.target.name === 'memoContent') {
      setMemoContent(e.target.value);
    }
  };
 
  const handleSubmit = e => {
    e.preventDefault();
 
    const title = memoTitle;
    const content = memoContent;
    const time = new Date().toISOString();
    const id = '' + new Date().getTime();
 
    if (!title.trim() || !content.trim()) {
      alert('내용을 입력해주세요!');
      return;
    }
 
    onMemoSubmit(id, title, content, time);
 
    setMemoTitle('');
    setMemoContent('');
  };
 
  return (
    <form
      className="memo-form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        type="text"
        name="memoTitle"
        value={memoTitle}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="memoContent"
        value={memoContent}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn-submit"
      >
        SUBMIT
      </button>
    </form>
  );
};
 
export default MemoWrite;