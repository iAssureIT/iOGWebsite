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
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "The refining industry is rapidly evolving and adapting to the new cutting-edge technologies. The global markets for refined products, the world refining capacity utilization are increasing day by day. Refining industry nowadays faces never seen before challenges that significantly hinders the business growth.",
                servicestext2 : "Ever changing feedstocks and crude variability, broken supply chains, environmental aspects of refining processes, stringent product quality regulations and standards, drive for the cleaner and higher-quality transportation fuels with emphasis on lower-sulphur concentrations, race to boost equipment uptime to increase refinery bottom line, reduce operational risks and maintain system reliability, keeping up with the IT technological advancements and making sense out of IT investments are few of the many challenges of modern refining businesses."
                    
                
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
                downstreamTitle : "Simulation & Modeling",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Asset Management",
                downstreamimg   : "/images/Illustration_12.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Digital Services",
                downstreamimg   : "/images/Illustration_13.png",
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

