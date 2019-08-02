import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ReservoirengiPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class ReservoirengiPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Reservoir Engineering Services",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "We at iOG solutions help our clients during the development and production of oil and gas reservoirs by maximizing their production rates with the aim of optimizing economic Hydrocarbon recovery.",
                overviewtext2  : "Our Reservoir Engineering team works together with geologists and geophysicists to find the reserves of oil and gas relying on the basic laws of physics and chemistry that affect the behaviour of liquid and vapour phases of oil, natural gas and water in rock. This ultimately helps in maximizing the output of the reservoir without causing overproduction i.e. producing more than can be stored, transported, processed or sold at any given time. The JIT(Just in Time) approach has a huge cost saving benefit to the client.",
                overviewtext3  : "iOG’s Reservoir Engineering involves the following broad steps and objectives:",
                overviewtext4  : "One of the key steps of any sub-surface modelling process is to understand the overall geological setting of the reservoir in terms of the structural element, tectonics, stratigraphic sequence, depositional environment, rock types etc. Generally, this high level, broad knowledge about the reservoir and the basin is gathered through studies and analyses existing literature, reports, published data, government provided data packages etc.  This kind of general understanding of the basin and reservoir helps in deciding the workflow to be used in actual subsurface modelling. iOG’s team of experienced geologists can complete a comprehensive preliminary evaluation of the prospect/basin and integrate all publically available information and data to generate a report.",
                overviewtext5  : "",


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "Determination of the Amount of Hydrocarbons:",
                challengestext  : "The volume of Hydrocarbon in any place may be determined by volumetric or material balance methods.  Original oil in place (OOIP) and original gas in place (OGIP) refer to the total volume of hydrocarbons stored in a reservoir prior to production.",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[ 
                    {
                        ulData : "Volumetric Methods",
                        commonulliLi : [
                                            {
                                                liData : "The volumetric calculation of hydrocarbons in a place requires knowledge of the areal extent of the reservoir, its average thickness and porosity, the hydrocarbon saturation and the formation volume factor of hydrocarbons. It is a static method that does not depend on the dynamic behaviour of the reservoir, i.e., the pressure response to production."
                                            }
                                        ]

                    },
                    {   ulData : "Material Balance Method",
                        commonulliLi : [
                                            {
                                                liData : "Material balance calculations are made upon availability of the initial production and pressure data of the reservoir, to determine accurately the reservoir volume and the drive mechanisms in place and to set up production and field development scenarios for a reservoir."
                                            },
                                            {
                                                liData : "The material balance method depends on the dynamic behaviour of the reservoir. It requires accurate production and fluid properties data."
                                            }
                                        ]
                    }

                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "Determination of Reserves",
                challengestext  : "Reserve, also known as recoverable reserves are the volume of hydrocarbons that can be profitably extracted from a reservoir using existing technology.",
                challengestext2 : "",
                challengestext5 : "They depend on the production method planned for the reservoir. The most important factor in determining these is economics.  Other than the economic factors, the factors that influence reserves the most are well location and spacing, production rates and the drive mechanism of the reservoir.",
                challengestag   : "Quantitative Geophysical Analysis",
                commonulliUl : [
                    {
                        ulData : "Oil production takes place in two phases:",
                        commonulliLi : [
                                            {
                                                liData : "Primary recovery phase"
                                            },
                                            {
                                                liData : "Supplementary recovery phase",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Secondary Oil Recovery"
                                                                    },
                                                                    {
                                                                        lilastData : "Enhanced Oil Recovery"
                                                                    }
                                                                ]

                                            }
                                        ]

                    },
                    {   ulData : "Primary Recovery Phase",
                        commonulliLi : [
                                            {
                                                liData : "The primary recovery phase refers to the initial recovery of hydrocarbons using only the internal energy of the reservoir as the driving mechanism."
                                            }
                                        ]
                    },
                    {   ulData : "Supplementary Recovery Phase",
                        commonulliLi : [
                                            {
                                                liData : "In the supplemental recovery phase, the driving reservoir energy is enhanced by an additional source of energy injected into the reservoir. This new source of energy may be water,  gas or both; it may be more complex, such as heat injection using steam or a burning front (in-situ combustion) ; or it may be a variety of chemicals. In some cases, more than one energy source is used."
                                            },
                                            {
                                                liData : "Depending on the level of complexity and the extent of recovery desired, supplementary recovery may be further divided into Secondary Recovery (Water Injection or Flooding, Gas Injection) and Enhanced Oil Recovery"
                                            },
                                            {
                                                liData : " The flooding/injection techniques employed in the secondary recovery phase may then be followed by more advanced methods utilizing miscible fluids, chemical injection or thermal processes, known as enhanced oil recovery (EOR)."
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
                challengesTitle : "Determination of Rates",
                challengestext  : "Rate of production, like reserves, is also a function of the strategy.  It depends on the number and location of wells, the flow potential of each well, the capacity of the surface facilities and the market demand.",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl : [ 
                    {
                        ulData : "Number of Wells",
                        commonulliLi : [
                                            {
                                                liData : "The number of wells and their locations influence the production rate and the uniformity of the drainage pattern in the reservoir and thus ultimate recovery."
                                            }
                                        ]

                    },
                    {   ulData : "Well Potential",
                        commonulliLi : [
                                            {
                                                liData : "The productive potential of a well is a function of the permeability, thickness, pressure and homogeneity of the reservoir rock. The greater the permeability, thickness and degree of homogeneity, the higher the well potential."
                                            }
                                        ]
                    },
                    {   ulData : "Completion",
                        commonulliLi : [
                                            {
                                                liData : "The flow rate is also a strong function of the drilling and completion practices. Mud invasion or restricted flow at the wellbore that is caused by an inadequate number of perforations or plugging will reduce the well’s overall potential."
                                            },
                                            {
                                                liData : "After completion of Reservoir Engineering, we can also use the knowledge from the previous steps to undertake comprehensive field development planning, recommending appropriate and cost effective reservoir depletion schemes such as waterflooding or gas injection to maximize hydrocarbon recovery."
                                            }
                                        ]
                    }

                ]
            }, 
                  
        ]
    }
