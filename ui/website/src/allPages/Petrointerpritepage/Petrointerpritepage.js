import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Petrointerpritepage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Petrointerpritepage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Petrophysical Interpretation",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Rock Physics plays a fundamental role in all exploration and production analysis because the physical properties data form the basis for interpreting seismic data. iOG offers the services of  world´s top experts in rock physics and physical properties analysis to provide world-class petrophysical solutions. Our experts analyse the client´s well log data and use this information to perform physical properties feasibility studies for the area of interest that can be used in all aspects of geophysical work. This physical properties framework is used to as the basis to drive forward and facilitate inverse modeling.",
                overviewtext2  : "We also help our clients in designing new seismic acquisition programs, testing processing streams, assessing the feasibility of using certain geophysical tools and ultimately in improving our understanding of the subsurface.",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",

            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "Formation Evaluation and Log analysis",
                challengestext  : "The different types of logs used for performing Formation Evaluation include coring, mud logs, wireline logs, electric logs, porosity logs, SP and Gamma Ray logs, Production logs, etc.",
                challengestext2 : "",
                challengestext5 : "We can help you in performing Formation Evaluation using data collected from a variety of sources for:",
                challengestext3 : "Formation evaluation is carried out to determine the ability of a borehole to produce hydrocarbons. It is the process of interpreting a combination of measurements taken inside a wellbore to detect and quantify oil and gas reserves in the rock adjacent to the well.",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Determination of fluid type - gas, oil, water, bitumen etc."
                    },
                    {
                        ulData : "The location of a reservoir vertically within drilled section & if possible, spatially."
                    },
                    {   
                        ulData : "Calculations of reserves, both movable & in place."
                    },
                    {   
                        ulData : "Determination of the productivity of the well including  mobility, permeability, formation pressure"
                    },
                    {   
                        ulData : "Determination of the lithology, facies and depositional environment to get an idea of reservoir geometry as well as petrophysical properties of the reservoir"
                    },
                    {   
                        ulData : "Calculation of porosity, of saturation and of reserves"
                    },
                    {   
                        ulData : "Percentage of the principal minerals and clay, clay type & distribution"
                    },
                    {   
                        ulData : "Estimation of texture, grain size distribution, sorting, and grain shape"
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle2 : "Petrophysical Modeling services:",
                challengestext  : "The ultimate goal of a 3D geocellular modeling approach is to provide a 3D distribution model of the petrophysical properties of the reservoir. Our petrophysical modeling technique is used for generating a distribution model of porosity, permeability, net to gross, saturations etc. into a geocellular grid. All petrophysical models are conditioned to facies models. Our petrophysical modeling workflow can generate both deterministic and stochastic models of the reservoir.",
                challengestext2 : "",
                challengestext3 : "Petrophysical Modeling services are also a part of our Reservoir Characterization suite.",
                challengestext5 : "Our Petrophysical modeling experts can help you in performing the following:",
                challengestag   : "",
                commonulliUl :[ 
                    {
                        ulData : "Deterministic Modeling"
                    },
                    {
                        ulData : "Stochastic Modeling"
                    },
                    {   
                        ulData : "Property Calculations for properties such as porosity, permeability and generating 3D property models"
                    },
                    {   
                        ulData : "Creating hisotgrams for checking and comparing input and model data and setting proper filters"
                    },
                    {   
                        ulData : "Calculating Water Saturation"
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
                challengestext3 : "Following is a partial list of our Petrophysical Interpretation and Modeling competencies:",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Logging program design"
                    },
                    {
                        ulData : "Integrated formation evaluation (vertical and horizontal wells)"
                    },
                    {   
                        ulData : "Probabilistic lithology and porosity modelling"
                    },
                    {   
                        ulData : "Unconventional reservoir petrophysical modelling"
                    },
                    {   
                        ulData : "Robust multi-well modelling"
                    },
                    {   
                        ulData : "Plotting Filter-sensitive Histograms for comparing the model against input data"
                    },
                    {   
                        ulData : "Fractured reservoir description and quantification"
                    },
                    {   
                        ulData : "Capillary pressure and J-function fluid saturation modelling"
                    },
                    {   
                        ulData : "Core analysis"
                    },
                    {   
                        ulData : "Calculation of Porosity, Permeability and Water Saturation"
                    },
                    {   
                        ulData : "Production log evaluation"
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

