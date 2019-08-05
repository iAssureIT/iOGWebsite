import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Welldatamanagepage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Welldatamanagepage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Well Data Management",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "The most important aspect of preparing the well plan, and subsequent drilling engineering, is determining the expected characteristics and problems to be encountered in the well. A well cannot be planned properly if these environments are unknown.",
                overviewtext2  : "We collect, store, modify, validate and give meaningful output to our customers by processing the various types of data like well plan & Design Data, Well Integrity & Well Test Data, Well Performance Data, Well Logs, Survey and Core Data.",
                overviewtext3  : "iOG helps its client to manage well data from request-to-drill through abandonment. It uses robust schematics, flexible reporting capabilities and a query engine to track operational changes throughout the well lifecycle.",
                overviewtext4  : "We collect, store, modify, validate and give meaningful output to our customers by processing the following types of well-related data",
                overviewtext5  : "",
                commonulliUl   : [],
                commonulliUl2  : []


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle2 : "Integration and organization of data:",
                challengestext3  : "",
                challengestext  : "",
                challengestext5 : "",
                challengestext2 : "",
                challengestext4 : "",
                challengestext6 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Integrate both public and proprietary data for wells, core analysis, production history, directional surveys and digital logs",
                    },
                    {  
                        ulData : "Create a single trusted version of header data with well versioning, rule-based attribute promotion",
                    },
                    {  
                        ulData : "Design & Deployment of Scalable database systems for multiple wells",
                    },
                    {  
                        ulData : "Automated loading of digital log files (LAS, LIS and DLIS) and raster logs",
                    },
                    {  
                        ulData : "Validation of log data Vs. existing data sets to avoid creating duplicates or non-existent wells",
                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock2(){
        return [
            {
                challengesTitle2 : "Processing:",
                challengestext3  : "",
                challengestext  : "",
                challengestext5 : "",
                challengestext2 : "",
                challengestext4 : "",
                challengestext6 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Manage well headers, formation tops, deviation surveys, monthly production, Picks/Markers, Horizons, Faults, Logs, Velocity and other important data types",
                    },
                    {  
                        ulData : "Define data processing workflows",
                    },
                    {  
                        ulData : "Image depth registration processing & Core plates image processing",
                    },
                    {  
                        ulData : "Optimizing raw data for improving access speed and bulk storage efficiency",
                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock3(){
        return [
            {
                challengesTitle2 : "Quality Control:",
                challengestext3  : "",
                challengestext  : "",
                challengestext5 : "",
                challengestext2 : "",
                challengestext4 : "",
                challengestext6 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Appraising well data Integrity",
                    },
                    {  
                        ulData : "Implement Reference Value Management to maintain data quality.",
                    },
                    {  
                        ulData : "Synchronize data from internal data sources",
                    },
                    {  
                        ulData : "Automated Indexing of documents, interactively or in batches",
                    },
                    {  
                        ulData : "Automating Identification of provenance and quality",
                    },
                    {  
                        ulData : "Verifying completeness, searching for anomalies, and identifying issues with metadata, data ranges or values",
                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock4(){
        return [
            {
                challengesTitle2 : "Exporting and leveraging data:",
                challengestext3  : "",
                challengestext  : "",
                challengestext5 : "",
                challengestext2 : "",
                challengestext4 : "",
                challengestext6 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Data Access through query, map or tree view interfaces",
                    },
                    {  
                        ulData : "Export log and curve data to preferred format",
                    },
                    {  
                        ulData : "Visualization of Borehole Data",
                    },
                    {  
                        ulData : "Perform datum and other unit conversions upon export",
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
                plansimg          : "images/welldatamanagemnat.png",

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
        <Challenges   CommonleafblockData={this.Commonleafulblock4()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

