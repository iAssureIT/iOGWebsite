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
      blocks:"",
      blockID:"",
      block_id:""

    }; 
    
  }
componentDidMount(){
console.log("==>",this.props.block_id);
// <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
/*
import axios from 'axios';
{this.state.blocks.blockSubTitle}
*/
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
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
      
        <div className="col-lg-12 contentWraper">
          <div className="row">
            <div className="Bubble" >
              <div className="Main_Cards__Bubble bub1"></div>
              <div className="Main_Cards__Bubble bub2"></div>
            </div>
            <div className="col-lg-12 lightbluetext contentheader text-center">
              <hr/>

              <h1 className="lightbluetext">{this.state.blocks.blockTitle}</h1>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row"> 
                        <div className="col-lg-10 col-lg-offset-1"> 
                          <div className="row"> 
                            {
                              this.props.servicedata.map((data, index)=>{
                                if(productlength == 2){
                                  if(plength === index+2){
                                    var classes = "col-lg-offset-2 col-lg-4 col-md-4 col-md-offset-2 col-sm-4 col-xs-4";
                                   
                                  }else{
                                    var classes="webshopmargintop webpageshopcont col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center";
                                 
                                }
                                }else if(productlength == 1){
                                  // console.log('productlength')
                                  if(plength === index+1){
                                    var classes = "webpageshopcont col-lg-4 col-lg-offset-4   text-center";                                   
                                  }else{
                                    var classes="webpageshopcont col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center";                                 
                                }
                                }else{
                                  var classes="webpageshopcont col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center";                               
                                }
                                return (
                                    <div key={index} className={classes}>
                                      <a href ={data.downstreamurl} data-toggle="tooltip" title="Click me to read more!">
                                        <div className="col-lg-12">
                                          <div className="row">
                                              <div className="text-center">
                                                <div className="serflip-card">
                                                  <div className="serflip-card-inner">
                                                      <div className="serflip-card-front">
                                                        <img src={data.downstreamimg} alt=""/>
                                                        <div className="dwstmTitle">{data.downstreamTitle}</div> 
                                                        <div className="dwstmTitle">{data.downstreamTitle1}</div> 
                                                      </div>
                                                      <div className="serflip-card-back">
                                                          <p className="text-left">{data.downstreamtext}</p>
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