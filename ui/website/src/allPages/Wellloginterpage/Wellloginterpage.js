import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Wellloginterpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
// import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Wellloginterpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Well Log Interpretation",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Well logs provide insight into the formations and conditions in the subsurface, aimed primarily at detection and evaluation of possibly productive horizons. In addition to these logs that are used to characterize the wellbore, formation, and fluids, a number of logging tools are available to provide information during production operations.",
                overviewtext2  : "iOG Solutions provides well log analysis and interpretation studies to find out accurate depth at which Oil & Gas is present. We offer interpretation services for all kinds of logs, undertake well log correlation studies during exploration and development stage and Production log interpretation during Production stage:",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : []


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "We study the following different log responses to identify hydrocarbon content in the sub-surface at specific depths.",
                challengestext2 : "",
                challengestag   : "Interpretation and Analysis of all kinds of Logs:",
                commonulliUl :[
                    {
                        ulData : "Open hole logs like Gamma ray log tells about the Rock Type",
                    },
                    {  
                        ulData : "Resistivity logs tell about the Fluid Type",
                    },
                    {  
                        ulData : "Density and Sonic logs tells about Porosity",
                    },
                    {  
                        ulData : "Neutron logs tell about the Hydrogen content",
                    },
                    {  
                        ulData : "Spontaneous potential logs tell about the Permeability of the sub-surface or specific zone of interest",
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Our analysis and calculation of different log curve responses provide key parameters such as",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Porosity",
                    },
                    {  
                        ulData : "Lithology",
                    },
                    {  
                        ulData : "Permeability",
                    },
                    {  
                        ulData : "Water saturation",
                    },
                    {  
                        ulData : "Resistivity",
                    },
                    {  
                        ulData : "Mineralogy",
                    },
                    {  
                        ulData : "Fluid type",
                    },
                    {  
                        ulData : "Estimation of Hydrocarbon Saturation",
                    },
                    {  
                        ulData : "Depth and Thickness of net pay",
                    },
                    {  
                        ulData : "Estimation of volume of  Clay fraction",
                    },
                    {  
                        ulData : "Detection of Fracture",
                    },
                    {  
                        ulData : "Formation Tops",
                    },
                    {  
                        ulData : "Identification of Depositional Environment",
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "",
                challengestext  : "iOG Solutions Reservoir assessment services can be broadly classified as",
                challengestext2 : "We study the best combination of logs and give the desired results to our esteemed client, providing them with precise estimates about the exact depth at which the Hydrocarbon is present, economic viability of the zone of interest, etc.",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Qualitative:",
                        commonulliLi : [
                                            {
                                                liData : "Assessment of reservoir properties and fluid type from the log response"
                                            },

                                        ]

                    },
                    {
                        ulData : "Quantitative:",
                        commonulliLi : [
                                            {
                                                liData : " Numerical estimation of reservoir properties viz. % of Oil, Water etc."
                                            },
                                            
                                        ]

                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock4(){
        return [
            {
                challengesTitle : "Well Log Correlation:",
                challengestext  : "In Exploration / development stage, Log while drilling (LWD) are performed for few wells. Well Log Correlation is then used to correlate the data and use it for interpreting and predicting properties of other wells using Measure While Drilling (MWD) info. Our Well log correlation services include:",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "For the presence of data from more than 1 well data, we work on correlating stratigraphy (rock layers) from one well to another",
                    },
                    {
                        ulData : "Understanding both regional stratigraphy and field-scale stratigraphy",
                    },
                    {
                        ulData : "Flattening (datum) the logs from different wells on what is believed to be a time marker, e.g., a bentonite (volcanic) layer, a regional unconformity, or the top/base of a paleontologic zone (e.g., top of the Eocene), to remove post-depositional tilting",
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock5(){
        return [
            {
                challengesTitle : "Production Log Interpretation:",
                challengestext  : "Production Logging is a part of our cased hole services, that includes cement monitoring, corrosion monitoring, monitoring of formation fluid contacts (and saturations), perforating and plug and packer setting. Cased hole logs such as Calliper Log, (also done in Open Hole) carry information about well features such as well bore diameter and our experts can help clients in extracting interpreting thess aspects. Cement Bond Log tells about cement condition of the well and Casing Collar Locator tells about the placement of casing collar in the well.",
                challengestext2 : "",
                challengestext5 : "Production logs are used to allocate production on a zone by zone basis and also to diagnose production problems such as leaks or cross flow. Our Production log services span across:",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Diagnosis of production problems and production allocation",
                    },
                    {
                        ulData : "Cement placement monitoring",
                    },
                    {
                        ulData : "Corrosion monitoring",
                    },
                    {
                        ulData : "Monitoring of reservoir fluid contacts",
                    },
                    {
                        ulData : "Selection of recompletion zones",
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
                plansimg          : "images/wellloginter.jpg",

            }
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
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock5()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      </div>
    );  
  }
}

