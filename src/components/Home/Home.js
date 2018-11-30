import React, { Component } from 'react';
import '../../css/Home/Home.css';
import Logo from '../../image/Logo.jpg';
import Footer from '../Footer/Footer.js';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <div className="titolo">Il mio Portfolio</div>
          <img src={Logo} alt="logo" className="imgHome" />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home;
