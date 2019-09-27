import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Productionaccpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
// import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Productionaccpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Production Accounting",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "The Production accounting application performs reconciliation of the measured raw data and provides accurate data for daily production accounting and performance reporting. It provides reconciled data for daily, weekly and monthly reporting and provides key inputs for fiscal / revenue accounting. It also provides other tangible and nontangible benefits such as loss minimization, quality giveaway minimization, etc.",
                overviewtext2       : "",
                overviewtext3       : "",
                overviewtext4       : "",
                overviewtext5       : "",
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "A typical business process of downstream oil accounting can be described as follows:",
                commonulliUl : [
                    {
                        ulData : "Import of data into the production accounting tool:  Rigorous and comprehensive oil accounting analysis needs data in-flow from various sources such as process flows from data historian, densities and calorific values from LIMS, inventories from tank gauging system, oil movements logged in manually by field operators or flowing automatically from an OMS system, related information from other solutions such as planning & scheduling, process simulation and rigorous unit models, energy metering systems, business systems (ERP) etc. Preliminary data validation is done to check information for its completeness."
                    },
                    {
                        ulData : "Gross Error Detection and Mitigation: Gross errors such as those created due to missing movements (receipts, shipments, tank-to-tank transfers, etc.), incorrect mapping of source/destination to an event and automated/manual data entry errors are first detected and mitigated before any further action."
                    },
                    {   
                        ulData : "Reconcile Plant Information: It is basically a process of minimizing the residual error at the process nodes originating from uncertainties in metered values, volume expansion factors and densities through the usage of advanced mathematical error-distribution techniques. The actual plant operational data including production, blending and tank farm movements, product qualities, energy consumption, etc. are validated and reconciled in production accounting module to eventually yield “balanced” production statistics before being sent for calculation of Key Performance Indicators (KPIs)."
                    },
                    {   
                        ulData : "Publish Reconciled Yield data and KPIs: The calculated KPIs based on validated data are monitored against set targets for the day received from planning, scheduling and from standard operating targets (refinery databook) provided by unit models. Typical KPIs are set against parameters such as specific energy consumption, gross refinery margin, Unit margins for each process unit, capacity utilization of process units and environment KPIs to name a few. These consolidated and reconciled KPIs are used across the organization for performance assessment and decision making."
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "Applications",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Accurate production data inflow for Refinery profitability assessment"
                    },
                    {
                        ulData : "Precise classification and reporting of accounted and unaccounted losses"
                    },
                    {   
                        ulData : "Timely identification of Stock losses occurring due to system leaks and faulty measurements."
                    },
                    {   
                        ulData : "The best source of input on production metrics to do an Actual Vs Plan LP retro analysis"
                    },
                    {   
                        ulData : "Facilitate traders in accurately positioning the crude and product opening inventory position in the hedge market."
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "Challenges",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Accuracy in data imported as garbage in = garbage out"
                    },
                    {
                        ulData : "Man hours wasted in tracking and resolving gross errors"
                    },
                    {   
                        ulData : "Ineffective communication between the yield accounting engineer and with other concerned staff."
                    },
                    {   
                        ulData : "Achieve tangible benefits for acceptance of the oil accounting system"
                    },
                    {   
                        ulData : "Application/scope of Oil accounting on the refinery-wide or unit-wide basis."
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock4(){
        return [
            {
                challengesTitle : "Services Offered",
                challengestext  : "",
                challengestext2 : "Our experienced consultants have strong domain knowledge and can provide support, consultation, and implementation services for all advanced software solutions in the area of Production Accounting.",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Consulting services to study the oil accounting system “As-is” and provide best-in-class solutions to improve instrumentation reliability and network infrastructure robustness."
                    },
                    {
                        ulData : "Provide solutions for auditing the oil accounting system and develop procedures to aid transparency and repeatability and gain refinery-wide acceptance"
                    },
                    {   
                        ulData : "Design and establish “best-practice” standardized and customized reports"
                    },
                    {   
                        ulData : "Provide automated seamless data import processes such as Integration of Data Historian, OMS, etc. with Production accounting tools and design well-defined quality control steps to ensure import of right data."
                    },
                    {   
                        ulData : "Implementation and support of production accounting tool"
                    },
                    {   
                        ulData : "Deploy expert solutions to track and mitigate gross errors in complicated networks"
                    },
                    {   
                        ulData : "Tuning and maintenance of oil accounting systems to reduce daily and monthly imbalances to tolerant levels"
                    },
                    {   
                        ulData : "Design sensitivity analysis and integration of KPI’s with other applications."
                    }
                ]
            }, 
                  
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
                plansimg          : "images/productionacc.jpg",

            }
        ]
    }

   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock3()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock4()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

