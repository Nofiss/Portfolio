import React, { Component } from 'react';
import '../../css/Contact/Contact.css';
import logo from '../../image/Logo.jpg';
import Register from '../Register/Register.js'

class Contact extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo" className="imgContact" />
        <h1 className="bold titoloContact">Registrati</h1>
        <div className="form">
          <Register />
        </div>
      </div>
    )
  }
}

export default Contact;
