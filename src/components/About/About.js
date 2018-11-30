import React, { Component } from 'react';
import '../../css/About/About.css';
import logo from '../../image/Logo.jpg';
import foto from '../../image/foto.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo" className="imgAbout" />
        <div className="about">
          <h1 className="titoloAbout">Mio Nome</h1>
          <img src={foto} alt="foto" className="foto" />
          <p className="testo">Qua ci dovrebbe essere scritto qualcosa su di me ma non avendo voglia non lo scriverò e scriverò invece qualche parola a caso solo per riempire spazio e così poter fare una paginetta</p>
        </div>
      </div>
    )
  }
}

export default About;
