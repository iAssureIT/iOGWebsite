import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Backcastingpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Backcastingpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Retro-Analysis",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "In the realm of tight refining margins and competitive markets, the need to put the right processes in place to maximize profitability has been the prime objective of refiners.",
                overviewtext2       : "All that counts at the end of the day is “What has actually been achieved” against “What was planned to be achieved”. Management is usually interested in categorically understanding this gap towards the end of each month/quarterly/Financial year to identify new ways to streamline operations and improve the bottom line.",
                overviewtext3       : "Due to the very nature of the oil business, deviations from the plan are bound to occur. The causes for deviation are many which include internal factors such as unplanned SD’s of process units, inferior catalyst performance, blending inefficiencies or external factors such as price volatility, aberrations in crude availability and fluctuating demands of petroleum products to name a few.",
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "“Retro-analysis”, using LP tools such as PIMS, GRTMPS, RPMS serves as a useful handle to minimize the gaps between Plan and Actual scenarios. The analysis usually involves a series of LP runs with the latest production plan for the month as the base case and using the same LP model used to prepare the plan. Actual data (yield, throughputs, process data, qualities, etc.) is introduced into the model case-by-case to analyze the refinery performance under various heads. The outcome of these LP runs will be useful in:",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Quantification of domain-wise losses due to internal and external factors"
                    },
                    {
                        ulData : "A “one-shotstone-two-bird” solution which helps in identifying gaps in the LP model used for subsequent planning and also correct any anomaly in the actual field operation"
                    },
                    {   
                        ulData : "Identifying lost opportunities and potential areas for profit improvement."
                    }
                ]
            }, 
                  
        ]
    }


  
  commonulliData(){
        return [
            {
                commonulliheading : "",
                commonullisubheading : "iOG offers the following:",
                commonullitext  : "",
                commonulliUl : [
                    {
                        ulData : "Study the business process “As–is”  for retro-analysis"
                    },
                    {
                        ulData : "Identify areas of enhancement of the Business Process through benchmarking with the best practices available worldwide"
                    },
                    {
                        ulData : "Presentation/workshops on retro-analysis"
                    },
                    {   ulData : "Implement Retro-Analysis Business Process at the client site through :",
                        commonulliLi : [
                                            {
                                                liData : "Proper design of functional scope and high-level architecture"
                                            },
                                            {
                                                liData : "Identification, analysis, and definition of the right sources of data to carry out the analysis"
                                            },
                                            {
                                                liData : "Development of automated templates for handling data inflow and outflow"
                                            },
                                            {
                                                liData : "Setting up an exhaustive list of case scenarios to categorically quantify losses"
                                            },
                                            {
                                                liData : "Sophisticated trend charts for effective reporting to the Top Management"
                                            }
                                        ]
                    },
                    {
                        ulData : "Hand-holding and helping customers in retro-analysis work process implementation"
                    },
                    {
                        ulData : "Custom Training program designed based on client model and real data/situations"
                    },
                    {
                        ulData : "Understanding results of retro-analysis (see also our brochure for LP Model update)"
                    },
                    {
                        ulData : "Retro-analysis report and presentation for the Top Management"
                    },
                    {
                        ulData : "Set up of Plan vs Actual KPIs on the corporate dashboard"
                    },
                    {
                        ulData : "SCM Integration with other relevant refinery solutions to ensure seamless flow of data, efficient analysis, and elegant reporting.Good and timely retro-analysis needs good integration to be in place."
                    }
                ]
            }                        
        ]
    }

    imgleafblockData(){
        return [
            {
                plansTitle        : "",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "However, the reliability of the results of such analysis is purely dependent on the accuracy of the actual data (such as material balance, prices, unit-wise throughputs and modes of operation, quality data of shipments and receipts) fed into the model.",
                planstext1        : 'Synchronized LP and Scheduling Models can be a great source of "real-t time" (daily) back casting to validate unit yields and stream properties against actuals which will highlight potential areas of improvement for both models. A step-wise process can be initiated from the scheduled results vs. actual performance through property bias and model bias. This can be a great way to get several data points to validate the LP model versus a “Monthly Averaged Back casting."',
                planstext2        : "The effective means to overcome these challenges is to have a proper flow of data from and necessary integration with other refinery applications such as MES solutions (Advisor, Sigmafine, etc.), LIMS system, ERP system and rigorous reactor models in place.",
                planstext3        : "SCM consultants at iOG Solutions are a team of consultants with rich and vast experience in deploying end-to-end solutions of “Retro-analysis” business process at refineries in Spain, Middle-East, Vietnam, India and various other client sites across the world.",
                plansimg          : "images/backcasting.jpg",

            }
        ]
    }

   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
	    <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Commonulliblock CommonulliData={this.commonulliData()} />
      </div>
    );  
  }
}

