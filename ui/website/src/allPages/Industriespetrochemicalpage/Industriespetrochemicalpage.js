import React, {Component} from 'react';

// import $                  from 'jquery';
import './Industriespetrochemicalpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Industriespetrochemicalpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Petrochemical",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Petrochemicals.png",
                servicestext  : "The petrochemical industry has seen substantial rapid growth during the past several years due to its higher value addition in recent volatile oil market. Multiple oil & gas downstream majors are now transforming from stand-alone refineries to integrated refining and petrochemical complex. Such an integrated configuration provides flexibility to refiners to tackle price volatility of crude oil and shrinking refining margins, thus ensuring enhanced and stable cash flows.",
                servicestext2 : "Petrochemical units have complex processes such as multiple grades, grade transitions, product sequencing, multiple bagging & transportation options, the variable cost of feedstocks etc. Therefore, it is of vital importance to enable petrochemical businesses to handle such complexities through new age advance solutions."
                    
                
            } 
                        
        ]
    }


  DownstreamData(){
        return [
            {
                downstreamTitle : "Petrochemical Planning",
                downstreamimg   : "/images/Petrochemical_planning.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Petrochemical Scheduling",
                downstreamimg   : "/images/Petrochemical_scheduling.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamurl   : "/apc-services",
                downstreamTitle : "APC Services",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Advanced Process Control (APC) technologies helps to improve operation stability, push operations closer to quality or equipment limits and improve the capability of process units to handle disturbances. Our APC consulting services help customers specify, justify, and apply APC technologies such as multivariable predictive control, neural net inferential modeling, and fuzzy logic controllers that will significantly improve plant performance."
            }, 
            {
                downstreamurl   : "/simulation",
                downstreamTitle : "Process Simulation & Modeling",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Process simulation studies enable the asset owners and the system designers to gain a better insight into the design and operation of their facilities."
            }, 
            {
                downstreamurl   : "/digitalservices",
                downstreamTitle : "Digital Services, Dashboard and KPI Managers",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "In recent years, the oil & gas industry has seen a number of initiatives to explore new digital technologies & to exploit their benefits. Digital transformation frequently involves transformations of key business processes, operations, as well as organizational structures & management concepts...."
            },
            {
                downstreamurl   : "/Healthsafty",
                downstreamTitle : "HSE & EHS",
                downstreamimg   : "/images/Illustration_11.png",
                downstreamtext  : "The Oil and gas industry has always faced a moral dilemma related to environmental sustenance and it has seen some of the major disasters and accidents which have contributed to vast safety and environmental problems in the past....."
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

