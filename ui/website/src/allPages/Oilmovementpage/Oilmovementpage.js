import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Oilmovementpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Oilmovementpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Oil Movement Management System",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "An oil movement system (OMS) manages all pipelines, crude oil, and product storage tanks in the tank farm area and controls the movement of all intermediate components and finished products. It is also known as the Off-site Area Management Application and closes the loop between basic control systems and IT systems. OMS provides a collaborative environment for the offsite operations and provides an overview of all important events, tasks, data, instructions, and activities within this area.",
                overviewtext2       : "The major objectives of OMS are:",
                overviewtext3       : "",
                overviewtext4       : "",
                overviewtext5       : "",
                commonulliUl : [
                    
                    {   ulData : "Tank inventory management.",
                    },
                    {
                        ulData : "To scan and record all relevant raw process data such as levels, temperatures, and selected flow rates."
                    },
                    {
                        ulData : "Process this data to derive additional parameters and record them."
                    },
                    {
                        ulData : "Provide methods of defining oil movements in terms of source, destination, route, quantity, material, etc."
                    },
                    {
                        ulData : "Provide real-time live displays showing the progress of movements, including the tank -ranking table"
                    },
                    {
                        ulData : "Calculate tank compositions and other quality parameters based on movements, estimations, in-line measurements, and lab data."
                    },
                    {
                        ulData : "Provide reports on current and historical OMS data of all types. The reports to be produced on demand, on the event or as scheduled."
                    },
                    {
                        ulData : "Provide links to external data feeding and receiving systems."
                    },
                    {
                        ulData : "Log system and operator activity, including interaction with external systems."
                    }
                ]
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Oil Movement Management provides benefits to refinery off-site area Operations staff in the following ways:",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Provides visibility of all activities and data at the offsite area."
                    },
                    {
                        ulData : "Improves the Offsite area operation integrity through real-time monitoring."
                    },
                    {   
                        ulData : "Improves the efficiency of the shipping and marine operations."
                    },
                    {   
                        ulData : "Stores history of all the data, instructions, actions and movements."
                    },
                    {   
                        ulData : "Automates data exchange with other systems such as production accounting, ERP, scheduling, and others to improve data accuracy and reduce manual data entries."
                    },
                    {   
                        ulData : "Provide consistent and accurate data to improve planning and scheduling."
                    },
                    {   
                        ulData : "Provide an important execution and monitoring link between P&S and MES layer"
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
                    {   ulData : "iOG Implement",
                        commonulliLi : [
                                            {
                                                liData : "Implementation and support of OMS tool"
                                            }
                                        ]
                    },
                    {   ulData : "iOG Study",
                        commonulliLi : [
                                            {
                                                liData : "Design and establish “best-practice” advanced technologies for OMS."
                                            }
                                        ]
                    },
                    {   ulData : "iOG Consult",
                        commonulliLi : [
                                            {
                                                liData : "Consulting services to study the oil movement system “As-is” and provide best-in-class solutions to improve instrumentation reliability and network infrastructure robustness."
                                            },
                                            {
                                                liData : "Deploy expert solutions to track and mitigate gross errors in complicated networks"
                                            },
                                            {
                                                liData : "Provide automated seamless Integration of Data Historian with OMS."
                                            }
                                        ]
                    }
                ]
            }                        
        ]
    }

    
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Commonulliblock CommonulliData={this.commonulliData()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      </div>
    );  
  }
}

