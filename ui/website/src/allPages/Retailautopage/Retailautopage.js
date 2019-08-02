import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Retailautopage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Retailautopage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Retail Automation",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Brand equity of oil marketing companies (OMCs) depends a lot on customer satisfaction which in turn converts to brand loyalty. Needless to add, this is a very significant and critical contributor to enable these companies to retain market share and consequently maximize their profitability. The quality and integrity of deliverables has a direct impact on top lines and bottom lines of these corporations.",
                overviewtext2       : "The retail operations of the OMCs are a platform in key focus in the contemporary paradigm to deliver the right quality and quantity of fuel to the customers. The business itself needs an ethical branding identity which would liberate it from issues such as adulteration, pilferage and over invoicing of the consumer",
                overviewtext3       : "Critical areas to be managed in a fuel retail network are the point-of-sale (POS) operations, Back-office operations (BOS), forecourt management, payment processing and head-office systems. Automation and the more recent machine-to-machine (M2M) and IoT (Internet of Things) solutions are relevant not only in terms of enhanced efficiency of delivery mechanisms, they can intrinsically bypass and override corruption enabler processes across the chain of controls, checks and delivery. ",
                overviewtext4       : "Retail process automation is no longer an option; it is a critical need for cutting-edge advantages in an increasingly competitive market.",
                overviewtext5       : "Technology is a vital support system in such initiatives and many leading software applications are available to automate and optimally address the requirements in these critical domains.",
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "Fuel Management Module",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "Some of the typical modules of these applications and their distinctive features are as follows:",
                commonulliUl : [
                    {
                        ulData : "Facilitates efficient planning through real time and precise intimation of details pertaining to tank levels, effected deliveries and the sale of fuel."
                    },
                    {
                        ulData : "Enables an interface with a wide-range of Tank-level Gauging (TLG) systems and performs auto-calibration of tanks to facilitate early detection of losses"
                    },
                    {   
                        ulData : "Provides automatic temperature compensation within the dispenser and within the tank which minimizes losses caused by temperature variations. This , in turn, helps make the business more transparent"
                    },
                    {   
                        ulData : "Facilitates exact reconciliation of quantities based on various parameters such as TLG reading, Bill of Loading etc. enabling tight data tracking to minimize loses and maximize the service station’s efficiency"
                    },
                    {   
                        ulData : "Has built in backward integration capabilities to import and export data to third party applications such as ERP solutions."
                    },
                    {   
                        ulData : "Provides alerts and forecasts critical fuel levels (under-fills and over-fills)"
                    },
                    {   
                        ulData : "Contributes to enhanced efficiency, greater safety standards and optimal use of resources to satisfy the customer."
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "Forecourt Control (FCC) and Back-office Management Module",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Enables effective controlling of the devices at the retail site such as Multi-product dispensers (MPD’s), tank level gauging systems (TLG’s) and so on. The automation directly reduces the salesman response time to customers, thereby making it a preferred outlet for the discerning customer."
                    },
                    {
                        ulData : "Supports the business process and payment/authorization options such as the acceptance of various payment modes, redemption of loyalty cards, the 2-stage authorization process etc. The provision of transaction alerts enables a great reduction in the overall payment transaction time."
                    },
                    {   
                        ulData : "Efficient management of back office operations which includes maintenance of shift schedules, attendance records, transaction and inventory logs with advanced reporting tools."
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "HO Data Management Module",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Facilitates remote and centralized monitoring through HQO servers and data analysis of stock and sales, enabling better network management and real time decision making."
                    },
                    {
                        ulData : "Dynamically updates price through centralized applications"
                    },
                    {   
                        ulData : "Generates alerts automatically through the system to dispatch depots enabling them to ensure timely stock replenishment at the RO’s."
                    },
                    {   
                        ulData : "Integrates Vehicle tracking and fuel management System for Fleet customers."
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock4(){
        return [
            {
                challengesTitle : "Recent advancements in Retail Automation",
                challengestext  : "",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Customized apps which can be downloaded on customer gadgets to provide information on the nearest filling station, ensure right grade of fuel to be dispensed at the outlet and also ease and securitize the payment process"
                    },
                    {
                        ulData : "Centralized dashboard apps for executives and other users providing “anywhere-anytime” access to relevant data pertaining to a complete network of fuel outlets. This also provides necessary Business Intelligence through analytics to decipher critical information such as ranking of grade-wise fuel sale, high frequency outlets etc. which aid in optimizing business processes and marketing responses towards enabling an  increased turnover"
                    },
                    {   
                        ulData : "State-of-the-Art Vehicle identification technology to allow oil companies to offer “easy to control and manage” fleet fuel management services for their customers. These optimized systems save costs, generate additional revenues through pro-active market responses and thereby enhance the brand image"
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock5(){
        return [
            {
                challengesTitle : "What we can offer",
                challengestext  : "We are an experienced team of consultants with vast experience in providing Retail Automation Solutions to various demanding and prestigious clients across the globe.",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "State of the art end-to-end automation solutions from Forecourt to HOQ"
                    },
                    {
                        ulData : "Customized dashboard apps for holistic visualization and analysis through the entire spectrum of the supply chain"
                    },
                    {   
                        ulData : "Professional System Need Analysis to ascertain the needs of the client and offer optimized custom-designed solutions with a direct and measurable impact on key business deliverables."
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
                plansimg          : "images/retailauto.jpg",

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
        <Challenges   CommonleafblockData={this.Commonleafulblock5()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

