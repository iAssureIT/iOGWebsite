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
            <div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
               {
                this.props.OverviewData.map((data, index)=>{
                   return ( 
                    <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12">
                          <div className="line_overview col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div>
                        </div>
                        <h2 className="bluetext text-center paraaa-top">{data.overviewTitle}</h2>
                        <p className="line_subheadd ">{data.overviewSubTitle}</p>
                        <p className="line_paraaaa">{data.overviewtext}</p>
                    </div>
                          );
                      })
                  }
              </div>
              );
          }
        }