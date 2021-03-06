import React from "react";

import Login from "./login";
import Balance from "./balance";

import storage from "./../models/storage";
import messaging from "./message";

export default class Popup extends React.Component {
  constructor(opts) {
    super(opts);

    this.state = {
      storage: true,
      login: true,
      error: true
    };
  }

  // componentDidMount() {
  //   messaging.send({
  //     type: "has_wallet"
  //   });

  //   this.addListeners();
  // }

  // addListeners() {
  //   messaging.on("has_wallet_result", data => {
  //     this.setState({
  //       ...data
  //     });
  //   });

  //   messaging.on("wallet_create_success", data => {
  //     this.setState({
  //       storage: true,
  //       login: true
  //     });
  //   });

  //   messaging.on("wallet_auth_result", res => {
  //     if (!res) {
  //       this.setState({ error: true });
  //     } else {
  //       this.setState({
  //         storage: true,
  //         login: true
  //       });
  //     }
  //   });
  // }

  // onSend = () => {
  //   messaging.send({
  //     type: "tx_create"
  //   });
  // };

  render() {
    return (
      <div>
        <Balance onSend={this.onSend} />
      </div>
    );
  }
}
