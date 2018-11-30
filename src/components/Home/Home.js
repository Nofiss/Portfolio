import React, { Component } from 'react';
import '../../css/Home/Home.css';
import Logo from '../../image/Logo.jpg'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <div className="titolo">Il mio Portfolio</div>
          <img src={Logo} alt="logo" className="imgHome" />
        </div>
      </div>
    )
  }
}

export default Home;
