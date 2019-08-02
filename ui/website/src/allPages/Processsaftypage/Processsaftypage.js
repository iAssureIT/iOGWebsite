import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Processsaftypage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Processsaftypage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Process Safety Management",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Process-safety hazards arise because of the processing activities in a plant. Any incident in a manufacturing and processing plant may result in fatalities as well as huge asset, environmental, and reputational damage. Process safety management (PSM) deals with the identification, understanding, and control of process hazards to prevent process‐related injuries and incidents.",
                overviewtext2       : "For effective PSM systems and practices, an organization-wide systematic approach is necessary to critically review the process design and associated process technologies. Any process changes and the corresponding operational and maintenance activities should be combined with emergency preparedness, safety trainings, etc.",
                overviewtext3       : "iOG Solutions understands the criticality and importance of Process Safety Management. iOG Solutions brings in a team of experienced safety professionals who can support clients in implementing industry leading Process Safety Management Systems for their safe plant operations. ",
                overviewtext4       : "",
                overviewtext5       : "",               

            } 
                        
        ]
    }

    commonulliData(){
        return [
            {
                commonulliheading : "",
                commonullisubheading : "We, at iOG, have experience with different supply chain tools and can provide the following services related to this area:",
                commonullitext  : "",
                commonulliUl : [
                    {   ulData : "Consulting Services",
                        commonulliLi : [
                                            {
                                                liData : "What-if analysis for new strategies/markets, new terminals and transportation modes"
                                            },
                                            {
                                                liData : "Consult in distribution optimization based profits"
                                            }
                                        ]
                    },
                    {   ulData : "Implementation Services",
                        commonulliLi : [
                                            {
                                                liData : "Build supply chain distribution planner model"
                                            },
                                            {
                                                liData : "Integration of SCM model with Refinery Planning Models for efficient plan"
                                            },
                                            {
                                                liData : "Build customized reports depending upon the terminal, depots and inventories"
                                            },
                                            {
                                                liData : "Terminal optimization for new terminal setup"
                                            },
                                            {
                                                liData : "Implementation of Distribution Planning tools such as Aspen Petroleum Supply Chain Planner, Honeywell SAND"
                                            }
                                        ]
                    }
                ]
            }                        
        ]
    }
  
  
Commonleafulblock(){
        return [
            {
                challengesTitle : "With purview of PSM, we offer following services:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Benchmarking Studies of existing process safety standards."
                    },
                    {
                        ulData : "Safety Audits and Gas Analysis"
                    },
                    {
                        ulData : "Identification of potential areas for improvement"
                    },
                    {
                        ulData : "Development of roadmaps for effective PSM"
                    },
                    {
                        ulData : "Implementation of leading Process Safety Management Systems"
                    },
                    {
                        ulData : "Development of PSM standards and manuals"
                    },
                    {
                        ulData : "PSM Trainings"
                    },
                    {
                        ulData : "Process Hazard Analysis (PHA) studies with emphasis on",
                        commonulliLi : [
                                            {
                                                liData : "Hazard Identification Studies (HAZID)"
                                            },
                                            {
                                                liData : "Hazards & Operability Studies (HAZOP)"
                                            },
                                            {
                                                liData : "Quantitative Risk Assessment (QRA)"
                                            },
                                            {
                                                liData : "What-If and Risk Analysis"
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
      </div>
    );  
  }
}

