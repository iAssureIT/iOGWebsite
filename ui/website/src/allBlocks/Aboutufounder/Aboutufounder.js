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
              {this.props.founderData && this.props.founderData.length>0?
                this.props.founderData.map((data, index)=>{
                  return (
                            <div key={index} className="backgrd_curve1 col-lg-12 col-md-12 col-sm-12 col-xs-12 head_spacing">
                                  <div className="col-lg-5 col-md-4 col-sm-4 col-xs-4">
                                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 takeleft">
                                 </div>
                                    <div className="col-lg-8 col-lg-offset-2 col-md-8 col-sm-8 col-xs-8">
                                          <a href={data.founderlink} target="_blank"><img src={data.founderimg} alt="" className="director_img"/></a>
                                    </div>
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                          <h2 className="para-top3 txt-size-director textcoloryellow"><b>{data.foundername}</b></h2>
                                          <h1 className="txt-size-founder lightbluetext">{data.foundertag}</h1>
                                            <p className="para_spacing text-justify pull-right">{data.foundertext}</p> 
                                           <ul className="alg_lft">
                                           {
                                                data.founderli.map((liDetail, index)=>{
                                                    return(
                                                        <li className="line_ht" key={index}>{liDetail.liData}</li>
                                                    );
                                                })
                                            }
                                          </ul>                                     
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            );
                        })
                        :
                        null  
                     }
              </div>
            </div>
        );
    }
}