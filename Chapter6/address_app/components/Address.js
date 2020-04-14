import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import firebase from "firebase";
import Lib from "../static/address_lib";
import Account from "../components/Account";

class Address extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 10px",
    };

    constructor(props) {
        super(props);
        this.logined = this.logined.bind(this);
    }

    logined() {
        this.getFireData();
    }
    logouted() {
        Router.push("/address");
    }

    getFireData() {
        if (this.props.email === undefined || this.props.email === "") {
            return;
        }
        const email = Lib.encodeEmail(this.props.email);
        const db = firebase.database();
        const ref = db.ref("address/");
        const self = this;
        ref.orderByKey()
            .equalTo(email)
            .on("value", (snapshot) => {
                const d = Lib.deepcopy(snapshot.val());
                this.props.dispatch({
                    type: "UPDATE_USER",
                    value: {
                        login: this.props.login,
                        username: this.props.username,
                        email: this.props.email,
                        data: d,
                        items: self.getItem(d),
                    },
                });
            });
    }

    getItem(data) {
        if (data === undefined) {
            return;
        }
        const res = [];
        for (const i in data) {
            for (const j in data[i]) {
                const email = Lib.decodeEmail(j);
                const s = data[i][j]["name"];

                res.push(
                    <li
                        key={j}
                        data-tag={email}
                        onClick={this.go.bind(null, email)}
                    >
                        {data[i][j]["check"] ? <b>✓</b> : ""}
                        {s} ({email})
                    </li>,
                );
            }
            break;
        }
        return res;
    }

    go(email) {
        Router.push("/address_show?email=" + email);
    }

    render() {
        return (
            <div>
                <Account onLogined={this.logined} onLogouted={this.logouted} />
                <ul>
                    {this.props.items === [] ? (
                        <li key="0">no item.</li>
                    ) : (
                        this.props.items
                    )}
                </ul>
            </div>
        );
    }
}

Address = connect((state) => state)(Address);
export default Address;
