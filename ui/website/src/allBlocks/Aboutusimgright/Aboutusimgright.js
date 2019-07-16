import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutusimgright.css';

export default class Aboutusimgright extends Component {
    render(){
        return(
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="bckgrnd_curve_img  col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="btm_txt">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-2">
                            </div>
                            <p className="line_para3 text-justify">
                            Our key strength is our Team. iOG operates through a team
                            of young and innovative consultants which has strong
                            domain knowledge in all aspects of the O&G value chain
                            and expertise in all leading software solutions. Needless to
                            add, the impact of iOG interventions and its support is directly reflected in the phenomenal growth and progress of
                            the company engaging its services.
                            </p>
                        </div>
                      </div>
                  </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <img src="/images/4.png" alt="" className="truck" />
                </div>
              </div>
            </div>
          </div>
        );
    }
}