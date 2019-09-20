import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Contactform     from '../../allBlocks/Contactform/Contactform.js';
import './Commonservicesblock.css';


export default class Commonservicesleafpageblock extends Component {
    
  

  constructor(props) {
  super(props);
    this.state={
      userID : "",      
      };
  }
  

  render(){
  var plength = this.props.servicedata ? this.props.servicedata.length : 0;
  var productlength = plength % 3;

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
                                if(this.state.userID === ""){
                               return (<div key={index} className={classes}>
                                    <div data-toggle="modal" data-target="#leafModal" title="Click me to read more!">
                                      <div className="col-lg-12">
                                        <div className="row">
                                            <div className="text-center">
                                              <div className="serflip-card">
                                                <div className="serflip-card-inner">
                                                    <div className="serflip-card-front">
                                                      <img src={data.downstreamimg} alt=""/>
                                                      <h2>{data.downstreamTitle}</h2> 
                                                    </div>
                                                    <div className="serflip-card-back">
                                                        <p className="text-left">{data.downstreamtext}</p>
                                                    </div>
                                                 </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                    </div>                                        
                                    <div className="modal fade modalZindex " id="leafModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div className="modal-dialog modal-lg " role="document">
                                        <div className="modal-content ContactmodalContent col-lg-10 col-lg-offset-1 col-md-8 col-md-offset-2 col-sm-12 col-xs-12   ">
                            {/*              <button type="button" class="close closeButton" data-dismiss="modal">&times;</button>*/}
                                          <div className="modal-body  leafModalBody">
                                           <div className="">
                                              <Contactform />                               
                                            </div>   
                                          </div>
                                          <div className="modal-footer leafModalFooter">
                                            <a href ={data.downstreamurl} className="skipText  col-lg-12 col-md-12 col-sm-12 col-xs-12">Skip Now</a>
                                          </div>  
                                          {console.log("data.downstreamurl",data.downstreamurl)}      
                                          
                                        </div>
                                      </div>
                                    </div>                                  
                                  </div>
                                );

                                }else{
                                  return(
                                  <div key={index} className={classes}>
                                    <a href ={data.downstreamurl} data-toggle="tooltip" title="Click me to read more!">
                                      <div className="col-lg-12">
                                        <div className="row">
                                            <div className="text-center">
                                              <div className="serflip-card">
                                                <div className="serflip-card-inner">
                                                    <div className="serflip-card-front">
                                                      <img src={data.downstreamimg} alt=""/>
                                                      <h2>{data.downstreamTitle}</h2> 
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
                                  </div>);
                                }
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