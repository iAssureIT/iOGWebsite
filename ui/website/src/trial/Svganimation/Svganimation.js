import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";


import './Svganimation.css';
export default class Svganimation extends Component {

  componentDidMount(){}

   

  render(){
       return(
        <div>
         <h1>My first SVG</h1>

        <svg width="100" height="100">
           <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
           Sorry, your browser does not support inline SVG.
        </svg> 
        </div>

        );
  } 

}