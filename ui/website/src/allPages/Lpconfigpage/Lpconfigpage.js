import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Lpconfigpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Lpconfigpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Build LP Models for Refinery Configuration Feasibility Studies",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "LP models allow a complete assessment of the configuration options that lead to enhanced knowledge of refinery technology, process licensor offerings and eventually lead to selecting the right combination of technologies and unit capacities that best suit the market conditions. LP can be used to maximize refinery margin, devise strategies to meet product demand of high value products and evaluate additional crude processing options as also for new refinery as well as green-field refinery projects such as refinery expansion, unit addition and for removing capacity bottlenecks.",
                overviewtext2       : "As per the detailed market study of a refinery, we help our clients in:",
                overviewtext3       : "With our extensive LP knowledge and experience, we ensure that our solutions are optimized from every important aspect including economic return, operability, and the flexibility to deal with future changes in your facility’s feed or product slate and environmental norms. Along with the margin study, we also evaluate the costing, return on investment and find ways to squeeze unexplored value from existing assets / with addition of new units and assess operating cost of the processing units.",
                commonulliUl : [
                    {
                        ulData : "Building the LP Submodels for proposed different technology licensors"
                    },
                    {
                        ulData : "Undertaking the feasibility study for the proposed configurations"
                    },
                    {   
                        ulData : "Performing a  Ddetailed feasibility study for the preferred configuration."
                    }
                ]

            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Our refinery configuration studies will help you develop optimal solutions to complex scenarios such as:",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Bottom-of-barrel upgrade"
                    },
                    {
                        ulData : "Refinery/petrochemical integration"
                    },
                    {   
                        ulData : "Clean fuels production"
                    },
                    {   
                        ulData : "Facility expansions"
                    },
                    {   
                        ulData : "Grassroots complex planning"
                    },
                    {   
                        ulData : "Gas processing complex planning."
                    }
                ]
            }, 
                  
        ]
    }


  
  commonulliData(){
        return [
            {
                commonulliheading : "LP for Technology Selection:",
                commonullisubheading : "",
                commonullitext  : "",
                commonulliUl : [
                    {   ulData : "LP proves to be a handy tool in the following areas of Technology Selection in order to:",
                        commonulliLi : [
                                            {
                                                liData : "Determine feed quality range"
                                            },
                                            {
                                                liData : "Assess the needed functionality in each technology to achieve the desired product yield/specifications such as:",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Zero Fuel Oil"
                                                                    },
                                                                    {
                                                                        lilastData : "Zero Residue"
                                                                    },
                                                                    {
                                                                        lilastData : "Ultra Low 'S' Gasoline or Diesel"
                                                                    },
                                                                    {
                                                                        lilastData : "0.5 Wt.% 'S' Bunker Marine Fuel"
                                                                    },
                                                                    {
                                                                        lilastData : "Mandatory subsidized supply (Ex: LPG/ Kerosene in India)"
                                                                    }
                                                                ]
                                            },
                                            {
                                                liData : "Make an adequacy check of H2  and Utilities against each option "
                                            },
                                            {
                                                liData : "Make a sensitivity check through long term strategic plan cases for assessment of the impact of Unit turn-down frequency and capacity, catalyst cycle-length and start-up requirements"
                                            },
                                            {
                                                liData : "Evaluate for options with the earliest payback"
                                            }
                                        ]
                    },
                    {
                        ulData : "iOG Solutions has developed a ‘Refinery Technology’ database using published licensor information collated from the public domain  over the last couple of decades. Our generic LP models have all the major units of varying degrees of complexity."
                    },
                    {   ulData : "We develop LP models that are structured with minimal and essential modeling complexity such as:",
                        commonulliLi : [
                                            {
                                                liData : "Base + Delta structure to represent process unit yield and quality change with changes in feed quality"
                                            },
                                            {
                                                liData : "Process unit models with multiple feed modes to allow and optimize between multiple feeds and modes of operation"
                                            },
                                            {
                                                liData : "Sophisticated recursion structures such as Distributive and Adherent recursion to rightly predict stream quality"
                                            },
                                            {
                                                liData : "Use of customized driving rows to represent process constraints in the form of equations and inequalities"
                                            }
                                        ]
                    },
                    {   ulData : "We have also developed process unit models with the above mentioned strategies for:",
                        commonulliLi : [
                                            {
                                                liData : "Green-field refinery projects which include units such as Alkylation, Isomerization, Reforming etc."
                                            },
                                            {
                                                liData : "Cracking and topping refineries which include units such as Catalytic cracking, Hydro-processing (desulphurization/cracking) etc."
                                            },
                                            {
                                                liData : "Complex refinery configurations which include units such as Coker, Vis-breaker, Lube De-waxing etc."
                                            },
                                            {
                                                liData : "Petrochemical complexes with propylene, polypropylene and para-xylene technology."
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
                planstext         : "Proposed steps for the study:",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "The methodology behind this approach is to capture realistic options and advise robust solutions for the process configurations and a high level assessment of treatment and utilities requirements. Progress meetings, scheduled throughout the duration of the program, provide for transparency to ensure that the final deliverable is a result of a joint team effort between iOG Solutions and the Client.",
                plansimg          : "images/lpconfig.png",

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

