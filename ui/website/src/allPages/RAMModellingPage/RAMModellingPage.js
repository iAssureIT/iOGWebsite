import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './RAMModellingPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class RAMModellingPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "RAM Modelling",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "At iOG Solutions, we provide implementation and training for various tools which helps in optimization of the operational and administration cost and maximizes the profitability.",
                overviewtext2  : "Reliability, Availability and Maintainability (RAM) are one of those tools which have a substantial impact on the lifecycle cost and performance of the industrial equipment and systems. In RAM modelling, Reliability is the probability of zero failures over a defined time interval. Availability is the percentage of time a system is considered ready to use when tasked. Maintainability is a measure of the ease with which a system can be restored to operational status following a failure.",
                overviewtext3  : "RAM modelling identifies areas of vulnerability which can affect operational availability and quantifies which assets and associated maintenance activities dominate downtime. Knowing this, the system design can be optimised, including its configuration, level of redundancy, component selection and supporting maintenance strategy. As well as suggesting tangible improvements, a RAM programme can provide confidence that the system will meet its operational targets and support wider project decision-making.",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [
                  
                ]

            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengesTitle2: "",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "The regular checks on the assets and operations that are performed by these tools are:",
                commonulliUl : [
                    {
                        ulData : "Reliability"
                    },
                    {
                        ulData : "Maintainability"
                    },
                    {   
                        ulData : "Availability"
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

