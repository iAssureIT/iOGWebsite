import React, {Component} from 'react';

// import $                  from 'jquery';
import './Welldrillingpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
// import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';
import Commonservicesleafpageblock             from '../../allBlocks/Commonservicesblock/Commonservicesleafpageblock.js';
import Challenges                      from '../../allBlocks/Challenges/Challenges.js';

export default class Welldrillingpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Well & Drilling",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Well__drilling.png",
                servicestext  : "iOG Well & Drilling Services offer the  complete range of services addressing Well Lifecycle Management from Well Planning, Drilling, Testing and log interpretation, performance monitoring to abandonment. It covers all the well related services in each business area such as Planning, Exploration, Development, Production and Decommissioning of the well and have emerged and evolved through vast experience in Well Planning, Designing and Optimization of Drilling Activities and Well Performance Monitoring.",
                servicestext2 : ""
                    
                
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "Following are some of the reservoir management services we provide to our upstream clients",
                challengestext  : "",
                challengestext2 : "",
                 commonulliUl : [
                    {   
                        ulData : "Well Planning & Engineering",   
                    },
                    {   
                        ulData : "Well Drilling",   
                    },
                    {   
                        ulData : "Well Modeling",   
                    },
                    {   
                        ulData : "Well Performance Monitoring",   
                    },
                    {   
                        ulData : "Well Integrity",   
                    },
                    {   
                        ulData : "Well Log Interpretation",   
                    },
                    {   
                        ulData : "Well Data Management",   
                    }
                ]
            }, 
                  
        ]
    }


  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/wellplanningdrilling",
                downstreamTitle : "Well Planning & Drilling",
                downstreamimg   : "/images/Well_planning_&_drilling.png",
                downstreamtext  : "Well Planning is defined as engineering activities which follow on from the identification of a subsurface target for a well (exploration, appraisal, or development well) until the completion of that well...."
                    
                
            }, 
            {
                downstreamurl   : "/wellperformanceanalysis",
                downstreamTitle : "Well Performance Analysis",
                downstreamimg   : "/images/Well_performance_analysis.png",
                downstreamtext  : "Well performance monitoring helps to identify wells where deliverability has deteriorated. iOG Solutions provides in-depth Analysis and Monitoring of wells while drilling, after drilling, after completion, after production and also for reservoir behaviour during all the phases...."
            }, 
            {
                downstreamurl   : "/wellmodeling",
                downstreamTitle : "Well Modeling",
                downstreamimg   : "/images/Well_modeling.png",
                downstreamtext  : "The Flow behaviour inside and adjacent to the wellbore has an important impact on the overall performance of well. We employ some of the latest technological advances and tools to model the multiphase flow inside and near the wellbore, while taking into account the factors which affect such behaviour...."
            }, 
            {
                downstreamurl   : "/wellloginterpretation",
                downstreamTitle : "Well Log Interpretation",
                downstreamimg   : "/images/Well_log_interpretation.png",
                downstreamtext  : "Well logs provide insight into the formations and conditions in the subsurface, aimed primarily at detection and evaluation of possibly productive horizons. In addition to these logs that are used to characterize the wellbore, formation, and fluids, a number of logging tools are available to provide information during production operations...."
            }, 
            {
                downstreamurl   : "/welldrillingservices",
                downstreamTitle : "Well Drilling Services",
                downstreamimg   : "/images/Well_drilling_services.png",
                downstreamtext  : "Our Drilling experts can provide clients the capability to undertake detailed drilling design as well as the capacity to track, monitor and advice on real time drilling operations. We simulate drilling operations and let our customers know beforehand the challenges prior to starting the actual drilling operation, leading to a substantial reduction in risk and cost of drilling operations....."
            }, 
            {
                downstreamurl   : "/welldatamanagement",
                downstreamTitle : "Well Data Management",
                downstreamimg   : "/images/Well_data_management.png",
                downstreamtext  : "iOG helps its client to manage well data from request-to-drill through abandonment. It uses robust schematics, flexible reporting capabilities, and query engine to track operational changes throughout the well lifecycle.  We collect, store, modify, validate and give meaningful output to our customers. We deal with all kinds of well data including Design data, Well Testing data, Well Log data, Well Integrity and real-time well performance data...."
            }
        ]
    }

  render() {


    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
          <div className="downstreambg1">
              <Commoninfoblock infodata={this.ServicesData()} />
              <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
              <Commonservicesleafpageblock servicedata={this.DownstreamData()}/>
          </div>
      </div>
    );  
  }
}

