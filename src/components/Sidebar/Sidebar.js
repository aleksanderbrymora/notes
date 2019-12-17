import React, {Component} from "react";
import Link from "react-router-dom";

const INITIAL_STATE = {
    isFetchDone: false,
    notes: [
        {
            title: '',
            content: ''
        }
    ]
};

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE}
    }

    async componentDidMount() {
        this.setState({isFetchDone: true});
    }

    render() {
        if (this.state.isFetchDone) {
            return(
                <div className="sidebar">
                    <button>Add Note</button>
                    <h2>Your notes</h2>
                    {
                        this.state.notes.map(note => (
                            <Sidenote />
                        ))
                    }
                </div>
            )
        } else return null
    }
}

export default Sidebar;