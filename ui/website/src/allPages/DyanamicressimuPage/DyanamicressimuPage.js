import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './DyanamicressimuPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class DyanamicressimuPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Dynamic Reservoir Simulation & Modeling",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Dynamic Reservoir simulation is an area of reservoir engineering in which computer models are used to predict the flow of fluids. Reservoir simulation models are used for ",
                overviewtext2  : "",
                overviewtext3  : "iOG Solutions uses some of the best software available for the industry for reservoir simulation. In these tools, the static models are upscaled and set in motion to simulate petroleum production in the oil-field. These tools enable geologists and reservoir modelers to accurately represent the subsurface and its petrophysical content.",
                overviewtext4  : "iOG reservoir modelling & simulation salient features",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "The Development of new fields through the identification of the number of wells required, the optimal completion of wells, the present and future needs for an artificial lift and the expected production of oil, water and gas."
                    },
                    {
                        ulData : "Ongoing management of developed fields for making production forecasts "
                    },
                    {   
                        ulData : "Ongoing reservoir management, models may help in improved oil recovery by hydraulic fracturing design."
                    },
                    {   
                        ulData : "Application of enhanced oil recovery (EOR) processes"
                    },
                    {   
                        ulData : "Identify opportunities to increase oil production in heavy oil deposits. Oil recovery is improved by lowering the oil viscosity by injecting steam or hot water. "
                    }
                ],
                commonulliUl2   : [
                    {
                        ulData : "Integrated seismic-to-simulation workflows"
                    },
                    {
                        ulData : "A true 3D modeling environment"
                    },
                    {   
                        ulData : "A user-friendly interface"
                    },
                    {   
                        ulData : "Automated processes"
                    },
                    {   
                        ulData : "A complete audit trail"
                    }
                ]

            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "Reservoir Modeling and Simulation Workflow",
                challengestext  : "",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[ 
                    {
                        ulData : "Input Simulation data quality control and validations",
                    },
                    {   
                        ulData : "Static Grid Model Upscale",
                    },
                    {   
                        ulData : "Dynamic Grid Model Constructions Reservoir Definitions (Upscale, Simple Models, Fracture-Dual Pore, Geo-Multiproperty-Upscale)",
                    },
                    {   
                        ulData : "Fluid Model Definitions and Constructions, Aquifers & contacts descriptions",
                    },
                    {   
                        ulData : "Rock Functions Definitions and Core Analysis with Petrophysics",
                    },
                    {   
                        ulData : "Well Engineering & Completion Design",
                    },
                    {   
                        ulData : "Well Flow Control & development strategies",
                    },
                    {   
                        ulData : "Results Analysis, Visualization, History Match, Uncertainties analyses.",
                    }

                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "PVT Analysis:",
                challengestext  : "Phase Behaviour (PVT) analysis is a pre-requisite for Dynamic Reservoir simulation and is performed on representative fluid samples collected normally during the drilling of the first exploration well. Fluid analysis delivers results to use in reservoir engineering studies and also supports the design and optimization of processes and facilities. ",
                challengestext2 : "",
                challengestext5 : "iOG has capacities to  analyse the results obtained from the following lab tests",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Rigorous validity assessment of submitted downhole or surface samples",
                    },
                    {  
                        ulData : "Selection of the most suitable sample(s) for PVT studies",
                    },
                    {  
                        ulData : "Reservoir fluid composition",
                    },
                    {  
                        ulData : "Physical recombination (if separator samples)",
                    },
                    {  
                        ulData : "Constant Composition Expansion (CCE)",
                    },
                    {  
                        ulData : "Differential Liberation (DL)",
                    },
                    {  
                        ulData : "Viscosity",
                    },
                    {  
                        ulData : "Separator tests",
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "Numerical Simulation:",
                challengestext  : "We can help our clients in carrying out mathematical simulation of the generated numerical model of a reservoir's petrophysical characteristics to analyse and predict fluid behaviour in the reservoir over time.",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Solving the numerical models using numerical methods such as Finite Difference or Finite Element.",
                    },
                    {  
                        ulData : "Providing numerical solutions to hydrodynamic problems of fluids in petroleum reservoir-well systems.",
                    },
                    {  
                        ulData : "Predicting future performance of the Reservoirs for making intelligent decisions to optimize the Economic Recovery of the Hydrocarbons from the reservoir.",
                    },
                    {  
                        ulData : "Implementation of numerical solutions for fast and accurate prediction of dynamic behaviour for all types of reservoirs and development schemes, covering the entire spectrum of reservoir models including black oil, compositional, thermal finite-volume, and streamlines simulation. Simulator capabilities can be tailored to meet your needs, enhancing your reservoir modeling capabilities.",
                    }
                ]
            }, 
                  
        ]
    }
   
Commonleafulblock4(){
        return [
            {
                challengesTitle : "History matching",
                challengestext  : "History Matching is the procedure of adjusting appropriate reservoir model parameters iteratively, so that the model reproduces the behaviour of the actual reservoir as closely as possible. It mainly consists of adjusting suitable reservoir parametric data to match past production and pressure data. We can help our clients with the following procedures involved in the process:",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Defining the objectives of the History-Matching Process",
                    },
                    {  
                        ulData : "Determining the method to be used, the relevant historical data to be matched, and setting up criteria for a successful match based on the availability and quality of data and the objectives of the process.",
                    },
                    {  
                        ulData : "Determining the reservoir data that can be adjusted and the confidence range of that data.",
                    },
                    {  
                        ulData : "Running the simulation model through the pressure-match and saturation stages of the procedure iteratively, by specifying voidage, oil and gas rates within the confidence intervals to ensure  the best possible match such",
                    }
                ]
            }, 
                  
        ]
    }
   
Commonleafulblock5(){
        return [
            {
                challengesTitle : "Top-Down Modeling",
                challengestext  : "Top-Down Modeling is a formalized and comprehensive, empirical, multi-variant, reservoir simulation model, developed solely on the basis of field measurements (logs, core, well test, seismic, etc.) and historical production /injection data.",
                challengestext2 : "",
                challengestext5 : "The Top-Down, Intelligent Reservoir Modeling is an integration of the following components using state-of-the-art Artificial Intelligence & Data Mining (AI&DM) with solid reservoir engineering techniques and principles.",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Conventional and Non-conventional reservoir simulation and modeling",
                    },
                    {  
                        ulData : "Top-Down Intelligent Reservoir Modeling",
                    },
                    {  
                        ulData : "A comprehensive analysis of reservoir models' solution space",
                    },
                    {  
                        ulData : "Accurate structural and stratigraphic models",
                    },
                    {  
                        ulData : "Optimal property modeling grids",
                    },
                    {  
                        ulData : "Stratigraphic velocity models, initial inversion models and reservoir property models",
                    },
                    {  
                        ulData : "Extensive suite of geostatistical algorithms (kriging-based, object-based and MPS)",
                    },
                    {  
                        ulData : "Generation and analysis of multiple scenarios and multiple realizations",
                    },
                    {  
                        ulData : "Black-oil, Gas condensate, tight gas reservoirs  & Compositional simulation",
                    },
                    {  
                        ulData : "Horizontal wells & fractured reservoirs",
                    },
                    {  
                        ulData : "CO₂ miscible floods, water & steam floods",
                    },
                    {  
                        ulData : "Conversions of data sets between simulators",
                    },
                    {  
                        ulData : "Uncertainty Analysis and Risk Assessment",
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

