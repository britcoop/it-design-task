import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
