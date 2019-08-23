import React, {Component} from 'react';

// import $                  from 'jquery';
import './Supplydistributepage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Supplydistributepage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Supply & Distribution",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "Current day market competitiveness creates a need to deploy effective solutions in the oil and gas business for managing the petroleum supply chain through timely visualization of market demand, identification of inventory pinch spots and proactive scheduling of supply chain movements with the objective of devising the most optimal distribution, exchange and inventory plan.",
                servicestext2 : "Understanding the means to improve the quality of the logistics and transport systems and to reduce costs at the same time can be ensured with the use of information technology solutions in the sector of the supply chain.."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/demandmanagement",
                downstreamTitle : "Demand Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Demand Management is a critical link in the entire supply chain management process essentially required to manage and forecast the demand of products to ensure high level of customer satisfaction and effective asset utilization....."
                    
                
            }, 
            {
                downstreamurl   : "/inventorymanagement",
                downstreamTitle : "Inventory Management",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "End-to-end integration of the petroleum supply chain from crude movement through finished product actualization is very crucial in present market conditions.  Petroleum supply chain operational teams often struggle with limited visibility into inventory levels at a terminal, production schedules, distribution plans and product movement requirements to ensure orders are delivered in the most profitable and timely manner..... "
            }, 
            {
                downstreamurl   : "/diatributionplanning",
                downstreamTitle : "Distribution Planning and Optimization",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "The world’s leading integrated energy companies with extensive refining, marketing and distribution operations enhance their competitiveness through integration of their business processes. A key objective would be to improve coordination between distribution planning and operational scheduling across the supply chain and adapt the responses to rapidly changing market conditions...."
            }, 
            {
                downstreamurl   : "/retailautomation",
                downstreamTitle : "Retail Automation",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Brand equity of oil marketing companies (OMCs) depends a lot on customer satisfaction which in turn converts to brand loyalty. Needless to add, this is a very significant and critical contributor to enable these companies to retain market share and consequently maximize their profitability. The quality and integrity of deliverables has a direct impact on top lines and bottom lines of these corporations...."
            }            
        ]
    }
  
  render() {


    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
	      <div className="downstreambg1">
		      <Commoninfoblock infodata={this.ServicesData()} />
		      <Commonservicesblock servicedata={this.DownstreamData()}/>
	      </div>
      </div>
    );  
  }
}

