import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutufounder.css';

export default class Aboutufounder extends Component {
    render(){
        return(
          
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
              <div className="backgrd_curve1 col-lg-12 col-md-12 col-sm-12 col-xs-12 head_spacing">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img1">
                          <img src="/images/7.png" alt="" className="director_img"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <h2 className="para-top3 txt-size-director textcoloryellow"><b>Pankaj Zawar</b></h2>
                            <h1 className="txt-size-founder">Founder and Director of iOG Solutions</h1>
                              <p className="para_spacing text-justify pull-right">
                              Our Founder and Director,<b> Pankaj Zawar</b> is a chemical engineer from
                              UICT, Mumbai with 20+ years of experience in providing consulting,engineering
                              and implementation services for MES, APC and SCM solutions.
                              </p> 
                             <ul className="alg_lft">
                              <li className="line_ht">Strong domain knowledge in Oil and Gas industry</li>
                              <li className="ln_ht">Strong skills in using refinery LP and Scheduling tools 
                                  for refinery production planning and scheduling.</li>
                              <li className="ln_ht2">Led several remarkable MES and SCM projects at state-owned.<br></br>
                                  Private refineries and petrochemical plants in India, SE Asia, and the Middle East.</li>
                            </ul>                                     
                        </div>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}