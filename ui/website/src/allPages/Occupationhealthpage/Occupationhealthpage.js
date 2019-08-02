import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Occupationhealthpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Occupationhealthpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Occupational Health and Safety Management",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "A healthy and safe working environment is a foundation stone for safety management initiative in any process plant. Today, an increasing number of organizations are now focusing on the preventative measures to safeguard their employees and processes from the unseen hazards. These trends are being supported by a greater involvement from the top management.",
                overviewtext2       : "But in industries where a catastrophic failure of safety systems results in devastating effects on both the workforce and those living around it, safety emergency plans must be made to deal with the worst-case event. The worst-case scenarios should be brainstormed, and plant personnel must be trained to deal with such circumstances. Workers must be made aware of the occupational hazards associated with the process and they should be competent enough to deal with these hazards.",
                overviewtext3       : "iOG Solutions, with years of experience in the refining and petrochemical domains, helps clients with the development of effective strategies for a safe and efficient workplace for their plant personnel.",
                overviewtext4       : "",
                overviewtext5       : "",               

            } 
                        
        ]
    }

    
Commonleafulblock(){
        return [
            {
                challengesTitle : "The services iOG Solutions offers in the area of Occupational Health and Safety Management:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Health and Safety Management System Development and Implementation"
                    },
                    {
                        ulData : "Benchmarking of existing HSE systems."
                    },
                    {
                        ulData : "Develop and implement safety policies, operational procedures"
                    },
                    {
                        ulData : "Development of Standard Operating Procedures (SOP), Work Instructions and Program Development."
                    },
                    {
                        ulData : "Recognize, evaluate and mitigate risks to operations"
                    },
                    {
                        ulData : "Operational Risk Management"
                    },
                    {
                        ulData : "Technical assessments and measurements"
                    },
                    {
                        ulData : "Audits - Standards, Compliance, and Due Diligence"
                    },
                    {
                        ulData : "Training programs, Developing and delivering awareness presentations on specific health and safety topics"
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
      </div>
    );  
  }
}

