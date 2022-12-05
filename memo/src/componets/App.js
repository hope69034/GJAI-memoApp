import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MemoList from './MemoList';
import './css/App.css';
 
class App extends React.Component {
  componentDidMount() {
    this.props.onMemoListLoad();
  }
 
  render() {
    const {
      isLoading,
      isError,
      memoList
    } = this.props;
 
    if (isLoading) {
      return (
        <div className="loading-box">
          <div className="align-center">
            <FontAwesomeIcon
              icon={faFish}
              size="8x"
              spin
            />
          </div>
        </div>
      );
    }
 
    if (isError) {
      return (
        <div className="error-box">
          <div className="align-center">
            <FontAwesomeIcon
              icon={faFish}
              size="3x"
            />
            <p className="warning">SORRY.</p>
            <p>SOMETHING WENT WRONG</p>
            <button
              type="button"
              className="btn-back"
              onClick={() => {
                window.location.reload();
              }}
            >
              RETRY
            </button>
          </div>
        </div>
      );
    }
 
    return (
      <div className="app-container">
        <header className="memo-header">
          <h1 className="app-title">
            <Link to="/">
              WRITE ANYTHING.
            </Link>
          </h1>
        </header>
        <div className="memo-container">
          <Switch>
            <Redirect exact from="/" to="/memos" />
 
            <Route
              exact path="/memos"
              render={routerProps => (
                <MemoList
                  {...routerProps}
                  memoList={memoList}
                  isSending={isSending}
                  onMemoDelete={onMemoDelete}
                />
              )}
            />
 
            <Route
              exact path="/memos/:memoId"
              render={routerProps => {
                const memoId = routerProps.match.params.memoId;
                const targetMemo = memoList.find(memo => memo.id === memoId);
 
                return (
                  <MemoDetail
                    {...routerProps}
                  />
                )
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
 
export default App;