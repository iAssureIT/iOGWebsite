import React, {Component} from 'react';

// import $                  from 'jquery';
import './Manufacturingsyspage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Manufacturingsyspage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Manufacturing Execution System",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "iOG understands the diversity and complexity of refinery supply chain operations. We help maximize profitability through the following services at various levels through a ‘best practice’ and ‘best fit’ approach using our enriched knowledge and experience in leading software solutions.",
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamTitle : "Production Accounting",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Real time Data Historian",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Corporate Dashboard & Analytics",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Operation Logbook & Target Dashboard",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Oil Movement Management Systems",
                downstreamimg   : "/images/Illustration_6.png",
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

