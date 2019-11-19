import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './SimulationPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
import Downstreamservicebanner from '../../allBlocks/Downstreamservicebanner/Downstreamservicebanner.js';

export default class SimulationPage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Process Simulation and Modeling",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Process simulation studies enable the asset owners and the system designers to gain a better insight into the design and operation of their facilities.",
                overviewtext2       : "In downstream process, simulation studies are used to:",
                overviewtext3       : "Although simulation techniques vary depending on the size and complexity of the process, along with the software being used to perform the modeling, there are two main types of refining simulation.",
                overviewtext4       : "Steady state simulation analysis is used to analyze the processes when the system is in equilibrium. Typical applications of steady state simulation analysis are to:",
                overviewtext5       : "Application of steady state simulation comes majorly during the conceptual phase of a project with a motive to understand how a design can be altered to get the most out of a process from both a business standpoint and an engineering perspective.",
                commonulliUl : [
                    {
                        ulData : "Design, Develop, Analyze and optimize various processes."
                    },
                    {
                        ulData : "Analyze existing processes"
                    },
                    {   
                        ulData : "Define the process parameters used in the design of future processes."
                    }
                ],
                commonulliUl2 : [
                    {
                        ulData : "Develop the heat and material balance for the process"
                    },
                    {
                        ulData : "Prepare process equipment data sheets"
                    },
                    {   
                        ulData : "Analyze relief and flare systems"
                    }
                ]

            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext3  : "Dynamic simulation is an extension of steady state simulation that allows the user to predict the response of process parameters due to changes in operation with respect to time.",
                challengestext : "Some of the dynamic simulation analysis utilized in refinery and petrochemical processes to optimize the performance are:",
                challengestext2 : "Dynamic Simulation is an activity usually carried out to ensure that processes remain safe under stressful or abnormal conditions.",
                commonulliUl : [
                    {
                        ulData : "Compressor dynamic simulation"
                    },
                    {
                        ulData : "Heat exchanger tube rupture analysis"
                    },
                    {   
                        ulData : "Transient surge analysis of a fire water system"
                    },
                    {   
                        ulData : "Optimization of Process control systems"
                    }
                ]
            }, 
                  
        ]
    }

 Commonleafulblock2(){
        return [
            {
                challengesTitle : "Simulation of Dynamic Behaviors of Process Equipment’s and process piping viz.",
                challengestext3  : "",
                challengestext : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Compressor Loop Study, Anti-surge line/Valve design and its adequacy checking."
                    },
                    {
                        ulData : "Depressurizing Study, Design and validation of relief valve/vent valve/Emergency depressurization system."
                    },
                    {   
                        ulData : "Control Scheme validation."
                    },
                    {   
                        ulData : "Start-up/ Shutdown/ Scenario testing."
                    },
                    {   
                        ulData : "Critical control loop tuning parameter estimation."
                    },
                    {   
                        ulData : "Validating Cause and Effect matrix for ESD system for critical equipment’s or plant-wide."
                    },
                    {   
                        ulData : "HAZOP"
                    },
                    {   
                        ulData : "Plant performance checking",
                        commonulliLi : [
                                            {
                                                liData : "Checking available capacity margin"
                                            },
                                            {
                                                liData : "Debottlenecking/Revamp Study",

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
                commonulliheading : "We offer the following services in the area of Process Simulation:",
                commonullisubheading : "",
                commonullitext  : "",
                commonulliUl : [
                    {   ulData : "Steady State Simulation",
                        commonulliLi : [
                                            {
                                                liData : "Process Synthesis"
                                            },
                                            {
                                                liData : "Process Design (FEED Stage)",
                                            },
                                            {
                                                liData : "Process Optimization"
                                            },
                                            {
                                                liData : "Process Revamp/Debottlenecking"
                                            },
                                            {
                                                liData : "Process Simulation Model building"
                                            }
                                        ]
                    },
                    {   ulData : "Dynamic Simulation",
                        commonulliLi : [
                                            {
                                                liData : "Engineering Study of Process/Equipment/Pipelines"
                                            },
                                            {
                                                liData : "Control Scheme Design and Validation"
                                            },
                                            {
                                                liData : "Start-up/Shut down study"
                                            },
                                            {
                                                liData : "Online Optimization"
                                            },
                                            {
                                                liData : "Kinetic modeling"
                                            },
                                            {
                                                liData : "Simulation model tuning"
                                            }
                                        ]
                    },
                    {   ulData : "Operator Training",
                        commonulliLi : [
                                            {
                                                liData : "Engineering studies and report generation."
                                            },
                                            {
                                                liData : "Modification/maintenance of dynamic/steady state simulation models."
                                            },
                                            {
                                                liData : "Platform independent services (capability on Hysys, Unisim, Dynsim, OLGA, Pipesim etc.)"
                                            },
                                            {
                                                liData : "Training services for Hysys and Unisim."
                                            },
                                            {
                                                liData : "Collaborating on study projects with EPC’s."
                                            },
                                            {
                                                liData : "Development of user defined modules on Hysys and Unisim platforms for proprietary calculations."
                                            },
                                            {
                                                liData : "Development of automation application for Hysys and Unisim platform."
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
                plansTitle        : "Simulation & Modeling Life Cycle",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/iogsamul.png",

            }
        ]
    }
    ServicesData(){
        return [
            {
                servicesimg   : "/images/Simulation-&-Modelling.png",
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
           <ul class="breadcrumb breadcrumb2 ">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="#" class="pathway">Expertise</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>      
                <li class="active"><span>Simulation</span></li></ul>
            </div>
          </div>
        </div> 
       </div> 
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Downstreamservicebanner infodata={this.ServicesData()} />
      	<Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} /> 
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Commonulliblock CommonulliData={this.commonulliData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} /> 
      </div>
     </div> 
    );  
  }
}

