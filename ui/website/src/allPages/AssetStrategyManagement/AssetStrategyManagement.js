import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './AssetStrategyManagement.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class AssetStrategyManagement extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Asset Strategy Management",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "This modern approach of analysis and data collection helps companies in developing new techniques resulting in greater efficiency, less unplanned downtime, improved safety, less operational risk, better yields, and increased flexibility of production.",
                overviewtext2  : "Proper and systematic data analysis tools like a common APM solution can help management make data-driven decisions from a source they can trust. This single APM source allows easy understanding of asset condition to both the management as well as the maintenance team.",
                overviewtext3  : "With the help of an APM solution, you can not only optimize your delivery but also cut down on unnecessary scheduled maintenance as well as unplanned downtime. Here is how an Asset Performance Management program helps the Oil and Gas Industry.",
                overviewtext4  : "",
                overviewtext5  : "",
              

            },
            {
             overviewTitle    : "Risk Based Inspection",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "Risk-Based Inspection is a process that detects, evaluates and maps industrial risks, which can compromise equipment integrity in both pressurized equipment and structural elements. Risk-Based Inspection reports risks that can be controlled through proper inspections and investigation.",
                overviewtext2  : "During the Risk-Based Inspection process, engineers design examination strategies (what, when, and how to inspect) that most proficiently match forecasted or observed degradation mechanisms.",
                overviewtext3  : "With the help of an APM solution, you can not only optimize your delivery but also cut down on unnecessary scheduled maintenance as well as unplanned downtime. Here is how an Asset Performance Management program helps the Oil and Gas Industry.",
                overviewtext4  : "",
                overviewtext5  : "",
            }
                        
        ]
    }
    Commonleafulblock1(){
        return [
            {
                challengesTitle : "",
                challengesTitle2: "",
                challengestext  : "Operators of heavy-duty industrial facilities implementing Risk-Based Inspection can benefit from the following:",
                challengestext2 : "",
                challengestext3 : "The key benefits of Risk-Based Inspection:",
                commonulliUl : [
                    {
                        ulData : "Improved knowledge of equipment which may carry a potential risk;"
                    },
                    {
                        ulData : "More reliable equipment and plant operation;"
                    },
                    {   
                        ulData : "Increased process and equipment safety;"
                    },
                    {   
                        ulData : "Cost optimization through swapping to non-repetitive inspection techniques;"
                    },
                    {   
                        ulData : "Possibility to modify the shutdown period;"
                    },
                    {   
                        ulData : "Option to extend run lengths where applicable national regulations permit it;"
                    },
                    {   
                        ulData : "Increased teamwork during the implementation process"
                    },
                  
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
          <div class="moduletable">           
           <ul class="breadcrumb breadcrumb2">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="/services" class="pathway">Services</a>
                <span class="divider"><img src="/media/system/images/arrow.png" alt=""/></span></li>
                <li class="active"><span>Asset Strategy</span></li></ul>
            </div>
          </div>
        </div> 
       </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        	<Overview OverviewData={this.overviewData()} />
           <Challenges   CommonleafblockData={this.Commonleafulblock1()} />   
        </div>
      </div> 
    );  
  }
}

