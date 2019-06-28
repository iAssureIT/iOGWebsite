import React, { Component } from 'react';
import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Contactform extends Component {

    


  
  render(){
       return(
        <div>         
            <div id="contact" className="col-lg-12 pt100 pb100 contactext">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            
                            <div className="col-md-12 mb50">
                                <h1  className="font-size-normal unih1 color-light">
                                    <small className="color-light">Contact Us</small><br/>
                                    Drop Us a Message
                                </h1>               
                                <h5 className="color-light">Please feel free to say anything to us. Our staff will reply any message<br/>as soon as possible.</h5>                        
                            </div>
                            
                            <div className="col-md-3 col-sm-3 col-xs-12">
                                <span className="el-icon2x"><i className="fa fa-map-marker iconsize" aria-hidden="true"></i></span>
                                <h5 className="color-light"><strong>Address</strong></h5>
                                <p className="color-light contactp">Address Business 123 London, UK.</p>
                            </div>
                    
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <span className="el-icon2x"><i className="fa fa-mobile iconsize" aria-hidden="true"></i></span>
                                <h5 className="color-light"><strong>Phone</strong></h5>
                                <p className="color-light contactp">123-456-789</p>
                            </div>
                            
                            <div className="col-md-3 col-sm-3 col-xs-6">
                               <span className="el-icon2x"><i className="fa fa-envelope iconsize" aria-hidden="true"></i></span>
                                <h5 className="color-light"><strong>Email</strong></h5>
                                <p className="color-light contactp">email@domain.com</p>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="contact contact-us-one bgiogyellow">
                            <div className="col-sm-12 col-xs-12 text-center mb20">
                                <h4 className="pb25 bb-solid-1 text-uppercase">
                                    Get in Touch<br/>
                                    <small className="text-lowercase">Please complete the form and we will get back to you.</small>
                                </h4>
                            </div>
                            <form name="contactform" id="contactForm" method="post" action="assets/php/send.php" className="positioned">
                                
                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="senderName" id="senderName" className="input-md input-rounded form-control" placeholder="fullname" maxLength="100" required=""/>
                                </div>                                           
                                
                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="senderEmail" id="senderEmail" className="input-md input-rounded form-control" placeholder="email address" maxLength="100" required=""/>
                                </div>                                        
                                
                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <input type="url" name="senderWebsite" id="senderWebsite" className="input-md input-rounded form-control" placeholder="http://" maxLength="100"/>
                                </div>                                             
                                
                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="senderHuman" id="senderHuman" className="input-md input-rounded form-control" placeholder="6 + 9 = ?" required=""/>
                                    <input type="hidden" name="checkHuman_a" id="checkHuman_a" value="6"/>
                                    <input type="hidden" name="checkHuman_b" id="checkHuman_b" value="9"/>
                                </div>                                      
                                
                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                    <textarea className="form-control" name="message" id="message" rows="7" cols="40" required=""></textarea>
                                </div>
                                
                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                    <button type="submit" name="sendMessage" id="sendMessage" className=" contactbutton-md contactbutton-block bgiogblue contactbutton-grad-stellar">Send Message</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>            
        </div>


        </div>
                

      );
  } 

}