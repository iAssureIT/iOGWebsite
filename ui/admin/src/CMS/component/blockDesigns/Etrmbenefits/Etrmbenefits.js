import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Etrmbenefits.css';

export default class Etrmbenefits extends Component {
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


EtrmBenefitsData(){
        return [
            {
                etrmbenefitsTitle    : "Benefit from Real Time Pricing Information",
                // energyimg            : "/images/2.png",
                etrmbenefitstext     : "You need to be aware of the market dynamics minute by minute in order to proactively respond to the rapidly changing market environment."
            },
            
                        
        ]
    }

EtrmBenefitsData1(){
        return [
            {
                etrmbenefitstext1     : "Pricing tools offer detailed information pertaining to all aspects of the industry through asingle computer application. (e.g. PAWS, GlobalView, Bloomberg, Reuters)"
            } 
        ]
    }

EtrmBenefitsData2(){
        return [
            {
                etrmbenefitssubTitle2     : "What we offer:"
            },

        ]
    }


    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   {
                    this.EtrmBenefitsData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <h2 className="bluetext etrmbenefits_paraaa-top">{data.etrmbenefitsTitle}</h2>
                                            <br></br>
                                            
                                            <p className="etrmbenefits_line_paraaaa">{data.etrmbenefitstext}
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
                    this.EtrmBenefitsData1().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <p className="etrmbenefits_line_paraaaa1">{data.etrmbenefitstext1}
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
                                 <div className="etrmbenefits_list"><b>Key Features of Pricing Tools</b></div>
                                 <div className="etrmbenefits_subsublist">o Provides real time NEWS and market alerts</div>
                                 <div className="etrmbenefits_subsublist">o Provides benchmark price assessments, intra-day indicators, short and long term forward curves from actual transactions and modeled values</div>
                                 <div className="etrmbenefits_subsublist">o Provides extensive list of newsletters, reports and geo-spatial data to cover every aspect of the Oil &amp; Gas industry</div>
                                 <div className="etrmbenefits_subsublist">o Capability to integrate and export pricing data into other critical applications in the refinery business process such as Production Accounting and Production.Planning applications to carry out techno-economical evaluations</div>
                                 <div className="etrmbenefits_subsublist">o Provides a simultaneous multi-user environment</div>
                                 <div className="etrmbenefits_subsublist">o Analyzes oil markets, assess impacts of macroeconomics, geopolitics, trading patterns and price structures.</div>
                               </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="etrmbenefits_list1"><b>Why use Pricing tools?</b></div>
                                 <div className="etrmbenefits_subsublist1">o Allow users to forecast forward price movements and recommend trading strategies. This helps manage price risk and optimize refinery margins.</div>
                                 <div className="etrmbenefits_subsublist1">o Save significant man hours</div>
                                 <div className="etrmbenefits_subsublist1">o Aids users in analyzing the markets and decide on the best time to implement different hedging strategies</div>
                                 <div className="etrmbenefits_subsublist1">o Provide accurate data quickly through a flexible, customizable interface, helping users avoid costly errors and delays.</div>
                                 <div className="etrmbenefits_subsublist1">o Pricing tools connect the users with information on both Forecasted prices (e.g.IHS, Argus price assessments, Platts forward curve etc.) and also actual daily quotes on crude and product based on the previous day settled transaction details.</div>
                               </div>

                               {
                                this.EtrmBenefitsData2().map((data, index)=>{
                                 return ( 
                                  <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                      <div className="col-lg-12">
                                                      <p className="etrmbenefits_paraaa-top6">{data.etrmbenefitssubTitle2}
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
                                 <div className="etrmbenefits_list2"><b>We have deep expertise to:</b></div>
                                 <div className="etrmbenefits_subsublist2">o Recommend the viability of the existing pricing tools for your situation</div>
                                 <div className="etrmbenefits_subsublist2">o Design business processes and functional architecture to ensure right flow of market information throughout the organization</div>
                                 <div className="etrmbenefits_subsublist2 etrmbenefits_mb">o Design and implement integration of pricing tools with critical applications in the refinery business process such as Production Accounting and Production planning applications</div>
                               </div>
                          </div>
                        </div>


        );
    }
}