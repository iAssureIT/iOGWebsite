import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commonrefineryplanningblock.css';

export default class Commonrefineryplanningblock extends Component {
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

RefineryPlanningData(){
        return [
            {
                refineryplanningTitle : "iOG Solutions for Refinery Planning",
                refineryplanningtext  : "We, at iOG Solutions, are a team of consultants with a rich and vast experience in deploying end-to-end solutions of Refinery Planning business process at refineries in Spain, Middle-East, Vietnam, India and various other client sites across the world."
            }, 
           {
                refineryplanningSubTitle1 : "iOG Solutions offers:"
            }, 
                        
        ]
    }

    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  
                    <hr className="grey_line1 col-lg-12 col-md-12 col-sm-12 col-xs-12 "></hr>
                 
                   {
                    this.RefineryPlanningData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <p className="rp_line_subheadd plan_line_subsubheadd">{data.refineryplanningTitle}</p>
                                            <p className="rp_line_paraaaa">{data.refineryplanningtext}
                                            </p> 
                                           <div className="">
                                            <p className="rp_line_subsubheadd ">{data.refineryplanningSubTitle1}</p>
                                           </div>
                                       </div>
                                      </div>
                                    </div>         
                                  </div>
                                     );
                                  })
                               }
                          </div>
                          <div>
                          <ul className="">
                             <li className="refinery_list">Study the business process 'As-is'</li>
                             <li className="refinery_list">Provide a roadmap to achieve “To-be” status in-line with the best practices available worldwide</li>
                             <li className="refinery_list">Implement Planning Business Process at client site through :</li>
                             <div className="refinery_sublist">- Proper design of functional scope & high-level architecture</div>
                             <div className="refinery_sublist">- Identification, analysis, definition, and integration of the right sources of data to carry out the analysis</div>
                             <div className="refinery_sublist">- Development of automated templates for handling data inflow and outflow</div>
                             <div className="refinery_sublist">- Setting up of exhaustive lists of case sets for Spot & Term crude evaluation, export evaluation, New product evaluation, and other economic studies</div>
                             <div className="refinery_sublist">- Sophisticated trend charts for effective reporting to Top Management</div>
                             <li className="refinery_list">Generate LP vectors through rigorous reactor models based on actual data to fine tune the LP model which shall subsequently be used to take “Make-Buy-Sell” decisions</li>
                             <li className="refinery_list">LP Model review and identification of improvement opportunities</li>
                             <li className="refinery_list">LP Model design and implementation</li>
                             <li className="refinery_list">Implement multi-refinery and multi-period LP model</li>
                             <li className="refinery_list">Define SCM KPI’s for visualization on the Top Management dashboard</li>
                             <li className="mb100 refinery_list">SCM Integration with other relevant refinery solutions to ensure seamless flow of data, efficient analysis, and elegant reporting.</li>
                          </ul>
                          </div>
                        </div>
        );
    }
}