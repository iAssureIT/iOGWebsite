import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Enablingtechnologypage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Enablingtechnologypage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Enabling Technologies",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "New technologies that either alone or in combination with associated technologies, provide the means to drive radical changes in performance and capabilities of end-users and are defined as Enabling Technologies.",
                overviewtext2       : "The basic objective of Enabling Technologies is to help in the rapid development of tools and systems for analyzing and transforming legacy systems. Recent advancement in IT especially in Machine Learning, Artificial Intelligence (AI), Internet of Things (IoT), Robotics, analytics, and other hardware and software tools are already finding their niche in improving oil and gas processes.",
                overviewtext3       : "Robotics, drone-based sensors, real-time data collection hardware, cloud-based systems, software analytics tools, etc are increasingly providing services in inspections, transportation, prospecting, exploration, extraction, refining, and other related activities.",
                overviewtext4       : "The number of companies embracing enabling technologies is increasing at a very rapid rate due to enabling technologies being safe, efficient, faster and less expensive hence allowing them to minimize downtime and increase productivity.",
                overviewtext5       : "The digital revolution has the promise to radically change the way people work. But to ensure Digitalization delivers operational excellence; sometimes operators need to go back to the basics of technology planning and implementation.  iOG Solutions, over the years, has developed very strong domain expertise in oil and gas software services and has equipped its team with skills in Data Analytics, Machine Learning and AI technologies to assist clients with their digital initiatives, ultimately delivering tangible value out of data.",
                

            } 
                        
        ]
    }

  
  
Commonleafulblock(){
        return [
            {
                challengesTitle : "We offer following under our Enabling Technologies service umbrella:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Machine Learning"
                    },
                    {
                        ulData : "Artificial Intelligence"
                    },
                    {   
                        ulData : "Advanced Analytics"
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

