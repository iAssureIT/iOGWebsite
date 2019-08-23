import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Servicesdownblock.css';

export default class Servicesdownblock extends Component {

  ServicesData(){
        return [
            {
                servicesTitle : "Downstream",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/services1.png",
                servicestext  : "Oil & Gas downstream includes procurement and supply of Crude oil, refining operations, product blending, storage and distribution of finished products. The midstream operations such as trading, risk management, supply & distribution are also included in downstream verticals at iOG. In addition, it includes Petrochemicals and LNG facilities."
                    
                
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
                                            <a className="col-lg-4" href="downstream"><button className="lightbluebg servicekbtn buttonhover btn">Read More <span className="servicekbtnarrow">>></span></button></a>
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