import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Apcscope.css';

export default class Apcscope extends Component {
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
// <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
/*
import axios from 'axios';
{this.state.blocks.blockTitle}
{this.state.blocks.blockSubTitle}
*/
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
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

ApcscopeData(){
        return [
            {
                apcscopesuubTitle    : "Our Scope of Service",
                // energyimg             : "/images/2.png",
                 // apcscopetext        : "Process Plants have to continually improve their performance on economics and sustained competitiveness in the global context by driving towards goals such as lower cost, higher production rate and improved quality, safety and reliability. Process Control systems can be piecemeal, looking at specific functions; these systems involve more manual interventions. There is, now however, an increasing skew towards usage of integrated Automatic Process Controls (APCs)."
            },          
        ]
    }

    ApcscopeData1(){
        return [
            {
                // controlloopsuubTitle2    : "What we offer:",
                // energyimg             : "/images/2.png",
                 apcscopetext2        : "In addition, iOG can deliver specialized training and full new APC implementation or undertake APC revamp projects along with its partner organizations"
            },  
            {
                // controlloopsuubTitle2    : "What we offer:",
                // energyimg             : "/images/2.png",
                 apcscopetext3        : "Our experienced control loop tuning experts use the control system and process historian as a window into the process, sorted through the mountains of data and rank the data according to economic factors which in-turn provides focused information to plant decision makers."
            },       
        ]
    }

    



    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   {
                    this.ApcscopeData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <div className="bluetext  apcscope_paraaa-top">{data.apcscopesuubTitle}</div>
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
                                 <div className="apcscope_list">Advanced Process Control Consulting Study</div>
                                 <li className="apcscope_sublist">Evaluation of current plant operations and existing automation performance</li>
                                 <li className="apcscope_sublist">Benefits analysis to define and quantify the expected economic improvements</li>
                                 <li className="apcscope_sublist">Development of a Functional Design Specification for APC implementation</li>
                                 <li className="apcscope_sublist">Recommendation for additions, modifications, and upgrades of instrumentation, analyzers, or systems necessary to support effective application of APC technologies</li>
                                 <li className="apcscope_sublist">Estimation of budgetary project costs (±30%)</li>
                                 <li className="apcscope_sublist">Opportunity analysis – An investigation to determine the potential improvements from APC and estimate expected economic gains will be performed.</li>
                                 <li className="apcscope_sublist">Analysis of financial return on investment for project justification and prioritization</li>
                                 <li className="apcscope_sublist">Preparation of project implementation plans and schedules</li>
                                 <li className="apcscope_sublist">Current automation status review– An audit of existing automation systems and instrumentation to baseline status and performance will be conducted.</li>
                              </div>

                        {
                        this.ApcscopeData1().map((data, index)=>{
                           return ( 
                            <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="col-lg-12">
                                                <p className="apcscope_line_paraaaa2">{data.apcscopetext2}
                                                </p>
                                                <p className="apcscope_line_paraaaa3">{data.apcscopetext3} 
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
                                 <div className="apcscope_list">Base Control Loop Tuning</div>
                                 <li className="apcscope_sublist">iOGConsultant </li>
                                 <div className="apcscope_subsublist">o Identify top 10 control loops for economic improvement</div>
                                 <div className="apcscope_subsublist">o Build real time performance dashboards</div>
                                 <div className="apcscope_subsublist">o Build KPIs to enhance plant performance</div>
                                 <div className="apcscope_subsublist">o Identify interacting/oscillating loops</div>
                                 <li className="apcscope_sublist">iOGImplement</li>
                                 <div className="apcscope_subsublist">o Implementation of control loop tuning software</div>
                                 <div className="apcscope_subsublist">o Integration with existing assets</div>
                                 <li className="apcscope_sublist">iOGTrain</li>
                                 <div className="apcscope_subsublist">o Build industry centric training modules</div>
                                 <li className="apcscope_sublist">iOGStudy</li>
                                 <div className="apcscope_sublist">Assessments of Overall Sensor Health, Valve Health, and Controller Health.Built different datasets to identify process models</div>
                                 <div className="apcscope_subsublist">o Build industry centric training modules</div>
                                 <div className="apcscope_subsublist">o Develop enhanced tools for root cause problem solving</div>
                                 <div className="apcscope_subsublist">o Advanced regulatory control studies, suggestions and design</div>

                               </div>

                               <div>
                               <p className="apcscope_line_paraaaa4 apc_mb100">Our experienced consultants have a strong domain knowledge and can provide support, consultation
                                  and implementation services using the following advanced solutions in the area of control loop
                                  monitoring such as Expertune Plant Triage, Aspen Watch and the Matrikon Process Doctor
                               </p>
                               </div>

                               
 
                          </div>
                        </div>


        );
    }
}