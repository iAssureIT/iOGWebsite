import React, {Component} from 'react';

// import $                  from 'jquery';
import './Industriesprocessingpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Industriesprocessingpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Gas processing",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Gas_Processing_background.png",
                servicestext  : "Natural Gas Processing is in most aspects less complicated than the refining and processing crude oil, but its importance is as equal as crude oil. By separating all non-methane components and fluids from natural gas, we get pipeline-quality dry natural gas. This is done in Natural Gas Processing Plants which employs complex industrial process to get this impurity free dry natural gas.",
                servicestext2 : "Gas processing plant typically operate with precisely controlled conditions such as pressure, temperature, flow, composition, etc to ensure achievement of desired quality and maintaining safe and reliable operations. There is a limited visibility into critical equipment health and performance of a natural gas processing plant. Skid & modular construction techniques that are common in gas processing plant construction are hindering the integration of various critical sub processes. The industry 4.0 revolution is still to get hold of gas processing industry as the process is highly conventional."
                    
                
            } 
                        
        ]
    }


  DownstreamData(){
        return [
            {
                downstreamurl   : "/digitalservices",
                downstreamTitle : "Digital Services",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "In recent years, the oil & gas industry has seen a number of initiatives to explore new digital technologies & to exploit their benefits. Digital transformation frequently involves transformations of key business processes, operations, as well as organizational structures & management concepts...."
                    
                
            },   
            {
                downstreamurl   : "/manufacturesystem",
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Manufacturing Execution Systems are vital tools in the smooth and efficient execution of the manufacturing process. Manufacturing Execution Systems are applications that bridge the gap between the control system (DCS) & the ERP layers & can consist of numerous modules including HSE, PCMS, and SCM. In such a situation, the MES is used in a bigger context & is synonymous to Refinery Information Systems or Integrated RIS ...."
            }, 
            {
                downstreamurl   : "/assetmanagement",
                downstreamTitle : "Asset Management",
                downstreamimg   : "/images/Illustration_12.png",
                downstreamtext  : "Oil & Gas is an asset-intensive industry with capital assets ranging from drilling rigs, offshore platforms, and wells in the upstream segment, to pipelines, LNG terminals in the midstream segment, and refineries, petrochemical plants, and utility facilities in the downstream segment. These assets go through various phases such as design, build, operate, maintain and retire in their entire life span....."
            }, 
            {
                downstreamurl   : "/simulation",
                downstreamTitle : "Simulation & Modelling",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Process simulation studies enable the asset owners and the system designers to gain a better insight into the design and operation of their facilities...."
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

