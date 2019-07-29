import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Controlloop.css';

export default class Controlloop extends Component {

ControlLoopData(){
        return [
            {
                controlloopsuubTitle    : "Base Control Loop Tuning",
                // energyimg             : "/images/2.png",
                 controllooptext        : "Process Plants have to continually improve their performance on economics and sustained competitiveness in the global context by driving towards goals such as lower cost, higher production rate and improved quality, safety and reliability. Process Control systems can be piecemeal, looking at specific functions; these systems involve more manual interventions. There is, now however, an increasing skew towards usage of integrated Automatic Process Controls (APCs)."
            },          
        ]
    }

    ControlLoopData1(){
        return [
            {
                // controlloopsuubTitle2    : "What we offer:",
                // energyimg             : "/images/2.png",
                 controllooptext2        : "Our experts help the plant personnel to dynamically predict the future trajectory of key variables to calculate the optimal adjustments to key set points which results in operating parameters being adjusted more safely, smoothly and consistently. The key variable information is prioritized according to technical and economic factors. This would spare the valuable time of plant personnel for acting on other important aspects of their plant’s performance."
            },  
            {
                // controlloopsuubTitle2    : "What we offer:",
                // energyimg             : "/images/2.png",
                 controllooptext3        : "Our experienced control loop tuning experts use the control system and process historian as a window into the process, sorted through the mountains of data and rank the data according to economic factors which in-turn provides focused information to plant decision makers."
            },       
        ]
    }

    ControlLoopData2(){
        return [
            {
                 controlloopimg             : "/images/apc1.png",
            },       
        ]
    }

    ControlLoopData3(){
        return [
            {
                 controlloopimg1             : "/images/apc2.png",
            },       
        ]
    }




    



    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   {
                    this.ControlLoopData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <div className="bluetext  controlloop_paraaa-top">{data.controlloopsuubTitle}</div>
                                            <p className="controlloop_line_paraaaa">{data.controllooptext}
                                            </p> 
                                            <p className="controlloop_line_paraaaa1">{data.controllooptext1}
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
                                 <div className="controlloop_list">Unfortunately, industry wide statistics provide us with a far from encouraging bad picture in the current plant performance standards :</div>
                                 <li className="controlloop_sublist"> 30% of Control Loops do not operate in normal modes</li>
                                 <li className="controlloop_sublist"> 30% of Control Valves are over-sized or under-sized or have mechanical problems</li>
                                 <li className="controlloop_sublist"> 40% of Control Loops oscillate which eventually reduce plant efficiency</li>
                                 <li className="controlloop_sublist"> 75% of Control Loops actually increase process variability</li>
                               </div>


                               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="controlloop_list">The net impact to process performance is significant :</div>
                                 <li className="controlloop_sublist">Lost production</li>
                                 <li className="controlloop_sublist">Quality Issues</li>
                                 <li className="controlloop_sublist">Excessive energy use</li>
                                 <li className="controlloop_sublist">Safety & Environmental incidents</li>
                                 <li className="controlloop_sublist"> Develop optimized operating strategies during non-routine and challenging situations</li>
                               </div>

                               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="controlloop_list">To ensure the control loop optimization, our base control loop tuning experts help our clients by delivering two types of services:</div>
                                 <li className="controlloop_sublist">One – time tuning of all the control loops</li>
                                 <li className="controlloop_sublist">Real time loop tuning for performance</li>
                               </div>


                      {
                        this.ControlLoopData1().map((data, index)=>{
                           return ( 
                            <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="col-lg-12">
                                                <p className="controlloop_line_paraaaa2">{data.controllooptext2}
                                                </p>
                                                <p className="controlloop_line_paraaaa3">{data.controllooptext3} 
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


                           {
                            this.ControlLoopData2().map((data, index)=>{
                           return ( 
                            <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="col-lg-12">
                                                  <div className="col-lg-12">
                                                    <div className="cl_img">
                                                       <img className="control_loop_img" src={data.controlloopimg} alt="" />
                                                    </div>
                                                  </div>
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
                                 <div className="controlloop_list">Typical results of Loop Optimization include :</div>
                                 <li className="controlloop_sublist">Instrument Evaluation and Valve Analysis</li>
                                 <li className="controlloop_sublist">Process and instrument non-linearity</li>
                                 <li className="controlloop_sublist">Reduction in process variability by 50%</li>
                                 <li className="controlloop_sublist">Improvement in controller response time by 2X</li>
                                 <li className="controlloop_sublist apc_mb26">Reduction in non-linearity to within a robust control range.</li>
                               </div> 

                               {
                            this.ControlLoopData3().map((data, index)=>{
                           return ( 
                            <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="col-lg-12">
                                                  <div className="col-lg-12">
                                                    <div className="cl_img1">
                                                       <img className="control_loop_img1" src={data.controlloopimg1} alt="" />
                                                    </div>
                                                  </div>
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
                                 <div className="controlloop_list">These results have a direct impact on the plant’s bottom-line result areas, such as:</div>
                                 <li className="controlloop_sublist">Production Rate Increase</li>
                                 <li className="controlloop_sublist">Quality Improvement</li>
                                 <li className="controlloop_sublist">Reliability Improvement</li>
                                 <li className="controlloop_sublist">Energy Cost Reduction</li>
                                 <li className="controlloop_sublist">Unit Cost Reduction</li>
                               </div> 

                               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="controlloop_list"><b>iOG Solutions offers its services on two technologies as a part of APC services:</b></div>
                                 <div className="controlloop_sublist"> - <b> Advanced Process Control </b></div>
                                 <div className="controlloop_sublist "> - <b>Base Control Loop Tuning </b></div>
                               </div>
 
                          </div>
                        </div>


        );
    }
}