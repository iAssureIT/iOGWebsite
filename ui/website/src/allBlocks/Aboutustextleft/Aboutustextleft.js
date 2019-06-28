import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutustextleft.css';

export default class Aboutustextleft extends Component {
    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-3">
                  <div className="col-lg-7">
                    <div className="line1 col-lg-1 pull-right "></div>
                  </div>                    
                </div>                    
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="col-lg-12">
                          <h2 className="textcolorblue para-top"><b>Company</b> Profile</h2>
                          <p className="text-justify ">
                           <div className="line_subhead">iOG Solutions stands for intelligent O&G solutions.</div>
                           <br></br>
                           <p className="line_para">iOG Solutions is an independent and reputed <b>provider of con-<br></br>
                           sulting and implementation services on advanced and intel-<br></br>
                           ligent Software solutions</b>in the Oil & Gas industry. Our head-<br></br>
                           quarters have been established since 2013 in Pune (India).
                           </p>
                           </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                      <div className="img1">
                        <img src="/images/2.png" alt="" className="intro_img" />
                    </div>
                    </div>
                </div>
            </div>   
        );
    }
}