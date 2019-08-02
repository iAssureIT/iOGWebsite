import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Digitalstratergyroadmappage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Digitalstratergyroadmappage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Digital IT Strategy & Roadmaps",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "In recent years, the oil and gas industry has seen a number of initiatives to explore new digital technologies and to exploit their benefits. Digital transformation frequently involves transformations of key business processes, operations, as well as organizational structures and management concepts. The exploitation and integration of digital technologies often affect large parts of the oil business and impacts end products, business processes, distribution channels, and supply chains. Potential benefits of digitization are manifold and include better operations management, better visibility across the business, increases in sales and productivity, innovations and value creation in business.",
                overviewtext2       : "There is a dire need of establishing management practices to govern these complex transformations by companies going on their digital transformation journey. An important approach is to formulate a digital transformation strategy that serves as a central concept to integrate the entire coordination, prioritization, and implementation of digital transformations within an organization.",
                overviewtext3       : "At iOG Solutions, we strongly advocate identification and implementation of specific use cases such as Predictive Maintenance, Demand and Retail analytics, Process analytics solution that provides real-time simulation and help in generating value along the full Oil and Gas chain. iOG Solutions specialize in leveraging various modeling techniques, software tools, workflow and best practices along with exceptional visualization and simulation capabilities to bring value to the clients.",
                overviewtext4       : "",
                

            } 
                        
        ]
    }

  
  
Commonleafulblock(){
        return [
            {
                challengesTitle : "This is how we can help our clients:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Proposing IT projects/ initiatives that are required to achieve the future state of Information Technology systems."
                    },
                    {
                        ulData : "Determining the scope and high-level plan/budget costs of each project."
                    },
                    {   
                        ulData : "Developing the Project Implementation Roadmap."
                    },
                    {   
                        ulData : "Proposing a Program Management Framework that a client can adopt in order to manage their digital initiatives."
                    },
                    {   
                        ulData : "Execution plans for strategic initiatives with priorities, high-level requirements, implementation timelines, and business case."
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

