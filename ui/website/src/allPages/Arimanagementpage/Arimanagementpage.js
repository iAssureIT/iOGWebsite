import React, {Component} from 'react';

// import $                  from 'jquery';
import './Arimanagementpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
/*import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';*/
import Commonservicesleafpageblock     from '../../allBlocks/Commonservicesblock/Commonservicesleafpageblock.js';
import Challenges                      from '../../allBlocks/Challenges/Challenges.js';

export default class Arimanagementpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Asset Reliability & Integraity Management",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Asset-Reliability__Integraity_Management.png",
                servicestext  : "Asset Reliability and Integrity Management (RIM) focus on ensuring that process machineries and equipment are properly designed, installed in accordance with specifications, and remains fit for use until it is retired. RIM ensures that the systematic workflows are in place, such as inspections and tests, to ensure that critical process equipment are performing under its best operating state. At an operating process plant, the asset-integrity is an integral part of daily operations with participation of operators, maintenance personnel, sub-contractors, engineers, and others involved in designing, installing, operating, or maintaining the process equipment.",
                servicestext2 : "iOG Solutions work closely with clients to ensure that equipment are proper designed and Inspection, Test, and Preventive Maintenance (ITPM) practices are in place. This translate to cost savings by making sure that equipment is fit for service at commissioning and remains fit for service throughout its lifecycle.",
                servicestext3 : "iOG Solutions with its excellent knowledge in asset integrity field, establish corporate standards, and promote efforts to continuously improve the safety and reliability of process equipment."
                    
                
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "Our RIM services range from leading system & application selection through full implementation, integration, support and trainings including:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Asset Criticality Analysis"
                    },
                    {
                        ulData : "Risk Based Inspection"
                    },
                    {
                        ulData : "Root Cause Analysis"
                    },
                    {
                        ulData : "Failure Mode Effect Analysis"
                    },
                    {
                        ulData : "Reliability Centred Maintenance"
                    },
                    {
                        ulData : "Asset Strategy Management"
                    },
                    {
                        ulData : "Inspection Management"
                    },
                    {
                        ulData : "Calibration Management"
                    },
                    {
                        ulData : "Reliability Availability & Maintainability (RAM) Modeling"
                    },
                    {
                        ulData : "Spares Inventory Management and Optimisation (SIMO)"
                    }
                ]
            }, 
                  
        ]
    }

  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/assetCriticalAnalysis",
                downstreamTitle : "Asset Criticality ",
                downstreamTitle1 : "Analysis",
                downstreamimg   : "/images/Asset_criticality_analysis.png",
                downstreamtext  : "iOG Solutions consider Asset Criticality Analysis as one of the important parts which help the industry to discover and analyse their assets and it’s various associated criticality factors based on the risk of failure associated with the equipment along with knowing how reliable and durable it is going to be in the longer run of the plant...."
            }, 
            {
                downstreamurl   : "/riskBasedInspection",
                downstreamTitle : "Risk Based ",
                downstreamTitle1 : "Inspection",
                downstreamimg   : "/images/Risk_based_inspection.png",
                downstreamtext  : "Risk-Based Inspection is a process that detects, evaluates and maps industrial risks, which can compromise equipment integrity in both pressurized equipment and structural elements...."
            }, 
            {
                downstreamurl   : "/RootCauseAnalysis",
                downstreamTitle : "Root Cause ",
                downstreamTitle1 : "Analysis",
                downstreamimg   : "/images/Root_cause_analysis.png",
                downstreamtext  : "At iOG Solutions, we provide solutions to analyse the failure causes which refers to the specific technical deficiency which is responsible for failure of equipment. The failure cause may lie in the process, design, or the operation itself....."
            }, 
            {
                downstreamurl   : "/failureModeEffect",
                downstreamTitle : "Failure Mode Effect ",
                downstreamTitle1 : "Analysis",
                downstreamimg   : "/images/Failure_mode_effect_analysis.png",
                downstreamtext  : "Failure Mode Effect Analysis is one of the parts of Criticality Analysis which indicates the possibility of equipment which can fail and inspects for the effects that will follow on it’s failure and so on....."
            }, 
            {
                downstreamurl   : "/reliabilityCentredMaintenance",
                downstreamTitle : "Reliability Centered ",
                downstreamTitle1 : "Maintenance",
                downstreamimg   : "/images/Reliability_centered_maintenance.png",
                downstreamtext  : "At iOG solutions, we help our clients in understanding their assets and the risk associated with it. Reliability Centred Management involves analysing the assets to understands its criticality and associated downtime that can be caused by them....."
            }, 
            {
                downstreamurl   : "/assetStrategyManagement",
                downstreamTitle : "Asset Strategy ",
                downstreamTitle1 : "Management",
                downstreamimg   : "/images/Asset_strategy_management.png",
                downstreamtext  : "This modern approach of analysis and data collection helps companies in developing new techniques resulting in greater efficiency, less unplanned downtime, improved safety, less operational risk, better yields, and increased flexibility of production..."
            }, 
            {
                downstreamurl   : "/inspectionManagement",
                downstreamTitle : "Inspection ",
                downstreamTitle1 : " Management",
                downstreamimg   : "/images/Inspection_management.png",
                downstreamtext  : "iOG Solutions provide inspection management services that help to ensure that you are prepared with the information and data you need to focus efforts on value-adding interference....."
            }, 
            {
                downstreamurl   : "/calibrationManagement",
                downstreamTitle : "Calibration ",
                downstreamTitle1 : "Management",
                downstreamimg   : "/images/Calibration_management.png",
                downstreamtext  : "iOG Solutions provide consultancy and training in terms of setting up the calibration system in the plant which envelops all the assets, and based on its functionality they have to be calibrated in order to avoid any critical risks from occurring and the plant remains reliable and active for the longer time period...."
            }, 
            {
                downstreamurl   : "/RAMModelling",
                downstreamTitle : "Reliability Availability & ",
                downstreamTitle1 : "Maintainability (RAM) Modeling",
                downstreamimg   : "/images/RAM.png",
                downstreamtext  : "Reliability, Availability and Maintainability (RAM) are one of those tools which have a substantial impact on the lifecycle cost and performance of the industrial equipment and systems....."
            }, 
            {
                downstreamurl   : "/simo",
                downstreamTitle : "Spares Inventory Management",
                downstreamTitle1 : "and Optimisation (SIMO)",
                downstreamimg   : "/images/SIMO.png",
                downstreamtext  : "iOG Solutions trains and consult in managing the plants spares inventory costs at the same time as reducing stock-out and sustaining spares needs for production availability. In addition, it can help to summarise the status of current asset management from spares consumption point of view....."
            }
        ]
    }

  render() {
  

    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
          <div className="downstreambg1">
              <Commoninfoblock infodata={this.ServicesData()} />
              <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
              <Commonservicesleafpageblock servicedata={this.DownstreamData()}/>
          </div>
      </div>
    );  
  }
}

