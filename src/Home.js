import React, { Component } from 'react';
import './styles.css';
import Game from './Game.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TicTacToe With React</h2>
        </div>
        <p className="App-intro">
          <Game></Game>
        </p>
        <div>
          <input type="button" value="Actualizar" onclick="location.reload()"/>
         </div>
      </div>
      
    );
  }
}

export default Home;
