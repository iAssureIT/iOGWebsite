import React, { Component } from 'react';
// import { render } from 'react-dom';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commonservicesblock.css';


export default class Commonservicesblock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blocks:{
        "blockTitle"      : "",
        "blockSubTitle"   : "",
        "blockDescription"  : "",
        "blockComponentName"  : "",
        "blockType"       : "simple",
        "repeatedBlocks"    : [
                      {
                        "Title"     : "Geology &amp; Geophysics",
                          "SubTitle"    : "",
                          "Description" : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface.",
                          "Image"     : "/images/Icon_1.png",
                          "Link"      : "/iogstudy"
                      },
                      {
                        "Title"     : "Geology",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface.",
                          "Image"     : "/images/Icon_2.png",
                          "Link"      : "/iogimplement"
                      },
                      {
                        "Title"     : "Geology &amp; Geophysics",
                          "SubTitle"    : "",
                          "Description" : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface.",
                          "Image"     : "/images/Icon_1.png",
                          "Link"      : "/iogtrain"
                      },
                      {
                        "Title"     : "Geology",
                          "SubTitle"    : "",
                          "Description" : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface.",
                          "Image"     : "/images/Icon_2.png",
                          "Link"      : "/iogstudy"
                      },
                       {
                        "Title"     : "Geology",
                          "SubTitle"    : "",
                          "Description" : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface.",
                          "Image"     : "/images/Icon_2.png",
                          "Link"      : "/iogstudy"
                      }

        ],
        "bgImage"       : "",
        "bgVideo"       : "",
        "fgImage"       : "",
        "fgVideo"       : ""

      },
      blockID:"",
      block_id:""

    };    
  }
componentDidMount(){
// console.log("==>",this.props.block_id);
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                /*var blocks = this.state.blocks;
                blocks.push(response.data);*/
                this.setState({
                  blocks:response.data
                  });
                })
                .catch(function(error){
                  console.log(error);
                    if(error.message === "Request failed with status code 401")
                      {
                          // swal("Your session is expired! Please login again.","", "error");
                      }
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
}
    
  
 render(){
  var plength = this.props.servicedata ? this.props.servicedata.length : 0;
  var productlength = plength % 3;

    return(
      
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contentWraper">
          <div className="">
            <div className="Bubble" >
              <div className="Main_Cards__Bubble bub1"></div>
              <div className="Main_Cards__Bubble bub2"></div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lightbluetext contentheader text-center">
          
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 responsivePadding">
              <div className="">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 responsivePadding">
                  <div className="">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 responsivePadding" >
                      <div className=""> 
                        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1"> 
                          <div className=""> 
                            {
                              this.props.servicedata.map((data, index)=>{
                                if(productlength == 2){
                                  if(plength === index+2){
                                    var classes = "responsivePadding col-lg-offset-2 col-lg-4 col-md-4 col-md-offset-2 col-sm-4 col-xs-12";
                                   
                                  }else{
                                    var classes="responsivePadding webshopmargintop  webpageshopcont responsivePadding col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center";
                                 
                                }
                                }else if(productlength == 1){
                                  // console.log('productlength')
                                  if(plength === index+1){
                                    var classes = "webpageshopcont col-lg-4 col-xs-12 col-lg-offset-4   text-center";                                   
                                  }else{
                                    var classes="webpageshopcont col-lg-4 col-md-4  col-sm-12 col-xs-12  text-center";                                 
                                }
                                }else{
                                  var classes="webpageshopcont col-lg-4 col-md-4 col-xs-12 col-sm-4  text-center";                               
                                }
                                 return (
                                <div key={index} className={classes}>
                                  <a href ={data.downstreamurl} data-toggle="tooltip" title="Click me to read more!">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 responsivePadding">
                                      <div className="">
                                          <div className="text-center">
                                            <div className="serflip-card">
                                              <div className="serflip-card-inner">
                                                  <div className="serflip-card-front">
                                                    <img src={data.downstreamimg} alt=""/>
                                                    <div className="dwstmTitle">{data.downstreamTitle}</div> 
                                                    <div className="dwstmTitle">{data.downstreamTitle1}</div> 
                                                  </div>
                                                  <div className="serflip-card-back">
                                                      <p className="text-justify downstreamtxt">{data.downstreamtext}</p>
                                                  </div>
                                               </div>
                                              </div>
                                          </div>
                                      </div>
                                    </div>
                                  </a>
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
        </div>
      
    );
  } 
}