Commonleafulblock4(){
        return [
            {
                challengesTitle : "iOG Reservoir Engineering Services",
                challengestext  : "Following is a partial list of the services we provide as part of our Reservoir Engineering Solutions Suite:",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "iOGConsult:",
                commonulliUl : [ 
                    {
                        ulData : "Numerical reservoir modeling & Simulation",
                    },
                    {   
                        ulData : "Economic modeling",
                    },
                    {   
                        ulData : "Probabilistic reserve modeling",
                    },
                    {   
                        ulData : "EOR field history matching",
                    },
                    {   
                        ulData : "Reservoir performance monitoring",
                    },
                    {   
                        ulData : "Reservoir Surveillance",
                    },
                    {   
                        ulData : "Estimating reserves for producing properties.",
                    },
                    {   
                        ulData : "Developing and applying reservoir optimization techniques.",
                    },
                    {   
                        ulData : "Production forecasting ",
                    },
                    {   
                        ulData : "Field Development planning",
                    },
                    {   
                        ulData : "Well design optimisation",
                    },
                    {   
                        ulData : "Analysing the economics and risk assessments of major development programs.",
                    }

                ]
            }, 
                  
        ]
    }
Commonleafulblock5(){
        return [
            {
                challengesTitle : "iOGImplement:",
                challengestext  : "Our Reservoir Engineers also support for the implementation of software products, services and solutions customized to our client’s complex engineering and data challenges. We use data from our tools and services to create reservoir models with the best software products and solutions present in the market. We can also help in assessing the best products for your needs and also in evaluating the production potential of a reservoir by simulating fluid flow phase behaviour and reservoir physical properties. Overall, this information would enable more effective decision making on issues concerning the reservoir.",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "iOGStudy:",
                commonulliUl : [
                    {
                        ulData : "Comprehensive field studies and reservoir analyses"
                    },
                    {
                        ulData : "Pressure Transient Analysis"
                    },
                    {   
                        ulData : "Decline Curve Analysis"
                    },
                    {   
                        ulData : "Reservoir fluid analysis (PVT)"
                    },
                    {   
                        ulData : "Production and injection data analysis"
                    },
                    {   
                        ulData : "Reservoir characterization studies"
                    },
                    {   
                        ulData : "Secondary and EOR studies"
                    },
                    {   
                        ulData : "EOR screening studies"
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
      </div>
    );  
  }
}

