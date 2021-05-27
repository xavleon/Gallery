import React, { Component } from 'react';
import "./Images.css";
import Popup from "./Popup";

class Images extends Component{
    constructor(props) {
        super(props)
        this.state= {
            imageUrl: "",
            imageUrlArray: [
                "https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089_960_720.jpg",
                "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg",
                "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
                "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg",
                "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",
                "https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg",
                "https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050_960_720.jpg",






            ],
            showModal: false,
            popImageUrl: ""
        } 
    }
    imageSubmitter = (e) => {
        e.preventDefault();
        let imageUrlArray = this.state.imageUrlArray;
        imageUrlArray.push(this.state.imageUrl)
        this.setState({
            imageUrlArray: imageUrlArray
        })
    }

    handleLinkChange = (e) => {
        e.preventDefault();
        this.setState({
            imageUrl: e.target.value

        })
        
    }

    handlePopup = (url) => {
        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url

        })

    }




  render(){
      let imageUrlArray = this.state.imageUrlArray;
      const images = imageUrlArray.map((url, index) => {
          return(
              <img
              className="singleImage"
              src={url}
              key={index}
              onClick={() => this.handlePopup(url)}
              />
          )
      })
  return (
    <div className="Images">
         <h2>Gym Selfie ?</h2> 
             
         <h3>add to our gallery</h3>
         
        <form onSubmit={this.imageSubmitter}>
            <input
            type="text"
            placeholder="insert image url"
            onChange={this.handleLinkChange}
            
            />
           
            <button type="Submit" className="submitButton">Submit Image</button>

        </form>
        {images}
        {this.state.showModal ? (
            <Popup 
            popImageUrl={this.state.popImageUrl}
            closePopup={this.handlePopup}
        />
        ) : null}
        
        </div>
    );
  }
}



export default Images;
