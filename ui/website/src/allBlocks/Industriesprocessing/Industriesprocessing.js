import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Industriesprocessing.css';

export default class Industriesprocessing extends Component {

  ServicesData(){
        return [
            {
                servicesTitle : "Gas Processing",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/2.png",
                servicestext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            } 
                        
        ]
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top">
                <div className="col-lg-3">
                  <div className="col-lg-6">
                    <div className="line1 col-lg-1 pull-right "></div>
                  </div>                    
                </div> 
                 {
                    this.ServicesData().map((data, index)=>{
                      return (   
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="col-lg-12">
                                          <h2 className="textcolorblue para-top">{data.servicesTitle}</h2>
                                            <p className="text-justify ">
                                             <div className="line_subhead">{data.servicesSubTitle}</div>
                                             <br></br>
                                            <p className="line_para">{data.servicestext} </p>
                                           </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                      <div className="img1">
                                        <img src={data.servicesimg} alt="" className="intro_img" />
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