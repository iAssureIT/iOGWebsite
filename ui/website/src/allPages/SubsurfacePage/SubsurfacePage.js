import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './SubsurfacePage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class SubsurfacePage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Subsurface Modeling",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Seismic to simulation sub-surface modelling solutions are a critical input to exploration processes and decision making as regards any asset or field. iOG offers a solution that helps reduce geological uncertainty and consequent vulnerability of processes. The overall impact is to enhance production, resulting in much better return on investment (ROI). These unique volume-based models help in unlocking the mismatch between the structural and the reservoir model. We will help you in creating a consistent and highly integral reservoir model incorporating all available geological and geophysical information.",
                overviewtext2  : "The subsurface modelling solutions consist of the following in a well-defined workflow:",
                overviewtext3  : "Qualitative pre-modeling Geological analysis",
                overviewtext4  : "One of the key steps of any sub-surface modelling process is to understand the overall geological setting of the reservoir in terms of the structural element, tectonics, stratigraphic sequence, depositional environment, rock types etc. Generally, this high level, broad knowledge about the reservoir and the basin is gathered through studies and analyses existing literature, reports, published data, government provided data packages etc.  This kind of general understanding of the basin and reservoir helps in deciding the workflow to be used in actual subsurface modelling. iOG’s team of experienced geologists can complete a comprehensive preliminary evaluation of the prospect/basin and integrate all publically available information and data to generate a report.",
                overviewtext5  : "",


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "Basin Modeling",
                challengestext  : "Basin modeling involves characterising a petroleum system in terms of the source rock and accumulation of oil and gas and the digital simulation of the system to understand migration pathways. While carrying out a basin model, the geo-history (or depositional model through time) of the basin is evaluated to find out the timing of the deposition source and reservoir rock, generation of a hydrocarbon footprint and migration to the reservoir.",
                challengestext2 : "",
                challengestag   : "This would enable addressing the following:",
                commonulliUl : [
                    {
                        ulData : "Have Hydrocarbons been generated?"
                    },
                    {
                        ulData : "Where were the hydrocarbons generated?"
                    },
                    {   
                        ulData : "When were the hydrocarbons generated?"
                    },
                    {   
                        ulData : "Could hydrocarbons have migrated to prospect?"
                    },
                    {   
                        ulData : "Properties of the hydrocarbons?"
                    },
                    {   
                        ulData : "Overall Risk of exploration and production."
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Quantitative geophysical analyses are increasingly gaining importance and have become the prime focus of studies amongst the oil exploration companies worldwide recently. Three key driving trends have been identified so far to understand why quantitative geophysics has become an essential part of routine exploration techniques",
                challengestext2 : "",
                challengestag   : "Quantitative Geophysical Analysis",
                commonulliUl : [
                    {
                        ulData : "The ever-increasing reliability on geophysics as an exploration method for exploring deeper, prospects."
                    },
                    {
                        ulData : "The reduction of risk/vulnerabilities of high stakes resource exploration through efficient assessment of reservoirs."
                    },
                    {   
                        ulData : "Advances in technology that have reduced the time and effort required to transform large geophysical data into useful visualizations of the subsurface."
                    }
                ]
            }, 
                  
        ]
    }
   
Commonleafulblock3(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Building a representative velocity model is a critical element in imaging subsurface geologies. iOG provides a wide range of velocity model building algorithms and workflows including full waveform inversion, reflection tomography, anisotropic earth models and powerful refraction topographies (which detects shallow velocity anomalies). All these algorithms work with diverse acquisition configurations and can be applied to any geological setting. Also, these computer intensive algorithms are integrated with an interactive graphics environment for rapid and accurate quality control of the interim and final results.",
                challengestext2 : "",
                challengestag   : "Velocity Modeling",
                commonulliUl : []
            }, 
                  
        ]
    }
Commonleafulblock4(){
        return [
            {
                challengesTitle : "",
                challengestext  : "3D geophysical inversion techniques are used in the subsurface modelling procedure to extract more information by converting geophysical measurements into 3D images of the subsurface. These images can be further integrated with other surface and subsurface geological observations to generate meaningful geological models. Insights generated from geophysical inversion have helped to improve prospecting and focused drill targeting, particularly in deeper and more complex subsurface environments.",
                challengestext2 : "Formation evaluation is an integral part of exploration activities of a basin. Formation evaluation techniques are generally performed using log curves generated during the logging program. Our team of expert Petrophysicists can implement a complete suite of formation evaluation procedures to establish the petrophysical characteristics of the reservoir zone. We can also help in analyzing various high end, state-of-the-art log data such as Nuclear Magnetic, Resistivity image, Acoustic image etc.  iOG’s formation evaluation workflow will help in identifying sand-shale sequence, volume of shale, net-to-gross outputs, oil-water/gas-oil contacts etc. in the well bore. We also bring to the table capacities to carry out analysis of the wellbore seismic data.",
                challengestext5 : "Formation Evaluation and Log analysis",
                challengestag   : "Geophysical 3D Inversion Modelling",
                commonulliUl : []
            }, 
                  
        ]
    }
