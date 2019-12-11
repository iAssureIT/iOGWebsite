import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Optimization.css';
import '../allCss/AboutUs.css';

export default class Optimization extends Component {
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

OptimizationData(){
        return [
            {
                optimizationsuubTitle    : "Steam Network Optimization",
                // energyimg             : "/images/2.png",
                 optimizationtext        : "Efficient energy management calls for optimization from a granular level (say heat recovery system in a small fired heater) to a macroscopic level (such as large crude unit charge heaters)."
            },
            {
                // optimizationsuubTitle    : "Steam Network Optimization",
                // energyimg             : "/images/2.png",
                 optimizationtext1          : "Flash steam recovery, recovering heat from the blowdown water of various boilers, waste-heat steam generators, minimization LP steam condensation, and proper steam tracer system are some of the endless options for process engineers to optimize steam balance in a refinery"
            } 
                        
        ]
    }

    OptimizationData1(){
        return [
            {
                optimizationsuubTitle2    : "What we offer:",
                // energyimg             : "/images/2.png",
                 optimizationtext2        : "We are a team of experienced consultants having in-depth knowledge in conducting energy management studies at client sites across the world."
            },      
        ]
    }

    



    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   {
                    this.OptimizationData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <div className="bluetext  optimization_paraaa-top">{this.state.blocks.blockTitle}</div>
                                           
                                           <div className="optimization_line_paraaaa" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
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
                                 <div className="optimization_list">Energy Management Solutions offer a useful handle to:</div>
                                 <div className="optimization_sublist">- Examine and analyze energy usage through statistical models based on Time-Series Analysis</div>
                                 <div className="optimization_sublist">- Highlight and resolve energy imbalances</div>
                                 <div className="optimization_sublist">- Identify both system-wide and equipment-specific operational cost improvements</div>
                                 <div className="optimization_sublist">- Facilitate accurate performance monitoring</div>
                                 <div className="optimization_sublist">- Use energy performance KPI’s to track how energy is being consumed in a plant, identify gaps between targets, historical and actual performance and identify counter measures to improve energy performance.</div>
                                 <div className="optimization_sublist">- Real-time online energy management to increase energy efficiency, minimize the emissions of pollutants including global warming gases and reduce total energy costs</div>
                                 <div className="optimization_sublist">- Address "what-if" scenarios to develop optimized operating strategies during scenarios such as plant shutdowns, equipment selection, etc.</div>
                               </div>

                               {
                    this.OptimizationData1().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <div className=" texxt-yellow optimization_paraaa-top">{data.optimizationsuubTitle2}</div>
                                            <p className="optimization_line_paraaaa2">{data.optimizationtext2}
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
                                 <div className="optimization_list">We specialize in:</div>
                                 <div className="optimization_sublist">- Conducting energy optimization studies to boost profitability</div>
                                 <div className="optimization_sublist">- Identify potential areas of energy recovery</div>
                                 <div className="optimization_sublist">- Devise comprehensive steam and fuel models for analyzing utility systems and predict results for a wide range of operating conditions</div>
                                 <div className="optimization_sublist">- Devise energy performance KPI’s to track the actual performance</div>
                                 <div className="opt_mb100 optimization_sublist">- Develop optimized operating strategies during non-routine and challenging situations</div>
                      
                               </div>

                          </div>
                        </div>


        );
    }
}