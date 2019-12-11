import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Etrmtradingrisk.css';

export default class Etrmtradingrisk extends Component {

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


EtrmData(){
        return [
            {
                etrmtradingriskTitle    : "ETRM and Pricing",
                // energyimg            : "/images/2.png",
                etrmtradingrisksubTitle : "Excel at Managing Trading Risks",
                etrmtradingrisktext     : "Many oil and gas producers and marketers employ hedging strategies to lock in prices at profitable levels. Futures contracts and swaps can be effective tools in managing price and basis risk, creating price caps, price floors and “no-cost collars” to manage price risk."
            },
        ]
    }

EtrmData1(){
        return [
            {
                etrmtradingrisktext1     : "Energy and commodities’ firms engaged in active trading are investing in more sophisticated ETRM solutions. Excel is not going to cut it!"
            } 
        ]
    }

EtrmData2(){
        return [
            {
                etrmtradingrisktext2     : "The interfaces amongst these offices make it impossible to get a clear picture of the corporation’s global exposure when departments work in isolation."
            },

        ]
    }

EtrmData3(){
        return [
            {
                etrmtradingrisktext3     : "You can then use this information for prudent decision making."
            },

        ]
    }

EtrmImgData(){
        return [
            {
                 etrmimg1             : "/images/etrm.png",
            },       
        ]
    }


 EtrmData4(){
        return [
            {
                etrmtradingrisktext4     : "In developing an ETRM infrastructure that effectively enables and supports the business, one needs to look beyond just a single application. You should consider other methods and technologies that need to be considered as part of the overall solution such as “Data integration”, “Data management”, Ancillary systems (such as freight, forecasting, logistics) and Reporting."
            },

        ]
    }
EtrmData5(){
        return [
            {
                etrmtradingriskTitle5    : "What we offer:",
                etrmtradingrisktext5     : "iOG has an experienced team of consultants with expertise on popular technologies such as SAP&#39;s - IS-Oil, TSW, GTM, TRM, BI, XI and Trading package sections such as TriplePoint - (Commodity-SL, Credit Ready), OpenLink - (Endur gMotion, cMotion) and Allegro Trading Solutions."           
            },
        ]
    }

    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12">
                    <div className="line_etrmtradingrisk col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div>
                  </div>
                   {
                    this.EtrmData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <h2 className="bluetext etrmtradingrisk_paraaa-top">{data.etrmtradingriskTitle}</h2>
                                            <br></br>
                                            <p className="etrmtradingrisk_subtitle_paraaaa">{data.etrmtradingrisksubTitle}
                                            <br></br>
                                            </p>
                                            <p className="etrmtradingrisk_line_paraaaa">{data.etrmtradingrisktext}
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

                               {
                    this.EtrmData1().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <p className="etrmtradingrisk_line_paraaaa1">{data.etrmtradingrisktext1}
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
                                 <div className="etrmtradingrisk_list"><b>What is an integrated Energy Trading and Risk Management (ETRM) solution?</b></div>
                                 <div className="etrmtradingrisk_sublist">ETRM activities can be broadly classified as</div>
                                 <div className="etrmtradingrisk_subsublist">o Bidding, scheduling/nominations (generally, front office)</div>
                                 <div className="etrmtradingrisk_subsublist">o Price forecasting, simulations, risk management (generally, middle office); and</div>
                                 <div className="etrmtradingrisk_subsublist">o Balancing, settlement, contract management (generally, done by back office).</div>
                               </div>

                               {
                                this.EtrmData2().map((data, index)=>{
                                 return ( 
                                  <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                      <div className="col-lg-12">
                                                      <p className="etrmtradingrisk_line_paraaaa2">{data.etrmtradingrisktext2}
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

                                         {
                                          this.EtrmData3().map((data, index)=>{
                                           return ( 
                                            <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="col-lg-12">
                                                                <p className="etrmtradingrisk_line_paraaaa3">{data.etrmtradingrisktext3}
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


                                                   {
                                                    this.EtrmImgData().map((data, index)=>{
                                                   return ( 
                                                    <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="col-lg-12">
                                                                          <div className="col-lg-12">
                                                                            <div className="etrm_img1">
                                                                               <img className="trading_risk_img1" src={data.etrmimg1} alt="" />
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
                                 <div className="etrmtradingrisk_list1"><b>Key advantages of an ETRM system:</b></div>
                                 <div className="etrmtradingrisk_subsublist1">o Serve as a system of record for all transactions</div>
                                 <div className="etrmtradingrisk_subsublist1">o Provide a controlled environment</div>
                                 <div className="etrmtradingrisk_subsublist1">o Improve accuracy of data entry</div>
                                 <div className="etrmtradingrisk_subsublist1">o Provide an audit trail</div>
                                 <div className="etrmtradingrisk_subsublist1">o Reduce the amount of reconciliation done by the business</div>
                                 <div className="etrmtradingrisk_subsublist1">o Automate manual processes, such as confirmations and settlement</div>
                                 <div className="etrmtradingrisk_subsublist1">o Support risk management and measurement</div>
                               </div>

                               {
                                          this.EtrmData4().map((data, index)=>{
                                           return ( 
                                            <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="col-lg-12">
                                                                <p className="etrmtradingrisk_line_paraaaa4">{data.etrmtradingrisktext4}
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

                                    {
                                    this.EtrmData5().map((data, index)=>{
                                       return ( 
                                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="col-lg-12">
                                                            <h2 className="yellowtext etrmtradingrisk_paraaa-top5">{data.etrmtradingriskTitle5}</h2>
                                                            <br></br>
                                                            <p className="etrmtradingrisk_line_paraaaa5">{data.etrmtradingrisktext5}
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
                                 <div className="etrmtradingrisk_list2"><b>We help our clients in:</b></div>
                                 <div className="etrmtradingrisk_subsublist2">o Capture AS-IS and Define future TO-BE for trading.</div>
                                 <div className="etrmtradingrisk_subsublist2">o Choosing the right ETRM solution that fits into the business needs at the optimum implementation cost and duration</div>
                                 <div className="etrmtradingrisk_subsublist2">o Defined deal capture, pricing workbench, marine scheduling</div>
                                 <div className="etrmtradingrisk_subsublist2">o Mark To Market (MTM), inventory projection for international crude (Onshore, In-Transit, Sumed, etc.)</div>
                                 <div className="etrmtradingrisk_subsublist2">o Defining deal types (spot, term, EFP), external feeds (ICE, NYMEX, Platts, Opis, and Argus data)</div>
                                 <div className="etrmtradingrisk_subsublist2">o Three way Pegging, Transportation, Trades (affiliate and third-party, statistical,buy/sell, OTC/PTP, swap/EFS, futures, internal)</div>
                                 <div className="etrmtradingrisk_subsublist2">o New Deal Capture system OpenLink - Endur, gMotion, confirmations</div>
                               </div>
                          </div>
                        </div>


        );
    }
}