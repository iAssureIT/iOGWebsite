import React, { Component } from 'react';
import { render } from 'react-dom';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutustextright.css';

export default class Aboutustextright extends Component {
    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-6 col-md-6 hidden-sm hidden-xs img1">
                 <img src="/images/3.png" alt="" className="third_img" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <h2></h2>
                  <p className="line_para1 text-justify ">
                  We have a strong team of team of motivated
                  and self-driven consultants with strong
                  domain knowledge in areas of Supply Chain
                  Management (SCM), Manufacturing Execution 
                  Systems (MES), Simulation & Modeling,
                  Energy Management, Asset Reliability & Integrity Management (RIM), Environmental-Health-Safety (EHS), Enabling Technolgies and Oil & Gas E&P services.
                  </p>
                </div>
              </div>
            </div>   
        );
    }
}