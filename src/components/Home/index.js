import React, { Component } from "react";
import { withAuthorization } from "../Session";
import loader from "../Resources/loader.gif";

const INITIAL_STATE = {
  isFetchDone: false,
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  async componentDidMount() {
    this.setState({isFetchDone: true});
  }

  render() {
    if (this.state.isFetchDone) {
      return (
        <div className={'page'}>
          <div className="left">
            test
          </div>
          <div className="right">
            test
          </div>
        </div>
      );
    } else return <img src={loader} className={"loader"} alt={"loading"} />;
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
