import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Industriesprocessing.css';

export default class Industriesprocessing extends Component {

  ServicesData(){
        return [
            {
                servicesTitle    : "Gas Processing",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg      : "/images/Gas_graphics.png",
                servicestext     : "Natural Gas Processing is in most aspects less complicated than the refining and processing crude oil, but its importance is as equal as crude oil. By separating all non-methane components and fluids from natural gas, we get pipeline-quality dry natural gas. This is done in Natural Gas Processing Plants which employs complex industrial process to get this impurity free dry natural gas."
                    
                
            } 
                        
        ]
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top">
                <div className="col-lg-2">
                  <div className="col-lg-11">
                    <div className="line1 col-lg-1 pull-right "></div>
                  </div>                    
                </div> 
                 {
                    this.ServicesData().map((data, index)=>{
                      return (   
                                <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                              <h2 className="lightbluetext para-top">{data.servicesTitle}</h2>
                                                <p className="line_subhead ">{data.servicesSubTitle}</p>
                                                <p className="line_para">{data.servicestext} </p>   
                                            </div>
                                            <a className="col-lg-4" href="/gasprocessing"><button className="lightbluebg buttonhover servicekbtn btn">Read More <span className="servicekbtnarrow">>></span></button></a>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                          <div className="col-lg-8 col-lg-offset-2 ">
                                            <div className="img1">
                                              <img src={data.servicesimg} alt="" className="intro_img" />
                                          </div>
                                        </div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                 );
                              })
                            }
                     </div>   
        );
    }
}