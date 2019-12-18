import React, { Component } from "react";
import { withAuthorization } from "../Session";
import loader from "../Resources/loader.gif";
import Markdown from "markdown-it";

const INITIAL_STATE = {
  isFetchDone: false,
  title: "",
  input: "",
  parsed: ""
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  async componentDidMount() {
    // TODO fetch all the notes
    // TODO Update current note
    this.setState({ isFetchDone: true });
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
    if (this.state.isFetchDone) {
      return (
        <div className={"page"}>
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
