import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Downstreamservicebanner.css';


export default class Downstreamservicebanner extends Component {

  
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
                              </div>
                                 );
                              })
                            
                            }
                     </div>   
        );
    }
}