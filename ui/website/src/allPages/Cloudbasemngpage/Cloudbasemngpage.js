import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Cloudbasemngpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
// import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Cloudbasemngpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Cloud Based Data Management",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Cloud based applications aims to reduce IT infrastructure and cost by outsourcing it to specialized service organizations. The reduced infrastructure and maintenance costs while improved utilization and increased flexibility help clients in meeting changing business requirements.",
                overviewtext2  : "iOG Solutions aims to provide Cloud based services to provide solution to the continuously increasing challenges associated with maximizing asset performance and minimizing infrastructure costs. Our cloud computing technology is driven by needs of oil and gas industry for reducing costs and performance enhancement in big data processing and analytics. It also facilitates simultaneous application of upgrades across the network without any disruption to other processes and data consumers.",
                overviewtext3  : "Our Cloud-based Data Management services",
                overviewtext4  : "iOG Solutions provide E&P organization with a reliable, complete view of operational information through design and deployment of cloud based solutions from the ground-up, as a platform seamlessly integrating some of the most advanced technologies. ",
                overviewtext5  : "The data from the SCADA software is sent via a satellite connection to the cloud, where it can be viewed with devices (smartphones, tablets, thin clients, PCs, etc.), without the necessity of any programing requirements on the part of our clients.",
                commonulliUl   : [],
                commonulliUl2  : []


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle2 : "",
                challengestext3  : "By providing gas analysis, detailed geological data and other information in real-time via the cloud, iOG helps well operators optimize their operations and protect their investment while ensuring well site safety. With real-time data, cost-saving changes like varying the speed, direction and drill loads can be put into effect the moment relevant information is available, making the entire drilling process much more affordable, safe and efficient. It can also, help in substantially increasing the drilling efficiency by facilitating data inputs to advanced processes like Geosteering. ",
                challengestext  : "Our services also, include tracking of changes in total gas, gas constituents, drilling information and geological conditions using the charts and trends.",
                challengestext5 : "iOG’s Cloud-based Data Management Solution capabilities include:",
                challengestext2 : "",
                challengestext4 : "",
                challengestext6 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Real-time sharing of key well bore information with stakeholders in real-time",
                    },
                    {  
                        ulData : "Consolidating data from multiple wells in the cloud",
                    },
                    {  
                        ulData : "Enabling data security by establishing data access rules based on user credentials",
                    },
                    {  
                        ulData : "Real-time Geosteering of the rock bit ensuring accurate placement of the wellbore for optimum return on investment.",
                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Benefits to clients:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Improved productivity of drilling operations",
                    },
                    {  
                        ulData : "Enhanced safety at well site",
                    },
                    {  
                        ulData : "Easy scalability as wells come on and off line",
                    },
                    {  
                        ulData : "Real-time data and analysis available anywhere",
                    },
                    {  
                        ulData : "Easy system access via smartphones and tablets",
                    },
                    {  
                        ulData : "No need for redundant backup servers",
                    },
                    {  
                        ulData : "Alarm notifications via text, SMS or email",
                    },
                    {  
                        ulData : "Reduced investments in computing infrastructure",
                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock3(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Cloud-Based iOG data-driven applications are uniquely equipped to support a variety of functions and cases within an Oil & Gas organization including:",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "New Well Prospect Identification and Delivery",
                    },
                    {  
                        ulData : "Subsurface Data Interpretation, Validation and Enrichment",

                    },
                    {  
                        ulData : "Well Data Management and Intelligence",

                    },
                    {  
                        ulData : "Well and Production Optimization",

                    },
                    {  
                        ulData : "Equipment and Asset Management",

                    },
                    {  
                        ulData : "Land, Lease and Contract Analysis",

                    },
                    {  
                        ulData : "Drilling and Completion Analysis",

                    },
                    {  
                        ulData : "Work Order Management, Maintenance, Repair and Operations (MRO)",

                    },
                    {  
                        ulData : "Production Revenue Accounting Analysis",

                    },
                    {  
                        ulData : "Predictive Analytics",

                    },
                    {  
                        ulData : "Midstream Pipeline, Rail and Equipment Management",

                    },
                    {  
                        ulData : "Downstream Refining Operations and Retail Customer Analysis",

                    },
                    {  
                        ulData : "Regulatory Compliance",

                    },
                    {  
                        ulData : "Collaboration across Business and Engineering Users",

                    },
                    {  
                        ulData : "Standardized Data-Driven Processes to Achieve Operational Excellence",

                    },
                    {  
                        ulData : "Mergers & Acquisitions and Joint Ventures",

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
                plansimg          : "images/cloudbasedimg.png",

            }
        ]
    }

   
   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock3()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

