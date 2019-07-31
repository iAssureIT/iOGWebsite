import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Imgleafblock.css';

export default class Imgleafblock extends Component {


  render(){
    return(
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
              {
                this.props.ImgleafblockData.map((data, index)=>{
                  return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-12">
                            <p className="plan_line_subheadd">{data.plansTitle}</p>
                            <p className="plan_line_paraaaa">{data.planstext}</p> 
                            <p className="plan_line_subsubheadd">{data.plansSubTitle1}</p>
                            <p className="plan_line_paraaaa">{data.planstext1}</p> 
                            <p className="plan_line_subsubheadd">{data.plansSubTitle2}</p>
                            <p className="plan_line_paraaaa">{data.planstext2}</p> 
                            </div>
                            <div className="plans_imgg col-lg-8 col-lg-offset-2">
                                <img className="mt_plans" src={data.plansimg} alt=""/>
                            </div>
                            <div className="col-lg-12">
                                <p className="plan_line_paraaaa3">{data.planstext3}</p> 
                            </div>
                        </div>
                      );
                   })
                 }
            </div>
        );
    }
}