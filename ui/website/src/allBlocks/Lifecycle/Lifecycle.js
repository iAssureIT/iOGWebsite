import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Lifecycle.css';

export default class Lifecycle extends Component {

LifecycleData(){
        return [
            {
                lifecycletext     : "Application of steady state simulation comes majorly during the conceptual phase of a project with a motive to understand how a design can be altered to get the most out of a process from both a business standpoint and an engineering perspective."
            },         
                        
        ]
    }



    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  
                   {
                    this.LifecycleData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <p className="bluee_text line_paraaaa">{data.lifecycletext}
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
                                 <div className="lifecycle_list">Steady State Simulation</div>
                                 <li className="lifecycle_sublist">Process Synthesis</li>
                                 <li className="lifecycle_sublist">Process Design (FEED Stage)</li>
                                 <li className="lifecycle_sublist">Process Optimization</li>
                                 <li className="lifecycle_sublist">Process Revamp/Debottlenecking</li>
                                 <li className="lifecycle_sublist">Process Simulation Model building</li>
                               </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="lifecycle_list">Dynamic Simulation</div>
                                 <li className="lifecycle_sublist">Engineering Study of Process/Equipment/Pipelines</li>
                                 <li className="lifecycle_sublist">Control Scheme Design and Validation</li>
                                 <li className="lifecycle_sublist">Start-up/Shut down study</li>
                                 <li className="lifecycle_sublist">Online Optimization</li>
                                 <li className="lifecycle_sublist">Kinetic modeling</li>
                                 <li className="lifecycle_sublist">Simulation model tuning</li>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="lifecycle_list">Operator Training</div>
                                 <li className="lifecycle_sublist">Engineering studies and report generation.</li>
                                 <li className="lifecycle_sublist">Modification/maintenance of dynamic/steady state simulation models.</li>
                                 <li className="lifecycle_sublist">Platform independent services (capability on Hysys, Unisim, Dynsim, OLGA, Pipesim etc.)</li>
                                 <li className="lifecycle_sublist">Training services for Hysys and Unisim.</li>
                                 <li className="lifecycle_sublist">Collaborating on study projects with EPC’s.</li>
                                 <li className="lifecycle_sublist">Development of user defined modules on Hysys and Unisim platforms for proprietary calculations.</li>
                                 <li className="lifecycle_sublist">Development of automation application for Hysys and Unisim platform.</li>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="lifecycle_list">Simulation of Dynamic Behaviors of Process Equipment’s and process</div>
                                 <li className="lifecycle_sublist">Compressor Loop Study, Anti-surge line/Valve design and its adequacy checking.</li>
                                 <li className="lifecycle_sublist">Depressurizing Study, Design and validation of relief valve/vent valve/Emergency depressurization system.</li>
                                 <li className="lifecycle_sublist">Control Scheme validation.</li>
                                 <li className="lifecycle_sublist">Start-up/ Shutdown/ Scenario testing.</li>
                                 <li className="lifecycle_sublist">Critical control loop tuning parameter estimation. </li>
                                 <li className="lifecycle_sublist">Validating Cause and Effect matrix for ESD system for critical equipment’s or plant-wide.</li>
                                 <li className="lifecycle_sublist">HAZOP</li>
                                 <li className="lifecycle_sublist">Plant performance checking</li>
                                 <div className="lifecycle_subsublist">o  Checking available capacity margin</div>
                                 <div className="lifecycle_subsublist">o  Debottlenecking/Revamp Study</div>

                    </div>

              

        

                          </div>
                        </div>


        );
    }
}