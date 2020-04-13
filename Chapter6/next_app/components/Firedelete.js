import React, { Component } from "react";
import firebase from "firebase";
import Router from "next/router";
import "firebase/storage";

class Firedelete extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 10px",
    };

    constructor(props) {
        super(props);
        this.state = {
            id_str: "",
        };
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        this.setState({
            id_str: e.target.value,
        });
    }

    doAction(e) {
        this.deleteFireData();
        Router.push("/fire");
    }

    deleteFireData() {
        const id = this.state.id_str;
        const db = firebase.database();
        const ref = db.ref("sample/" + id);
        ref.remove();
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th className="label">ID:</th>
                            <td>
                                <input
                                    type="text"
                                    placeholder="delete ID:"
                                    onChange={this.doChange}
                                    value={this.state.id_str}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>
                                <button onClick={this.doAction}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Firedelete;
