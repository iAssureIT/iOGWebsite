import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Wellmodlingpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Wellmodlingpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Well Modeling",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "The Flow behaviour inside and adjacent to the wellbore has an important impact on the overall performance of well. We employ some of the latest technological advances and tools to model the multiphase flow inside and near the wellbore, while taking into account the factors which affect such behaviour.",
                overviewtext2  : "Using nodal analysis techniques to model reservoir inflow and well outflow performance, well models can be useful for determining optimized well parameters. Well modeling can be applied to designing, optimizing and troubleshooting individual wells.",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Well configuration & Completion design for maximizing performance over life of well",
                    },
                    {  
                        ulData : "Detailed fluid PVT modeling",
                    },
                    {  
                        ulData : "Black oil models for oil and gas",
                    },
                    {  
                        ulData : "Equation of State models for condensate and volatile oil",
                    },
                    {  
                        ulData : "Artificial lift design",
                    },
                    {  
                        ulData : "Prediction of Temperatures flow-lines and at surface equipment",
                    },
                    {  
                        ulData : "Reservoir, well and flow-line monitoring",
                    },
                    {  
                        ulData : "Generate vertical lift performance curves",
                    },
                    {  
                        ulData : "Detailed reservoir inflow performance modeling",
                    },
                    {  
                        ulData : "Multiple completion and perforation models",
                    },
                    {  
                        ulData : "Detailed skin analysis",
                    },
                    {  
                        ulData : "Laboratory data matching",
                    }
                ]


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "Nodal Analysis",
                challengestext  : "We ca also help our clients in performing Nodal analysis for evaluating well performance, and it is critical to understanding the behaviour of not only the well but entire system. It can help in:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Forecasting the flow rate at which an existing well will produce considering the different factors",
                    },
                    {  
                        ulData : "Selecting tubing and flow line sizes",
                    },
                    {  
                        ulData : "Optimizing the system to produce the objective flow rate",
                    },
                    {  
                        ulData : "Recognition of ways to increase production rate",
                    },
                    {  
                        ulData : "The effect of gravel pack permeability, perforating density and altering Skin on well productivity Selecting the optimum lift method and the appropriate time for its installation  Analyse an existing system for abnormal flow restrictions",
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "Completion Modeling",
                challengestext  : "iOG Solutions provides modeling services using industry-standard software solutions for modeling all standard completion model types for vertical, horizontal, and fractured wells. Our experts enable clients to model reservoir inflow performance (IPR) for single, multilayer, or multilateral wells with complex and highly deviated completions, optimising all aspects of a completion design including perforation details and gravel packing.",
                challengestext2 : "",
                challengestext5 : "iOG Solutions Completion Modeling team is capable of performing and displaying detailed pressure and inflow profiles in multilateral wells and using it to diagnose what is coming from where in the multilateral completion. Our modeling services span across:",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Naturally flowing wells",
                    },
                    {  
                        ulData : "Artificially Lifted Wells",
                    },
                    {  
                        ulData : "Gravel Pack Completions",
                    },
                    {  
                        ulData : "Multi-layer Wells",
                    },
                    {  
                        ulData : "Smart well designs",
                    },
                    {  
                        ulData : "Multi-lateral Wells",
                    },
                    {  
                        ulData : "Angled Wells",
                    },
                    {  
                        ulData : "Horizontal Wells",
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
                challengesTitle2 : "Artificial lift Modeling",
                challengestext3  : "We can provide advanced modeling techniques for modeling and running multiple complicated Artificial lift scenarios and then performing Sensitivity analysis for determining the most suitable artificial lift method. The Application of sophisticated sensitivity tools allow artificial lift parameters (injection gas and ESP stages) to be analysed so that optimal production can be obtained.",
                challengestext : "Using well models, users can visualize the response of varying amounts of injection gas and injection pressure into the wells and field.  iOG Solutions Well Modeling experts help in combining the completed and history-matched well models into field models, followed by optimizing the operating conditions for the entire field including the network of surface flowlines, compressors, separators, and lift gas distribution systems. Thus enabling clients to compare and review multiple different scenarios to ensure optimum field production.",
                challengestext5 : "iOG Solutions’ Well modeling practices span across the following Well and Artificial Lift Types:",
                challengestext2 : "iOG Solutions enables clients to visualize the response of varying amounts of injection gas and injection pressure into the wells and field using well models.  Our modeling team can help in building, history matching and subsequently combining them into field models, enabling clients to review many different scenarios to ensure that optimum field production is achieved.",
                challengestext4 : "iOG Solutions Well Modeling experts utilize the following industry standard Well modeling software solutions to address our clients needs:",
                challengestext6 : "PROSPER by Petroleum Experts: Well Modelling PROSPER is a well performance, design and optimisation program for modelling a vast variety of well configurations. ",
                challengestext7 : "With the use of Utilizing PROSPER we can help our clients in building of reliable and consistent well models, with the ability to address all the aspects of well bore modelling viz; PVT (fluid characterisation), VLP correlations (for calculation of flowline and tubing pressure loss) and IPR (reservoir inflow). ",
                challengestext8 : "Upon tuning of the well system mode to real field data, we can model the well in different scenarios and make forward predictions of reservoir pressure based on surface production data.",
                challengestag   : "",
                commonulliUl : []
            }, 
                  
        ]
    }


    Commonleafulblock4(){
        return [
            {
                challengesTitle : "Production System Analysis",
                challengestext  : "",
                challengestext3 : "By making full utilization of PROSPER’s features we can enable our clients in performing the following:",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Inflow performance models (IPR)s",
                    },
                    {  
                        ulData : "Horizontal well & Multi-layer wells with pressure drop in well",
                    },
                    {  
                        ulData : "Hydraulic fracture",
                    },
                    {  
                        ulData : "Multi-laterals",
                    },
                    {  
                        ulData : "Dual porosity",
                    },
                    {  
                        ulData : "PVT - Oil, Gas, Condensate - Black Oil or Fully Compositional ",
                    },
                    {  
                        ulData : "Sensitivity analysis",
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock5(){
        return [
            {
                challengesTitle : "Well Types",
                challengestext  : "",
                challengestext3 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Gas, oil, water, condensate, steam, injection wells",
                    },
                    {  
                        ulData : "Naturally flowing",
                    },
                    {  
                        ulData : "Artificially lifted",
                    },
                    {  
                        ulData : "Multi-layer & Multi-lateral",
                    },
                    {  
                        ulData : "Angled and horizontal",
                    },
                    {  
                        ulData : "Electric Submersible Pump - ESP",
                    },
                    {  
                        ulData : "Gas Lift",
                    },
                    {  
                        ulData : "Hydraulic Pumps - HSP",
                    },
                    {  
                        ulData : "Progressive Cavity Pumps - PCP",
                    },
                    {  
                        ulData : "Jet Pumps",
                    },
                    {  
                        ulData : "Beam Pumps - Rod",
                    },
                    {  
                        ulData : "Design new artificial lift systems",
                    },
                    {  
                        ulData : "Verify the efficiency of existing system.",
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock6(){
        return [
            {
                challengesTitle : "WelFlo By Weatherford:",
                challengestext  : "The WellFlo software package is a single well tool which uses nodal analysis techniques to model reservoir inflow and well outflow performance. WellFlo modeling can be applied for designing, optimizing and troubleshooting individual wells. Specific applications for which the software can be used include:",
                challengestext3 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Well configuration design",
                    },
                    {  
                        ulData : "Completion design ",
                    },
                    {  
                        ulData : "Artificial lift design",
                    },
                    {  
                        ulData : "Prediction of flowing temperatures and pressures in wells and flowlines and at surface equipment for optimum design calculations",
                    },
                    {  
                        ulData : "Detailed reservoir inflow performance modeling",
                        commonulliLast : [
                                            {
                                                lilastData : "Multiple completion and perforation models"
                                            },
                                            {
                                                lilastData : "Detailed skin analysis "
                                            }
                                        ]

                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock7(){
        return [
            {
                challengesTitle : "Detailed fluid PVT modeling",
                challengestext  : "",
                challengestext3 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Black oil models for oil and gas",
                    },
                    {  
                        ulData : "Equation of State models for condensate and volatile oil",
                    },
                    {  
                        ulData : "Detailed fluid PVT modeling",
                        commonulliLast : [
                                            {
                                                lilastData : "Black oil models for oil and gas"
                                            },
                                            {
                                                lilastData : "Equation of State models for condensate and volatile oil"
                                            },
                                            {
                                                lilastData : "Laboratory data matching"
                                            },
                                            {
                                                lilastData : "Fluid behavior prediction"
                                            }
                                        ]

                    }
                ]
            }, 
                  
        ]
    }



   
   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock3()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock4()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock5()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock6()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock7()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

