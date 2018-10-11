import React, { Component } from "react";
//import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Contact">
        <form onSubmit={e => e.preventDefault()}>
          <textarea name="" id="" cols="30" rows="10" />
        </form>
      </div>
    );
  }
}
export default Contact;
