import app from "firebase/app";

export const getNotesRef = async () =>
  JSON.parse(localStorage.getItem("authUser"))
    ? await app
        .database()
        .ref(`users/${JSON.parse(localStorage.getItem("authUser")).id}/notes`)
    : null;

export const getNoteRef = async id =>
  JSON.parse(localStorage.getItem("authUser")).id
    ? await app
        .database()
        .ref(
          `users/${JSON.parse(localStorage.getItem("authUser")).id}/notes/${id}`
        )
    : null;

export const createNote = async note => {
  const ref = await getNotesRef();
  ref.push(note);
};
