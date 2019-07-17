import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commonservicesblock.css';


export default class Commonservicesblock extends Component {
    
  

  

 render(){
       return(
        <div className="col-lg-12 contentWraper mt100">
            <div className="row">
                <div className="Bubble" >
                            <div className="Main_Cards__Bubble bub1"></div>
                            <div className="Main_Cards__Bubble bub2"></div>
                        </div>
                    <div className="col-lg-12 lightbluetext contentheader text-center">
                    <hr/>
                        <h1 className="">Services</h1>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-12">
                              <div className="row">
                                <div className="col-lg-12">
                                    <div className="row"> 
                                        <div className="col-lg-10 col-lg-offset-1"> 
                                            {
                                              this.props.servicedata.map((data, index)=>{
                                                 return (
                                                <div key={index} className="col-lg-4">
                                                    <div className="downstreamservicesblock text-center">
                                                        <img alt="" src={data.downstreamimg} />
                                                        <h2>{data.downstreamTitle}</h2>
                                                    </div>
                                                </div>
                                                 );
                                              })
                                            }
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
    } 
}