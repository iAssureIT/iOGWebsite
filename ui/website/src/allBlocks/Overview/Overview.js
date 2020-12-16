import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Overview.css';

export default class Overview extends Component {

render(){
      return(

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 policyback" style={{padding:"0px"}}>  
            
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  " style={{padding:"0px"}}>  

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blockContent"  style={{padding:"0px"}}>  
            
               {
                this.props.OverviewData.map((data, index)=>{
                   return ( 
                    <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{padding:"0px"}}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {/*<div className="line_overview line_overview1 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-lg-offset-5">
                        </div>*/}
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{padding:"80px"}}>  
                            <p className="line_subheadd ">{data.overviewSubTitle}</p>
                            <p className="line_paraaaa">{data.overviewtext1}</p>
                            <p className="line_paraaaa">{data.overviewtext2}</p>
                            <ul className="challenges_list">
                            {
                              data.commonulliUl  && data.commonulliUl.length > 0 ? 
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
                                :
                                null
                             }
                        </ul>                                      
                        <p className="line_paraaaa">{data.overviewtext3}</p>
                        <p className="line_paraaaa">{data.overviewtext4}</p>
                        <ul className="challenges_list">
                            {
                              data.commonulliUl2  && data.commonulliUl2.length > 0 ? 
                                data.commonulliUl2.map((ulDetail, index)=>{
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
                                :
                                null
                             }
                        </ul> 
                       </div> 
                        <p className="line_paraaaa">{data.overviewtext5}</p>                                    
                    </div>
                          );
                      })
                  }
              </div>
            </div>
          </div>    
              );
          }
        }