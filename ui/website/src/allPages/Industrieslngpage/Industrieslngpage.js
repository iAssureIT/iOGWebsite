import React, {Component} from 'react';

// import $                  from 'jquery';
import './Industrieslngpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Industrieslngpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Liquified Natural Gas",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "The LNG value chain aggregately comprises of E&P, Liquefaction, Shipping, Re-gasification, and Storage. This simplified value chain poses have many hidden challenges for a typical LNG plant and its relative components. The global LNG industry has always been tipped towards excess demand as compared to supplies. The industry is expected to see several major hurdles as many countries have put a block on LNG exports to fullfill their domestic demand.",
                servicestext2 : "Though Gas is clearly gaining energy market share as once held by Coal, the challenges before LNG operations are still standing. Today, the biggest challenges face by LNG industry are integrated modelling between the utility system and liquefaction process, process and capacity selection for liquefcation, optimal utilization of LNG fuel, using BOG as the row material for other industries, and large scale LNG cold recovery at industrial sites. Scheduling and Operations Planning applications support the operations team in supply chain network of LNG liquefaction and other process through best optimised detailed scheduling to execution."
                    
                
            } 
                        
        ]
    }

  DownstreamData(){
        return [
            {
                downstreamTitle : "Supply Chain Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Digital Services, Dashboard and KPI Manager",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Energy Management and Data Reconcilation",
                downstreamimg   : "/images/noimg.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Asset Management",
                downstreamimg   : "/images/Illustration_12.png",
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

