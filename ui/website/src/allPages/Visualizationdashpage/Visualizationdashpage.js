import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Visualizationdashpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Visualizationdashpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Visualization and Dashboards",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Dashboards provide an integrated and visual representation of the complete oil business right from crude procurement all the way down to product distribution. And with the advent of industry 4.0 wave, corporate dashboards are among the most important technologies that are strategic to any Business Intelligence.",
                overviewtext2       : "Choosing the right metrics is crucial in order to track, understand, predict failure, improve performance and enhance enterprise-wide visibility. Analytics is often used to compare different metrics, segment data and analyze situations before it gives out alarming alerts based on forecasted trends. The ideal visualization and dashboards automatically and securely connect to data in real-time and provide actionable intuitive insights with an ability to drill down to specifics such as Maintenance, Refinery Operations, Supply-Chain, HSE management and much more via Application Programming Interfaces (APIs).",
                overviewtext3       : "Understanding what to do with all the data you gather is much more important than simply accumulating a large amount of data. We at iOG Solutions make sure that your visualization and dashboards solutions are aligned with your business objectives, making it easy to sift through all of the enterprise-wide data to be efficient in making strategic and tactical decisions about your business.",
                overviewtext4       : "",
                overviewtext5       : "",
                

            } 
                        
        ]
    }

  
  
Commonleafulblock(){
        return [
            {
                challengesTitle : "Our services include:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Development of KPI framework spanning across Board-room level Enterprise KPIs to Shop Floor level operating KPIs."
                    },
                    {
                        ulData : "Review existing and designing modern integrated application architecture landscape and data flow architecture."
                    },
                    {   
                        ulData : "Setting up a centralized reporting database"
                    },
                    {   
                        ulData : "Creating an asset hierarchy twin required for KPI calculation and drill-down capabilities"
                    },
                    {   
                        ulData : "Mapping KPIs with multiple visualization design for effective insights"
                    },
                    {   
                        ulData : "Development of visualization dashboards, standard and custom reports using multiple standards and custom visualisation applications"
                    },
                    {   
                        ulData : "Configuration of alerts and notification system as per the defined roles & responsibilities matrices."
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

