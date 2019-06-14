import React, { Component } from 'react';
import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Footer extends Component {

    


  

  render(){
       return(
            <div>      
            <div id="footer" className="footer-two pt50">
            <div className="container-fluid bb-solid-1">
                <div className="container pb35">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <h6 className="font-montserrat text-uppercase color-dark">About Us</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit morbi sagittis.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        </div>
                        
                        <div className="col-md-2 col-md-offset-1 col-sm-3 col-xs-4">
                            <h6 className="font-montserrat">Menu</h6>
                            <ul className="no-icon-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Member</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-md-2 col-sm-3 col-xs-4">
                            <h6 className="font-montserrat">Learn more</h6>
                            <ul className="no-icon-list">
                                <li><a href="#">Tour</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">New Features</a></li>
                                <li><a href="#">Payment</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-md-2 col-sm-3 col-xs-4">
                            <h6 className="font-montserrat">Support</h6>
                            <ul className="no-icon-list">
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Knowledgebase</a></li>
                                <li><a href="#">Forum</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-md-2 col-sm-3 col-xs-12">
                            <h6 className="font-montserrat">Social Media</h6>
                            <div className="social social-two">
                                <a href="#"><i className="fa fa-twitter color-blue"></i></a>
                                <a href="#"><i className="fa fa-facebook-f color-primary"></i></a>
                                <a href="#"><i className="fa fa-linkedin color-blue"></i></a><br/><br/>
                                <a href="#"><i className="fa fa-github color-dark"></i></a>
                                <a href="#"><i className="fa fa-pinterest color-red"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="container-fluid pt20">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6 col-xs-6 pull-left">
                            <p>Copyright ©2016 <a href="#">Pasific Studio, LLC</a>. All rights reserved.</p>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6 pull-right">
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

        </div>
                

      );
  } 

}