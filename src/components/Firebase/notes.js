import firebase from "firebase";

const getNotesRef = async () =>
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

// export const getAllNotes = async () => {
//   const ref = await getNotesRef();
//   return await ref.on("value", res => {
//     console.log(res.val());
//     return res.val();
//   });
// };

export const getAllNotes = async () => {
  const ref = await getNotesRef();
  console.log(ref);
  let notes;
  ref.on("value", snapshot => snapshot);
};
