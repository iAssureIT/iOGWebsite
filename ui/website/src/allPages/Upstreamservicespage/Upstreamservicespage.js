import React, {Component} from 'react';

// import $                  from 'jquery';
import './Upstreamservicespage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Upstreamservicespage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Upstream",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Upstream_4.png",
                servicestext  : "Oil & Gas upstream includes all the steps from the preliminary geological exploration of oil, its extraction and storage and distribution to the refineries.",
                servicestext2 : "iOG Solutions provides best in class expertise, solution and work flow for all the disciplines throughout the Upstream Life cycle. We understand customer’s requirement and provide suitable solutions including software, consulting services and methodology to address these requirements. Our experts in Oil & Gas Upstream work in tandem with client team to give cost effective solutions and hence improved profitability for our customers."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/geoligy",
                downstreamTitle : "Geology & Geophysics",
                downstreamimg   : "/images/upstream1.png",
                downstreamtext  : "iOG understands the various paradigms of the subsurface ecosystem & its complexity. The domain knowledge & expertise in multiple disciplines (Geophysics, Geology, Petrophysics, & Geochemistry) enables it to understand, interpret & model the subsurface....."
            }, 
            {
                downstreamurl   : "/reserviormanagement",
                downstreamTitle : "Reservior Management",
                downstreamimg   : "/images/upstream4.png",
                downstreamtext  : "iOG Solutions provides end-to-end consulting services for management of reservoirs, utilizing state-of-the-art geoscience & engineering technologies. Our distinctive competencies & cutting-edge propositions are embodied in the breadth of technical expertise & diverse experience we provide. This is specifically true in the area of integrated reservoir characterization, modeling, & management....."
            }, 
            {
                downstreamurl   : "/welldrilling",
                downstreamTitle : "Well & Drilling",
                downstreamimg   : "/images/upstream5.png",
                downstreamtext  : "iOG Well & Drilling Services offer the  complete range of services addressing Well Lifecycle Management from Well Planning, Drilling, Testing & log interpretation, performance monitoring to abandonment. It covers all the well related services in each business area such as Planning, Exploration, Development, Production, Decommissioning of the well & have emerged & evolved through vast experience in Well Planning, Designing & Optimization of Drilling Activities & Well Performance Monitoring....."
            }, 
            {
                downstreamurl   : "/productionmanagement",
                downstreamTitle : "Production Management",
                downstreamimg   : "/images/upstream3.png",
                downstreamtext  : "iOG Solutions offers its clients the complete range of Production Management services. These include design completion & surface systems management, selection & design of the artificial lift, design & implementation of production allocation & accounting systems, monitoring production volumes & other parameters in real-time, calculating & reporting KPIs, optimization of oil/gas production rates as well as in predicting future performance..... "
            }, 
            {
                downstreamurl   : "/datamanagement",
                downstreamTitle : "Data Management",
                downstreamimg   : "/images/upstream2.png",
                downstreamtext  : "iOG Solutions Data Management Services include capturing, processing, loading, tracking, modifying, integrating, cleaning, rectifying errors, validating & visualizing data to best address our clients’ needs.  We make the data valuable for our customers by organizing & presenting it in metrics that are key to their processes....."
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

