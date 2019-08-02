import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Applicationdevppage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Applicationdevppage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Application Development & Application Management (ADAM)",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Maintenance and enhancement of advanced applications for oil and gas companies consume a major portion of the total life-cycle cost of any IT system. Oil and gas industry features applications across all functional departments that inherently focus on features and functionalities. However, the digital transformation has forced organizations to change and adapt quickly, and legacy application management must change accordingly. The need of the hour is to design applications that are agile enough so that they can keep up the pace with digital transformation across the oil and gas industry.",
                overviewtext2       : "iOG Solutions has strong capabilities in providing consulting, implementation and support services for almost entire application landscape of a typical modern refinery and petrochemical complex.",
                overviewtext3       : "",
                overviewtext4       : "",
                

            } 
                        
        ]
    }

  
  
Commonleafulblock(){
        return [
            {
                challengesTitle : "Our Application Management services include:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Identifying the root cause of the issue/problem faced by users"
                    },
                    {
                        ulData : "Identifying stakeholders responsible for a resolution"
                    },
                    {   
                        ulData : "Calibration & Tuning of existing models"
                    },
                    {   
                        ulData : "Facilitate discussion between users and Product vendor for issue resolution"
                    },
                    {   
                        ulData : "Set Production & Test environment in sync"
                    },
                    {   
                        ulData : "Log and update of knowledge base with past incidents and using it for faster resolution in future"
                    },
                    {   
                        ulData : "Coordinate with users for replication of problems in a testing environment"
                    },
                    {   
                        ulData : "Application – access, installation, security, new user addition"
                    },
                    {   
                        ulData : "Support for testing of new requirement and updating of traceability matrix"
                    },
                    {   
                        ulData : "Support Product vendor with replication of problem at their end by providing ‘step’ wise procedure for problem replication, sending database/model as needed"
                    },
                    {   
                        ulData : "Monitor application DB health and ensure backup"
                    },
                    {   
                        ulData : "Support users with application usage issues"
                    },
                    {   
                        ulData : "Support for application installation and configuration"
                    },
                    {   
                        ulData : "Support for basic Model configuration changes"
                    }
                ]
            }, 
                  
        ]
    }

    commonulliData(){
        return [
            {
                commonulliheading : "Our Application Development services include:",
                commonullisubheading : "",
                commonullitext  : "",
                commonulliUl : [
                    {   ulData : "Support for software version upgrades",
                        commonulliLi : [
                                            {
                                                liData : "Using custom scripts"
                                            },
                                            {
                                                liData : "Using automated procedures available from the Product vendor"
                                            }
                                        ]
                    },
                    {   ulData : "Support for Major Model configuration changes undertaken by Product Vendor",
                        
                    },
                    {   ulData : "Support for Major version upgrades, bug fixes, patches, compatibility issues, etc.",
                        
                    },
                    {   ulData : "Support for new developments (e.g. new web services, new functionality development)",
                        
                    },
                    {   ulData : "Support for testing the new feature and then deploying in a production environment",
                        
                    },
                    {   ulData : "Study & analyse data availability with respect to new integration requirements",
                        
                    },
                    {   ulData : "Coordinate with the Integration team and user for Integration Data mapping.",
                        
                    }
                ]
            }                        
        ]
    }

  

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Overview OverviewData={this.overviewData()} />
        <Commonulliblock CommonulliData={this.commonulliData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

