import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './EtrmPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
// import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
import Downstreamservicebanner from '../../allBlocks/Downstreamservicebanner/Downstreamservicebanner.js';

export default class EtrmPage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "ETRM and Pricing",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Excel at Managing Trading Risks",
                overviewtext2       : "Many oil and gas producers and marketers employ hedging strategies to lock in prices at profitable levels. Futures contracts and swaps can be effective tools in managing price and basis risk, creating price caps, price floors and “no-cost collars” to manage price risk.",
                overviewtext3       : "Energy and commodities’ firms engaged in active trading are investing in more sophisticated ETRM solutions. Excel is not going to cut it!",
                overviewtext4       : "",
                overviewtext5       : "",
                commonulliUl2 : []

            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "What is an integrated Energy Trading and Risk Management (ETRM) solution?",
                challengestext3  : "ETRM activities can be broadly classified as",
                challengestext : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Bidding, scheduling/nominations (generally, front office)"
                    },
                    {
                        ulData : "Price forecasting, simulations, risk management (generally, middle office); and"
                    },
                    {   
                        ulData : "Balancing, settlement, contract management (generally, done by back office). "
                    }
                ]
            }, 
                  
        ]
    }

 Commonleafulblock2(){
        return [
            {
                challengesTitle : "Key advantages of an ETRM system:",
                challengestext3  : "",
                challengestext : "",
                challengestext2 : "In developing an ETRM infrastructure that effectively enables and supports the business, one needs to look beyond just a single application. You should consider  other methods and technologies that need to be considered as part of the overall solution such as “Data integration”, “Data management”, Ancillary systems (such as freight, forecasting, logistics)  and Reporting.",
                commonulliUl : [
                    {
                        ulData : "Serve as a system of record for all transactions"
                    },
                    {
                        ulData : "Provide a controlled environment"
                    },
                    {   
                        ulData : "Improve accuracy of data entry"
                    },
                    {   
                        ulData : "Provide an audit trail"
                    },
                    {   
                        ulData : "Reduce the amount of reconciliation done by the business"
                    },
                    {   
                        ulData : "Automate manual processes, such as confirmations and settlement"
                    },
                    {   
                        ulData : "Support risk management and measurement"
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "What we offer:",
                challengestext3  : "iOG has an experienced team of consultants with expertise on popular technologies such as SAP's - IS-Oil, TSW, GTM, TRM, BI, XI and Trading package sections such as TriplePoint - (Commodity-SL, Credit Ready), OpenLink - (Endur gMotion, cMotion) and Allegro Trading Solutions.",
                challengestext : "We help our clients in:",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Capture AS-IS and Define future TO-BE for trading."
                    },
                    {
                        ulData : "Choosing the right ETRM solution that fits  into the business needs at the optimum implementation cost and duration"
                    },
                    {
                        ulData : "Defined deal capture, pricing workbench, marine scheduling"
                    },
                    {
                        ulData : "Mark To Market (MTM), inventory projection for international crude (Onshore, In-Transit, Sumed, etc.)"
                    },
                    {
                        ulData : "Defining deal types (spot, term, EFP), external feeds (ICE, NYMEX, Platts, Opis, and Argus data)"
                    },
                    {
                        ulData : "Three way Pegging, Transportation, Trades (affiliate and third-party, statistical, buy/sell, OTC/PTP, swap/EFS, futures, internal)"
                    },
                    {
                        ulData : "New Deal Capture system OpenLink - Endur, gMotion, cMotion"
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock4(){
        return [
            {
                challengesTitle : "Benefit from Real Time Pricing Information",
                challengestext3  : "You need to be aware of the market dynamics minute by minute in order to proactively respond to the rapidly changing market environment.",
                challengestext : "Pricing tools offer detailed information pertaining to all aspects of the industry through a single computer application. (e.g. PAWS, GlobalView, Bloomberg, Reuters)",
                challengestext5 : "Key Features of Pricing Tools",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Provides real time NEWS and market alerts "
                    },
                    {
                        ulData : "Provides benchmark price assessments, intra-day indicators, short and long term forward curves from actual transactions and modeled values"
                    },
                    {
                        ulData : "Provides extensive list of newsletters, reports and geo-spatial data to cover every aspect of the Oil & Gas industry"
                    },
                    {
                        ulData : "Capability to integrate and export pricing data into other critical applications in the refinery business process such as Production Accounting and Production Planning applications to carry out techno-economical evaluations"
                    },
                    {
                        ulData : "Provides a simultaneous multi-user environment"
                    },
                    {
                        ulData : "Analyzes oil markets, assess impacts of macroeconomics, geopolitics, trading patterns and price structures."
                    }
                ]
            }, 
                  
        ]
    }


Commonleafulblock5(){
        return [
            {
                challengesTitle : "Why use Pricing tools?",
                challengestext3  : "",
                challengestext : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Allow users to forecast forward price movements and recommend trading strategies. This helps manage price risk and optimize refinery margins.	"
                    },
                    {
                        ulData : "Save significant man hours"
                    },
                    {
                        ulData : "Aids users in analyzing the markets and decide on the best time to implement different hedging strategies"
                    },
                    {
                        ulData : "Provide accurate data quickly through a flexible, customizable interface, helping users avoid costly errors and delays."
                    },
                    {
                        ulData : "Pricing tools connect the users with information on both Forecasted prices (e.g. IHS, Argus price assessments, Platts forward curve etc.) and also actual daily quotes on crude and product based on the previous day settled transaction details."
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock6(){
        return [
            {
                challengesTitle : "What we offer:",
                challengestext3  : "",
                challengestext : "We have deep expertise to:",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Recommend the viability of the existing pricing tools for your situation"
                    },
                    {
                        ulData : "Design business processes and functional architecture to ensure right flow of market information  throughout the organization"
                    },
                    {
                        ulData : "Design and implement integration of pricing tools with critical applications in the refinery business process such as Production Accounting and Production planning applications"
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
                planstext         : "The interfaces amongst these offices make it impossible to get a clear picture of the corporation’s global exposure when departments work in isolation.",
                planstext1        : "You can then use this information for prudent decision making.",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/etrmimg.png",

            }
        ]
    }
    
    ServicesData(){
        return [
            {
                servicesimg   : "/images/ETRM-PricingToolApplication.png",
            } 
                        
        ]
    }
   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Downstreamservicebanner infodata={this.ServicesData()} />
      	<Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} /> 
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock3()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock4()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock5()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock6()} /> 
      </div>
    );  
  }
}

