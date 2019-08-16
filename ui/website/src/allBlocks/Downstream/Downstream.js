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
                downstreamTitle : "Supply Chain Management",
                hryperlink      : "supplychain",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Manufacturing Execution Systems",
                hryperlink      : "manufacturesystem",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "APC Services",
                hryperlink      : "apc-services",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Simulation & Modelling",
                hryperlink      : "simulation",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Energy Management",
                hryperlink      : "apc-services",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },
             {
                downstreamTitle : "ETRM and Pricing Tool Application",
                hryperlink      : "etrm",
                downstreamimg   : "/images/Illustration_7.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }
            
        ]
    }

    componentWillMount() {
        $(window).scroll(function() 
    {    
        var scroll = $(window).scrollTop();

        if (scroll >= 550) {
            $(".para0").addClass("paraeff");
        } else {
            $(".para0").removeClass("paraeff");
        }
        if (scroll >= 550) {
            $(".para1").addClass("paraeff");
        } else {
            $(".para1").removeClass("paraeff");
        }
        if (scroll >= 1000) {
            $(".para2").addClass("paraeff");
        } else {
            $(".para2").removeClass("paraeff");
        }
        if (scroll >= 1000) {
            $(".para3").addClass("paraeff");
        } else {
            $(".para3").removeClass("paraeff");
        }
        if (scroll >= 1300) {
            $(".para4").addClass("paraeff");
        } else {
            $(".para4").removeClass("paraeff");
        }
        if (scroll >= 1300) {
            $(".para5").addClass("paraeff");
        } else {
            $(".para5").removeClass("paraeff");
        }
    });
    }

  

 render(){
       return(
        <div className="col-lg-12 contentWraper">
            <div className="row">
                <div className="Bubble" >
                            <div className="Main_Cards__Bubble bub1"></div>
                            <div className="Main_Cards__Bubble bub2"></div>
                        </div>
                    <div className="col-lg-12 lightbluetext contentheader text-center">
                    <hr/>
                        <h1>iOG Solutions for</h1><h2> Downstream Oil & Gas Industry</h2>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-12">
                              <div className="row">
                                <div className="col-lg-12">
                                    <div className="row"> 
                                        <div className="col-lg-10 col-lg-offset-1"> 
                                            {
                                              this.DownstreamData().map((data, index)=>{
                                                 return (
                                                <a key={index} href={"/"+data.hryperlink}>
                                                <div  className={"col-lg-6 para"+index}>
                                                    <div className="lightbluetext block block1height text-center">
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