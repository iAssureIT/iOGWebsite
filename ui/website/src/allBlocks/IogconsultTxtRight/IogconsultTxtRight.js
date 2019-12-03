import React, { Component } from 'react';
// import { render } from 'react-dom';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './IogconsultTxtRight.css';

export default class IogconsultTxtRight extends Component {
    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 BT3_innerBlock">
                <div className="col-lg-6 col-md-6 hidden-sm hidden-xs img1">
                 <img src="/images/consultrightimg.png" alt="" className="BT3_iogconsult col-lg-offset-2" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <p className="BT3_text text-justify ">
                  <h1><b>Our Approach</b></h1>
                  iOG follows a structured methodology to assess<br/>
                goals and objectives, diagnose problems, define<br/> roadmaps and blueprints and finally implement the solution.</p>
                </div>
              </div>
            </div>   
        );
    }
}