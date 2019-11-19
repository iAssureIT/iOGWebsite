import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Inventorymngpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Inventorymngpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Inventory Management & Scheduling",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "End-to-end integration of the petroleum supply chain from crude movement through finished product actualization is very crucial in present market conditions.  Petroleum supply chain operational teams often struggle with limited visibility into inventory levels at a terminal, production schedules, distribution plans and product movement requirements to ensure orders are delivered in the most profitable and timely manner. Adding to this, the complexity of global transportation issues, disparate systems and organizational silos together makes the overall process a daunting challenge.",
                overviewtext2       : "Therefore, a single enterprise solution is the need of the hour which integrates inventory management, product nominations, confirmations and actualization, movement management and transportation scheduling equipped with tracking and execution features. This shall enable operations accurately and effectively manage the hour-to-hour, day-to-day operational activities, conduct thorough transaction analysis, manage supply and demand, ensure proper balancing of inventory, nominations and exchanges, movement scheduling, contract monitoring and provide  decision-support tools to better manage the petroleum supply chain.",
                overviewtext3       : "Inventory management and scheduling delivers value by:",
                commonulliUl2 : [
                    {
                        ulData : "Providing visibility into future demand and inventory levels, enabling the company to take advantage of supply/demand disruptions while minimizing working capital"
                    },
                    {
                        ulData : "Integrating refinery scheduling with distribution scheduling, yielding feasible and achievable schedules"
                    },
                    {   
                        ulData : "Reducing transportation and demurrage costs through realistic distribution schedules"
                    },
                    {   
                        ulData : "Facilitating deal actualization and contract reconciliation"
                    },
                    {   
                        ulData : "Enabling visibility into supply and trading positions"
                    },
                    {   
                        ulData : "Facilitating best-practice supply chain planning by connecting demand forecasters, refinery schedulers, distribution schedulers, traders and operations personnel"
                    }
                ]

            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "iOG Offerings",
                challengestext  : "We, at iOG, have extensive experience with multiple Inventory management systems and can provide the following services:",
                challengestext2 : "",
                commonulliUl : [
                    {   ulData : "Consulting Services",
                        commonulliLi : [
                                            {
                                                liData : "Business requirements and technology selection to meet the requirement"
                                            },
                                            {
                                                liData : "Evaluation of handling Inventory Management at the ERP or MES layer"
                                            },
                                            {
                                                liData : "Ensure the ability to submit shipment updates and shipment actualizations electronically from external systems"
                                            },
                                            {
                                                liData : "Standard integration with transportation companies"
                                            },
                                            {
                                                liData : "Integration with planning and scheduling systems"
                                            }
                                        ]
                    },
                    {   ulData : "Implementation Services",
                        commonulliLi : [
                                            {
                                                liData : "Implementation services using the following advanced solutions in the area of inventory management scheduling such as Aspen IMOS, SAP Trader's and Scheduler's Workbench (TSW), Maron Oil Accounting System"
                                            }
                                        ]
                    }
                ]
            }, 
                  
        ]
    }


  
  commonulliData(){
        return [
            {
                commonulliheading : "The inventory management scheduling model has the following features:",
                commonullisubheading : "",
                commonullitext  : "",
                commonulliUl : [
                    {   ulData : "Inventory Management:",
                        commonulliLi : [
                                            {
                                                liData : "View inventory (quality and quantity) planned, scheduled and committed movements through enterprise-wide visibility into current and future inventory and movements."
                                            },
                                            {
                                                liData : "Capture automated feeds from external systems to conduct physical and operational inventory reconciliation."
                                            },
                                            {
                                                liData : "View inventory at a material pool level as well as the inventory of physical tanks, including management of tank service schedules, co-mingled inventory and seasonal tank turns."
                                            }
                                        ]
                    },
                    {   ulData : "Operations scheduling and Movement Management:",
                        commonulliLi : [
                                            {
                                                liData : "Plan, schedule, and monitor movement of crude and finished products via multiple modes of transport for primary distribution."
                                            },
                                            {
                                                liData : "Supported business processes include automated nominations, confirmations, tickets/actualization, and shipment updates for pipeline, rail car, truck, vessel and barge transactions."
                                            },
                                            {
                                                liData : "Respond better and faster to events outside operational control and cut down on supply chain disruptions."
                                            }
                                        ]
                    },
                    {   ulData : "Contract Monitoring and Deal Tracking:",
                        commonulliLi : [
                                            {
                                                liData : "Create and match inventory movements to buy-sell deals. "
                                            },
                                            {
                                                liData : "Monitor the running balance in spot, term and exchange deals and create and execute book-outs."
                                            },
                                            {
                                                liData : "Take advantage of favorable inventory trading opportunities to  reduce distribution costs by determining the least cost transportation mode including rail, pipeline, barge or truck."
                                            }
                                        ]
                    },
                    {   ulData : "Supply and Demand Balancing:",
                        commonulliLi : [
                                            {
                                                liData : "Access marketing demand forecasts through  an aggregated perspective or through channel views or through refinery production plans."
                                            },
                                            {
                                                liData : "Identify long/short balances by product, region and location."
                                            },
                                            {
                                                liData : "Develop scenarios and perform what-if analysis for better decision making."
                                            }
                                        ]
                    }

                ]
            }                        
        ]
    }

    imgleafblockData(){
        return [
            {
                plansTitle        : "",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/inventorymng.jpg",

            }
        ]
    }

   

  render() {  
    return (
      <div> 
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 iogimplmntbrdCrm refinerybrdCrm ">
       <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable">           
           <ul class="breadcrumb breadcrumb2 demadnavigate">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="/services" class="pathway">Expertise</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>      
                <li class="active"><span>Inventory Management</span></li></ul>
            </div>
          </div>
        </div> 
       </div>  
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Commonulliblock CommonulliData={this.commonulliData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
     </div> 
    );  
  }
}

