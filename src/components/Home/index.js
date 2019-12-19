import React, { Component } from "react";
import { withAuthorization } from "../Session";
import loader from "../Resources/loader.gif";
import Markdown from "markdown-it";
import Navigation from "../Navigation";
import { debounce } from "underscore";
import { createNote, getNotesRef, getNoteRef } from "../Firebase/notes";

const INITIAL_STATE = {
  isFetchDone: false,
  title: "",
  input: "",
  parsed: "",
  created: false,
  noteID: "",
  notes: {}
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  async componentDidMount() {
    const fetchedNotesRef = await getNotesRef();
    await fetchedNotesRef.on("value", res => {
      this.setState({
        notes: res.val(),
        isFetchDone: true
      });
    });
  }

  createNewNote = async () => {
    this.setState({
      title: "",
      input: "",
      noteID: "",
      created: false
    });
    console.log("Created new note");
  };

  debounceTitleChange = debounce(async title => {
    // todo debounce changes to title and send them to db
    const noteRef = await getNoteRef(this.state.noteID);
    noteRef.update({ title: this.state.title });
    console.log("debounced");
  }, 1000);

  onChangeTitle = async e => {
    e.persist();
    this.setState({ title: e.target.value });
    if (!this.state.created) {
      await createNote({ title: this.state.title, note: this.state.input });
      const fetchedNotesRef = await getNotesRef();
      await fetchedNotesRef.on("value", res => {
        const notesKeys = Object.keys(res.val());
        this.setState({
          noteID: notesKeys[notesKeys.length - 1],
          title: e.target.value,
          created: true
        });
        console.log(this.state.noteID);
      });
    } else {
      this.debounceTitleChange(e.target.value);
    }
  };

  onChangeInput = e => {
    const md = new Markdown();
    const parsed = md.render(e.target.value);
    this.setState({
      parsed: parsed,
      input: e.target.value
    });
  };

  render() {
    if (this.state.isFetchDone) {
      return (
        <div className={"page"}>
          <Navigation
            createNewNote={this.createNewNote}
            notes={this.state.notes}
            className={"navigation"}
          />
          <div className="left">
            <input
              placeholder={"Title"}
              autoFocus
              name={"title"}
              value={this.state.title}
              className={"title"}
              onChange={this.onChangeTitle}
            />
            <textarea
              placeholder={"Your note..."}
              name={"input"}
              value={this.state.input}
              className={"user-input"}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="right">
            <h1>{this.state.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: this.state.parsed }} />
          </div>
        </div>
      );
    } else return <img src={loader} className={"loader"} alt={"loading"} />;
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
