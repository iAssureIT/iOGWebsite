import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Iogimplementpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Iogimplementpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "iOGImplement",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "iOGImpement is a specialized solution focused on addressing the implementation requirements across the entire chain of downstream operations. iOG Solutions provides expert implementation services of advanced software solutions to meet our client’s requirements. iOG consultants come with a wealth of experience in implementing advanced software solutions across the entire Oil & Gas industry. This enables us to help our clients implement new software solutions in the areas of the downstream value chain as well as in upgrading and streamlining existing systems.",
                overviewtext2       : "",
                overviewtext3       : "",
                

            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "Our differentiators:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Extensive cross-sector expertise with strong domain knowledge of both the Upstream and Downstream Verticals"
                    },
                    {
                        ulData : "World-class technical expertise in some of the most advanced solutions in the industry"
                    },
                    {   
                        ulData : "The unparalleled combination of domain-experts in our teams. The teams are built keeping in mind our clients’ requirements and needs."
                    },
                    {   
                        ulData : "End-to-end Implementation skills and experience on leading-market solutions"
                    },
                    {   
                        ulData : "Customization of solutions so as to cater to your specific situation"
                    },
                    {   
                        ulData : "Provision of independent consulting on process-centric applications widely used across the world"
                    },
                    {   
                        ulData : "A young, dynamic and confident team armed with a solution and goal-oriented approach."
                    },
                    {   
                        ulData : "Learning through sharing from our experience gained through interaction with different clients."
                    }
                ]
            }, 
                  
        ]
    }


  
  commonulliData(){
        return [
            {
                commonulliheading       : "",
                commonullisubheading    : "",
                commonullitext          : "Following is a partial list of the Downstream O& G Business process areas and related software solutions for which we provide Implementation services to our clients:",
                commonullitext2         : "The list offers only an overview of the typical implementation landscapes we handle. Have something specific to discuss? Connect with us now.",
                commonulliUl            : [
                    {   ulData          : "Refinery Planning & Scheduling",
                        commonulliLi    : [
                                            {
                                                liData : "Implementation of Planning, Scheduling Solution"
                                            },
                                            {
                                               liData : "Leverage Assay Management solutions for better and updated LP inputs."
                                            },
                                            {
                                                liData : "Upgrade of LP yield shift vectors using rigorous kinetic models"
                                            },
                                            {
                                                liData : "Implementation of  new unit models/ revamp of existing LP models"
                                            }
                                        ]
                    },
                    {   ulData : "Supply and Distribution",
                        commonulliLi : [
                                            {
                                                liData : "Build/re-vamp supply chain demand & distribution planning models"
                                            },
                                            {
                                                liData : "Implementation Retail automation solutions"
                                            },
                                            {
                                                liData : "Deployment of effective Sales and Operations Planning (S&OP) and Inventory Management modules"
                                            },
                                            {
                                                liData : "Integration of Supply distribution tools with Refinery Production planning and scheduling tools"
                                            }
                                        ]
                    },
                    {   ulData : "Manufacturing execution systems (MES)",
                        commonulliLi : [
                                            {
                                                liData : "Implementation of MES tools for operation management and development of procedures to aid aspects of transparency, repeatability and enable the gaining of refinery-wide acceptance"
                                            },
                                            {
                                                liData : "Management of oil accounting systems to reduce daily and monthly imbalances to tolerant levels"
                                            },
                                            {
                                                liData : "Development of  real-time performance monitoring tools"
                                            },
                                            {
                                                liData : "Implementation of  KPI’s and Profit trackers for continuous performance monitoring"
                                            },
                                            {
                                                liData : "Implementation of customized dashboard and analytics for holistic visualization and drill-down analysis all through the supply chain"
                                            },
                                            {
                                                liData : "Development of  customized applications and interfaces to fit client-specific requirements"
                                            }
                                        ]
                    },
                    {   ulData : "Advanced Process Control",
                        commonulliLi : [
                                            {
                                                liData : "Implementation of Base Control Loop tuning"
                                            },
                                            {
                                                liData : "Project execution/Support services to implement recommended or specified advanced process control applications"
                                            }
                                        ]
                    },
                    {   ulData : "Dynamic and Steady-State Simulation",
                        commonulliLi : [
                                            {
                                                liData : "Development of dynamic/steady state simulation models"
                                            },
                                            {
                                                liData : "Modification/maintenance of dynamic/steady state simulation models"
                                            },
                                            {
                                                liData : "Development of user-defined modules on Simulation platforms for proprietary calculations"
                                            }
                                        ]
                    },
                    {   ulData : "Rigorous Reactor Modeling",
                        commonulliLi : [
                                            {
                                                liData : "Build flowsheets, calibrate and validate reactor models"
                                            },
                                            {
                                                liData : "Setup of Model Prediction cases and validation of yields across reactor and process units"
                                            },
                                            {
                                                liData : "Identify dependent and independent variables, formulate cases and generate base/shift LP vectors for LP update"
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
                plansTitle        : "Our Approach",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "iOG follows a structured methodology to assess goals and objectives, diagnose problems, define roadmaps and blueprints and finally implement the solution.",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/iOGImplement.png",

            }
        ]
    }

   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Commonulliblock CommonulliData={this.commonulliData()} />
      </div>
    );  
  }
}

