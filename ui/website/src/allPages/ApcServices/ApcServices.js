import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ApcServices.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
import Downstreamservicebanner from '../../allBlocks/Downstreamservicebanner/Downstreamservicebanner.js';


export default class ApcServices extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Advanced Process Control Services",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Advanced Process Control (APC) technologies helps to improve operation stability, push operations closer to quality or equipment limits and improve the capability of process units to handle disturbances. Our APC consulting services help customers specify, justify, and apply APC technologies such as multivariable predictive control, neural net inferential modeling, and fuzzy logic controllers that will significantly improve plant performance.",
                overviewtext2       : "Our team has expertise needed to address plant regulatory control, base control loop tuning issues, identify scope for implementation of MVPC technology and implement APC technologies.",
                overviewtext3       : "The Benefits of Advanced Process Controls (APC)",
                overviewtext4       : "",
                overviewtext5       : "",
                commonulliUl2 : [
                    {
                        ulData : "Improved production by reducing the safety buffers needed to ensure limits for product quality and equipment integrity are not breeched"
                    },
                    {
                        ulData : "Minimized energy consumption for maximal plant throughput"
                    },
                    {   
                        ulData : "Improved responsiveness to changing economic and regulatory conditions through easy review and modification of operating objectives"
                    },
                    {   
                        ulData : "Less variability in the feedstock to downstream units"
                    },
                    {   
                        ulData : "Improved operator effectiveness by focusing attention on the key unit performance indicators"
                    },
                    {   
                        ulData : "Improved process safety as the APC system acts as an early-warning system Better understanding of overall unit operation"
                    }
                ]

            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "Base Control Loop Tuning",
                challengestext3  : "Process Plants have to continually improve their performance on economics and sustained competitiveness in the global context by driving towards goals such as lower cost, higher production rate and improved quality, safety and reliability.  Process Control systems can be piecemeal, looking at specific functions; these systems involve more manual interventions. There is, now however, an increasing skew towards usage of integrated Automatic Process Controls (APCs).",
                challengestext : "Unfortunately, industry wide statistics provide us with a far from encouraging bad picture in the current plant performance standards:",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "30% of Control Loops do not operate in normal modes"
                    },
                    {
                        ulData : "30% of Control Valves are over-sized or under-sized or have mechanical problems"
                    },
                    {   
                        ulData : "40% of Control Loops oscillate which eventually reduce plant efficiency"
                    },
                    {   
                        ulData : "75% of Control Loops actually increase process variability"
                    }
                ]
            }, 
                  
        ]
    }

 Commonleafulblock2(){
        return [
            {
                challengesTitle : "The net impact to process performance is significant:",
                challengestext3  : "",
                challengestext : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Lost production"
                    },
                    {
                        ulData : "Quality Issues"
                    },
                    {   
                        ulData : "Excessive energy use"
                    },
                    {   
                        ulData : "Safety & Environmental incidents"
                    },
                    {   
                        ulData : "Unplanned shutdowns & higher maintenance costs"
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "To ensure the control loop optimization, our base control loop tuning experts help our clients by delivering two types of services:",
                challengestext3  : "",
                challengestext : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "One – time tuning of all the control loops"
                    },
                    {
                        ulData : "Real time loop tuning for performance"
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock4(){
        return [
            {
                challengesTitle : "Typical results of Loop Optimization include:",
                challengestext3  : "",
                challengestext : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Instrument Evaluation and Valve Analysis"
                    },
                    {
                        ulData : "Process and instrument non-linearity"
                    },
                    {
                        ulData : "Reduction in process variability by 50%"
                    },
                    {
                        ulData : "Improvement in  controller response time by 2X"
                    },
                    {
                        ulData : "Reduction in non-linearity to within a robust control range."
                    }
                ]
            }, 
                  
        ]
    }


Commonleafulblock5(){
        return [
            {
                challengesTitle : "These results have a direct impact on the plant’s bottom-line result areas, such as:",
                challengestext3  : "",
                challengestext : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Production Rate Increase"
                    },
                    {
                        ulData : "Quality Improvement"
                    },
                    {
                        ulData : "Reliability Improvement"
                    },
                    {
                        ulData : "Energy Cost Reduction"
                    },
                    {
                        ulData : "Unit Cost Reduction"
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock6(){
        return [
            {
                challengesTitle : "iOG Solutions offers its services on two technologies as a part of APC services:",
                challengestext3  : "",
                challengestext : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Advanced Process Control"
                    },
                    {
                        ulData : "Base Control Loop Tuning"
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock7(){
        return [
            {
                challengesTitle : "Our Scope of Service",
                challengestext3  : "Advanced Process Control Consulting Study",
                challengestext : "",
                challengestext2 : "In addition, iOG can deliver specialized training and full new APC implementation or undertake APC revamp projects along with its partner organizations",
                commonulliUl : [
                    {
                        ulData : "Evaluation of current plant operations and existing automation performance"
                    },
                    {
                        ulData : "Benefits analysis to define and quantify the expected economic improvements"
                    },
                    {
                        ulData : "Development of a Functional Design Specification for APC implementation"
                    },
                    {
                        ulData : "Recommendation for additions, modifications, and upgrades of instrumentation, analyzers, or systems necessary to support effective application of APC technologies"
                    },
                    {
                        ulData : "Estimation of budgetary project costs (±30%)"
                    },
                    {
                        ulData : "Opportunity analysis – An investigation to determine the potential improvements from APC and estimate expected economic gains will be performed."
                    },
                    {
                        ulData : "Analysis of financial return on investment for project justification and prioritization"
                    },
                    {
                        ulData : "Preparation of project implementation plans and schedules"
                    },
                    {
                        ulData : "Current automation status review– An audit of existing automation systems and instrumentation to baseline status and performance will be conducted."
                    }
                ]
            }, 
                  
        ]
    }


  
  commonulliData(){
        return [
            {
                commonulliheading : "Base Control Loop Tuning",
                commonullisubheading : "",
                commonullitext2  : "Our experienced consultants have a strong domain knowledge and can provide support, consultation and implementation services using the following advanced solutions in the area of control loop monitoring such as Expertune Plant Triage, Aspen Watch and the Matrikon Process Doctor",
                commonulliUl : [
                    {   ulData : "iOGConsult",
                        commonulliLi : [
                                            {
                                                liData : "Identify top 10 control loops for economic improvement"
                                            },
                                            {
                                                liData : "Build real time performance dashboards",
                                            },
                                            {
                                                liData : "Build KPIs to enhance plant performance"
                                            },
                                            {
                                                liData : "Identify interacting/oscillating loops"
                                            }
                                        ]
                    },
                    {   ulData : "iOGImplement",
                        commonulliLi : [
                                            {
                                                liData : "Implementation of control loop tuning software"
                                            },
                                            {
                                                liData : "Integration with existing assets"
                                            }
                                        ]
                    },
                    {   ulData : "iOGTrain",
                        commonulliLi : [
                                            {
                                                liData : "Build industry centric training modules"
                                            }
                                        ]
                    },
                    {   ulData : "iOGStudy",
                        commonulliLi : [
                                            {
                                                liData : "Assessments of Overall Sensor Health, Valve Health, and Controller Health Built different datasets to identify process models",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Control loop readiness for APC implementation"
                                                                    },
                                                                    {
                                                                        lilastData : "Develop enhanced tools for root cause problem solving"
                                                                    },
                                                                    {
                                                                        lilastData : "Advanced regulatory control studies, suggestions and design"
                                                                    }
                                                                ]
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
                planstext         : "Our experts help the plant personnel to dynamically predict the future trajectory of key variables to calculate the optimal adjustments to key set points which results in operating parameters being adjusted more safely, smoothly and consistently. The key variable information is prioritized according to technical and economic factors. This would spare the valuable time of plant personnel for acting on other important aspects of their plant’s performance.",
                planstext1        : "Our experienced control loop tuning experts use the control system and process historian as a window into the process, sorted through the mountains of data and rank the data according to economic factors which in-turn provides focused information to plant decision makers.",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/apc1.jpg",

            }
        ]
    }
     imgleafblockData2(){
        return [
            {
                plansTitle        : "",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/apc2.jpg",

            }
        ]
    }
    ServicesData(){
        return [
            {
                servicesimg   : "/images/APC-Services.png",
            } 
                        
        ]
    }
   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Downstreamservicebanner infodata={this.ServicesData()} />
      	<Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock3()} /> 
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock4()} /> 
        <Imgleafblock ImgleafblockData={this.imgleafblockData2()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock5()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock6()} /> 
        <Challenges      CommonleafblockData={this.Commonleafulblock7()} /> 
        <Commonulliblock CommonulliData={this.commonulliData()} />
      </div>
    );  
  }
}

