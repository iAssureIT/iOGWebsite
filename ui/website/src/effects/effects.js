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
                <div className="item1 a">A</div>
                <div className="item1 b">B</div>
                <div className="item1 c">C</div>
                <div className="item1 d">D</div>
                <div className="item1 e">E</div>
              </div>
            </div>
              <div className="next">Next</div>
              <div className="prev">Prev</div>
            </div>
        );
  } 

}