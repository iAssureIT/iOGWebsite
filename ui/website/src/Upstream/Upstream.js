import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Upstream.css';

export default class Upstream extends Component {
    upstreamData(){
        return [
            {
                upstreamTitle : "Geology & Geophysics 1",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            }, 
            {
                upstreamTitle : "Geology & Geophysics 2",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            }, 
            {
                upstreamTitle : "Geology & Geophysics 3",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            }, 
            {
                upstreamTitle : "Geology & Geophysics 4",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            }, 
            {
                upstreamTitle : "Geology & Geophysics 5",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            }
        ]
    }

    render(){
        return(
            <div className="col-lg-12 upstream-wrapper NOpadding">
                <div id="price" className="upstreamBg col-lg-12">
                    <div className="row">
                        <div className=" col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 text-center ">                        
                            <h1 className=" priceh1 pricefont-size-normal textcolorblue pricecolor-light">
                                iOG Solutions for Upstream Oil and Gas Industry
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="carocontainer">
                        <div id="carousel">
                            {
                                this.upstreamData().map((data, index)=>{
                                    return (
                                        <figure key={index} className={"item col-lg-12 col-md-12 col-sm-12 col-xs-12  pricehover-float NOpadding index"+index}>
                                            <div className="col-lg-12">
                                                <div className="price price-three col-lg-12">
                                                    <div className="price-badge1 bgiogyellow bg-grad-blood-mary col-lg-6 col-lg-offset-3">{data.upstreamTitle}</div>
                                                    <div className="price-body col-lg-12">
                                                        <ul>
                                                            {
                                                                data.upstreamLi.map((liDetail, index)=>{
                                                                    return(
                                                                        <li key={index}>{liDetail.liData}</li>
                                                                    );
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                    <div className="price-footer col-lg-12">
                                                        <input type="button" className="btn pricebtn1" value="View More"/>                                    
                                                    </div>
                                                </div>
                                            </div>                       
                                        </figure>
                                    );
                                })
                            }
                        </div>
                      </div> 
                    </div>
                </div>                
            </div>   
        );
    }
}