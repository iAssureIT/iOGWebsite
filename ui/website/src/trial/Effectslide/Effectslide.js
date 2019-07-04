import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import "./Effectslide.css";
export default class Effectslide extends Component {
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
            <div className="col-lg-12 NOpadding">
                <label>
                    <span class="toggler">Toggle button</span>
                    <input class="visually-hidden" type="checkbox"/>
                    <span class="toggled">Toggled content</span>
                </label>              
            </div>   
        );
    }
}