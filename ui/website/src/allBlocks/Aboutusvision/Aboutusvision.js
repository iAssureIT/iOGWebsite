import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutusvision.css';

export default class Aboutusvision extends Component {
    render(){
        return(
          
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img1">
                      <img src="/images/visionabout.png" alt="" className="plane" />
                 </div>
                      <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blck blck1height b1width">
                              <h2 className="line_subhead textcolorblue vision_align1">VISION</h2>
                              <p className="text-justify vision_align">
                              <b>To be a global market leader in Intelligent Support
                              Systems for Oil and Gas Industry.</b>
                               </p>
                               </div>
                               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blck blck2height b2width">
                               <h2 className="line_subhead textcolorblue mission_align">MISSION</h2>
                               <p className="text-justify">
                                  <b>Nurture a talented team of professionals to provide
                                  best-in-class consulting and implementation servic-
                                  es improving the profitability of our valued clients
                                  across the globe.</b>
                               </p>
                               </div>                                       
                          </div>
                      </div>
                </div>
            </div>
        );
    }
}