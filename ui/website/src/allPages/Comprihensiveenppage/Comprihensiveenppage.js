import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Comprihensiveenppage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Comprihensiveenppage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Comprehensive E & P Master Data Management",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Oil and gas enterprises handle a huge amount of data from disparate sources on a daily basis and most of it is unstructured. The upstream enterprises can address the magnitude and complexity of E & P data with a holistic data management solution. We, at iOG Solutions can help you in establishing a consolidated system which can aggregate and cleanse upstream data from all the different sources to provide geologists, geophysicists, and petrophysicists with a centralized repository and holistic view of the entire system.",
                overviewtext2  : "The data encountered in the various upstream operations is usually of poor quality, inaccurate and inconsistent which leads to delayed projects, underutilized production capacity, missed revenue opportunities, runaway costs, and regulatory noncompliance. We can help you in making sense out of the disorganized data using the industry standard technologies for comprehensive E & P Data management.",
                overviewtext3  : "Our team of consultants with its strong technical expertise applies a process-centric approach to analyse, recommend and enhance data management across the entire upstream value chain. We can help our clients in setting up a single, trusted, central source of data associated with all their data sources. We help our clients in integrating all the different Data domain types originating from the following sources.",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : []


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "About our Services",
                challengestext  : "Our team can help you in implementing the standard Professional Petroleum Data Management (PPDM) data models which offer an integrated data management / visualization environment tailored for upstream data management workflows.",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "Our Consultancy Approach",
                challengestext  : "We provide end-to-end support to our clients for all the activities involved in Upstream Data Management such as source identification, collection, transformation, normalization, error detection, consolidation, storage and distribution of data.",
                challengestext2 : "",
                challengestext5 : "Following is a partial list of the services we offer in our Comprehensive E & P Data Management Package",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Design and deploy lifecycle processes from source to reporting",
                    },
                    {  
                        ulData : "Assessing Data needs and selecting the best solutions to meet them",
                    },
                    {  
                        ulData : "Leveraging industry standard solutions to optimize the entire value chain",
                    },
                    {  
                        ulData : "Data syndication, furnishing universal connectivity and smooth delivery of required reference data to upstream systems",
                    },
                    {  
                        ulData : "Converting data into required formats",
                    },
                    {  
                        ulData : "Consolidating information views across the enterprise",
                    },
                    {  
                        ulData : "Managing metadata",
                    },
                    {  
                        ulData : "Working with corporate data repositories for Reference data",
                    },
                    {  
                        ulData : "Setting up PPDM Data Models",
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock2(){
        return [
            {
                challengesTitle : "Data Models",
                challengestext  : "The PPDM Model is suitable for a master data management system. The modular design allows selected portions to be used in business-specific databases and applications. The PPDM Production Model includes the following:",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Wells",
                    },
                    {  
                        ulData : "Production",
                    },
                    {  
                        ulData : "Seismic",
                    },
                    {  
                        ulData : "Land Minerals Rights",
                    },
                    {  
                        ulData : "Data Management",
                    },
                    {  
                        ulData : "Lithology",
                    }
                ]
            }, 
                  
        ]
    }

   
Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext3  : "We follow the PPDM subject areas Bottom-up approach synonymous with the standard setting up process.",
                challengestext5 : "Our Data Management Team can help you in achieving the following for your business:",
                challengestext : "We help you in setting up the PPDM Architecture which lays the rules and guidelines that govern the development of the Data Model. Our consultants can help you in establishing the naming, formatting and managing of reference tables and subject areas. Our MDM team will guide you through the integration and modifications required to the existing model structures to set up the PPDM Data models and the implementation or conversion of the same. We will help you in incorporating all the supported Internal as well as External Sites in your Data model.",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Improved Asset Utilization & Management",
                    },
                    {  
                        ulData : "Reduced Non-productive time",
                    },
                    {  
                        ulData : "Improved Drilling Efficiency and safety",
                    },
                    {  
                        ulData : "Reduced average drilling cost per well",
                    },
                    {  
                        ulData : "Improved Real-time performance monitoring and predictive analytics",
                    },
                    {  
                        ulData : "Monitoring Micro-seismic events",
                    },
                    {  
                        ulData : "Enhanced safety and efficiency",
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
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

