import React, { Component } from 'react';
import Images from './Images';
import './Images.css';

class App extends Component{
  render(){
  return (
    <div className="popupParent">
        <div className="popupImage">
            <button 
            className="imageClosingButton"
            onClick={this.props.closePopup}

            >
                X

            </button>
            <img src={this.props.popImageUrl} />



        </div>
      <Images />
    </div>
  );
  }
}

export default App;
