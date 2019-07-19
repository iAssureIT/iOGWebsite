import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commonstream.css';


export default class Commonstream extends Component {
    
  DownstreamData(){
        return [
             {
                downstreamTitle : "Digital Services",
                hryperlink      : "digitalservices",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Asset Management",
                hryperlink      : "assetmanagement",
                downstreamimg   : "/images/Illustration_12.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            } 
            
        ]
    }


  

 render(){
       return(
        <div className="col-lg-12 contentWraper">
            <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-10 col-lg-offset-1">
                              <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                      <div className="col-lg-6 col-lg-offset-3"> 
                                            <a href="/Healthsafty">
                                                <div className="col-lg-12">
                                                    <div className=" lightbluetext block block1height text-center">
                                                        <img alt="" src="/images/Illustration_11.png" />
                                                        <h2>Health Safety & Environment</h2>
                                                    </div>
                                                </div>
                                            </a>     
                                       </div> 
                                        <div className="col-lg-12"> 
                                            {
                                              this.DownstreamData().map((data, index)=>{
                                                 return (
                                              <a key={index} href={"/"+data.hryperlink}>
                                                <div className="col-lg-6">
                                                    <div className=" lightbluetext block block1height text-center">
                                                        <img alt="" src={data.downstreamimg} />
                                                        <h2>{data.downstreamTitle}</h2>
                                                    </div>
                                                </div>
                                               </a>
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