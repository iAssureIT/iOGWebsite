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
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "The ever-increasing demand for chemicals &amp; petrochemicals derived from valuable petroleum feedstock has pushed oil giants to reach more customers and increase their market share and profitability. Supply chains are growing complex by the day and the petroleum industry is finding the development and management of the same a very complex task.",
                servicestext2 : "The supply chain of the petroleum industry is extremely complex compared to other industries.The downstream supply chain starts at the refinery, where the crude oil is manufactured into the consumable products that are the specialty of refineries and petrochemical companies. Challenges and opportunities exist now in both the upstream and downstream supply chains. In the downstream supply chain - the process of forecasting, production, and the logistics management of delivering the crude oil derivatives to customers around the globe take place.",
                servicestext3 : "iOG understands the diversity and complexity of refinery supply chain operations. We help maximize profitability through the following services at various levels through a ‘best practice’ and ‘best fit’ approach using our enriched knowledge and experience in leading software solutions."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamTitle : "Planning & Scheduling",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Supply & Distribution",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
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

