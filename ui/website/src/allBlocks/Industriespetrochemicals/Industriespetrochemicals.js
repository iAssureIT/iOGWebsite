import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Industriespetrochemicals.css';

export default class Industriespetrochemicals extends Component {

  ServicesData(){
        return [
            {
                servicesTitle : "Petrochemicals",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/industries2.png",
                servicestext  : "The petrochemical industry has seen substantial rapid growth during the past several years due to its higher value addition in recent volatile oil market. Multiple oil & gas downstream majors are now transforming from stand-alone refineries to integrated refining and petrochemical complex. Such an integrated configuration provides flexibility to refiners to tackle price volatility of crude oil and shrinking refining margins, thus ensuring enhanced and stable cash flows. "
                    
                
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
                                        <a className="col-lg-4" href="/petrochemicals"><button className="lightbluebg buttonhover servicekbtn btn">Read More <span className="servicekbtnarrow">>></span></button></a>
                                    </div>
                                </div>
                                 );
                              })
                            }
                     </div>   
        );
    }
}