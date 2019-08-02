import React, {Component} from 'react';

// import $                  from 'jquery';
import './Arimanagementpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';
import Challenges                      from '../../allBlocks/Challenges/Challenges.js';

export default class Arimanagementpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Asset Reliability & Integraity Management",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "Asset Reliability and Integrity Management (RIM) focus on ensuring that process machineries and equipment are properly designed, installed in accordance with specifications, and remains fit for use until it is retired. RIM ensures that the systematic workflows are in place, such as inspections and tests, to ensure that critical process equipment are performing under its best operating state. At an operating process plant, the asset-integrity is an integral part of daily operations with participation of operators, maintenance personnel, sub-contractors, engineers, and others involved in designing, installing, operating, or maintaining the process equipment.",
                servicestext2 : "iOG Solutions work closely with clients to ensure that equipment are proper designed and Inspection, Test, and Preventive Maintenance (ITPM) practices are in place. This translate to cost savings by making sure that equipment is fit for service at commissioning and remains fit for service throughout its lifecycle.",
                servicestext3 : "iOG Solutions with its excellent knowledge in asset integrity field, establish corporate standards, and promote efforts to continuously improve the safety and reliability of process equipment."
                    
                
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "Our RIM services range from leading system & application selection through full implementation, integration, support and trainings including:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Asset Criticality Analysis"
                    },
                    {
                        ulData : "Asset Criticality Analysis"
                    },
                    {
                        ulData : "Risk Based Inspection"
                    },
                    {
                        ulData : "Root Cause Analysis"
                    },
                    {
                        ulData : "Failure Mode Effect Analysis"
                    },
                    {
                        ulData : "Reliability Centred Maintenance"
                    },
                    {
                        ulData : "Asset Strategy Management"
                    },
                    {
                        ulData : "Inspection Management"
                    },
                    {
                        ulData : "Calibration Management"
                    },
                    {
                        ulData : "Reliability Availability & Maintainability (RAM) Modeling"
                    },
                    {
                        ulData : "Spares Inventory Management and Optimisation (SIMO)"
                    }
                ]
            }, 
                  
        ]
    }

  

  DownstreamData(){
        return [
            {
                downstreamTitle : "Asset Criticality Analysis",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Risk Based Inspection",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Root Cause Analysis",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Failure Mode Effect Analysis",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Reliability Centered Maintenance",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Asset Strategy Management",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Inspection Management",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Calibration Management",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Reliability Availability & Maintainability (RAM) Moeling",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Spares Inventory Management and Optimisation (SIMO)",
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
              <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
              <Commonservicesblock servicedata={this.DownstreamData()}/>
          </div>
      </div>
    );  
  }
}

