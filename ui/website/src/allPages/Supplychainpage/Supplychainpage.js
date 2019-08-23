import React, {Component} from 'react';

// import $                  from 'jquery';
import './Supplychainpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Supplychainpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Supply Chain Management",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Supply-Chain-Management.png",
                servicestext  : "The ever-increasing demand for chemicals &amp; petrochemicals derived from valuable petroleum feedstock has pushed oil giants to reach more customers and increase their market share and profitability. Supply chains are growing complex by the day and the petroleum industry is finding the development and management of the same a very complex task.",
                servicestext2 : "The supply chain of the petroleum industry is extremely complex compared to other industries.The downstream supply chain starts at the refinery, where the crude oil is manufactured into the consumable products that are the specialty of refineries and petrochemical companies. Challenges and opportunities exist now in both the upstream and downstream supply chains. In the downstream supply chain - the process of forecasting, production, and the logistics management of delivering the crude oil derivatives to customers around the globe take place.",
                servicestext3 : "iOG understands the diversity and complexity of refinery supply chain operations. We help maximize profitability through the following services at various levels through a ‘best practice’ and ‘best fit’ approach using our enriched knowledge and experience in leading software solutions."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            { 
                downstreamurl   : "/planningschedul",
                downstreamTitle : "Planning & Scheduling",
                downstreamimg   : "/images/Planning_Scheduling_Graphic.png",
                downstreamtext  : "Operating margins in the refinery are largely controlled by the feedstock costs. Because of the capital-intensive nature of refining, the margins are fairly tight, and the refiners are always looking to produce more. There are some well-established strategies to increase the bottom line for an operating refinery....."
                    
                
            }, 
            {
                downstreamurl   : "/supplydistribute",
                downstreamTitle : "Supply & Distribution",
                downstreamimg   : "/images/Graphic.png",
                downstreamtext  : "Current day market competitiveness creates a need to deploy effective solutions in the oil and gas business for managing the petroleum supply chain through timely visualization of market demand, identification of inventory pinch spots and proactive scheduling of supply chain movements with the objective of devising the most optimal distribution, exchange and inventory plan....."
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

