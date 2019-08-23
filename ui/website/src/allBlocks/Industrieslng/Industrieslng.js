import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Industrieslng.css';

export default class Industrieslng extends Component {

  ServicesData(){
        return [
            {
                servicesTitle : "LNG",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/industries4.png",
                servicestext  : "The LNG value chain aggregately comprises of E&P, Liquefaction, Shipping, Re-gasification, and Storage. This simplified value chain poses have many hidden challenges for a typical LNG plant and its relative components. The global LNG industry has always been tipped towards excess demand as compared to supplies. The industry is expected to see several major hurdles as many countries have put a block on LNG exports to fullfill their domestic demand."
                    
                
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
                                        <a className="col-lg-4" href="/lng"><button className="lightbluebg buttonhover servicekbtn btn">Read More <span className="servicekbtnarrow">>></span></button></a>
                                    </div>
                                </div>
                                 );
                              })
                            }
                     </div>   
        );
    }
}