import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Cropdashboardpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Cropdashboardpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Corporate Dashboard and Analytics",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Corporate dashboards provide an integrated and visual representation of the complete oil business right from crude procurement all the way down to product distribution. It gives executives a quick and easy way to view and analyze the performance of the organization in real time.",
                overviewtext2       : "Analytics is often used in this infrastructure to compare different metrics, analyze or foresee situations that might get alarming based on forecasted trends. A typical example of predictive analytics can be to determine the top 10 critical depots based on the level of current usage and projected need for replenishment so that stocks are well maintained, and depots are prevented from over-depletion.",
                overviewtext3       : "How do Dashboards Work?",
                overviewtext4       : "Dashboards work by timely unification of disparate pieces of data into trusted metrics across the core functional areas of the business, perform “big-data” analytics to organize the collected data in a consistent structure, validate its accuracy and provide it in context to end users and applications to analyze and use the information to devise critical decision making criteria.",
                overviewtext5       : "",
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Key benefits of Corporate Dashboards",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Facilitate top management to visualize the outcome of a strategic decision often backed up by good data historical data."
                    },
                    {
                        ulData : "Enable ready viewing of Static and Real-time data such as KPI’s (Key Performance Indices) and KOP’S (Key Operating Parameters) in trends and interactive graphical charts  for better analysis"
                    },
                    {   
                        ulData : "Enable saving of valuable time of the working level engineer in digging relevant data and developing customized reports for Top Management"
                    },
                    {   
                        ulData : "Single, integrated end-to-end real-time visibility of information across the business chain"
                    },
                    {   
                        ulData : "Owing to the automated flow of data into the dashboards, the chances of source data getting manipulated are mitigated"
                    },
                    {   
                        ulData : "Enabling faster response in the event of disruptions in the business chain"
                    },
                    {   
                        ulData : "Facilitating Effective Plan Vs. Actual tracking analysis"
                    },
                    {   
                        ulData : "Enabling real-time awareness with drill-down capability and configurable notification capabilities (such as traffic signal kind of lights)"
                    },
                    {   
                        ulData : "Apart from the above tangible benefits, the intangible benefits include improved organizational understanding and awareness, better teamwork and coordination and improved decision making."
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "Challenges",
                challengestext  : "",
                challengestext2 : "It is essential to take extensive care in choosing the right metrics for the dashboard and thereafter to figure out their underlying metrics to track, understand and improve upon them.",
                challengestext3 : "",
                challengestext4 : "A sample set of metrics which can be part of the corporate dashboard of a typical downstream business are KPI’s (Key Performance Indices), Supply chain operations, Maintenance, Production overview, HSE, etc. These can be further drilled down into their respective sub-categories for in-depth analysis and follow-up.",
                commonulliUl : [
                    {
                        ulData : "Choice and definition of metrics for the dashboard"
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
                challengestext2 : "The ideal executive dashboard automatically and securely connects to data in real-time, so as to continuously update in real-time. In addition, the dashboard should be available via a web browser or even feature as apps on tablets so that everyone who needs to can access it whenever and wherever required rather than being housed on one individual’s desktop.",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Build a dashboard that appropriately serves the needs of the Top Management"
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock4(){
        return [
            {
                challengesTitle : "iOG’s offering:",
                challengestext  : "",
                challengestext2 : "We can help our customers in the following areas:",
                challengestext3 : "We are an experienced team of consultants with vast experience in implementing Corporate Dashboards for Oil Majors across the globe.",
                commonulliUl : [
                    {
                        ulData : "Identify, define and map all KPI’s included in the Top Management Balanced Scorecard as well as those monitored by the down-line managers"
                    },
                    {
                        ulData : "Provide a functional and cross-functional overview for better visibility of real-time operations for Top Management to have the necessary Business Intelligence and make insightful decisions based on changes in business and markets"
                    },
                    {   
                        ulData : "Explore automation opportunities in existing business processes"
                    },
                    {   
                        ulData : "Align key business transaction systems such as MES, trading platform and ERP in one window and design viable and easily accessible solutions in-line with the industry-wide best practices."
                    },
                    {   
                        ulData : "Select, design and implement Corporate Dashboard solutions."
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
                plansimg          : "images/corpdashboard.jpg",

            }
        ]
    }

   

  render() {  
    return (
      <div>
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 iogimplmntbrdCrm refinerybrdCrm ">
       <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable">           
           <ul class="breadcrumb breadcrumb2 demadnavigate">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="#" class="pathway">Expertise</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>      
                <li class="active"><span>Corporate Dashboard</span></li></ul>
            </div>
          </div>
        </div> 
       </div>   
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock3()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock4()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
     </div> 
    );  
  }
}

