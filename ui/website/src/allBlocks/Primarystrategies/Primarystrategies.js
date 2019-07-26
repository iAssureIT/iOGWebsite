import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Primarystrategies.css';

export default class Primarystrategies extends Component {

StrategyData(){
        return [
            {
               
                // energyimg      : "/images/2.png",
                // strategytext     : "Improving energy efficiency in a refinery is very critical, as Oil refining is an energy-intensive activity. Factors such as more stringent oil product standards (e.g. ultra-low-sulfur diesel),increasing demand for lighter products, and heavier crude oil slates all demand increased processing, which in turn places upward pressure on the overall energy intensity for refining."
            } 
                        
        ]
    }

    StrategyData1(){
        return [
            {
               
                   strategyimg      : "/images/EnergyManagement.png",
                // strategytext     : "Improving energy efficiency in a refinery is very critical, as Oil refining is an energy-intensive activity. Factors such as more stringent oil product standards (e.g. ultra-low-sulfur diesel),increasing demand for lighter products, and heavier crude oil slates all demand increased processing, which in turn places upward pressure on the overall energy intensity for refining."
            } 
                        
        ]
    }


    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   {
                    this.StrategyData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <br></br>
                                            <p className="strategy_line_paraaaa">{data.strategytext}
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
                                 <div className="strategy_list">Primary strategies adopted for optimizing energy consumption in a running plant include:</div>
                                 <div className="strategy_sublist">1. Developing energy benchmarks</div>
                                 <div className="strategy_sublist">- Develop consistent metrics to evaluate performance within a facility and also compare energy efficiency between facilities which form the basis for setting goals, identifying energy reduction projects and facilitate tracking progress</div>
                                 <div className="strategy_sublist">- Develop modular energy performance indexes which take into account the different levels of complexity between refineries</div>

                                 <div className="strategy_sublist">2. Implementation of energy management systems</div>
                                 <div className="strategy_sublist">- Implement ISO 50001 standard which prescribes key elements such as corporate energy policy, a baseline for energy use, improvement goals and action plans, energy reviews and routine evaluation of progress required for effective energy management and efficiency improvements</div>

                                 <div className="strategy_sublist">3. Identifying and introducing best management practices related to power and heat generation, efficient use of power for compression, pumping, and energy conversion,venting of equipment, practices specific to wells, process units, and upstream and midstream plants, refineries and petrochemical plants and energy efficient design</div>

                                 <div className="strategy_sublist">4. Advanced Process control projects</div>

                                 <div className="strategy_sublist">5. Steam Network Optimization Program</div>

                                 <div className="strategy_sublist">6. Use of Energy Balance Tools and use of reconciled data for monitoring Energy KPIs.</div>

                                 <div className="strategy_sublist">7. Investment in a variety of specific energy improvement projects</div>

                               </div>
                               {
                    this.StrategyData1().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <div className="ps_img">
                                               <img className="strategy_img" src={data.strategyimg} alt="" />
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
                               
                          </div>
                        </div>


        );
    }
}