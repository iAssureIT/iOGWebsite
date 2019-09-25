import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Enterpriseassetpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
import Downstreamservicebanner from '../../allBlocks/Downstreamservicebanner/Downstreamservicebanner.js';

export default class Enterpriseassetpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Enterprise Asset Management (EAM)",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "A successful enterprise asset management (EAM) solution helps to achieve lowest maintenance costs, maintain equipment reliability, showcase integrity and bring world-class production standards. It brings integrated business processes that deliver maximum life-cycle profits from the operational assets.",
                overviewtext2       : "Success metrics for a truly successful EAM solution can be broadly defined as:",
                overviewtext3       : "iOG Solutions can help clients select and implement leading EAM solutions for the oil and gas industry. The motto of EAM services is simple: Improving the performance of your business via effective management of your operational assets. iOG Solutions offers clients world-class industrial asset management knowledge and deep understanding of enterprise asset maintenance processes to deliver a powerful, fully integrated, life cycle asset management solution.",
                overviewtext4       : "",
                overviewtext5       : "",
                commonulliUl   : [
                    {
                        ulData : "Helps to achieve greater operational equipment efficiency and maximum productivity"
                    },
                    {
                        ulData : "Maximizing asset life cycle profits and minimising asset life cycle costs"
                    },
                    {   
                        ulData : "Ensuring proactive EAM processes to protect the plants and assets"
                    },
                    {   
                        ulData : "Eliminate Production, Operational and Equipment risks"
                    },
                    {   
                        ulData : "Introduce continuous improvement in equipment reliability and integrity"
                    },
                    {   
                        ulData : "Makes Enterprise Asset Management industry best practises and workflows a daily practice in your operation."
                    }
                ]
                

            } 
                        
        ]
    }

  
  
Commonleafulblock(){
        return [
            {
                challengesTitle : "EAM services at iOG Solutions range from system & application selection through full implementation, integration, support and trainings including:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Benchmarking Assessment"
                    },
                    {
                        ulData : "Global EAM Strategy Development and Planning"
                    },
                    {
                        ulData : "Asset Management KPI Development and Analytic Dashboards"
                    },
                    {
                        ulData : "EAM Policies and strategy development"
                    },
                    {
                        ulData : "Risk Management and Performance Improvement"
                    },
                    {
                        ulData : "Predictive Maintenance Program Development and Implementation"
                    },
                    {
                        ulData : "High-end EAM solutions implementation"
                    },
                    {
                        ulData : "EAM systems and business process expertise"
                    },
                    {
                        ulData : "System Gap Analysis"
                    },
                    {
                        ulData : "System Integration"
                    },
                    {
                        ulData : "System Source Selections"
                    },
                    {
                        ulData : "System Validation"
                    },
                    {
                        ulData : "EAM/CMMS Upgrades, Support and Training"
                    }
                ]
            }, 
                  
        ]
    }
    
    ServicesData(){
        return [
            {
                servicesimg   : "/images/Enterprise_Asset_ManagementBanner.png",
            } 
                        
        ]
    }

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Downstreamservicebanner infodata={this.ServicesData()} />
        <Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

