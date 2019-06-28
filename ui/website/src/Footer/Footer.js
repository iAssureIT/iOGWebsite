import React, { Component } from 'react';
import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Footer extends Component {


  render(){
       return(
            <div>      
            <div id="footer" className="col-lg-12 pt20 footer-two">
            <div className="bb-solid-1">
                <div className="col-lg-10 col-lg-offset-1 pb35">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <h6 className="font-montserrat text-uppercase">About Us</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit morbi sagittis.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        </div>
                        
                        <div className="col-md-2 col-md-offset-1 col-sm-3 col-xs-4">
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
                            <h6 className="font-montserrat">Support</h6>
                            <ul className="no-icon-list">
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Resources</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            </div>
            
        </div>
                    <div className="lightgray col-lg-12 footer-two">
                <div className="col-lg-10 col-lg-offset-1">
                    <div className="row">

                        <div className="col-md-4 col-sm-6 col-xs-6 pull-left pt20">
                            <p>Copyright ©2019 <a href="#">iAssureIT</a>. All rights reserved.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-6 text-center footerlogo">
                             <img alt="Logo" src="/images/logo.png"/>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-6 pull-right pt20">
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