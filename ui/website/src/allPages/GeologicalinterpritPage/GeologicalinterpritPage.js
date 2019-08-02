import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './GeologicalinterpritPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class GeologicalinterpritPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Geological Interpretation",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "iOG Solutions is a comprehensive solution provider in the Oil and Gas industry domain. It brings to the table vast domain expertise in the oil and gas space across the entire spectrum of the domain, adapted into innovative solutions to help clients address their Geological Interpretation and related needs. As a part of our Geology & Geophysics suite, iOG provides the following Geological Services:",
                overviewtext2  : "Qualitative pre-modeling Geological analysis",
                overviewtext3  : "",
                overviewtext4  : "Basin Analysis",
                overviewtext5  : "",
                commonulliUl  : [
                    {
                        ulData : "Understanding the overall geological setting of the reservoir in terms of the structural element, tectonics, stratigraphic sequence, depositional environment, rock types etc."
                    },
                    {
                        ulData : "Gathering of high level, broad knowledge about the reservoir and basin through studies and analyses of existing literature, reports, published data, and government provided data packages etc."
                    },
                    {   
                        ulData : "Deciding the workflow to be used in actual subsurface modeling."
                    },
                    {   
                        ulData : "A team of experienced geologists conducts a preliminary thorough evaluation of the prospect/basin and integrate all publically available information and data to generate a report."
                    }
                ],
                commonulliUl2  : [
                    {
                        ulData : "Basin analysis involves characterising a petroleum system in terms of the source rock and accumulation of oil and gas and performing a digital simulation of the system to understand migration pathways."
                    },
                    {
                        ulData : "Evaluation of the geohistory (or depositional model through time) of the basin to find out the timing of the deposition source and reservoir rock, generation of the hydrocarbon footprint and migration to the reservoir."
                    },
                    {   
                        ulData : "Our expert team can help you in creating a basin model  to understand following:",
                        commonulliLi : [
                                            {
                                                liData : "Hydrocarbon Generation History with respect to",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Location"
                                                                    },
                                                                    {
                                                                        lilastData : "Stage"
                                                                    },
                                                                    {
                                                                        lilastData : "Time-scale"
                                                                    }
                                                                ]

                                            },
                                            {
                                                liData : "Migration Probability to the Prospect"
                                            },
                                            {
                                                liData : "Properties of the hydrocarbons"
                                            },
                                            {
                                                liData : "Overall Risk of exploration and production"
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
                challengestext  : "",
                challengestext2 : "",
                challengestag   : "Sequence Stratigraphic Analysis",
                commonulliUl : [
                    {
                        ulData : "Relatively new sequence stratigraphic analyses tools and techniques are used to understand the depositional sequence geometries and stratigraphic architecture of a sedimentary basin."
                    },
                    {
                        ulData : "Such techniques help to establish a detail correlation of the sedimentary layers and delineate the depositional system in a better way."
                    },
                    {   
                        ulData : "A successful sequence stratigraphic model provides the operators more control in finding hydrocarbons in some of the hidden pockets which are overseen in the structural models. Enables modeling of stratal patterns in various tectonic settings such as passive margins and foreland basins as well as in the sedimentary architecture associated with different structural settings, such as growth faulting and salt diapirism"
                    },
                    {   
                        ulData : "Enhance biostratigraphic interpretation by providing age constraints for the stratal geometries in a sequential stratigraphic interpretation."
                    },
                    {   
                        ulData : "To help identify new reservoirs within existing oil and gas fields"
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "",
                challengestext2 : "",
                challengestag   : "Facies Interpretation",
                commonulliUl : [
                    {
                        ulData : "Facies interpretation is often an important component of geostatistical Reservoir Characterization and facilitates construction of superior reservoir models for complex reservoirs."
                    },
                    {
                        ulData : "Use of knowledge of the facies which make up the reservoir and the depositional environments provide a strong basis for true distribution of the reservoir properties."
                    },
                    {   
                        ulData : "We use state-of-the-art facies modeling techniques such as sequential indicator simulation, Truncated Gaussian simulation, Plurigaussian simulation etc. In addition to these pixel based modeling techniques, we also perform other object based facies modeling techniques."
                    }
                ]
            }, 
                  
        ]
    }
   
Commonleafulblock3(){
        return [
            {
                challengesTitle : "",
                challengestext  : "",
                challengestext2 : "We can also enable our clients to perform advanced workflows as part of a 3D geological interpretation solution, which extends further into the modeling domain.",
                challengestag   : "Geomechanical Interpretation",
                commonulliUl : [
                    {
                        ulData : "iOG also provides a unique solution to evaluate and analyse well log, seismic and core data to generate 3D geomechanical models. These can subsequently be used to optimize drilling and production strategies."
                    },
                    {
                        ulData : "iOG can help develop 3D geomechanical models to address challenges such as:",
                                                commonulliLi : [
                                            {
                                                liData : "Hydrocarbon Generation History with respect to",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Coupled, hydro-thermo-mechanical analyses for compaction and subsidence"
                                                                    },
                                                                    {
                                                                        lilastData : "Fault seal and cap rock integrity analyses"
                                                                    },
                                                                    {
                                                                        lilastData : "The identification of potentially permeable natural fractures for well placement"
                                                                    },
                                                                    {
                                                                        lilastData : "Thermal recovery processes"
                                                                    },
                                                                    {
                                                                        lilastData : "Stress-sensitive reservoirs in which permeability may change with depletion or injection in a heterogeneous manner."
                                                                    }
                                                                ]

                                            }
                                        ]

                    },
                    {
                        ulData : "Following is a partial list of the services which are part of our Geological Suite competencies:",
                        commonulliLi : [
                                            {
                                                liData : "Determine net pay and identify sedimentary features"
                                            },
                                            {
                                                liData : "Well log correlation & Facies log calculation"
                                            },
                                            {
                                                liData : "Cross-section creation & Interpretation"
                                            },
                                            {
                                                liData : "Geological Structural Restoration and Balancing"
                                            },
                                            {
                                                liData : "Fault Seal Analysis"
                                            },
                                            {
                                                liData : "Prospect generation, screening and evaluation"
                                            },
                                            {
                                                liData : "Basin evaluation"
                                            },
                                            {
                                                liData : "Regional geological studies"
                                            },
                                            {
                                                liData : "Construction of geological maps (including structure, porosity, fault, depositional, isochore)"
                                            },
                                            {
                                                liData : "Integrated structural horizon mapping"
                                            },
                                            {
                                                liData : "Core analysis interpretation – sidewall, whole core; clastic and carbonate systems"
                                            },
                                            {
                                                liData : "Other core interpretation services – thin section, SEM, SCAL services"
                                            },
                                            {
                                                liData : "Structural, stratigraphic and sedimentology interpretation"
                                            },
                                            {
                                                liData : "Integrated Stratigraphic and Structural cross-sections"
                                            },
                                            {
                                                liData : "Custom-built montages with logs, cross sections, maps etc."
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
      </div>
    );  
  }
}

