import React, {Component} from 'react';

// import $                  from 'jquery';
import './Assetmanagementpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Assetmanagementpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Asset Management",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "Oil & Gas is an asset-intensive industry with capital assets ranging from drilling rigs, offshore platforms, and wells in the upstream segment, to pipelines, LNG terminals in the midstream segment, and refineries, petrochemical plants, and utility facilities in the downstream segment. These assets go through various phases such as design, build, operate, maintain and retire in their entire life span.",
                servicestext2 : "By an estimate, almost 50% of spending on oil & gas majors is on their plants, properties, and equipment with the average value being around $100 billion. Association of such high numbers with these capital projects and assets, acquiring the information to increase their lifespan and improve the availability of assets is fundamental for oil and gas companies.",
                servicestext3 : "Low overall equipment effectiveness (OEE), high non-productive time (NPT), broad federal & state regulatory policy changes, stringent Health Safety and Environment (HSE) policies, ageing workforce, talent shortage, etc. – such issues are forcing the industry to increase asset utilization through the optimization of asset-oriented business processes and the proactive intervention in operations."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamTitle : "Enterprise Asset Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Asset Reliability & Integraity Management",
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

