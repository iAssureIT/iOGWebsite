import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './DemandmngPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class DemandmngPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Demand Management",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "Demand Management is a critical link in the entire supply chain management process essentially required to manage and forecast the demand of products to ensure high level of customer satisfaction and effective asset utilization.",
                overviewtext2  : "It involves forecasting an unconstrained market demand for various products based on historical and dynamic real-time data of various causal factors. This forms a vital input to Supply Planning to effectively arrive at a feasible product distribution plan.",
                overviewtext3  : "Efficient Demand Management will save the business from supply imbalances such as stock dry-out, inventory overflow and uneconomical buy/sell scenarios.",
                overviewtext4  : "The following are the key causal factors on which demand management is based:",
                overviewtext5  : "The above factors are highly volatile and dynamic and each segment of causal factors requires a unique quantitative approach of modeling their impact on the demand forecast.",
                commonulliUl2   : [
                    {
                        ulData : "Market demand based on parameters such as sales levels, business cycles and response to promotions"
                    },
                    {
                        ulData : "Current inventory levels"
                    },
                    {   
                        ulData : "Operational constraints"
                    },
                    {   
                        ulData : "Prices"
                    },
                    {   
                        ulData : "Environmental conditions"
                    }
                ]

            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Challenges in Demand management",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Identification of loop holes in historical data and forecasts"
                    },
                    {
                        ulData : "Choosing the right statistical model for forecasting"
                    },
                    {   
                        ulData : "Identification of elements which can be forecasted and which cannot be"
                    },
                    {   
                        ulData : "Over dependability on automatic forecasting"
                    },
                    {   
                        ulData : "Validity of the data inputted to the forecast model"
                    },
                    {   
                        ulData : "Closeness of forecast with actual results"
                    }
                ]
            }, 
                  
        ]
    }


  
  commonulliData(){
        return [
            {
                commonulliheading : "What we offer",
                commonullisubheading : "",
                commonullitext  : "We, at iOG, are a team of experienced consultants in implementing Demand Management Solutions at various client sites across the globe.",
                commonulliUl : [
                    {   ulData : "We specialize in:",
                        commonulliLi : [
                                            {
                                                liData : "Study the existing process “As-is”"
                                            },
                                            {
                                                liData : "Perform Gap Analysis"
                                            },
                                            {
                                                liData : "Best practices and processes through consulting and implementation to improve demand forecasting"
                                            },
                                            {
                                                liData : "Implementation of effective Sales and Operations Planning (S&OP) modules"
                                            },
                                            {
                                                liData : "Identification and resolution of pinching constraints through analytical tools"
                                            },
                                            {
                                                liData : "Establishing the business process of retro-analyzing the forecast to make the model more accurate"
                                            },
                                            {
                                                liData : "Integrating Demand planning process and tools with Production planning and Supply distribution tools"
                                            }
                                        ]
                    }
                ]
            }                        
        ]
    }

    imgleafblockData(){
        return [
            {
                plansTitle        : "Demand planning process",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "A wide range of advanced software solutions are available which provide a realistic and logical approach using sophisticated computing techniques such as Time Series Modelling (often based on historical sales and shipment data), seasonal linear regression, dynamic regression, moving average forecast, exponential smoothing, Holt-Winters additive and multiplicative modeling.",
                planstext1        : "Demand planning usually spans over periods ranging as long as a year and is refreshed on a fortnightly or a weekly basis. A thorough mix of Manual inputs (judgmental forecasting) from sales, marketing, finance and customer feedback groups coupled with automated outputs from statistical methods would yield a pragmatic forecasted demand.",
                planstext2        : "Integration of production planning with demand planning is a key success solution to Supply Chain and to drive a positive business outcome. Production planning suggests ways and means  to profitably and feasibly meet the demand taking into account the available process unit and storage capacity along with the associated logistic issues. Production planning carried out on a holistic basis using a global model often suggests the most profitable location(s) to supply the demand.",
                planstext3        : "",
                plansimg          : "images/demandmng.jpg",

            }
        ]
    }

    

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
	    <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Commonulliblock CommonulliData={this.commonulliData()} />
      </div>
    );  
  }
}

