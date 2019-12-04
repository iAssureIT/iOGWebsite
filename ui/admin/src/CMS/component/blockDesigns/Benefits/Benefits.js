import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Benefits.css';

export default class Benefits extends Component {
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

BenefitsData(){
        return [
            {
                benefitsTitle    : "Advanced Process Control Services",
                // energyimg     : "/images/2.png",
                benefitstext     : "Our team has expertise needed to address plant regulatory control, base control loop tuning issues, identify scope for implementation of MVPC technology and implement APC technologies."
            } 
                        
        ]
    }


    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12">
                    <div className="line_benefits col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div>
                  </div>
                   {
                    this.BenefitsData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">

                                            <h2 className="bluetext text-center benefits_paraaa-top">{/*{data.benefitsTitle}*/}{this.state.blocks.blockTitle}</h2>
                                            <br></br>
                                            {/*<p className="apc_para1">
                                            <b className="apc_yellow_text">Advanced Process Control (APC)</b> technologies helps to improve operation stability, push operations closer to quality or equipment limits and improve the capability of process units to handle disturbances. Our APC consulting services help customers specify, justify, and apply APC technologies such as multivariable predictive control, neural net inferential modeling, and fuzzy logic controllers that will significantly improve plant performance.
                                            </p>
                                            <p className="benefits_line_paraaaa">{data.benefitstext}

                                            </p> 
                                            */}
                                            {this.state.blocks.blockSubTitle}

                                            <br></br>
                                         </div>
                                        </div>
                                       </div>
                                      </div>
                                    </div>         
                                  </div>
                                     );
                                  })
                               }
                               <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>

                              {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="benefits_list">The Benefits of Advanced Process Controls (APC)</div>
                                 <li className="benefits_sublist"> Improved production by reducing the safety buffers needed to ensure limits for product quality and equipment integrity are not breeched</li>
                                 <li className="benefits_sublist"> Minimized energy consumption for maximal plant throughput</li>
                                 <li className="benefits_sublist"> Stabilized plant operation through minimized fluctuation of key process variables</li>
                                 <li className="benefits_sublist"> Improved responsiveness to changing economic and regulatory conditions through easy review and modification of operating objectives</li>
                                 <li className="benefits_sublist"> Less variability in the feedstock to downstream units</li>
                                 <li className="benefits_sublist"> Improved operator effectiveness by focusing attention on the key unit performance indicators</li>
                                 <li className="benefits_sublist"> Improved process safety as the APC system acts as an early-warning system.Better understanding of overall unit operation</li>
                               </div>*/}
                          </div>
                        </div>


        );
    }
}