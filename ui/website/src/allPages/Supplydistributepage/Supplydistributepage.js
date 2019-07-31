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
                downstreamTitle : "Demand Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Inventory Management",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Distribution Planning and Optimization",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Retail Automation",
                downstreamimg   : "/images/Illustration_5.png",
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

