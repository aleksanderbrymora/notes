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
  notes: {},
  saving: false
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

  loadNote = async noteID => {
    this.setState({
      title: "",
      input: "",
      noteID: noteID,
      parsed: "",
      created: true
    });
    getNoteRef(noteID).then(noteRef =>
      noteRef.on("value", res => {
        const noteInfo = res.val();
        const md = new Markdown();
        const parsed = md.render(noteInfo.note);
        this.setState({
          title: noteInfo.title,
          input: noteInfo.note,
          parsed
        });
      })
    );
  };

  debounceTitleChange = debounce(async title => {
    const noteRef = await getNoteRef(this.state.noteID);
    noteRef.update({ title: this.state.title });
    this.setState({ saving: false });
    console.log("updated title");
  }, 1000);

  debounceInputChange = debounce(async input => {
    const noteRef = await getNoteRef(this.state.noteID);
    noteRef.update({ note: this.state.input });
    this.setState({ saving: false });
    console.log("updated input");
  }, 3000);

  createNoteIfNeeded = async e => {
    await createNote({ title: this.state.title, note: this.state.input });
    const fetchedNotesRef = await getNotesRef();
    await fetchedNotesRef.on("value", res => {
      const notesKeys = Object.keys(res.val());
      this.setState({
        noteID: notesKeys[notesKeys.length - 1],
        created: true
      });
    });
  };

  onChangeTitle = async e => {
    e.persist();
    this.setState({ title: e.target.value, saving: true });
    if (!this.state.created) this.createNoteIfNeeded(e);
    else this.debounceTitleChange(e.target.value);
  };

  onChangeInput = async e => {
    const md = new Markdown();
    const parsed = md.render(e.target.value);
    this.setState({
      parsed: parsed,
      input: e.target.value,
      saving: true
    });
    if (!this.state.created) this.createNoteIfNeeded(e);
    else this.debounceInputChange(e.target.value);
  };

  render() {
    if (this.state.isFetchDone) {
      return (
        <div className={"page"}>
          <Navigation
            loadNote={this.loadNote}
            createNewNote={this.createNewNote}
            notes={this.state.notes}
            className={"navigation"}
          />
          <div className="left">
            <div>
              <p className="saving">
                {this.state.saving ? "Saving..." : "Saved"}
              </p>
              <input
                placeholder={"Title"}
                autoFocus
                name={"title"}
                value={this.state.title}
                className={"title"}
                onChange={this.onChangeTitle}
                autoComplete={"off"}
              />
            </div>
            <textarea
              placeholder={"Your note..."}
              name={"input"}
              value={this.state.input}
              className={"user-input"}
              onChange={this.onChangeInput}
              autoComplete={"off"}
            />
          </div>
          <div className="right">
            <h1 className={"main-heading"}>{this.state.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: this.state.parsed }} />
          </div>
        </div>
      );
    } else return <img src={loader} className={"loader"} alt={"loading"} />;
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
