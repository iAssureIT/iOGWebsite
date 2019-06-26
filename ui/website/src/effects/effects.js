import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";


import './effects.css';
export default class Effects extends Component {

  componentDidMount(){
          var carousel = $(".carousel1"),
          currdeg  = 0;

      $(".next").on("click", { d: "n" }, rotate);
      $(".prev").on("click", { d: "p" }, rotate);

      function rotate(e){
        if(e.data.d=="n"){
          currdeg = currdeg - 72;
        }
        if(e.data.d=="p"){
          currdeg = currdeg + 72;
        }
        carousel.css({
          "transform": "rotateY("+currdeg+"deg)"
        });
      }
  }


  render(){
       return(

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 socialblock-bg">
            <div className="carocontainer1">
              <div className="carousel1">
                <figure className="item1 a">A</figure>
                <figure className="item1 b">B</figure>
                <figure className="item1 c">C</figure>
                <figure className="item1 d">D</figure>
                <figure className="item1 e">E</figure>
              </div>
            </div>
              <div className="next">Next</div>
              <div className="prev">Prev</div>
            </div>
        );
  } 

}