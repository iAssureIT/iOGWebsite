import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Welldatamngpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Welldatamngpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Well Data Management",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "iOG helps its client to manage well data from request-to-drill through abandonment. It uses robust schematics, flexible reporting capabilities, and query engine to track operational changes throughout the well lifecycle.  We collect, store, modify, validate and give meaningful output to our customers. We deal with all kinds of well data including Design data, Well Testing data, Well Log data, Well Integrity and real-time well performance data.",
                overviewtext2  : "iOG provides a structured services program for managing your Well system environment. This program provides a layer of oversight and governance to document, track and verify all changes within the system.",
                overviewtext3  : "Our team of Business Intelligence and visualization experts helps in selecting, building, implementing Visualization Tools, Dashboards and Key Performance Data (KPI) – support for operational performance analysis and benchmarking.",
                overviewtext4  : "Our Data Management team helps in instituting a Central Data Access point in a Comprehensive Data Set for all your Historical as well as Current well data, which in turn helps in improving Well Planning efficiency and Performance analysis through comparative well studies and customized reporting features.",
                overviewtext5  : "",
                commonulliUl   : []


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "iOG’s Service offerings for Well Data Management:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Integration and organization of data:",
                        commonulliLi : [
                                            {
                                                liData : "Integrate both public and proprietary data for wells, core analysis, production history, directional surveys and digital logs create a single trusted version of header data with well versioning, rule-based attribute promotion"
                                            },
                                            {
                                                liData : "Design & Deployment of Scalable database systems for multiple wells load digital log files (LAS, LIS, DLIS) and raster logs automatically"
                                            },
                                            {
                                                liData : "Validate log data against existing data sets to avoid creating duplicates or non-existent wells"
                                            }
                                        ]
                    },
                    {  
                        ulData : "Processing:",
                        commonulliLi : [
                                            {
                                                liData : "Manage well headers, formation tops, deviation surveys, monthly production, Picks/Markers, Horizons, Faults, Logs, Velocity and other important data types"
                                            },
                                            {
                                                liData : "Well defined data processing workflows"
                                            },
                                            {
                                                liData : "Edit and Manage Coordinate Reference System including applying datum transformations."
                                            },
                                            {
                                                liData : "Extract and load metadata associated with log"
                                            },
                                            {
                                                liData : "Image depth registration"
                                            },
                                            {
                                                liData : "Process Deviation Surveys in batch and calculate bottom hole locations."
                                            },
                                            {
                                                liData : "Manage structured and unstructured data (e.g. maps, core photos, reports, etc.)"
                                            },
                                            {
                                                liData : "Data standardisation, loading and Inspection"
                                            },
                                            {
                                                liData : "Digitisation: logs, interpretation, lithology"
                                            },
                                            {
                                                liData : "Log editing"
                                            },
                                            {
                                                liData : "Core plates image processing"
                                            },
                                            {
                                                liData : "Optimizing raw data, sampled in depth or time like curves, logs, etc., for access speed and bulk storage efficiency"
                                            },
                                            {
                                                liData : "Image depth registration"
                                            }

                                        ]

                    },
                    {  
                        ulData : "Quality Control:",
                        commonulliLi : [
                                            {
                                                liData : "Appraising well data Integrity"
                                            },
                                            {
                                                liData : "Implement Reference Value Management to maintain data quality. Provide enhanced log management functions including splicing, merging and editing log"
                                            },
                                            {
                                                liData : "Synchronize data from internal data sources (applications, proprietary & industry standard databases)"
                                            },
                                            {
                                                liData : "Index documents automatically, interactively or in batches to create relationships with entities (e.g. wells, fields, etc.)"
                                            },
                                            {
                                                liData : "Automating Identification of provenance and quality"
                                            },
                                            {
                                                liData : "Documents and log plots scanning"
                                            },
                                            {
                                                liData : "Verifying completeness, searching for anomalies, and identifying issues with metadata, data ranges or values"
                                            },
                                            {
                                                liData : "Implement Reference Value Management to maintain data quality"
                                            },
                                            {
                                                liData : "Associate physical inventory (paper or film) to proper wells through bar coding and indexing"
                                            }
                                        ]

                    },
                    {  
                        ulData : "Exporting and leveraging data:",
                        commonulliLi : [
                                            {
                                                liData : "Data Access through query, map or tree view interfaces"
                                            },
                                            {
                                                liData : "Export log and curve data to preferred format for use in G&G applications, including ability to reformat raster logs to/from DRA and LIC"
                                            },
                                            {
                                                liData : "Migration of legacy well data into standard database"
                                            },
                                            {
                                                liData : "Visualization of Borehole Data",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "GIS mapping from database"
                                                                    },
                                                                    {
                                                                        lilastData : "Cross-section interpretation"
                                                                    },
                                                                    {
                                                                        lilastData : "3D surfaces and fence diagrams"
                                                                    },
                                                                    {
                                                                        lilastData : "Data editing and interpretation"
                                                                    },
                                                                    {
                                                                        lilastData : "Multi-well geophysical log cross-plotting, multi-variant statistical analysis and pattern-recognition tools"
                                                                    }
                                                                ]

                                            }

                                        ]

                    },
                    {  
                        ulData : "Perform datum and other unit conversions upon export",
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

