import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Energy.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
import Downstreamservicebanner from '../../allBlocks/Downstreamservicebanner/Downstreamservicebanner.js';

// import Refineryplanning        from '../../allBlocks/Refineryplanning/Refineryplanning.js';

export default class Energy extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Energy Management",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Improving energy efficiency in a refinery is very critical, as Oil refining is an energy-intensive activity. Factors such as more stringent oil product standards (e.g. ultra-low-sulfur diesel), increasing demand for lighter products, and heavier crude oil slates all demand increased processing, which in turn places upward pressure on the overall energy intensity for refining.",
                overviewtext2       : "Energy management in a refinery can be broadly classified into:",
                overviewtext3       : "Primary strategies adopted for optimizing energy consumption in a running plant include:",
                overviewtext4       : "",
                overviewtext5       : "",
                commonulliUl : [
                    {
                        ulData : "Optimization of energy on the supply side (steam generation from boilers and electricity produced from captive power plants, etc.)"
                    },
                    {
                        ulData : "Optimization of energy consumed across the process units"
                    },
                    {   
                        ulData : "Optimization of emissions"
                    }
                ],
                commonulliUl2 : [
                    {
                        ulData : "Developing energy benchmarks",
                        commonulliLi : [
                                            {
                                                liData : "Develop consistent metrics to evaluate performance within a facility and also compare energy efficiency between facilities which form the basis for setting goals, identifying energy reduction projects and facilitate tracking progress"
                                            },
                                            {
                                                liData : "Develop modular energy performance indexes which take into account the different levels of complexity between refineries",

                                            }
                                        ]

                    },
                    {
                        ulData : "Implementation of energy management systems",
                        commonulliLi : [
                                            {
                                                liData : "implement ISO 50001 standard which prescribes key elements such as corporate energy policy, a baseline for energy use, improvement goals and action plans, energy reviews and routine evaluation of progress required for effective energy management and efficiency improvements	"
                                            }
                                        ]

                    },
                    {   
                        ulData : "Identifying and introducing best management practices related to power and heat generation, efficient use of power for compression, pumping, and energy conversion, venting of equipment, practices specific to wells, process units, and upstream and midstream plants, refineries and petrochemical plants and energy efficient design"
                    },
                    {   
                        ulData : "Advanced Process control projects"
                    },
                    {   
                        ulData : "Steam Network Optimization Program"
                    },
                    {   
                        ulData : "Use of Energy Balance Tools and use of reconciled data for monitoring Energy KPIs."
                    },
                    {   
                        ulData : "Investment in a variety of specific energy improvement projects"
                    }
                ]

            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "Steam Network optimization",
                challengestext3  : "Efficient energy management calls for optimization from a granular level (say heat recovery system in a small fired heater) to a macroscopic level (such as large crude unit charge heaters).",
                challengestext : "Flash steam recovery, recovering heat from the blowdown water of various boilers, waste-heat steam generators, minimization LP steam condensation, and proper steam tracer system are some of the endless options for process engineers to optimize steam balance in a refinery",
                challengestext2 : "",
                challengestext5 : "Energy Management Solutions offer a useful handle to:",
                commonulliUl : [
                    {
                        ulData : "Examine and analyze energy usage through statistical models based on Time-Series Analysis"
                    },
                    {
                        ulData : "Highlight and resolve energy imbalances"
                    },
                    {   
                        ulData : "Identify both system-wide and equipment-specific operational cost improvements"
                    },
                    {   
                        ulData : "Use energy performance KPI’s to track how energy is being consumed in a plant, identify gaps between targets, historical and actual performance and identify countermeasures to improve energy performance."
                    },
                    {   
                        ulData : "Real-time online energy management to increase energy efficiency, minimize the emissions of pollutants including global warming gases and reduce total energy costs"
                    },
                    {   
                        ulData : 'Address "what-if" scenarios to develop optimized operating strategies during scenarios such as plant shutdowns, equipment selection, etc.'
                    }
                ]
            }, 
                  
        ]
    }

 Commonleafulblock2(){
        return [
            {
                challengesTitle : "What we offer:",
                challengestext3  : "We are a team of experienced consultants having in-depth knowledge in conducting energy management studies at client sites across the world.",
                challengestext : "We specialize in:",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Conducting energy optimization studies to boost profitability"
                    },
                    {
                        ulData : "Identify potential areas of energy recovery"
                    },
                    {   
                        ulData : "Devise comprehensive steam and fuel models for analyzing utility systems and predict results for a wide range of operating conditions"
                    },
                    {   
                        ulData : "Devise energy performance KPI’s to track the actual performance"
                    },
                    {   
                        ulData : "Develop optimized operating strategies during non-routine and challenging situations"
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
                plansimg          : "images/energymng.png",

            }
        ]
    }
    ServicesData(){
        return [
            {
                servicesimg   : "/images/.png",
            } 
                        
        ]
    }

   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Downstreamservicebanner infodata={this.ServicesData()} />
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} /> 
      </div>
    );  
  }
}

