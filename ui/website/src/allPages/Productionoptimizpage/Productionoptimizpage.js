import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Productionoptimizpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Productionoptimizpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Production Optimization",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "The objective of production optimization is to maximize the total oil/gas production rate and to minimize the total cost of operation. For single wells or other small systems, simple well optimization and nodal analysis may be adequate but for large complex systems, a much more sophisticated approach is needed to predict the response accurately and to examine alternative operational scenarios efficiently.",
                overviewtext2  : "Below are the areas covered under production optimization in increasing order of complexity:",
                overviewtext3  : "Our Integrated Asset Modelling approach takes into consideration all the data and parameters that affect the overall system and can be illustrated as follows:",
                overviewtext4  : "",
                overviewtext5  : "An initialized model can then be used for designing of wells and prediction of well performance.",
                commonulliUl   : [
                    {
                        ulData : "Production Analysis: Using Industry standard software solutions, we identify change in production of a well due to pump leakages, formation damage, reservoir pressure change etc and suggest corrective actions for production optimization.",
                    },
                    {  
                        ulData : "Well Performance Monitoring: Well performances are monitored and compared to its initial / best performance. These are also compared to predicted output from Well models to accurately analyse the production potential of the oil and gas well. Also, we can accurately predict under different production conditions.",
                    },
                    {  
                        ulData : "Well Optimization: Using the Well model, the production parameters of oil and gas wells can be optimized. The optimization can be performed for optimizing production parameters for designed production rate of the oil and gas well, or for maximizing the production rate of the oil and gas well by optimizing the relevant parameters.",
                    },
                    {  
                        ulData : "Field optimization: Using integrated models of reservoirs, well and surface facilities, and the production rate of each well is optimized to get the maximum total productivity of the field or the desired production.",
                    },
                    {  
                        ulData : "Our Production optimization workflows are based on extensive use of the Integrated Asset Model that integrates the modelling of the reservoirs, wells and surface facilities. It ensures that all dependencies, interactions, constraints and schedules are honoured throughout the production system. In fact, IAM models are now constructed at the design stage itself for verifying the design as well as for Production forecasting.",
                    },
                    {  
                        ulData : "Integrated Asset Modeling involves the conventional stages of Model characterization, Model calibration/Initialization and Predictions and Forecasting. Essentially, the models are built for each important component, tuned to mimic the actual production process and then used for Production optimization, scenario analysis and Production forecasting.",
                    },
                    {  
                        ulData : "Our Production optimization workflows are based on extensive use of the Integrated Asset Model that integrates the modelling of the reservoirs, wells and surface facilities. It ensures that all dependencies, interactions, constraints and schedules are honoured throughout the production system. In fact, IAM models are now constructed at the design stage itself for verifying the design as well as for Production forecasting.",
                    }
                ],
                commonulliUl2  : [
                    {
                        ulData : "Model Characterization:",
                        commonulliLi : [
                                                {
                                                    liData : "Process simulation involves the mimicking of the actual production process using a computer model to approximate offset well (for new well) or existing well performance. We help our clients in simulating their production processes using the best-in –class industry Nodal analysis solutions"
                                                },
                                                {
                                                    liData : "We assist our clients in modelling each component in the entire system using different equations or correlations. Our experts help in characterizing all the aspects, followed by their integration into a holistic Field model."
                                                }
                                            ]

                    },
                    {
                        ulData : "Model Initialization/Calibration Services:Model Calibration services are performed in the following order:",
                        commonulliLi : [
                                                {
                                                    liData : "Selection of the node followed by selection of the appropriate IPR Model."
                                                },
                                                {
                                                    liData : "Executing pressure gradient survey to match data with the survey data"
                                                },
                                                {
                                                    liData : "Performing system Analysis."
                                                },
                                                {
                                                    liData : "Sensitizing on well bore correlations"
                                                },
                                                {
                                                    liData : "Sensitizing on GOR to fine tune the match between observed and calculated data"
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
                challengesTitle : "Optimization and Forecasting:",
                challengestext  : "Our team can then help you with optimization of the Asset performance and forecasting by running the Model for multiple what-if scenarios by altering the variable values like system pressure and well rate,  within operational constraints, also known as Sensitivity analysis and then choosing the most feasible and profitable case for developing the production work-flow and predicting future production.",
                challengestext5 : "We can support our clients through the following activities",
                challengestext2 : "iOG Solutions can help its clients in performing Integrated Asset modeling in two modes depending on their requirements: Offline mode and the Online Advisory Mode.",
                challengestext4 : "Offline Asset modeling involves acquiring data from the various sources, manually validating and updating the data in IAM models. The model outputs are then used to identify performance issues and for making operational plans, production forecasts and parametric changes.",
                challengestext6 : "In the Online Advisory model, real time data from SCADA are filtered, validated and directly fed to the deployed models and used to update the Field model at regular intervals. These models are then used for problem identifications, recommendations as well as optimization, generating forecasts and operational plans. This helps in taking corrective actions in almost real-time. IAM model used for real-time optimization forms the crux of modern day Digital Oil Field initiatives",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Sensitization of parameters and evaluation of their effects on the total producing system",
                    },
                    {  
                        ulData : "Comparison of scenarios for base case, low and high",
                    },
                    {  
                        ulData : "Selection and validation of optimum conditions",
                    },
                    {  
                        ulData : "Operational Recommendations",
                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "iOG provides the below mentioned services:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Integrated Well and Reservoir modeling, taking into account all the surface and subsurface parameters",
                    },
                    {  
                        ulData : "Modeling of single and multi-well characteristics such as reservoir inflow performance and the vertical lift performance",
                    },
                    {  
                        ulData : "Sensitivity Analysis for optimization of both individual wells and entire fields",
                    },
                    {  
                        ulData : "Making mid to long-term production forecasts",
                    },
                    {  
                        ulData : "Customized Modeling and simulation Interfaces as per the clients asset structure",
                    },
                    {  
                        ulData : "Building detailed reservoir models in either material balance or generating type-curves from the dynamic reservoir simulator",
                    },
                    {  
                        ulData : "Building detailed well models including the reservoir inflow performance and the vertical lift performance",
                    },
                    {  
                        ulData : "Incorporating artificial lift technology in the well design",
                    },
                    {  
                        ulData : "Modelling surface facilities such as pumps, compressors and  separators",
                    },
                    {  
                        ulData : "Calibrating the pressure drop throughout the system",
                    },
                    {  
                        ulData : "Modeling compositional blending, mixing and other parameters to meet product specifications",
                    },
                    {  
                        ulData : "Optimizing Fields and Wells",
                    },
                    {  
                        ulData : "Debottlenecking pipeline network through multiple multiphase separation facilities installations",
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
                plansimg          : "images/productionopti.png",

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

