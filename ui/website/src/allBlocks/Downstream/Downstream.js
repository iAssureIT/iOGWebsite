import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Downstream.css';


export default class Downstream extends Component {
    
  DownstreamData(){
        return [
            {
                downstreamTitle  : "Supply Chain Management",
                downstreamTitle1 : "",
                hryperlink       : "/supply-chain-management",
                downstreamimg    : "/images/Illustration_2.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Asset Management",
                downstreamTitle1: "",
                hryperlink      : "/asset-performance-management",
                downstreamimg   : "/images/Illustration_12.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },
            {
                downstreamTitle  : "APC Services",
                downstreamTitle1 : "",
                hryperlink       : "/apc-services",
                downstreamimg    : "/images/Illustration_4.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle  : "Simulation & Modelling",
                downstreamTitle1 : "",
                hryperlink       : "/simulation-and-modelling",
                downstreamimg    : "/images/Illustration_5.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle  : "Energy Management",
                downstreamTitle1 : " ",
                hryperlink       : "/energy-management",
                downstreamimg    : "/images/Illustration_6.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },
             {
                downstreamTitle  : "ETRM & Pricing Tool ",
                downstreamTitle1 : "",
                hryperlink       : "/etrm",
                downstreamimg    : "/images/Illustration_7.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },
            {
                downstreamTitle : "Digital Services",
                downstreamTitle1: "",
                hryperlink      : "/digital-services",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },
            {
                downstreamTitle  : "Manufacturing Execution Systems",
                downstreamTitle1 : "",
                hryperlink       : "/manufacturing-execution-system",
                downstreamimg    : "/images/Illustration_3.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },  
           
            {
                downstreamTitle : "Health Safety & Environment ",
                downstreamTitle1: "",
                hryperlink      : "/health-safety-environment",
                downstreamimg   : "/images/Illustration_11.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            } 
            
            
        ]
    }

    componentWillMount() {
        $(window).scroll(function() 
            
        {    
            var scroll = $(window).scrollTop();

            if (scroll >= 350) {
                $(".para0").addClass("paraeff");
            } else {
                $(".para0").removeClass("paraeff");
            }
            if (scroll >= 350) {
                $(".para1").addClass("paraeff");
            } else {
                $(".para1").removeClass("paraeff");
            }
            if (scroll >= 350) {
                $(".para2").addClass("paraeff");
            } else {
                $(".para2").removeClass("paraeff");
            }
            if (scroll >= 650) {
                $(".para3").addClass("paraeff");
            } else {
                $(".para3").removeClass("paraeff");
            }
            if (scroll >= 650) {
                $(".para4").addClass("paraeff");
            } else {
                $(".para4").removeClass("paraeff");
            }
            if (scroll >= 650) {
                // console.log("second scroll---",scroll);
                $(".para5").addClass("paraeff");
            } else {
                $(".para5").removeClass("paraeff");
            }
             if (scroll >= 1000) {
              console.log("scroll===",scroll);
                $(".para6").addClass("paraeff");
            } else {
                $(".para6").removeClass("paraeff");
            }
            if (scroll >= 1000) {
                $(".para7").addClass("paraeff");
            } else {
                $(".para7").removeClass("paraeff");
            }
            if (scroll >= 1000) {
                $(".para8").addClass("paraeff");
            } else {
                $(".para8").removeClass("paraeff");
            }
        });
    }

  

 render(){
       return(
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contentWraper"style={{marginBottom:"50px"}}>
            <div className="row">
               
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  contentheader text-center">
                    <hr/>
                     <h2 style={{color:"#333"}}><b>Downstream Oil & Gas Industry</b></h2>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="">
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-sm-offset-1 col-xs-offset-1 col-lg-offset-1 col-md-offset-1"> 
                                    {
                                      this.DownstreamData().map((data, index)=>{
                                        // console.log("data----------",data);
                                         return (
                                        <a key={index} href={data.hryperlink}>
                                        <div  className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 para"+index}>
                                            <div className="lightbluetext block block1height text-center">
                                                <img alt="" className="streamImg" src={data.downstreamimg} />
                                                <br/>
                                                <label className="downTitle">{data.downstreamTitle}</label>
                                                <br/>
                                                <label className="downTitle">{data.downstreamTitle1}</label>
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
        );
    } 
}

