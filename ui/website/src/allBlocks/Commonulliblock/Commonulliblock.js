import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Commonulliblock.css';

export default class Commonulliblock extends Component {
render(){
  return(
          <div  className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 mb100">
            <div  className="row">
            {
              this.props.CommonulliData.map((data, index)=>{
                return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12 grey_line1"> 
                          <hr/>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                              <p className="rp_line_subheadd plan_line_subsubheadd">{data.commonulliheading}</p>
                                              <p className="rp_line_paraaaa">{data.commonullitext}</p> 
                                              <p className="rp_line_subsubheadd">{data.commonullisubheading}</p>
                                      </div>
                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">         
                                          <ul>
                                              {
                                                  data.commonulliUl.map((ulDetail, index)=>{
                                                      return(
                                                          <li className="refinery_list" key={index}>{ulDetail.ulData}
                                                              <ul className="">
                                                                  {
                                                                      ulDetail.commonulliLi  && ulDetail.commonulliLi.length > 0 ? 
                                                                      ulDetail.commonulliLi.map((liDetail, index)=>{
                                                                          return(
                                                                              <li className="refinery_sublist" key={index}>{liDetail.liData}</li>
                                                                          );
                                                                      })
                                                                      :
                                                                      null
                                                                  }
                                                              </ul>
                                                          </li>
                                                      );
                                                  })
                                               }
                                          </ul>
                                      </div>
                                  </div>
                            </div>
                          );
                      })
                  }
            </div>
          </div>
        );
    }
}