import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './RiskBasedInspectionPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class RiskBasedInspectionPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Risk Based Inspection",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "Risk-Based Inspection is a process that detects, evaluates and maps industrial risks, which can compromise equipment integrity in both pressurized equipment and structural elements. Risk-Based Inspection reports risks that can be controlled through proper inspections and investigation.",
                overviewtext2  : "",
                overviewtext3  : "During the Risk-Based Inspection process, engineers design examination strategies (what, when, and how to inspect) that most proficiently match forecasted or observed degradation mechanisms.",
                overviewtext4  : "The key benefits of Risk-Based Inspection:",
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
                challengestext3 : "Development of a knowledge database including equipment design, process features, damage mechanisms, and inspection strategies.",
                commonulliUl : [
                    {
                        ulData : "Improved knowledge of equipment which may carry a potential risk"
                    },
                    {
                        ulData : "More reliable equipment and plant operation"
                    },
                    {   
                        ulData : "Increased process and equipment safety"
                    },
                    {   
                        ulData : "Cost optimization through swapping to non-repetitive inspection techniques"
                    },
                    {   
                        ulData : "Possibility to modify the shutdown period"
                    },
                    {   
                        ulData : "Option to extend run lengths where applicable national regulations permit it"
                    },
                    {   
                        ulData : "Increased teamwork during the implementation process"
                    }
                ]
            }, 
                  
        ]
    }


  


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock1()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

