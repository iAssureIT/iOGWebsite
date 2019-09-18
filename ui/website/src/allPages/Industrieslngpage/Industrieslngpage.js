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
                servicesimg   : "/images/LNG.png",
                servicestext  : "The LNG value chain aggregately comprises of E&P, Liquefaction, Shipping, Re-gasification, and Storage. This simplified value chain poses have many hidden challenges for a typical LNG plant and its relative components. The global LNG industry has always been tipped towards excess demand as compared to supplies. The industry is expected to see several major hurdles as many countries have put a block on LNG exports to fullfill their domestic demand.",
                servicestext2 : "Though Gas is clearly gaining energy market share as once held by Coal, the challenges before LNG operations are still standing. Today, the biggest challenges face by LNG industry are integrated modelling between the utility system and liquefaction process, process and capacity selection for liquefcation, optimal utilization of LNG fuel, using BOG as the row material for other industries, and large scale LNG cold recovery at industrial sites. Scheduling and Operations Planning applications support the operations team in supply chain network of LNG liquefaction and other process through best optimised detailed scheduling to execution."
                    
                
            } 
                        
        ]
    }

  DownstreamData(){
        return [
            {
                downstreamurl   : "/supplychain",
                downstreamTitle : "Supply Chain Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "The ever-increasing demand for chemicals & petrochemicals derived from valuable petroleum feedstock has pushed oil giants to reach more customers and increase their market share and profitability. Supply chains are growing complex by the day and the petroleum industry is finding the development and management of the same a very complex task."
            }, 
            {
                downstreamurl   : "/manufacturesystem",
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Manufacturing Execution Systems are vital tools in the smooth and efficient execution of the manufacturing process. Manufacturing Execution Systems are applications that bridge the gap between the control system (DCS) & the ERP layers & can consist of numerous modules including HSE, PCMS, and SCM. In such a situation, the MES is used in a bigger context & is synonymous to Refinery Information Systems or Integrated RIS ."
            }, 
            {
                downstreamurl   : "/digitalservices",
                downstreamTitle : "Digital Services, Dashboard and KPI Managers",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "In recent years, the oil & gas industry has seen a number of initiatives to explore new digital technologies & to exploit their benefits. Digital transformation frequently involves transformations of key business processes, operations, as well as organizational structures & management concepts...."
            }, 
            {
                downstreamurl   : "/energy",
                downstreamTitle : "Energy Management and Data Reconcilation",
                downstreamimg   : "/images/noimg.png",
                downstreamtext  : "Improving energy efficiency in a refinery is very critical, as Oil refining is an energy-intensive activity. Factors such as more stringent oil product standards (e.g. ultra-low-sulfur diesel), increasing demand for lighter products, and heavier crude oil slates all demand increased processing, which in turn places upward pressure on the overall energy intensity for refining....."
            }, 
            {
                downstreamurl   : "/assetmanagement",
                downstreamTitle : "Asset Management",
                downstreamimg   : "/images/Illustration_12.png",
                downstreamtext  : "Oil & Gas is an asset-intensive industry with capital assets ranging from drilling rigs, offshore platforms, and wells in the upstream segment, to pipelines, LNG terminals in the midstream segment, and refineries, petrochemical plants, and utility facilities in the downstream segment. These assets go through various phases such as design, build, operate, maintain and retire in their entire life span....."
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

