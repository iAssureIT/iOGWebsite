import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Productionaccountingpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Productionaccountingpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "iOG Production (Hydrocarbon) Accounting Solution",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Production accounting helps you monitor business processes for production, transport, sales and revenue of oil and gas. By monitoring every hydrocarbon produced, transported or sold, the value of the oil and gas from different sources can be determined.",
                overviewtext2  : "Production accounting is also called as Hydrocarbon accounting (HCA) and covers Production, Revenue, Joint Venture accounting, component allocations and Terminal / FPSO / LNG operations as shown in diagram below. Oil and gas production accountants track and analyse production data, calculate revenue and royalties associated with properties owned by oil companies and ensure reporting requirements are met.",
                overviewtext3  : "Production and operating data is indispensable for reporting to royalty owners, joint venture partners, purchasers, service companies, transporters and various government organizations. With complex contractual agreements to observe, it is commercially critical to have a system which accurately allocates and calculates these values.",
                overviewtext4  : "HCA is integral to successful and categorically compliant production operations.  HCA plays a key role in determining the revenues of the Oil and Gas Operations and our services can help you in achieving the following:",
                overviewtext5  : "",
                commonulliUl2   : [
                    {
                        ulData : "Timely and precise measurement and reporting through comprehensive and equitable allocation rules and accurately programmed systems",
                    },
                    {  
                        ulData : "Incorporation of myriad functions, including allocation engineering, hydrocarbon value realisation, product measurement, production management and reporting",
                    },
                    {  
                        ulData : "Establishment of a centralized single database as a definitive source of production data",
                    },
                    {  
                        ulData : "Adequate separation of calculations from data ensuring confidence in HCA results",
                    },
                    {  
                        ulData : "Accurately tracking oil and gas ownership from production to point of sale",
                    }
                ]


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "HCA allows its users to",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Follow fluids and gases from production to point of sale ",
                    },
                    {  
                        ulData : "Perform allocations of revenues to various owners",
                    },
                    {  
                        ulData : "Monitor authority for expenditures (AFE)",
                    },
                    {  
                        ulData : "Track and recover various Production associated costs",
                    },
                    {  
                        ulData : "Meet regulatory reporting requirements",
                    },
                    {  
                        ulData : "Provide basis for auditing and tax/royalties",
                    },
                    {  
                        ulData : "Assist operations and engineering in understanding well behaviour over time.",
                    },
                    {  
                        ulData : "Better Production allocation and tracking of well performance",
                    },
                    {  
                        ulData : "The HCA system consists of two essential elements:",
                        commonulliLast : [
                                                {
                                                    lilastData : "Gathering and validating flow measurement data: Establishing the definitive record of production from a facility."
                                                },
                                                {
                                                    lilastData : "Carrying out allocation calculations on the flow measurements: Deriving quantities that are not measured directly"
                                                }
                                            ]

                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock2(){
        return [
            {
                challengesTitle : "HCA Functionality",
                challengestext  : "",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Volume, mass or energy allocation and reconciliation",
                    },
                    {  
                        ulData : "Standard field, well, partner equity allocation",
                    },
                    {  
                        ulData : "Metering, lifting and operational data",
                    },
                    {  
                        ulData : "Data validation",
                    },
                    {  
                        ulData : "Forecasting and budgeting",
                    },
                    {  
                        ulData : "Powerful workflow engine",
                    },
                    {  
                        ulData : "Configurable data import and export",
                    },
                    {  
                        ulData : "Standard and ad hoc reporting",
                    },
                    {  
                        ulData : "Compliance recording",
                    },
                    {  
                        ulData : "Complete audit trail and version history",
                    }
                ]
            }, 
                  
        ]
    }

      Commonleafulblock3(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Our hydrocarbon accounting experts provide unprecedented support for your upstream oil and gas business and our services are given in the following hydrocarbon accounting areas:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Production covers functionality required for production allocation and reporting.",
                    },
                    {  
                        ulData : "Transport covers functionality employed when transporting hydrocarbons either through pipeline systems or by vessels.",
                    },
                    {  
                        ulData : "Sales covers functionality to support the sales organization selling / trading hydrocarbons including managing complex gas sales contracts.",
                    },
                    {  
                        ulData : "Revenue covers the invoicing/billing and control of any data relevant for revenue recognition, forecasting/budgeting",
                    },
                    {  
                        ulData : "Forecasting and budgeting",
                    },
                    {  
                        ulData : "Powerful workflow engine",
                    },
                    {  
                        ulData : "Configurable data import and export",
                    },
                    {  
                        ulData : "Standard and ad hoc reporting",
                    },
                    {  
                        ulData : "Compliance recording",
                    },
                    {  
                        ulData : "Complete audit trail and version history",
                    }
                ]
            }, 
                  
        ]
    }


          Commonleafulblock4(){
        return [
            {
                challengesTitle : "",
                challengestext  : "iOG provides the below listed Production accounting and allocation services:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {  
                        ulData : "iOGConsult: Expert consulting services for",
                        commonulliLi : [
                                                {
                                                    liData : "Review of your processes viz a viz the Industry’s best practices"
                                                },
                                                {
                                                    liData : "Assessment of Production accounting and allocation methodologies."
                                                },
                                                {
                                                    liData : "Suggestions for an improved Re-accounting & Re-allocation algorithm"
                                                },
                                                {
                                                    liData : "Evaluation and comparison of Production accounting software / tools"
                                                },
                                                {
                                                    liData : "Conduct Gap-fit analysis and identify interfaces to implement third-party HCA products."
                                                }
                                            ]

                    },
                    {  
                        ulData : "iOGImplement:",
                        commonulliLi : [
                                                {
                                                    liData : "Functional requirement for Production accounting and allocation tools"
                                                },
                                                {
                                                    liData : "Full cycle production accounting, revenues and royalties"
                                                },
                                                {
                                                    liData : "Configure and implement HCA solutions"
                                                },
                                                {
                                                    liData : "Implementation of any new modules / functionalities within existing tools"
                                                },
                                                {
                                                    liData : "Implement Reporting Functionalities: Government registry processing and reporting, Daily /Monthly allocated flows and stocks, for field groups, fields and wells"
                                                }
                                            ]

                    },
                    {  
                        ulData : "iOGTrain:",
                        commonulliLi : [
                                                {
                                                    liData : "Training and support services for sustained value and identifications"
                                                }
                                            ]

                    },
                    {  
                        ulData : "iOGStudy:",
                        commonulliLi : [
                                                {
                                                    liData : "Feasibility and benefit estimation studies to identify the impact of new Production accounting and allocation system"
                                                },
                                                {
                                                    liData : "Quantitative assessment of implementing different allocation methodology"
                                                },
                                                {
                                                    liData : "Guide and assist with EPAP (Enhanced Production Audit Program) and system audits"
                                                },
                                                {
                                                    liData : "Regularly conduct process reviews/audits of the custody transfer/mass balance process and system"
                                                },
                                                {
                                                    liData : "Identification of errors and anomalies in allocation systems"
                                                },
                                                {
                                                    liData : "Uncertainty analysis to determine and quantify exposure to risk"
                                                }
                                            ]

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
                plansimg          : "images/Production-(-Accounting-Solution.png",

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

