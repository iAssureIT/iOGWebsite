import React, { Component } from 'react';
import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Footer.css';

export default class Footer extends Component {


  render(){
       return(
         <div>
            <div className="footeranimationtruck">
                <img src="/images/Illustration_9.png" />
            </div>
             <div className="footeranimationtruck2">
                <img src="/images/Illustration_9.png" />
            </div>      
            <div className="footeranimation">
                <img src="/images/Illustration_8.png" />
            </div>      
            <div id="footer" className="bgiogblue col-lg-12 footer-two">
                <div className="col-lg-10 col-lg-offset-1 pb35">
                    <div className="row">
                        <div className="col-md-2 col-sm-3 col-xs-4">
                            <h6 className="font-montserrat">Menu</h6>
                            <ul className="no-icon-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Industries</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-md-2 col-sm-3 col-xs-4">
                            <h6 className="font-montserrat">Service Arms</h6>
                            <ul className="no-icon-list">
                                <li><a href="#">iOGImplement</a></li>
                                <li><a href="#">iOGConsult</a></li>
                                <li><a href="#">iOGTrain</a></li>
                                <li><a href="#">iOGStudy</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-md-2 col-sm-3 col-xs-4">
                            <h6 className="font-montserrat">Resources</h6>
                            <ul className="no-icon-list">
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Resources</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>                        
                        <div className="col-md-3 col-sm-4 col-xs-4">
                            <h6 className="font-montserrat col">Address</h6>
                            <p>
                                 iOG Solutions Pvt. Ltd.<br/>
                                 Amanora Chambers, Office 330,<br/>
                                 4th floor, East Block,Hadapsar,<br/>
                                  Pune,India- 411028.<br/>
                                 <i className="glyphicon glyphicon-phone"></i>Phone: +91 20 672 603 81/82.
                             </p>
                        </div> 
                        <div className="col-md-2 col-sm-3 col-xs-4">
                            <h6 className="font-montserrat col">Connect</h6>
                            <ul className="no-icon-list socialicon">
                                <li><a href="#"><i className="col-lg-12 fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="facebook col-lg-12 fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="col-lg-12 fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                            <a href="Contact-us"><button className="connectbtn btn">Click To Contact</button></a>
                        </div>      
                    </div>
                </div>            
        </div>
                    <div className="darkbluebg col-lg-12 footer-end">
                <div className="col-lg-10 col-lg-offset-1">
                    <div className="row">

                        <div className="textcolorwhite col-md-4 col-sm-6 col-xs-6 pull-left pt20">
                            <p>Copyright ©2019 <a href="#">iOGsolutions</a>. All rights reserved.</p>
                        </div>

                        <div className="textcolorwhite col-md-4 col-sm-6 col-xs-6 pull-right pt20">
                            <p className="text-right">
                                <a href="#" className="mr20">Privacy Policy</a>
                                <a href="#" className="mr20">Term of Use</a>
                                <a href="#" className="mr50">Site Map</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
                

      );
  } 

}