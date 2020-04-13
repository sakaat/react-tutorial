import React, { Component } from "react";
import firebase from "firebase";
import Router from "next/router";
import "firebase/storage";

class Fireadd extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 10px",
    };

    constructor(props) {
        super(props);
        this.state = {
            name_str: "",
            msg_str: "",
            lastID: -1,
            data: [],
        };
        this.getLastID();
        this.doChangeName = this.doChangeName.bind(this);
        this.doChangeMsg = this.doChangeMsg.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeName(e) {
        this.setState({
            name_str: e.target.value,
        });
    }
    doChangeMsg(e) {
        this.setState({
            msg_str: e.target.value,
        });
    }

    doAction(e) {
        this.addFireData();
        Router.push("/fire");
    }

    getLastID() {
        const db = firebase.database();
        const ref = db.ref("sample/");
        const self = this;
        ref.orderByKey()
            .limitToLast(1)
            .on("value", (snapshot) => {
                const res = snapshot.val();
                for (const i in res) {
                    self.setState({
                        lastID: i,
                    });
                    return;
                }
            });
    }

    addFireData() {
        if (this.state.lastID === -1) {
            return;
        }
        const id = this.state.lastID * 1 + 1;
        const db = firebase.database();
        const ref = db.ref("sample/" + id);
        ref.set({
            ID: id,
            message: this.state.msg_str,
            name: this.state.name_str,
        });
    }

    render() {
        if (this.state.lastID === -1) {
            this.getLastID();
        }
        return (
            <div>
                {this.state.lastID === -1 ? (
                    <p>please wait...</p>
                ) : (
                    <table>
                        <tbody>
                            <tr>
                                <th className="label">name</th>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="your name."
                                        onChange={this.doChangeName}
                                        value={this.state.name_str}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th className="label">message</th>
                                <td>
                                    <input
                                        type="text"
                                        size="40"
                                        placeholder="type message..."
                                        onChange={this.doChangeMsg}
                                        value={this.state.msg_str}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <button onClick={this.doAction}>Add</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

export default Fireadd;
