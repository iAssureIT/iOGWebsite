import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Downstreaminfoblock.css';


export default class Downstreaminfoblock extends Component {

  ServicesData(){
        return [
            {
                servicesTitle : "Downstream",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio a dui facilisis convallis et at enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nulla porta, auctor neque id, aliquam erat. Sedbibendum dictum nunc sit amet ultricies. Duis ac condimentum mi. Morbi at nisl pulvinar arcu pulvinar bibendum.Cras eu felis consectetur, aliquet nulla vitae, maximus nunc. Vivamus posuere quam non pellentesque laoreet."
                    
                
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
                                            <div className="img1">
                                              <img src={data.servicesimg} alt="" className="services_img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt100">
                                            <div className="col-lg-12">
                                                  <div className="col-lg-2 col-lg-offset-5">
                                                    <div className="line1 col-lg-1 col-lg-offset-2"></div>
                                                  </div>                    
                                            </div> 
                                            <div className="col-lg-12">
                                              <h2 className="lightbluetext para-top">{data.servicesTitle}</h2>
                                                <div className="col-lg-12">
                                                  <div className="col-lg-12">
                                                      <div className="col-lg-12">
                                                        <p className="line_para text-justify">{data.servicestext} </p>   
                                                        <p className="line_para text-justify">{data.servicestext} </p>   
                                                        <p className="line_para text-justify">{data.servicestext} </p> 
                                                      </div>    
                                                  </div>    
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