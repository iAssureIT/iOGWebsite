import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Socialmedia.css';
export default class Socialmedia extends Component {


  render(){
       return(

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 socialblock-bg">
                <div className="col-lg-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2 col-md-8 col-sm-8 col-xs-8">
                    <div className="col-lg-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2 col-md-8 col-sm-8 col-xs-8 socialblock">
                        <ul>
                          <li>
                            <a href="#"><i className="fa fa-facebook-f icon"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fa fa-twitter icon"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fa fa-linkedin icon"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fa fa-instagram icon"></i></a>
                          </li>
                        </ul>                    
                     </div>
                </div>
            </div>
        );
  } 

}