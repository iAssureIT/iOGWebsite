import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commonstream.css';


export default class Commonstream extends Component {
    
  DownstreamData(){
        return [
             {
                downstreamTitle : "Digital Services",
                downstreamTitle1: "",
                hryperlink      : "masterpage/digital-services",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },
            {
                downstreamTitle  : "Manufacturing Execution Systems",
                downstreamTitle1 : "",
                hryperlink       : "masterpage/manufacturing-exec-system",
                downstreamimg    : "/images/Illustration_3.png",
                downstreamtext   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            },  
           
            {
                downstreamTitle : "Health Safety & Environment ",
                downstreamTitle1: "",
                hryperlink      : "masterpage/health-safety-environment",
                downstreamimg   : "/images/Illustration_11.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            } 
            
        ]
    }

  componentWillMount() {
        $(window).scroll(function() 
    {    
        var scroll = $(window).scrollTop();

        if (scroll >= 1000) {
            $(".para10").addClass("paraeffect");
        } else {
            $(".para10").removeClass("paraeffect");
        }
        if (scroll >= 1000) {
            $(".para11").addClass("paraeffect");
        } else {
            $(".para11").removeClass("paraeffect");
        }
        if (scroll >= 1000) {
            $(".para12").addClass("paraeffect12");
        } else {
            $(".para12").removeClass("paraeffect12");
        }
        
      });

    }

    

  

 render(){
       return(
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contentWraper">
            <div className="">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="">
                       <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1">
                          <div className="">
                                        
                                {
                                  this.DownstreamData().map((data, index)=>{
                                     return (
                                  <a key={index} href={"/"+data.hryperlink} >
                                    <div className={"col-lg-4 col-md-4 col-sm-4 para1"+index} >
                                      <div className="">
                                        <div className="col-lg-12 col-md-12 col-sm-12 lightbluetext block block1height text-center">
                                            <img alt="" className="streamImg" src={data.downstreamimg} />
                                            <br/>
                                            <br/>

                                            {
                                              data.downstreamTitle== "Manufacturing Execution Systems" ?
                                              <label className="downTitleNew">{data.downstreamTitle}</label>
                                              :
                                            <label className="downTitle1">{data.downstreamTitle}</label>
                                            }
                                            
                                        </div>
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
        );
    } 
}