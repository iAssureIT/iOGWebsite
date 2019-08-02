import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Operationlogpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Operationlogpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Operation Logbook and Target Dashboard",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "The Operator Logbook is an application that logs, tracks events and operations data for use in daily and shift reports. It facilitates daily/weekly operations meetings by the recording comments and observations and enables other refinery staff to access and analyze operations data and reports in a consistent and reliable fashion. It also automates the operating instructions workflow, exchange of data with external systems and provides visibility across Operations. The application enables operations management staff to set operation targets per shift, area, unit, and equipment. ",
                overviewtext2       : "",
                overviewtext3       : "",
                overviewtext4       : "",
                overviewtext5       : "",
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Proven Benefits of Operating Logbook",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Effective shift handover results in reduced number and severity of incidents"
                    },
                    {
                        ulData : "Better communication improves situational awareness that reduces operating equipment outside of operating ranges. Operating and maintenance costs are reduced through increased asset reliability"
                    },
                    {   
                        ulData : "Better safety and environmental compliance"
                    },
                    {   
                        ulData : "Increased production through learning from and avoiding incidents"
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "Key Capability of Operating Logbook",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "",
                challengestext4 : "",
                commonulliUl : [
                    {
                        ulData : "Shift summary reports are created from templates by operators every shift. A host of control and check mechanisms can access this for increased efficiency."
                    },
                    {
                        ulData : "With the ability to create scheduled and ad hoc tasks, a department-wide to do list is created with completion times, responsibilities, and procedures"
                    },
                    {
                        ulData : "Allows ad hoc entry of comments and observations"
                    },
                    {
                        ulData : "Search comments entered in Operating Instructions, Operations Monitoring, and Operations Logbook"
                    },
                    {
                        ulData : "Minimize administration costs with a web user interface"
                    },
                    {
                        ulData : "Employ standard backup and auditing tools to ensure business continuity"
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "Services Offering",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Design and review of OLT applications"
                    },
                    {
                        ulData : "Implementation and support of OLT tools"
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

