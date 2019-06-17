import React, { Component } from 'react';
import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Upiog extends Component {

    


  

  render(){
       return(
        <div id="price" className="col-lg-12 upstreamBg">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center pricemb50">                        
                        <h1 className=" priceh1 pricefont-size-normal pricecolor-light">
                            <small className="pricesmall pricecolor-light">Service Prices</small><br/>
                            Family Price for Premium Services
                        </h1>

                    </div>
                </div>

                <div className="">
                    <div className="col-md-3 col-sm-6 col-xs-12 pricehover-float">
                        <div className="">
                             <div className="price price-three">
                            <div className="price-badge1 bg-grad-blood-mary">Geology & Geophysics</div>
                           {/* <div className="price-header">
                                <span className="pricecolor-green"><sup>$</sup>49</span>
                                <h4 className="priceh4">Regular</h4>                                
                            </div>*/}
                            <div className="price-body">
                                <ul>
                                    <li>Two Web Designs</li>
                                    <li>Unlimited Revision</li>
                                    <li>Free One Year Domain</li>
                                    <li>Free Six Months Hosting</li>
                                    <li>Free Installation</li>
                                    <li>Full Support</li>
                                </ul>
                            </div>
                            <div className="price-footer">
                                <input type="button" className="btn pricebtn1" value="View More"/>
                                
                            </div>
                        </div>
                        </div>
                       
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 pricehover-float">
                        <div className="">
                             <div className="price price-three">
                            <div className="price-badge1 bg-grad-blood-mary">Reservoir Management</div>
                            {/*<div className="price-header">
                                <span className="pricecolor-success"><sup>$</sup>59</span>
                                <h4>Extended</h4>                               
                            </div>*/}
                            <div className="price-body">
                                <ul>
                                    <li>Two Web Designs</li>
                                    <li>Unlimited Revision</li>
                                    <li>Free One Year Domain</li>
                                    <li>Free Six Months Hosting</li>
                                    <li>Free Installation</li>
                                    <li>Full Support</li>
                                </ul>
                            </div>
                            <div className="price-footer">

                                <input type="button" className="btn pricebtn2" value="View More"/>
                            </div>
                        </div>
                        </div>
                       
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 pricehover-float">
                        <div className="">
                            <div className="price price-three">
                            <div className="price-badge1 bg-grad-blood-mary">Well & Drilling</div>
                           {/* <div className="price-header">
                                <span className="pricecolor-cyan"><sup>$</sup>69</span>
                                <h4 className="priceh4">Developer</h4>                              
                            </div>*/}
                            <div className="price-body">
                                <ul>
                                    <li>Two Web Designs</li>
                                    <li>Unlimited Revision</li>
                                    <li>Free One Year Domain</li>
                                    <li>Free Six Months Hosting</li>
                                    <li>Free Installation</li>
                                    <li>Full Support</li>
                                </ul>
                            </div>
                            <div className="price-footer">

                                <input type="button" className="btn pricebtn3" value="View More"/>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12  pricehover-float">
                        <div className="">
                            <div className="price price-three">
                            <div className="price-badge1 bg-grad-blood-mary">Production Management</div>
                            {/*<div className="price-header">
                                <span className="pricecolor-blue"><sup>$</sup>79</span>
                                <h4 className="priceh4">Team</h4>                               
                            </div>*/}
                            <div className="price-body ">
                                <ul>
                                    <li>Two Web Designs</li>
                                    <li>Unlimited Revision</li>
                                    <li>Free One Year Domain</li>
                                    <li>Free Six Months Hosting</li>
                                    <li>Free Installation</li>
                                    <li>Full Support</li>
                                </ul>
                            </div>
                            <div className="price-footer">

                               <input type="button" className="btn pricebtn4" value="View More"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>                

      );
  } 

}