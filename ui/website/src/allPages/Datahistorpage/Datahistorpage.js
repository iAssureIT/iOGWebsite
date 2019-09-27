import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Datahistorpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
// import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Datahistorpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Data Historian",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "A Data Historian or Process Historian or Operational Historian is a software program that records and retrieves production and process data by time; it stores the information in a time series database that uses minimal disk space and enables fast retrieval. Time series information is often displayed in a trend or as tabular data over a time range.",
                overviewtext2       : "There are many uses for a Data Historian in the process and manufacturing industries:",
                overviewtext3       : "",
                overviewtext4       : "",
                overviewtext5       : "",
                commonulliUl : [
                    
                    {   ulData : "Manufacturing site to record instrument readings",
                        commonulliLi : [
                                            {
                                                liData : "Process (flow rate, valve position, vessel level, temperature, pressure)"
                                            },
                                            {
                                                liData : "Production Status (machine up/down, downtime reason tracking)"
                                            },
                                            {
                                                liData : "Performance Monitoring (units/hour, machine utilization vs. machine capacity, scheduled vs. unscheduled outages)"
                                            },
                                            {
                                                liData : "Product Genealogy (start/end times, material consumption quantity, lot # tracking, product set points, and actual values)"
                                            },
                                            {
                                                liData : "Quality Control (quality readings inline or offline in a lab for compliance to specifications)"
                                            },
                                            {
                                                liData : "Manufacturing Costing (machine and material costs assignable to a production)"
                                            }
                                        ]
                    },
                    {
                        ulData : "Utilities (steam and electricity production and distribution)"
                    },
                    {
                        ulData : "Heavy Equipment monitoring (recording of run hours, instrument and equipment readings for predictive maintenance)"
                    },
                    {
                        ulData : "Environmental monitoring (weather, sea level, atmospheric conditions, groundwater contamination)."
                    }
                ]
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Information collected within a facility can come from many different types of sources including:",
                challengestext2 : "A data historian could be applied independently in one or more areas, but it can really show its worth when applied across an entire facility, many facilities in a department and across departments within an organization.",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "PLCs (Programmable Logic Controllers)"
                    },
                    {
                        ulData : "DCS (Distributed Control System)"
                    },
                    {   
                        ulData : "Proprietary Instrument Interface (Intelligent Electronic Devices): data delivered directly from an instrument instead of a control system (Weighing system, clean-in-place skid)."
                    },
                    {   
                        ulData : "Lab Instrument (Spectrophotometer, TOC Analyzer, Resonance Mass Measurement)"
                    },
                    {   
                        ulData : "Manual Data Entry (an operator periodically walks the production line and records readings off manual gauges)."
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "Services Offered",
                challengestext  : "",
                challengestext2 : "Our experienced consultants have strong domain knowledge and can provide support, consultation, and implementation services for all the industry leading Data Historians.",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Implementation of the Data Historian Tool"
                    },
                    {
                        ulData : "Integrate the Data Historian with your operations and front, mid and back office business systems to historize and archive data."
                    },
                    {   
                        ulData : "Upgrade your existing Data Historian architecture to utilize high availability, interface redundancy and the application of critical updates to all the modules."
                    },
                    {   
                        ulData : "Data Historian System Update and Migration"
                    },
                    {   
                        ulData : "Develop customized applications and interfaces to fit your unique requirements"
                    },
                    {   
                        ulData : "Delivery of standard or customized training materials and one-on-one staff mentoring for users, administrators, and support personnel in your organization."
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
                plansimg          : "images/datahistor.png",

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
      </div>
    );  
  }
}