Commonleafulblock5(){
        return [
            {
                challengesTitle : "Sequence Stratigraphic Modeling",
                challengestext  : "Relatively new sequence stratigraphic analyses tools and techniques are used to understand the depositional sequence geometries and stratigraphic architecture of a sedimentary basin. Such techniques help to establish a detailed correlation of the sedimentary layers and delineate the depositional system in a better way. A successful sequence stratigraphic model provides the operators more control in finding hydrocarbons in some of the hidden pockets which are overseen in the structural models. This sequenced stratigraphic modeling approach will help",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Model stratal patterns in various tectonic settings such as passive margins and foreland basins as well as the sedimentary architectures associated with different structural settings such as growth faulting and salt diapirism"
                    },
                    {
                        ulData : "Enhance biostratigraphic interpretation by providing age constraints for the stratal geometries in various sequential stratigraphic interpretations."
                    },
                    {   
                        ulData : "Helps identify new reservoirs within existing oil and gas fields"
                    }
                ]
            }, 
                  
        ]
    }
   

Commonleafulblock6(){
        return [
            {
                challengesTitle : "Structural Modeling",
                challengestext  : "Structural modeling has become increasingly important for geological complex basins occurring in thrust and rift settings. Such structural modeling is normally extended to the entire basin or as a full field from the overburden stages to the reservoir aquifer and often down to the basement. During seismic interpretation, various structural elements such as term faults, fractures, joints etc. are identified and then integrated to build the structural framework. These structural frameworks are a pre-cursor to any reservoir modeling and provide the skeleton to the 3D model. These structural models consist of fault-to-fault, fault-to-surface and surface-to-surface relationships to identify various blocks for modeling.",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : []
            }, 
                  
        ]
    }
   
Commonleafulblock7(){
        return [
            {
                challengesTitle : "",
                challengesTitle2: "3D Geocellular Modeling and reservoir characterization",
                challengestext3 : "Geocellular modeling provides a quantitative understanding of the reservoir in terms of 3D geostatistical distribution of the reservoir properties within defined geological boundaries of the reservoir. The goal of 3D geocellular modeling is to identify the sweet spots for placing wells for future development of the field. The final geocellular models become the input for dynamic simulation where production forecast and hydrocarbon productivity is modelled.",
                challengestext  : "Facies modeling is often an important component of geostatistical reservoir characterization and facilitates construction of superior reservoir models for complex reservoirs.  Use of knowledge of the facies which makes up the reservoir and the depositional environments provide a strong basis for an understanding of true distribution of reservoir properties. The 3D geocellular model of the reservoir is always constrained by the facies models as distribution of reservoir petrophysical properties is directly related to depositional rock units, in our technological perspective. We use state-of-the-art facies modeling techniques such as the Sequential Indicator Simulation, Truncated Gaussian simulation, Plurigaussian simulation etc. In addition to these pixel based modeling techniques, we also perform other object based facies modeling techniques.",
                challengestext5 : "",
                challengestag   : "Facies Modeling",
                commonulliUl : []
            }, 
                  
        ]
    }

Commonleafulblock8(){
        return [
            {
                challengesTitle : "",
                challengesTitle2: "",
                challengestext3 : "",
                challengestext  : "The ultimate goal of a 3D geocellular modeling approach is to provide a 3D distribution model of petrophysical properties of the reservoir. Our petrophysical modeling technique is used for generating and extrapolating the distribution model of porosity, permeability, net to gross, saturations etc. into a geocellular grid. All petrophysical models are conditioned to facies models. Our petrophysical modeling workflow can generate both deterministic and stochastic models of the reservoir.",
                challengestext5 : "",
                challengestag   : "Petrophysical Modeling",
                commonulliUl    : [
                                        {
                                            ulData : "Our deterministic model supports traditional kriging algorithms (both simple and ordinary kriging), moving average, nearest neighborhood, closet point alogorithms etc."
                                        },
                                        {
                                            ulData : "Our stochastic modeling workflow supports various form of geostatistical conditional simulation algorithms such as Sequential Gaussian simulation, turning band simulation, simulated annealing Gaussian random field simulation etc. Additionally, we can also provide collocated cosimulation algorithms to integrate various seismic attributes generated through inversion of seismic data. We also have the capacity to use custom algorithms to run your own algorithm in combination with other available methods found in the user interface"
                                        }
                                    ]           
             }, 
                  
        ]
    }
   
Commonleafulblock9(){
        return [
            {
                challengesTitle2: "Geomechanical Modeling:",
                challengesTitle : "",
                challengestext3 : "iOG Solutions also provides a unique solution to evaluate and analyse well log data, seismic data and core data to generate 3D geomechanical models. These can subsequently be used to optimize drilling and production strategies.",
                challengestext  : "This approach addresses challenges such as:",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl    : [
                                        {
                                            ulData : "Coupled, hydro-thermo-mechanical analyses for compaction and subsidence"
                                        },
                                        {
                                            ulData : "Fault seal and cap rock integrity analyses"
                                        },
                                        {
                                            ulData : "The identification of potentially permeable natural fractures for well placement"
                                        },
                                        {
                                            ulData : "Thermal recovery processes"
                                        },
                                        {
                                            ulData : "Stress-sensitive reservoirs in which permeability may change with depletion or injection in a heterogeneous manner"
                                        }
                                    ]           
             }, 
                  
        ]
    }
   
Commonleafulblock10(){
        return [
            {
                challengesTitle2: "Prospect analysis",
                challengesTitle : "",
                challengestext3 : "Once a 3D subsurface model is constructed, iOG enables a thorough analysis of the prospect in terms of prospect ranking volumetrics. We can produce various volumetric scenarios of your prospects and risk analysis. Our experts will carry out a sensitivity analysis of various reservoir parameters to generate a risk mapping of your field.",
                challengestext  : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl    : []           
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
        <Challenges   CommonleafblockData={this.Commonleafulblock8()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock9()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock10()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

