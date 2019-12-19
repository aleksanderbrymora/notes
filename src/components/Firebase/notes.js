import app from "firebase/app";

export const getNotesRef = async () =>
  await app
    .database()
    .ref(`users/${JSON.parse(localStorage.getItem("authUser")).id}/notes`);

export const getNoteRef = async id =>
  await app
    .database()
    .ref(
      `users/${JSON.parse(localStorage.getItem("authUser")).id}/notes/${id}`
    );

export const createNote = async note => {
  const ref = await getNotesRef();
  ref.push(note);
};

export const updateNote = async note => {
  // const ref = await getNotesRef();
};
