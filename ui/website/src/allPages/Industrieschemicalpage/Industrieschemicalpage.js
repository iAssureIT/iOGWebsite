import React, {Component} from 'react';

// import $                  from 'jquery';
import './Industrieschemicalpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Industrieschemicalpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Chemicals",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Chemicals.png",
                servicestext  : "Commodity Chemicals or Bulk Chemicals are manufactured on a very large scale to meet the ever-increasing global demand. The distinctive characteristic of the chemical industry is that manufacturing unit producing different but related products are placed in close clusters.",
                servicestext2 : "Unpredictable raw material prices, strict government and regulatory compliances, highest quality management standards, outdating process plants and machinery, data overload caused by leveraging new age technologies, higher utilities bill irrespective of location etc have always been a major headache to chemical manufacturers. Adding to this the producers have been always reluctant to digitization initiatives because it seems too intimidating. Some producers who take up this initiative don’t have any clear roadmaps to finish their digital journey."
                    
                
            } 
                        
        ]
    }


  DownstreamData(){
        return [
            {
                downstreamurl   : "/digitalservices",
                downstreamTitle : "Digital Services, Dashboard and KPI Managers",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "In recent years, the oil & gas industry has seen a number of initiatives to explore new digital technologies & to exploit their benefits. Digital transformation frequently involves transformations of key business processes, operations, as well as organizational structures & management concepts...."
            }, 
            {
                downstreamurl   : "/apc-services",
                downstreamTitle : "APC Services",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Advanced Process Control (APC) technologies helps to improve operation stability, push operations closer to quality or equipment limits and improve the capability of process units to handle disturbances. Our APC consulting services help customers specify, justify, and apply APC technologies such as multivariable predictive control, neural net inferential modeling, and fuzzy logic controllers that will significantly improve plant performance."
            }, 
            {
                downstreamurl   : "/manufacturesystem",
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Manufacturing Execution Systems are vital tools in the smooth and efficient execution of the manufacturing process. Manufacturing Execution Systems are applications that bridge the gap between the control system (DCS) & the ERP layers & can consist of numerous modules including HSE, PCMS, and SCM. In such a situation, the MES is used in a bigger context & is synonymous to Refinery Information Systems or Integrated RIS ."
            }, 
            {
                downstreamurl   : "/simulation",
                downstreamTitle : "Process Simulation & Modeling",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Process simulation studies enable the asset owners and the system designers to gain a better insight into the design and operation of their facilities."
            }, 
            {
                downstreamurl   : "/Healthsafty",
                downstreamTitle : "HSE",
                downstreamimg   : "/images/Illustration_11.png",
                downstreamtext  : "The Oil and gas industry has always faced a moral dilemma related to environmental sustenance and it has seen some of the major disasters and accidents which have contributed to vast safety and environmental problems in the past....."
           },
            {
                downstreamurl   : "/Healthsafty",
                downstreamTitle : "Predictive Maintenance and Preventive Monitoring",
                downstreamimg   : "/images/noimg.png",
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

