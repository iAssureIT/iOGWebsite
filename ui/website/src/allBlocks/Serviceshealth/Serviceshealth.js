import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Serviceshealth.css';

export default class Serviceshealth extends Component {

  ServicesData(){
        return [
            {
                servicesTitle : "Health Safety & Environment",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/services4.png",
                servicestext  : "The Oil and gas industry has always faced a moral dilemma related to environmental sustenance and it has seen some of the major disasters and accidents which have contributed to vast safety and environmental problems in the past."
                    
                
            } 
                        
        ]
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top">
                 {
                    this.ServicesData().map((data, index)=>{
                      return (   
                                <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                      <div className="col-lg-8 col-lg-offset-2 ">
                                        <div className="img1">
                                          <img src={data.servicesimg} alt="" className="intro_img" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="col-lg-3">
                                          <div className="col-lg-11">
                                            <div className="line1 col-lg-1 pull-right "></div>
                                          </div>                    
                                        </div> 
                                        <div className="col-lg-12">
                                          <h2 className="lightbluetext para-top">{data.servicesTitle}</h2>
                                            <p className="line_subhead">{data.servicesSubTitle}</p>
                                            <p className="line_para">{data.servicestext} </p>   
                                        </div>
                                        <a className="col-lg-4" href="Healthsafty"><button className="lightbluebg servicekbtn buttonhover btn">Read More <span className="servicekbtnarrow">>></span></button></a>
                                    </div>
                                </div>
                                 );
                              })
                            }
                     </div>   
        );
    }
}