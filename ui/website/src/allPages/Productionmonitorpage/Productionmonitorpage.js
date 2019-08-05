import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Productionmonitorpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Productionmonitorpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Production Monitoring and Surveillance",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Production Monitoring is focused on identifying improvement opportunities by identifying underperforming wells or fields by real-time data capture and analysis. It includes the following services:",
                overviewtext2  : "",
                overviewtext3  : "Ultimate purpose is to provide information which can help to maximize oil recovery, extend life of well and reduce operating cost.",
                overviewtext4  : "Production logging measurements or measurements of pressure, temperature or other properties by permanently installed downhole instruments can describe the distribution of flow into the wellbore as well as diagnose other completion-related problems.",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Real-time monitoring and control",
                    },
                    {  
                        ulData : "Periodic intervention services",
                    },
                    {  
                        ulData : "Identify problems in the reservoir or wellbore construction",
                    },
                    {  
                        ulData : "Improve production with targeted remedial actions.",
                    }
                ]


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "iOG provides the following surveillance services for Production Fields:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Real-time monitoring services for Underperforming wells",
                    },
                    {  
                        ulData : "Artificial Lift real time monitoring",
                    },
                    {  
                        ulData : "Monitoring continuous measurements of pressure, temperature, flow rate and fluid density.",
                    },
                    {  
                        ulData : "Subsea Production Surveillance by monitoring flow rates, fluid properties, temperatures and pressures that affect flow lines as well as risers",
                    },
                    {  
                        ulData : "Integrating advanced permanent downhole gauges and sensors with surface data communication to allow remote monitoring of wells and reservoirs in real time. ",
                    },
                    {  
                        ulData : "Delivering Surveillance data from field to office in real time.",
                    },
                    {  
                        ulData : "Analysing Asset performance and productivity Detecting Waterfront",
                    },
                    {  
                        ulData : "Assessment of well intervention with pre and post Pressure Build Up Tests",
                    },
                    {  
                        ulData : "Identifying problems in the reservoir and wellbore construction",
                    },
                    {  
                        ulData : "Quality Control activities assessment",
                    },
                    {  
                        ulData : "Detecting anomalous behaviours like Gas break-out in an oil well or liquid drop-out in a Gas Condensate well",
                    },
                    {  
                        ulData : "Real time Measurement of the full spectrum of multiphase flow rates while monitoring and evaluating production with a compact flowmeter",
                    },
                    {  
                        ulData : "Operating in both oil and gas wells for monitoring and testing dry gas, condensate and oil wells with a single meter",
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
                plansimg          : "images/productionmonitor.png",

            }
        ]
    }

   
   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

