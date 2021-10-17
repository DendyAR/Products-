import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getDatabase, ref, push, onValue, set, remove} from "firebase/database";
import {database} from '../../firebase'

export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Selamat datang dendy" });
  }, 1000);
};

export const registerUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        // Signed in
        console.log("Succsess :", res);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        resolve(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error message", errorMessage);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        reject(false);
        // ..
      });
  });
};

export const loginUserApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        // Signed in
        const dataUser = {
          uid: res.user.uid,
          email: res.user.email,
          phoneNumber: res.user.phoneNumber,
          isAnonymouse: res.user.isAnonymous,
          emailVerified: res.user.emailVerified,
          refreshToken: res.user.refreshToken,
        };
        console.log("Succsess :", res);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        resolve(dataUser);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error message", errorMessage);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        dispatch({ type: "CHANGE_ISLOADING", value: true });
        reject(false);
        // ..
      });
  });
};

export const addDataToFirebase = (data) => (dispatch) => {
  const db = getDatabase();
  push(ref(db, 'users/' + data.userId), {
    title: data.title,
    content: data.content,
    date: data.date,
  });
};


export const getDataToAPI = (userId) => (dispatch) => {
  const urlNotes = ref(database, 'users/' + userId);
  return new Promise((resolve, reject)=> {
    
    onValue(urlNotes, function(snapshot) {
      console.log("data", snapshot.val())

      const data = []; 
      Object.keys(snapshot.val()).map(key => {
        data.push({
          id: key,
          data: snapshot.val()[key]
        })
      })
      dispatch({type: 'SET_NOTES', value:data})
      resolve(snapshot.val())
    })
  })
}

export const updateDataAPI = (data) => (dispatch) => {
  const urlNotes = ref(database, `users/${data.userId}/${data.noteId}`);
  return new Promise((resolve, reject)=> {
    
    set(urlNotes,{
      title: data.title,
    content: data.content,
    date: data.date,
    }, (err) =>  {
      if(err){
        reject(false);
      }else {
        resolve(true)
      }
    })
  })
}

export const deleteDataAPI = (data) => (dispatch) => {
  const urlNotes = ref(database, `users/${data.userId}/${data.noteId}`);
  return new Promise((resolve, reject)=> {
    
    remove(urlNotes, (err) =>  {
      
    })
  })
}