import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './FielddevplanPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class FielddevplanPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Field Development Planning",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Generating Field development plans (FDPs) is the process of evaluating multiple development options for a field and selecting the best option based on assessing trade-offs among multiple factors. It gives you the best technical solutions for field optimization. iOG performs detailed and comprehensive field development plans to cover all technical aspects inclusive of seismic, geological, petrophysical, reservoir engineering, production technology, drilling, facilities, completion design, surface facilities, economics and risk assessment.",
                overviewtext2  : "We help our clients integrate the best industry practices and workflows and support them in formulating an integrated field development plan that achieves various operational and financial objectives.",
                overviewtext3  : "Equipped with technical capabilities and a wide range of experience, our team works in collaboration with your experts and aligns process goals with the development and business strategy.",
                overviewtext4  : "One of the key steps of any sub-surface modelling process is to understand the overall geological setting of the reservoir in terms of the structural element, tectonics, stratigraphic sequence, depositional environment, rock types etc. Generally, this high level, broad knowledge about the reservoir and the basin is gathered through studies and analyses existing literature, reports, published data, government provided data packages etc.  This kind of general understanding of the basin and reservoir helps in deciding the workflow to be used in actual subsurface modelling. iOG’s team of experienced geologists can complete a comprehensive preliminary evaluation of the prospect/basin and integrate all publically available information and data to generate a report.",
                overviewtext5  : "",


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Our integrated field development planning approach helps establish:",
                challengestext2 : "Our process enables you  to appreciate the key project drivers and the interaction of various disciplines to maximize project value through optimized balances. It mitigates financial & technical risk, thereby achieving an optimal integrated field development plan with accurate lifecycle cost estimates. ",
                challengestag   : "",
                commonulliUl :[ 
                    {
                        ulData : "Number and location of wells to be drilled for attaining production objectives",
                    },
                    {   
                        ulData : "Recovery techniques to maximize the extraction of fluids within the reservoir",
                    },
                    {   
                        ulData : "Type and cost of installations and facilities based on the objectives and operating environment",
                    },
                    {   
                        ulData : "Separation and treatment systems for gas and fluids",
                    }

                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "iOG’s integrated subsurface teams can help in developing Field Development Plans at different stages of a project’s lifecycle:",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Conceptual Area Development Plans (ADPs)/Field Development Plans (FDPs) conducted at the Identify and Assess phases",
                    },
                    {  
                        ulData : "Comprehensive ADPs/FDPs conducted in support of the selection of an optimal development concept within the Concept Select stage",
                    },
                    {  
                        ulData : "Optimization of ADPs/FDPs through Definition and Implementation phases, adjusting plans based on new data and information",
                    },
                    {  
                        ulData : "Thorough uncertainty appraisal to accelerate final Investment Decisions and produce integrated field development plans that will underpin project sanction.",
                    }
                ]
            }, 
                  
        ]
    }
   
Commonleafulblock3(){
        return [
            {
                challengesTitle : "iOG Field Development Planning services",
                challengestext  : "We provide the following Field Development services as part of our Reservoir Management offerings:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl : [ 
                    {
                        ulData : "Pre-Drills",
                        commonulliLi : [
                                            {
                                                liData : "Checking for and validating government requirements and compliances "
                                            },
                                            {
                                                liData : "Advanced geophysical and logging technologies to help characterize reservoirs and identify potential “sweet spots”"
                                            },
                                            {
                                                liData : "In-house evaluation and interpretation of G & G data"
                                            }
                                        ]

                    },
                    {   ulData : "Drilling and allied processes",
                        commonulliLi : [
                                            {
                                                liData : "Drilling, Completion and Stimulation technologies to enhance reservoir contact, well productivity and ultimate recovery"
                                            },
                                            {
                                                liData : "Well planning and design"
                                            },
                                            {
                                                liData : "Modeling and simulation at the well and field levels"
                                            },
                                            {
                                                liData : "Artificial Lift and Flow Assurance technologies to ensure high well deliverability"
                                            }
                                        ]
                    },
                    {   ulData : "Comprehensive",
                        commonulliLi : [
                                            {
                                                liData : "Formulation, Screening and Ranking of multiple large-scale Integrated Field Development Plans"
                                            },
                                            {
                                                liData : "Economic Modeling"
                                            },
                                            {
                                                liData : "Risk management software to help in modeling multiple uncertainties at a field or portfolio level"
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

