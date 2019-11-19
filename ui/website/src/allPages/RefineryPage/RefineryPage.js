import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './RefineryPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class RefineryPage extends Component {

  Commonleafulblock(){
        return [
            {
                challengesTitle : "Planning Challenges",
                challengestext  : "At this juncture, it is worthwhile to mention that the challenges involved in devising a robust plan are many.Following are a partial list of these challenges:",
                challengestext2 : "Usage of advanced techniques in LP tools such as advanced optimization, adherent recursion; non-linear optimization and mixed integer programming resolve the above issues to a great extent.",
                commonulliUl : [
                    {
                        ulData : "Choice of the right set of prices to be used in LP (often derived as a function of both forecaste available quotes) as these play a major role in optimization"
                    },
                    {
                        ulData : "Choice of the right tool for planning that best suits the refinery needs"
                    },
                    {   
                        ulData : "Availability and ease of receiving the necessary inputs for completing the planning process"
                    },
                    {
                        ulData : "Identification and incorporation of valid constraints from an exhaustive list that truly matters the mostIdentification and incorporation of valid constraints from an exhaustive list that truly matters the most"
                    },
                    {
                        ulData : "Identification of a cushion to cover for the operational inefficiencies such as in blending, unit start-up, and shut-down plan."
                    },
                    {
                        ulData : "Application of an approach which is more practical rather than theoretical to avoid situations such a tea-spoon blending in product recipes"
                    },
                    {
                        ulData : "Accuracy of the LP model is strongly dependent on the inputs from related tools such as Assay Data from simulation models fine-tuned unit-wise yield and limitations from rigorous reactor models etc."
                    },
                    {
                        ulData : "LP model’s inherent limitations such as assumption of linearity in refinery operations, local optima which may lead to incorrect decision-making"
                    },
                    {
                        ulData : "The need for both holistic (Multi-plant model) and realistic approaches at the corporate and refinery level respectively."
                    }
                ]
            }, 
                  
        ]
    }

  commonulliData(){
        return [
            {
                commonulliheading : "iOG Solutions for Refinery Planning",
                commonullisubheading : "iOG Solutions offers:",
                commonullitext  : "We, at iOG Solutions, are a team of consultants with a rich and vast experience in deploying end-to-end solutions of Refinery Planning business process at refineries in Spain, Middle-East, Vietnam, India and various other client sites across the world.",
                commonulliUl : [
                    {
                        ulData : "Study the business process 'As-is'"
                    },
                    {
                        ulData : "Provide a roadmap to achieve “To-be” status in-line with the best practices available worldwide"
                    },
                    {   ulData : "Implement Planning Business Process at client site through :",
                        commonulliLi : [
                                            {
                                                liData : "Proper design of functional scope & high-level architecture"
                                            },
                                            {
                                                liData : "Identification, analysis, definition, and integration of the right sources of data to carry out the analysis"
                                            },
                                            {
                                                liData : "Development of automated templates for handling data inflow and outflow"
                                            },
                                            {
                                                liData : "Setting up of exhaustive lists of case sets for Spot & Term crude evaluation, export evaluation, New product evaluation, and other economic studies"
                                            },
                                            {
                                                liData : "Sophisticated trend charts for effective reporting to Top Management"
                                            }
                                        ]
                    },
                    {
                        ulData : "Generate LP vectors through rigorous reactor models based on actual data to fine tune the LP model which shall subsequently be used to take “Make-Buy-Sell” decisions"
                    },
                    {
                        ulData : "LP Model review and identification of improvement opportunities"
                    },
                    {
                        ulData : "LP Model design and implementation"
                    },
                    {
                        ulData : "Implement multi-refinery and multi-period LP model"
                    },
                    {
                        ulData : "Define SCM KPI’s for visualization on the Top Management dashboard"
                    },
                    {
                        ulData : "SCM Integration with other relevant refinery solutions to ensure seamless flow of data, efficient analysis, and elegant reporting."
                    }
                ]
            }                        
        ]
    }

    imgleafblockData(){
        return [
            {
                plansTitle        : "Types of Plan",
                plansSubTitle1    : "Long Term plans",
                plansSubTitle2    : "Short-Term plans",
                planstext         : "Two kinds of plans are prepared at refineries: Long-Term & Short-Term.",
                planstext1        : "Revenue Budget and Annual Plans for estimating and planning the expenditure during the forthcoming financial year.These are also used to schedule turn-around of process units. ",
                planstext2        : "Monthly plan to optimize refinery’s operational activities for the current month, while keeping a view for the future requirements concerning the next three-month cycle. The typical flow of activities during the Short-Term plan regime is as depicted below:",
                planstext3        : "The base month plan for the current month never remains valid all through the month as unplanned aberrations in crude receiving program, demand variations and emergency shut-down of process units are bound to occur.This calls for a mid-month correction of the plan incorporating actual deviations from the plan during the first half of the month and devise a revised plan to achieve the best in the remaining half of the month.",
                plansimg          : "images/1.jpg",

            }
        ]
    }

    overviewData(){
        return [
            {
                overviewTitle : "Refinery Planning",
                overviewSubTitle : "Overview",
                overviewimg   : "/images/2.png",
                overviewtext1  : "Crude Oil Refining is by its very nature a diversified and complex business model. Newer and specialized non-linear constraints such as volatility in oil prices, changing demand patterns for petroleum products,stringent environmental regulations related to clean fuels and start-up of new production technologies are continuously being embedded into the system resulting in more complex refining schemes.In this context, intellectual production planning plays a vital role in maximizing refinery profitability and ensuring logistic reliability, more so in the current day Refinery Downstream Model which oscillates its nature between a supply-driven and a Demand-driven model.Linear programming software such as Aspen PIMS, Haverly GRTMPS, Spiral Plan, Honeywell RPMS, etc. become handy planning tools to select crude, optimize product mix and to determine optimal operating conditions over the desired time-frame."
            } 
                        
        ]
    }

  render() {  
    return (
       <div> 
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 iogimplmntbrdCrm refinerybrdCrm1 ">
       <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable">           
           <ul class="breadcrumb breadcrumb2">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="#" class="pathway">Expertise</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>      
                <li class="active"><span>Refinery</span></li></ul>
            </div>
          </div>
        </div> 
       </div> 
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
	    <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Commonulliblock CommonulliData={this.commonulliData()} />
      </div> 
      </div>
    );  
  }
}

