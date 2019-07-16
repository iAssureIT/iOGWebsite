import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Healthinfoblock.css';


export default class Healthinfoblock extends Component {

  ServicesData(){
        return [
            {
                servicesTitle : "Health Safety & Environment",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/2.png",
                servicestext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            } 
                        
        ]
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 {
                    this.ServicesData().map((data, index)=>{
                      return (   
                                <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                          <div className="col-lg-4 col-lg-offset-4 ">
                                            <div className="img1">
                                              <img src={data.servicesimg} alt="" className="services_img" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12 text-center mt100">
                                            <div className="col-lg-12">
                                                  <div className="col-lg-2 col-lg-offset-5">
                                                    <div className="line1 col-lg-1 col-lg-offset-2"></div>
                                                  </div>                    
                                            </div> 
                                            <div className="col-lg-12">
                                              <h2 className="lightbluetext para-top">{data.servicesTitle}</h2>
                                                <p className="line_subhead ">{data.servicesSubTitle}</p>
                                                <p className="line_para">{data.servicestext} </p>   
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