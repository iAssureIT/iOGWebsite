import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Welltestingpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
// import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Welltestingpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Well Testing",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Well Test is a tool for reservoir evaluation and characterization which investigates a much larger volume of the reservoir than cores or logs, provides estimate of permeability under in-situ conditions, near-wellbore condition and distances to boundaries. Well test helps in defining reservoir limits (distances to boundaries, drainage area), estimate average drainage area pressure, characterize reservoir (permeability, skin factor, dual porosity or layered behaviour), diagnose productivity problems and evaluate stimulation treatment effectiveness (fracture conductivity, fracture half-length)",
                overviewtext2  : "Well tests are used at all stages of E&P cycle to address the following questions:",
                overviewtext3  : "For the evaluation of well productivity and reservoir characteristics, iOG provides well test solutions over the entire E & P cycle including Drilling, Completion and Production Phases. We study measurements of dynamic well and reservoir data",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Exploration",
                        commonulliLi : [
                                                {
                                                    liData : "Is this zone economic?"
                                                },
                                                {
                                                    liData : "How large is this reservoir?"
                                                }
                                            ]

                    },
                    {  
                        ulData : "Reservoir engineering",
                        commonulliLi : [
                                                {
                                                    liData : "What is the average reservoir pressure?"
                                                },
                                                {
                                                    liData : "How do I describe this reservoir in order to",
                                                    commonulliLast : [
                                                                    {
                                                                        lilastData : "Estimate reserves?"
                                                                    },
                                                                    {
                                                                        lilastData : "Forecast future performance?"
                                                                    },
                                                                    {
                                                                        lilastData : "Optimize production?"
                                                                    }
                                                                ]

                                                }
                                            ]

                    },
                    {  
                        ulData : "Production engineering",
                        commonulliLi : [
                                                {
                                                    liData : "Is this well damaged?"
                                                },
                                                {
                                                    liData : "How effective was this stimulation treatment?",
                                                },
                                                {
                                                    liData : "Why is this well not performing as well as expected?",
                                                }
                                            ]

                    }
                ],
                commonulliUl2  : []


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle2 : "Pressure Transient Analysis:",
                challengestext3  : "iOG software solutions provide accurate and reliable design and analysis of pressure transient data from traditional production, drill stem tests (DST), wireline formation tests (WFT) as well as testing-while-drilling (TWD) operations on exploration, appraisal or production wells.",
                challengestext  : "Raw flow and pressure data is captured on field, processed and fed into model along with other data such as open hole logs, PVT data and production logs. The model is tuned by selecting the right numerical method to match observed data and then specialized plots are generated for analysis and evaluation. Model results are matched with real or original parameters from nearby wells and modified to give the final results.",
                challengestext5 : "Various well pressure transient testing techniques are employed based on the stage of the field life:",
                challengestext2 : "",
                challengestext4 : "",
                challengestext6 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Standard and Mini Drill Stem Testing: A procedure for isolating and testing the pressure, permeability and productive capacity of a geological formation",
                    },
                    {  
                        ulData : "Wireline Formations Testers: Formation testers provide alternatives to conventional well testing. E.g. Modular Formation Dynamic Tester (MDT)",
                    },
                    {  
                        ulData : "Testing While Drilling",
                    },
                    {  
                        ulData : "Production, Injection and Interference Tests",
                    },
                    {  
                        ulData : "Permanent Down Hole Gauges: Continuously monitor well and reservoir pressure changes",
                    },
                    {  
                        ulData : "Time Lapse Well Testing: Can be used to monitor changing fluid saturations in these reservoirs",
                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Our team is experienced  in the Interpretation of Data acquired from the following types of well tests:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Pressure Drawdown, Build-Up, Injection and Injection Fall-Off Test.",
                    },
                    {  
                        ulData : "Multi-Well Tests:",
                        commonulliLi : [
                                                {
                                                    liData : "Interference Test: Produce one well at constant rate and measure the pressure response at one or more offset wells."
                                                },
                                                {
                                                    liData : "Pulse Test: Alternately produce and shut in one well and measure the pressure response at one or more offset wells.",
                                                }
                                            ]


                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock3(){
        return [
            {
                challengesTitle : "Deliverability Test:",
                challengestext  : "A deliverability test is conducted to determine the well’s Inflow Performance Relation, IPR and in the case of gas wells, the Absolute Open Flow Potential, AOFP, and the rate dependant skin coefficient, D.",
                challengestext5 : "iOG provides the following interpretation and analysis services:",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Well test Design and Planning",
                    },
                    {  
                        ulData : "Models and analysis methods for wireline formation tests",

                    },
                    {  
                        ulData : "Multi-layer test analysis with flow profiles from production logs",

                    },
                    {  
                        ulData : "Prediction option to forecast future productivity of the well based on the current analysis model",

                    },
                    {  
                        ulData : "Inflow Performance Relationship (IPR) for gas well tests",

                    },
                    {  
                        ulData : "Flow profiles for multi-layer analysis",

                    },
                    {  
                        ulData : "Plotting of variations in skin versus time to detect changes in well performance",

                    },
                    {  
                        ulData : "Pressure deconvolution for analysing tests with insufficient or poor quality data",

                    },
                    {  
                        ulData : "Multi-well capability to assist in determining interference effects from other well",

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
                plansimg          : "images/noimg.png",

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

