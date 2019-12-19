import React, { Component } from "react";
import { withAuthorization } from "../Session";
import loader from "../Resources/loader.gif";
import Markdown from "markdown-it";
import Navigation from "../Navigation";
// import { debounce } from "underscore";
import { createNote, getAllNotes, getNotesRef } from "../Firebase/notes";

const INITIAL_STATE = {
  isFetchDone: false,
  title: "",
  input: "",
  parsed: "",
  notes: {}
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  async componentDidMount() {
    await createNote({ title: this.state.title, note: this.state.input });
    console.log("Created new note");

    const fetchedNotesRef = await getNotesRef();
    await fetchedNotesRef.on("value", res =>
      this.setState({
        notes: res.val(),
        isFetchDone: true
      })
    );
  }

  onChangeTitle = e => this.setState({ title: e.target.value });

  onChangeInput = e => {
    const md = new Markdown();
    const parsed = md.render(e.target.value);
    this.setState({
      parsed: parsed,
      input: e.target.value
    });
  };

  render() {
    // console.log(this.state);
    if (this.state.isFetchDone) {
      return (
        <div className={"page"}>
          <Navigation notes={this.state.notes} className={"navigation"} />
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
