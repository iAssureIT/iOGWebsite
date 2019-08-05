import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Datagoverpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Datagoverpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Data Governance – Best Practices",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "For iOG Solutions, data governance is one of the pillars of data management (DM) and is often considered hand-in-hand with data quality efforts and master data management programs. In exploration and production (E&P) community, initiatives to implement data governance are often seen as either organizational efforts or technology efforts and are driven from the corporate office with a top-down emphasis. That approach, although well intended and with valuable recommendations, is often met with internal resistance and suspicion and falls short when it comes to implementing and sustaining data governance to make a truly significant and lasting impact within the business.",
                overviewtext2  : "Data governance is about making data management better through systematic improvements in the following aspects:",
                overviewtext3  : "iOG Solutions treats Data governance as an ongoing process and ensures that data warehouse initiatives align with current and future corporate business objectives of clients. Our team supports clients in establishing a good governance structure that enables prioritization, validation and management of the ongoing processed, enabling clients to:",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Data Availability",
                    },
                    {  
                        ulData : "Data redundancy",
                    },
                    {  
                        ulData : "Reusable data integration and publishing services",

                    },
                    {  
                        ulData : "Standard business performance measures – Definitions & Calculations",

                    },
                    {  
                        ulData : "Business sensitivity, confidentiality, retention",

                    },
                    {  
                        ulData : "Tracking of data, data sources and repositories used for processing and publishing ",

                    },
                    {  
                        ulData : "Rules, data names, definitions and structures for data integration",

                    }
                ],
                commonulliUl2   : [
                    {
                        ulData : "Understand and manage strategic and tactical data, project ownership from a data perspective",
                    },
                    {  
                        ulData : "Priority setting for data projects",
                    },
                    {  
                        ulData : "Setting up workflow and best practices for creating, using and retiring data",

                    },
                    {  
                        ulData : "Tracking of data changes with respect to the data users",

                    },
                    {  
                        ulData : "Validation of data for completeness and business-rule compliance",

                    },
                    {  
                        ulData : "Implement data processes to cleanse, transform, and integrate incoming data",

                    },
                    {  
                        ulData : "Establishing systems & processed for security and privacy compliance across integrated systems",

                    },
                    {  
                        ulData : "Manage master data by examining data assets and relationships",

                    }
                ]


            } 
                        
        ]
    }

   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
      </div>
    );  
  }
}

