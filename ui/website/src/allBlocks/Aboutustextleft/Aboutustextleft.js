import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutustextleft.css';

export default class Aboutustextleft extends Component {

  ServicesData(){
        return [
            {
                servicesTitle : "Company Profile",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/2.png",
                servicestext  : "iOG Solutions is an independent and reputed provider of consulting and implementation services on advanced and intelligent Software solutionsin the Oil & Gas industry. Our headquarters have been established since 2013 in Pune (India)."
                    
                
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