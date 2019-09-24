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
                downstreamTitle : "Digital",
                downstreamTitle1: "Services",
                hryperlink      : "digitalservices",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Asset",
                downstreamTitle1: "Management",
                hryperlink      : "assetmanagement",
                downstreamimg   : "/images/Illustration_12.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            } 
            
        ]
    }

    componentWillMount() {
        $(window).scroll(function() 
    {    
        var scroll = $(window).scrollTop();

        if (scroll >= 1800) {
            $(".para10").addClass("paraeffect");
        } else {
            $(".para10").removeClass("paraeffect");
        }
        if (scroll >= 1800) {
            $(".para11").addClass("paraeffect");
        } else {
            $(".para11").removeClass("paraeffect");
        }
        if (scroll >= 1600) {
            $(".para12").addClass("paraeffect12");
        } else {
            $(".para12").removeClass("paraeffect12");
        }
        
    });
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
                                    <div className="">
                                      <div className="col-lg-5 col-lg-offset-3 para12"> 
                                        <div className="row">
                                            <a href="/Healthsafty">
                                                <div className="col-lg-12">
                                                    <div className=" lightbluetext block block1height text-center">
                                                        <img alt="" className="streamImg" src="/images/Illustration_11.png" />
                                                       {/* <h2>Health Safety & Environment</h2>*/}
                                                        <br/>
                                                        <br/>
                                                        <label className="downTitle">Health Safety & </label>
                                                        <label className="downTitle">Environment</label>
                                                    </div>
                                                </div>
                                            </a>     
                                        </div> 
                                       </div> 
                                      <div className="col-lg-12">
                                        
                                            {
                                              this.DownstreamData().map((data, index)=>{
                                                 return (
                                              <a key={index} href={"/"+data.hryperlink}>
                                                <div className={"col-lg-5 para1"+index}>
                                                  <div className="row">
                                                    <div className=" lightbluetext block block1height text-center">
                                                        <img alt="" className="streamImg" src={data.downstreamimg} />
                                                        <br/>
                                                        <br/>
                                                        <label className="downTitle">{data.downstreamTitle}</label>
                                                        <label className="downTitle">{data.downstreamTitle1}</label>
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
                  </div>
                </div>
            </div>
        );
    } 
}