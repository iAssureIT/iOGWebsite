import React, {Component} from 'react';

// import $                  from 'jquery';
import './Servicearmspage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Servicearmspage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Service Arms",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/IOG-Service-Arms.png",
                servicestext  : "iOG delivers services to the industry through 4 distinct arms of engagement. We would consider it our privilege to join hands and work with you to explore every possibility of enhancing your company’s profitability.",
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [     
            {
                downstreamurl   : "/iogimplement",
                downstreamTitle : "iOGImplement",
                downstreamimg   : "/images/Icon_2.png",
                downstreamtext  : "iOGImpement is a specialized solution focused on addressing the implementation requirements across the entire chain of downstream operations. iOG consultants come with a wealth of experience in implementing advanced software solutions across the entire Oil & Gas industry..."
                    
                
            }, 
            {
                downstreamurl   : "/iogconsult",
                downstreamTitle : "iOGConsult",
                downstreamimg   : "/images/Icon_3.png",
                downstreamtext  : "iOG provides expert consulting services to improve a client’s business process & raising them up to the best practices in the industry. . Our consultants help clients in assessing their current business processes, identifying gaps and opportunities for improvement....."
            }, 
            {
                downstreamurl   : "/iogtrain",
                downstreamTitle : "iOGTrain",
                downstreamimg   : "/images/Icon_4.png",
                downstreamtext  : "iOGTrain is a dedicated training and orientation solution providing expert training services on downstream process technologies, advanced software applications, and the various Oil & Gas business processes. ."
            }, 
            {
                downstreamurl   : "/iogstudy",
                downstreamTitle : "iOGStudy",
                downstreamimg   : "/images/Icon_1.png",
                downstreamtext  : "iOGStudy is a specialized service provided by iOG, leveraging state-of-the-art software solutions and utilizing industry expertise.  "
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

