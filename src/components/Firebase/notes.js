import firebase from "firebase";

export const getNotesRef = async () =>
  await firebase
    .database()
    .ref(`users/${JSON.parse(localStorage.getItem("authUser")).id}/notes`);

export const createNote = async note => {
  // const ref = await getNotesRef();
  // ref.push(note);
};

export const updateNote = async note => {
  // const ref = await getNotesRef();
};
