import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commoninfoblock.css';


export default class Commoninfoblock extends Component {

  
    render(){
        return(
            <div className="">
             { 
              this.props.infodata.map((data, index)=>{
                return ( 
                <div key="index">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <div className="img1 row">
                        <img src={data.servicesimg} alt="" className="services_img" />
                      </div>
                    </div>
                    <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                                            <p className="line_para text-justify">{data.servicestext2} </p>   
                                            <p className="line_para text-justify">{data.servicestext3} </p>   
                                          </div>    
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