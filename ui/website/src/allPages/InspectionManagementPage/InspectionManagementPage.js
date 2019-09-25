import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './InspectionManagementPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class InspectionManagementPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Inspection Management",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "iOG Solutions provide inspection management services that help to ensure that you are prepared with the information and data you need to focus efforts on value-adding interference.",
                overviewtext2  : "Our inspection management services help you to create an integration between non-destructive testing (NDT) and integrity management programs. We provide training and implementation solutions which helps the user to connect with the data to optimize scheduling, interval-based inspections to achieve the operational goals.",
                overviewtext3  : "Our multi-skilled and experienced engineers and consultants help you in identifying and detecting anomalies at the earliest stages, reducing the risk of failure and the cost of interruption in production.",
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
                challengestext  : "Some of the key benefits of a successful running Inspection Management tool are:",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Least manual work is required, all the data is provided through a digital medium like phones, computers."
                    },
                    {
                        ulData : "Collecting and documenting the information and data from the ongoing inspection becomes easy and more useful in real time processing."
                    },
                    {   
                        ulData : "It autonomously complies with the regulatory norms and provides the filtered results to the user."
                    },
                    {   
                        ulData : "The collected information and data are more easily accessible anywhere and anytime."
                    },
                    {   
                        ulData : "Based on this the operation becomes more result oriented and less time consuming."
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

