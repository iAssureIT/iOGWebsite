import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Refineryschedulinpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
// import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Refineryschedulinpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Refinery Operations Scheduling",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Scheduling mainly concentrates on implementing the optimized plan in relatively shorter time frames. It is usually carried out spanning over periods as long as 3 months to as short as one day. Planning is focused on optimization while scheduling is focused on feasibility and execution of the plan.",
                overviewtext2       : "The non-linearity in refinery operations such as feed and logistic limitations which are assumed to be linear during the planning process is rightly addressed during the process of scheduling to drive a feasible and optimal refinery operating philosophy.",
                overviewtext3       : "Refinery schedule provides the Refinery Operations team with all the necessary guidelines to carry out day to day operational activities which include daily unit operational targets, crude mix and product-wise blending recipes and specification targets, crude charge tank and product run-down/routing tank guidelines, blender traffic management and downstream transfers, program for cargo loading/ unloading and product dispatch plan through various modes to multiple destinations.",
            } 
                        
        ]
    }

  
  commonulliData(){
        return [
            {
                commonulliheading : "",
                commonullisubheading : "Refinery operations scheduling can be sub-divided into the following:",
                commonullitext  : "",
                commonulliUl : [
                    {
                        ulData : "Feedstock Scheduling: Feedstock scheduling refers to the logistics of handling the feed deliveries and corresponding tank allocations, feed runs, and inventories, with the objective of optimizing a feasible daily operations sequence while meeting constraints. Gives a time-dependent picture of receipts, inventories, and feed runs. "
                    },
                    {   ulData : "Process unit scheduling:",
                        commonulliLi : [
                                            {
                                                liData : "Process unit scheduling is concerned with determining unit operating conditions, unit by unit and by time period"
                                            },
                                            {
                                                liData : "product status"
                                            },
                                            {
                                                liData : "characteristics of each stream"
                                            },
                                            {
                                                liData : "each tank period by period"
                                            }
                                        ]
                    },
                    {   ulData : "Product blending and scheduling: It gives detailed output as",
                        commonulliLi : [
                                            {
                                                liData : "A detailed product blend schedule"
                                            },
                                            {
                                                liData : "Optimal blend recipes"
                                            },
                                            {
                                                liData : "Component and product tanks to use "
                                            },
                                            {
                                                liData : "Predicted properties of the blend recipes "
                                            },
                                            {
                                                liData : "Blend component and product inventories as a function of time "
                                            }
                                        ]
                    },
                    {   ulData : "Product distribution:",
                        commonulliLi : [
                                            {
                                                liData : "Recommend best means of transportation like railcar, truck or barges"
                                            },
                                            {
                                                liData : "Ensure timely delivery of products to the customer"
                                            },
                                            {
                                                liData : "Minimize the cost of transportation"
                                            }
                                        ]
                    },
                    {
                        ulData : "Dock Scheduling: Dock scheduling is a complicated task requiring the scheduler to have all the correct information at hand. This includes the berth availability of the dock, whether the dock has a pipeline line-up to the correct tanks and the physical characteristics of the dock, so the ship doesn’t risk running aground and that the cargo is compatible with the dock. Integrating dock scheduling with refinery schedule can realize as high or more than $1.2 million in benefits."
                    }
                ]
            }                        
        ]
    }
commonulliData2(){
        return [
            {
                commonulliheading : "",
                commonullisubheading : "We, at iOG, have in-depth knowledge on leading scheduling software solutions and provide the following services in this area:",
                commonullitext  : "",
                commonulliUl : [
                    {   ulData : "iOGConsult",
                        commonulliLi : [
                                            {
                                                liData : "“As-is” Business Process review for Scheduling and Blending and in  performing gap analysis in-line with the industry-wide best practices"
                                            },
                                            {
                                                liData : "Audit Scheduling & Blending Practices and Models"
                                            }
                                        ]
                    },
                    {   ulData : "iOGImplement",
                        commonulliLi : [
                                            {
                                                liData : "Build Scheduling & Blending models"
                                            },
                                            {
                                                liData : "Updating existing Scheduling & Blend Models"
                                            },
                                            {
                                                liData : "Develop Global Scheduling model for holistic control"
                                            },
                                            {
                                                liData : "Integrating Planning with Scheduling models"
                                            },
                                            {
                                                liData : "Jetty / Dock Scheduling (shipping Operations Management)"
                                            }
                                        ]
                    },
                    {   ulData : "iOGTrain",
                        commonulliLi : [
                                            {
                                                liData : "Conduct trainings as per the client’s requirement"
                                            },
                                            {
                                                liData : "Support services for Integration of existing model with the database, Resolve Roll Forward Issues, Email / Phone support for application issues"
                                            }
                                        ]
                    }
                ]
            }                        
        ]
    }

    imgleafblockData(){
        return [
            {
                plansTitle        : "",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "The following diagram shows the use of scheduling applications along with integration to other applications for data exchange:",
                planstext1        : 'Synchronized LP and Scheduling Models can be a great source of "real-t time" (daily) back casting to validate unit yields and stream properties against actuals which will highlight potential areas of improvement for both models. A step-wise process can be initiated from the scheduled results vs. actual performance through property bias and model bias. This can be a great way to get several data points to validate the LP model versus a “Monthly Averaged Back casting."',
                planstext3        : "The scheduling process also allows other related supply chain tools such as LP planning, blend optimization, dock scheduling, and supply distribution tools to work in a common environment to ensure that entire supply chain works in a tightly integrated manner.",
                planstext2        : "",
                plansimg          : "images/refinsche.jpg",

            }
        ]
    }

   

  render() {  
    return (
      <div> 
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 iogimplmntbrdCrm  ">
       <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable">           
           <ul class="breadcrumb breadcrumb2 refinerynavigate">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="/services" class="pathway">Expertise</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
                
                <li class="active"><span>Production Planning</span></li></ul>
            </div>
          </div>
        </div> 
       </div> 
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Commonulliblock CommonulliData={this.commonulliData()} />
	    <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Commonulliblock CommonulliData={this.commonulliData2()} />
      </div>
     </div> 
    );  
  }
}

