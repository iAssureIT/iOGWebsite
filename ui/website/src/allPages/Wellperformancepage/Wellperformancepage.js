import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Wellperformancepage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Wellperformancepage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Well Performance Analysis and Monitoring",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Well performance monitoring helps to identify wells where deliverability has deteriorated. iOG Solutions provides in-depth Analysis and Monitoring of wells while drilling, after drilling, after completion, after production and also for reservoir behaviour during all the phases i.e. complete life cycle as shown below.",
                overviewtext2  : "",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : []


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "A typical workflow for performing Well Performance Analysis includes the following steps:",
                challengestext2 : "iOG Well Performance analysis and monitoring Services:",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Defining the Well-type and reference phase",
                    },
                    {  
                        ulData : "Defining Wellbore, trajectory, flow-line, ID, etc.",
                    },
                    {  
                        ulData : "Vertical Lift profiling: Defining Pressure drop models and temperature profiles",
                    },
                    {  
                        ulData : "Inflow performance Relationships study",
                    },
                    {  
                        ulData : "Well Performance Analysis",
                    },
                    {  
                        ulData : "Sensitivity Analysis",
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "Basic Services",
                commonulliUl : [
                    {
                        ulData : "Analysing well performance from conventional and tight oil and gas reservoirs",
                    },
                    {  
                        ulData : "Real-time field and well production surveillance enabling the optimization of production operations",
                    },
                    {  
                        ulData : "Automated surveillance of well/assets",
                    },
                    {  
                        ulData : "Quantify uncertainty in production forecasting and reservoir characterization",
                    },
                    {  
                        ulData : "Create custom templates and workflows for well  performance analysis",
                    },
                    {  
                        ulData : "Performing Advanced Engineering Calculations on the monitored data to yield inferable results",
                    },
                    {  
                        ulData : "Comparing real-time performance of the well against well potentials",
                    },
                    {  
                        ulData : "Streamline well test lifecycle to improve the accuracy and frequency of well tests",
                    },
                    {  
                        ulData : "Incorporating completion design calculations",
                    },
                    {  
                        ulData : "Identify and evaluate operating conditions: liquid loading, erosion, scale, water coning and sand production prediction",
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "",
                challengestext  : "",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "Advanced Services",
                commonulliUl : [
                    {
                        ulData : "Cloud-based centralized views for all assets",
                    },
                    {  
                        ulData : "Alerts and prioritized views of abnormal well performance",
                    },
                    {  
                        ulData : "Real-time estimates of production rates to benchmark and evaluate production and enhance allocation and forecasting.",
                    },
                    {  
                        ulData : "Evaluate the potential of the well system and identify the optimal artificial lift method",
                    },
                    {  
                        ulData : "Monitoring the performance of water injection and diagnose plugging or fracturing issues.",
                    },
                    {  
                        ulData : "Sensitivity analysis for possible tubing, casing, coiled tubing, velocity string, perforations and gaslift completion options",
                    },
                    {  
                        ulData : "Perform single or multiphase flow (gas, oil and/or water) calculations through tubing, annulus, or casing",
                    }
                ]
            }, 
                  
        ]
    }

 imgleafblockData(){
        return [
            {
                plansTitle        : "Process of Well Monitoring",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "iOG Solutions uses real-time monitoring of drilling operations to provide timely support and recommendations that can prevent or diminish undesirable situations. We evaluate drilling performance, and then we collaborate with you to develop new procedures to reduce costs and increase the efficiency of the drilling process. Our real-time monitoring service allows our customers to assess and evaluate multiple operations from a single location, reducing the costs associated with staffing and risk exposure.",
                plansimg          : "images/wellprocesing.png",

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
      </div>
    );  
  }
}

