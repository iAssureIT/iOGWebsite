import React, {Component} from 'react';

// import $                  from 'jquery';
import './Industrieseppage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Industrieseppage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Oil & Gas E&P",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Oil__Gas_EP.png",
                servicestext  : "The upstream segment of oil & gas industry, also known as Exploration and Production (E&P), encompasses activities related to prospecting for oil and gas fields, drilling of exploratory, appraisal and production wells, analysis of wells for production and economic viability, and the operation of viable wells to bring crude oil and raw natural gas to the surface.",
                servicestext2 : "Each of the activities in the upstream value chain involves amalgamation of a wide variety of technical expertise and domain-specific knowledge for effectively managing E&P life cycle. Looking for hydrocarbons beneath the surface involves geological, geophysical, and petrophysical analysis of subsurface terrain for probable deposits of oil and natural gas. Upon identification of potential locations of oil and gas reserves, the next step is drilling of appraisal wells to ascertain the quantity and quality of underground reserves. The data obtained from appraisal wells is then combined with G&G data to determine the number and location of wells for meeting and optimizing production requirements. After primary (natural pressure and flow) and secondary (water flooding) recovery methods well operators employ tertiary or Enhanced Oil Recovery (EOR) techniques to boost the performance of depleting wells and maximize production."
                    
                 
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
                downstreamtext  : "iOG Well & Drilling Services offer the  complete range of services addressing Well Lifecycle Management from Well Planning, Drilling, Testing & log interpretation, performance monitoring to abandonment. It covers all the well related services in each business area such as Planning, Exploration, Development, Production, Decommissioning of the well....."
            }, 
            {
                downstreamurl   : "/productionmanagement",
                downstreamTitle : "Production Management",
                downstreamimg   : "/images/upstream3.png",
                downstreamtext  : "iOG Solutions offers its clients the complete range of Production Management services. These include design completion & surface systems management, selection & design of the artificial lift, design & implementation of production allocation & accounting systems, monitoring production volumes & other parameters in real-time, calculating & reporting KPIs, optimization of oil/gas production rates as well as in predicting future performance...."
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

