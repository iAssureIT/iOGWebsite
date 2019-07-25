import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Intro.css';

export default class Intro extends Component {

IntroData(){
        return [
            {
                introTitle    : "Process Simulation and Modeling",
                // introimg      : "/images/2.png",
                introtext     : "Process simulation studies enable the asset owners and the system designers to gain a better insight into the design and operation of their facilities."
            },         
                        
        ]
    }

IntroData1(){
        return [
            {
                introtext1     : "Although simulation techniques vary depending on the size and complexity of the process,along with the software being used to perform the modeling, there are two main types of refining simulation."
            },         
                        
        ]
    }





    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12">
                    <div className="line_intro col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div>
                  </div>
                   {
                    this.IntroData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <h2 className="bluetext text-center paraaa-top">{data.introTitle}</h2>
                                            <br></br>
                                            <p className="line_subheadd ">{data.introSubTitle}</p>
                                            <p className="line_paraaaa">{data.introtext}
                                            <br></br>
                                            </p> 
                                         </div>
                                        </div>
                                       </div>
                                      </div>
                                    </div>         
                                  </div>
                                     );
                                  })
                               }

                               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="intro_list">In downstream process, simulation studies are used to :</div>
                                 <div className="intro_sublist">- Design, Develop, Analyze and optimize various processes.</div>
                                 <div className="intro_sublist">- Analyze existing processes.</div>
                                 <div className="intro_sublist">- Define the process parameters used in the design of future processes.</div>
                               </div>

                                {
                    this.IntroData1().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                        
                                            <p className="line_paraaaa">{data.introtext1}
                                            <br></br>
                                            </p> 
                                         </div>
                                        </div>
                                       </div>
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