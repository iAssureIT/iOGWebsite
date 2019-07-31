import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Challenges.css';

export default class Challenges extends Component {



render(){
  return(
          <div  className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            {
              this.props.CommonleafblockData.map((data, index)=>{
                return (     
                         <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12 grey_line1"> 
                             <hr/>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <p className="challenges_line_subheadd ">{data.challengesTitle}</p>
                                  <p className="challenges_line_paraaaa">{data.challengestext}</p> 
                                  <ul className="challenges_list">
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
                                  <p className="challenges_line_paraaaa2">{data.challengestext2}</p>
                            </div>
                        </div>
                      );
                  })
               }
          </div>
        );
    }
}