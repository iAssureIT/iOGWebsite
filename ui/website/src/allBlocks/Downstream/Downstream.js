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
                hryperlink       : "masterpage/supply-chain-management",
                downstreamimg    : "/images/Illustration_2.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Asset Management",
                downstreamTitle1: "",
                hryperlink      : "masterpage/asset-management",
                downstreamimg   : "/images/Illustration_12.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },
            {
                downstreamTitle  : "APC Services",
                downstreamTitle1 : "",
                hryperlink       : "masterpage/apc-services",
                downstreamimg    : "/images/Illustration_4.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle  : "Simulation & Modelling",
                downstreamTitle1 : "",
                hryperlink       : "masterpage/simulation-and-modeling",
                downstreamimg    : "/images/Illustration_5.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle  : "Energy Management",
                downstreamTitle1 : " ",
                hryperlink       : "masterpage/energy-management",
                downstreamimg    : "/images/Illustration_6.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },
             {
                downstreamTitle  : "ETRM & Pricing Tool ",
                downstreamTitle1 : "",
                hryperlink       : "masterpage/etrm",
                downstreamimg    : "/images/Illustration_7.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
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
        if (scroll >= 600) {
            $(".para3").addClass("paraeff");
        } else {
            $(".para3").removeClass("paraeff");
        }
        if (scroll >= 600) {
            $(".para4").addClass("paraeff");
        } else {
            $(".para4").removeClass("paraeff");
        }
        if (scroll >= 600) {
            $(".para5").addClass("paraeff");
        } else {
            $(".para5").removeClass("paraeff");
        }
    });
    }

  

 render(){
       return(
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contentWraper">
            <div className="row">
                <div className="Bubble" >
                            <div className="Main_Cards__Bubble bub1"></div>
                            <div className="Main_Cards__Bubble bub2"></div>
                        </div>
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  contentheader text-center">
                    <hr/>
                     <h2 style={{color:"#333"}}><b>Downstream Oil & Gas Industry</b></h2>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="">
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1"> 
                                    {
                                      this.DownstreamData().map((data, index)=>{
                                         return (
                                        <a key={index} href={"/"+data.hryperlink}>
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

