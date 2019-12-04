import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../allCss/AboutUs.css';

import './Lifecycle.css';

export default class Lifecycle extends Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks:"",
      blockID:"",
      block_id:""


    }; 
    
  }
componentDidMount(){
console.log("==>",this.props.block_id);
// 
/*
import axios from 'axios';
{this.state.blocks.blockTitle}
{this.state.blocks.blockSubTitle}
*/
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                /*var blocks = this.state.blocks;
                blocks.push(response.data);*/
                this.setState({
                  blocks:response.data
                  });
                })
                .catch(function(error){
                  console.log(error);
                  if(error.message === "Request failed with status code 401")
                    {
                        // swal("Your session is expired! Please login again.","", "error");
                    }
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
}

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
                                           
                                            <div className="bluee_text line_paraaaa" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                                            <br></br>
                                            > 
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