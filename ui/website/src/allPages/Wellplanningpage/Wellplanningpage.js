import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Wellplanningpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Wellplanningpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Well Planning & Engineering",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Well Planning is defined as engineering activities which follow on from the identification of a subsurface target for a well (exploration, appraisal, or development well) until the completion of that well. It includes the following stages:",
                overviewtext2  : "",
                overviewtext3  : "Geoscientists can propose targets based on features within the geological model, and drilling engineers can design single or multiple well paths to position the well accurately in the zone of interest. Different study area’s of well planning are shown below:",
                overviewtext4  : "iOG Solutions uses integrated suite of well planning software solutions which enhances well planning accuracy, reduces drilling risk and uncertainty, quantifies wellbore position and precision, and improves drilling safety. Our team keep pace with ambitious drilling schedules in increasingly complex offshore developments and unconventional play. We generate and evaluate alternate development scenarios, and quickly respond to risks or changes to scheduling or capital expenditure constraints.",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Prospect Development:",
                        commonulliLi : [
                                            {
                                                liData : "Definition of well objectives: Formulating from many variables a program for drilling a well"
                                            },
                                            {
                                                liData : "Identifying targets:  Identification of a subsurface target for a well"
                                            }
                                        ]
                    },
                    {  
                        ulData : "Planning of the well trajectory:",
                        commonulliLi : [
                                            {
                                                liData : "Description of a trajectory that reaches a given target from a given starting location, subject to various constraints.The starting location may be the surface location for planning or a point on an existing path for path-correction or sidetracking"
                                            }
                                        ]

                    },
                    {  
                        ulData : "Selection of drilling hardware (bits, tubulars, mud, etc.):",
                        commonulliLi : [
                                            {
                                                liData : "Selection of appropriate Rig and related hardware"
                                            }
                                        ]

                    },
                    {  
                        ulData : "Planning of casing points:",
                        commonulliLi : [
                                            {
                                                liData : "Plannning setting depth and raiting for the various casing string"
                                            }
                                        ]

                    },
                    {  
                        ulData : "Logging objectives and selection of logging tools (MWD, LWD, wireline logs):",
                        commonulliLi : [
                                            {
                                                liData : "Selection of logging tools and outline procedures"
                                            }
                                        ]

                    },
                    {  
                        ulData : "Test program and decision criteria for testing:",
                        commonulliLi : [
                                            {
                                                liData : "Creating Test Plan"
                                            }
                                        ]

                    },
                    {  
                        ulData : "Completion program and criteria for completion:",
                        commonulliLi : [
                                            {
                                                liData : "Planning well completion programs and procedures"
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
                challengesTitle : "",
                challengestext  : "Our Services:",
                challengestext2 : "The integrated suite of well planning and drilling engineering software helps operating and drilling service companies to:",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Well Planning from initial drilling to plug and abandonment, enabling engineers and geoscientists to maximize reservoir drainage with the fewest wells possible by understanding each other’s constraints.",
                    },
                    {  
                        ulData : "Laying out operating procedures and series of steps that go into completion of a successful well.",
                    },
                    {  
                        ulData : "Collection of information exchanged between explorers, drillers, completions and operations engineers and foremen, partner companies, service companies, equipment providers, and government regulatory officials; which helps in anticipating and avoiding problems which may arise during actual operations.",
                    },
                    {  
                        ulData : "Deciding key features like the placement, casing size, corrosive service ratings, etc. based on the purpose that the well is supposed to serve - observation, production, injection, or a multiple purpose.",
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Salient Features:",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Combination of flexible well planning, advanced error modeling and anti-collision techniques to allow drilling engineers to safely and accurately plan, drill and monitor directional wells.",
                    },
                    {  
                        ulData : "Implementation and support for a robust well planning functionality, fully embedded within the multi-survey interpretation and visualization application, enabling geoscientists to quickly produce well designs based on a set of predefined drilling constraints.",
                    },
                    {  
                        ulData : "Tight integration of interpretation & visualization enables an integrated visulaization of well designs in a 3D window along with regional subsurface data",
                    },
                    {  
                        ulData : "Well planning within a single, volume-based seismic interpretation environment.",
                    },
                    {  
                        ulData : "Rapid and precise planning of various complex configurations involving large number of wells, pads and laterals; associated with the development and exploitation of unconventional resources like shale plays, SAGD, and CBM and optimization of assets based on diverse factors like well spacing, trajectories and costs",
                    },
                    {  
                        ulData : "Combining  Well Planning with Reservoir Engineering allowing users to construct a field development plan by looking at different scenarios of reservoir models and well plans, for optimization of production and costs.",
                    },
                    {  
                        ulData : "Collaboration between Well and field development planning teams enables integrating all relevant data in one unified 3D workspace,  running multiple scenarios, completing complex plans, and an end-to-end planning in the context of the subsurface model",
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
      </div>
    );  
  }
}

