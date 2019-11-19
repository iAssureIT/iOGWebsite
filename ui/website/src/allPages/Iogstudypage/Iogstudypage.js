import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Iogstudypage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Iogstudypage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "iOGStudy",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "iOGStudy is a specialized service provided by iOG, leveraging state-of-the-art software solutions and utilizing industry expertise. In these studies, iOG’s team of consultants have strong domain knowledge in upstream and downstream Oil & Gas industry as well as leading software solutions along with a blend of its best process and practices to deliver specialized studies to clients.",
                overviewtext2       : "iOGStudy differs from consultancy services in the application of domain knowledge and the use of advanced software tools. At iOG, consultants with their strong Oil & Gas cross-domain expertise are equipped to perform in-depth as well as holistic Profit-Improvement studies for assessing a client’s business processes and systems. The hidden potential is unlocked in the existing configuration for profit improvement and performance augmentation to arrive at ways and means that can be immensely useful in the fast-changing and volatile Oil and Gas markets.",
                overviewtext3       : "At iOG Solutions, the consultants can help clients in undertaking Technology Evaluation and Configuration studies for assessing the economic and operational viability of the latest cutting-edge technologies in the refining and petrochemical sector. iOG employs in-depth subject matter expertise in the Downstream Oil & Gas domain to evaluate software solutions for multi-location facilities and develop business suites for application integration.",
                overviewtext4       : "",
                

            } 
                        
        ]
    }

  
  commonulliData(){
        return [
            {
                commonulliheading       : "",
                commonullisubheading    : "",
                commonullitext          : "Following is a partial list of the analysis studies iOG helps clients with:",
                commonullitext2         : "The list offers only a few of the studies iOG undertakes for their clients. Connect with iOG Solutions to discuss the problems your business is facing. Connect with us (Link).",
                commonulliUl            : [
                    {   ulData          : "Profit improvement studies",
                        commonulliLi    : [
                                            {
                                                liData : "Crude basket optimization"
                                            },
                                            {
                                                liData : "High-Value product maximization"
                                            },
                                            {
                                                liData : "Evaluation of Alternate product routings and Process Unit feedstock"
                                            },
                                            {
                                                liData : "New product introduction and break-even price evaluation"
                                            },
                                            {
                                                liData : "Quality give-away minimization"
                                            },
                                            {
                                                liData : "Shut-down vs Catalyst life"
                                            }
                                        ]
                    },
                    {   ulData          : "LP Configuration Studies",
                        commonulliLi    : [
                                            {
                                                liData : "LP Evaluation of leading and upcoming refinery technologies"
                                            },
                                            {
                                                liData : "Refinery specific studies to evaluate additional configurations/technologies to meet desired product demand"
                                            },
                                            {
                                                liData : "Evaluation of the  capacity requirement and feasible/optimal modes of operation of process units"
                                            }
                                        ]
                    },
                    {   ulData          : "Energy Management",
                        commonulliLi    : [
                                            {
                                                liData : "Execution of specialized studies to understand the energy usage pattern, assess energy performance and energy efficiencies and benchmark the performance"
                                            },
                                            {
                                                liData : "Pinch Analysis to analyse utility systems and identify potential areas of energy recovery"
                                            },
                                            {
                                                liData : "Energy optimization studies to boost profitability"
                                            },
                                            {
                                                liData : "Identification of  short term, medium term, and long term energy conservation opportunities"
                                            },
                                            {
                                                liData : "Steam Network optimization studies"
                                            }
                                        ]
                    },
                    {   
                        ulData : "Identify need and areas for Base Control Loop Tuning",   
                    },
                    {   ulData          : "Hydrogen management",
                        commonulliLi    : [
                                            {
                                                liData : "Study production, consumption, and purity of Hydrogen in the network and advise optimum reformer severity operation"
                                            },
                                            {
                                                liData : "Performance of Buy vs Make analysis to meet the hydro-treating needs in a refinery"
                                            }
                                        ]
                    },
                    {   
                        ulData : "Study and recommend viable Energy Trading opportunities taking into account the risks inherent to trading",   
                    },
                    {   
                        ulData : "Study the impact of pricing on “Make-Buy-Sell” and inventory stock hold-up/deplete decisions inside the refinery",   
                    }
                ]
            }                        
        ]
    }
Commonleafulblock(){
        return [
            {
                challengesTitle : "Our differentiators:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Extensive cross-sector expertise with strong domain knowledge of both the Upstream and Downstream Verticals"
                    },
                    {
                        ulData : "World-class technical expertise in some of the most advanced solutions in the industry"
                    },
                    {   
                        ulData : "The unparalleled combination of domain-experts in our teams. The teams are built keeping in mind our clients’ requirements and needs."
                    },
                    {   
                        ulData : "End-to-end Implementation skills and experience on leading-market solutions"
                    },
                    {   
                        ulData : "Customization of solutions so as to cater to your specific situation"
                    },
                    {   
                        ulData : "Provision of independent consulting on process-centric applications widely used across the world"
                    },
                    {   
                        ulData : "A young, dynamic and confident team armed with a solution and goal-oriented approach."
                    },
                    {   
                        ulData : "Learning through sharing from our experience gained through interaction with different clients."
                    }
                ]
            }, 
                  
        ]
    }

  

  render() {  
    return (
      <div> 
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 iogimplmntbrdCrm">
       <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable takelftconsult">           
           <ul class="breadcrumb breadcrumb3">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="/services" class="pathway">Services</a>
              {/*<span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
                <li><a href="/servicearms" class="pathway">Service Arms</a>*/}
                <span class="divider"><img src="/media/system/images/arrow.png" alt=""/></span></li>
                <li class="active"><span>iOGStudy</span></li></ul>
            </div>
          </div>
        </div> 
       </div>    
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Commonulliblock CommonulliData={this.commonulliData()} />
      </div>
     </div> 
    );  
  }
}

