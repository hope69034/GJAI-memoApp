import * as firebase from "firebase/app";
import "firebase/database";
import { getMemoListSuccess, getMemoListFailure } from '../actions/index';
 
const firebaseConfig = {
    apiKey: "AIzaSyDR1vNn_NnySuyRw7Y4ofX3mO-s4VkMSYM",
    authDomain: "ssssssssssss-a67e5.firebaseapp.com",
    projectId: "ssssssssssss-a67e5",
    storageBucket: "ssssssssssss-a67e5.appspot.com",
    messagingSenderId: "310050251449",
    appId: "1:310050251449:web:88cdba05096e7634457168",
    measurementId: "G-8LXHBJTZVP"
};
 
firebase.initializeApp(firebaseConfig);
const database = firebase.database();


	
export const getMemoListApi = (dispatch) => {
    database.ref('memos/').on('value', snapshot => {
      const memoList = snapshot.val();
      const convertedList = memoList ? Object.keys(memoList).map(id => ({id, ...memoList[id]})).sort((l, r) => Number(r.id) - Number(l.id)) : [];
   
      dispatch(getMemoListSuccess(convertedList));
    }, error => {
      dispatch(getMemoListFailure(error));
    });
  };

  	
export const sendMemoApi = newMemo => {
    const {
      id,
      title,
      content,
      createdAt
    } = newMemo;
   
    return new Promise((resolve, reject) => {
      firebase.database().ref('memos/' + id).set({
        title,
        content,
        created_at: createdAt
      })
        .then(() => resolve())
        .catch(() => reject());
    });
  };
   
  export const delMemoApi = memoId => {
    return new Promise((resolve, reject) => {
      firebase.database().ref('memos/' + memoId).set(null)
        .then(() => resolve())
        .catch(() => reject());
    })
  };