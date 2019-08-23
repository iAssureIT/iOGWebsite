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
                servicesimg   : "/images/Asset-Management.png",
                servicestext  : "Oil & Gas is an asset-intensive industry with capital assets ranging from drilling rigs, offshore platforms, and wells in the upstream segment, to pipelines, LNG terminals in the midstream segment, and refineries, petrochemical plants, and utility facilities in the downstream segment. These assets go through various phases such as design, build, operate, maintain and retire in their entire life span.",
                servicestext2 : "By an estimate, almost 50% of spending on oil & gas majors is on their plants, properties, and equipment with the average value being around $100 billion. Association of such high numbers with these capital projects and assets, acquiring the information to increase their lifespan and improve the availability of assets is fundamental for oil and gas companies.",
                servicestext3 : "Low overall equipment effectiveness (OEE), high non-productive time (NPT), broad federal & state regulatory policy changes, stringent Health Safety and Environment (HSE) policies, ageing workforce, talent shortage, etc. – such issues are forcing the industry to increase asset utilization through the optimization of asset-oriented business processes and the proactive intervention in operations."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/EAM",
                downstreamTitle : "Enterprise Asset Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "A successful enterprise asset management (EAM) solution helps to achieve lowest maintenance costs, maintain equipment reliability, showcase integrity and bring world-class production standards. It brings integrated business processes that deliver maximum life-cycle profits from the operational assets...."
                    
                
            }, 
            {
                downstreamurl   : "/arimanagement",
                downstreamTitle : "Asset Reliability & Integraity Management",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Asset Reliability and Integrity Management (RIM) focus on ensuring that process machineries and equipment are properly designed, installed in accordance with specifications, and remains fit for use until it is retired. RIM ensures that the systematic workflows are in place, such as inspections and tests, to ensure that critical process equipment are performing under its best operating state..."
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

