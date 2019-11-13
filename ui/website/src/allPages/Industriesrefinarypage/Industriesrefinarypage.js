import React, {Component} from 'react';

// import $                  from 'jquery';
import './Industriesrefinarypage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Industriesrefinarypage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Refinery",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Refinery.png",
                servicestext  : "The refining industry is rapidly evolving and adapting to the new cutting-edge technologies. The global markets for refined products, the world refining capacity utilization are increasing day by day. Refining industry nowadays faces never seen before challenges that significantly hinders the business growth.",
                servicestext2 : "Ever changing feedstocks and crude variability, broken supply chains, environmental aspects of refining processes, stringent product quality regulations and standards, drive for the cleaner and higher-quality transportation fuels with emphasis on lower-sulphur concentrations, race to boost equipment uptime to increase refinery bottom line, reduce operational risks and maintain system reliability, keeping up with the IT technological advancements and making sense out of IT investments are few of the many challenges of modern refining businesses."
                    
                
            } 
                        
        ]
    }


  DownstreamData(){
        return [
            {
                downstreamurl   : "/supplychain",
                downstreamTitle : "Supply Chain Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Supply chains are growing complex by the day and the petroleum industry is finding the development and management of the same a very complex task."
            }, 
            {
                downstreamurl   : "/manufacturesystem",
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Manufacturing Execution Systems are vital tools in the smooth and efficient execution of the manufacturing process."
            }, 
            {
                downstreamurl   : "/simulation",
                downstreamTitle : "Simulation & Modelling",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Process simulation studies enable the asset owners and the system designers to gain a better insight into the design and operation of their facilities."
            }, 
            {
                downstreamurl   : "/assetmanagement",
                downstreamTitle : "Asset Management",
                downstreamimg   : "/images/Illustration_12.png",
                downstreamtext  : "Oil & Gas is an asset-intensive industry with capital assets ranging from drilling rigs, offshore platforms, and wells in the upstream segment, to pipelines, LNG terminals in the midstream segment. "
            }, 
            {
                downstreamurl   : "/digitalservices",
                downstreamTitle : "Digital Services",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : " Digital transformation frequently involves transformations of key business processes, operations, as well as organizational structures & management concepts...."
            }
            
        ]
    }
  
  render() {


    return (
      <div> 
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 takeleft">
        <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable">           
          <ul class="breadcrumb breadcrumb1 breadcrumb4">
          <li class="active">&nbsp;</li><li>
          <a href="/" class="pathway">Home</a>
          <span class="divider">
          <img src="/media/system/images/arrow.png" alt=""/></span></li>
          <li><a href="/industries" class="pathway">Industries</a>
          <span class="divider"><img src="/media/system/images/arrow.png" alt=""/></span></li>
          <li class="active"><span>Refinery</span></li></ul>
            </div>
        </div>
       </div> 
     </div> 
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="downstreambg1">
          <Commoninfoblock infodata={this.ServicesData()} />
          <Commonservicesblock servicedata={this.DownstreamData()}/>
        </div>
      </div>
     </div>  
    );  
  }
}

