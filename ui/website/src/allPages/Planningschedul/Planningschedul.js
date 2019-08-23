import React, {Component} from 'react';

// import $                  from 'jquery';
import './Planningschedul.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Planningschedul extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Planning & Scheduling",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Planning-&-Scheduling_Background.png",
                servicestext  : "Operating margins in the refinery are largely controlled by the feedstock costs. Because of the capital-intensive nature of refining, the margins are fairly tight, and the refiners are always looking to produce more. There are some well-established strategies to increase the bottom line for an operating refinery.",
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/refineryplanning",
                downstreamTitle : "Production Planning ",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Crude Oil Refining is by its very nature a diversified and complex business model. Newer and specialized non-linear constraints such as volatility in oil prices, changing demand patterns for petroleum products, stringent environmental regulations related to clean fuels and start-up of new production technologies are continuously being embedded into the system resulting in more complex refining schemes...."
                    
                
            }, 
            {
                downstreamurl   : "/refineryschedule",
                downstreamTitle : "Production Scheduling",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Scheduling mainly concentrates on implementing the optimized plan in relatively shorter time frames. It is usually carried out spanning over periods as long as 3 months to as short as one day. Planning is focused on optimization while scheduling is focused on feasibility and execution of the plan....."
            }, 
            {
                downstreamurl   : "/backcasting",
                downstreamTitle : "Back Casting / Retro-Analysis",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "In the realm of tight refining margins and competitive markets, the need to put the right processes in place to maximize profitability has been the prime objective of refiners. All that counts at the end of the day is “What has actually been achieved” against “What was planned to be achieved.....  "
            }, 
            {
                downstreamurl   : "/lputility",
                downstreamTitle : "LP Utilities",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "It is a common problem in the refinery planning world that process unit yields and stream properties do not match with the actual plant performance because of poorly maintained and infrequently audited LP models. The problem gets further magnified when the LP model is used to make decisions from a global perspective as the unit inter-dependency plays a major role and the accuracy of the data in the individual sub-models is the key to take the right decisions in such situations....."
            }, 
            {
                downstreamurl   : "/lpconfig",
                downstreamTitle : "LP Configuration studies",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "LP models allow a complete assessment of the configuration options that lead to enhanced knowledge of refinery technology, process licensor offerings and eventually lead to selecting the right combination of technologies and unit capacities that best suit the market conditions. LP can be used to maximize refinery margin, devise strategies to meet product demand of high value products...."
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

