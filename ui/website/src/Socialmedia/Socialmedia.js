import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Socialmedia.css';
export default class Socialmedia extends Component {


  render(){
       return(

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 socialblock-bg">
              <h1>3d images gallery</h1>
                  <div className="container">
                    <div id="carousel">
                      <figure><img src="http://lorempixel.com/186/116/nature/1" alt=""/></figure>
                      <figure><img src="http://lorempixel.com/186/116/nature/2" alt=""/></figure>
                      <figure><img src="http://lorempixel.com/186/116/nature/3" alt=""/></figure>
                      <figure><img src="http://lorempixel.com/186/116/nature/4" alt=""/></figure>
                      <figure><img src="http://lorempixel.com/186/116/nature/5" alt=""/></figure>
                      <figure><img src="http://lorempixel.com/186/116/nature/6" alt=""/></figure>
                      <figure><img src="http://lorempixel.com/186/116/nature/7" alt=""/></figure>
                      <figure><img src="http://lorempixel.com/186/116/nature/8" alt=""/></figure>
                      <figure><img src="http://lorempixel.com/186/116/people/9" alt=""/></figure>
                    </div>
                  </div> 
                  </div>
        );
  } 

}