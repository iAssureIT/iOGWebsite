import React, {Component} from 'react';

// import $                  from 'jquery';
import './Datamanagepage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';
import Challenges                      from '../../allBlocks/Challenges/Challenges.js';

export default class Datamanagepage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Data Management",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "iOG Solutions Data Management Services include capturing, processing, loading, tracking, modifying, integrating, cleaning, rectifying errors, validating and visualizing data to best address our clients’ needs.  We make the data valuable for our customers by organizing and presenting it in metrics that are key to their processes.",
                servicestext2 : "At iOG, we transform raw data into information, which leads to knowledge for our customers. Having the right knowledge, our customers can visualize and analyse the results and hence make business decisions more effective, easy, quick, confident and profitable, translating into real time economic advantages in challenging business environments. "
                    
                
            } 
                        
        ]
    }
  
Commonleafulblock(){
        return [
            {
                challengesTitle : "iOG Service Offerings",
                challengestext  : "Our Data Management Service offerings include:",
                challengestext2 : "",
                 commonulliUl : [
                    {   
                        ulData : "Transforming raw data into structured data base formats, creating value for customers.",   
                    },
                    {   
                        ulData : "Data capturing from various sources, loading and both preliminary and detailed analysis.",   
                    },
                    {   
                        ulData : "Organizing valuable information into an industry standard format so that visualization of data becomes very easy and quick.",   
                    },
                    {   
                        ulData : "Use of comprehensive E & P Data Management tools and software to enable “One point data access” for Geologists, Geophysicists, Petroleum Engineers, Drilling Engineers, Petrophysicists and Petroleum Economists.",   
                    },
                    {   
                        ulData : "Real Time Production Data Management (in a Real Time Operation Centre) through PRODML data format",   
                    },
                    {   
                        ulData : "QC/QA and Auditing of data",   
                    },
                    {   
                        ulData : "Customized Data Management and Integration services over the entire Exploration and Production Data-set.",   
                    },
                    {   
                        ulData : "Implementation of Data Models along with Modular Databases as per our Clients’ requirements",   
                    }
                ]
            }, 
                  
        ]
    }


  DownstreamData(){
        return [
            {
                downstreamTitle : "Seismic Data Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Well Data Management ",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Real-time Production Data Management",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Data Governance",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Comprehensive E & P Master Data Management",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Cloud-based Data Management",
                downstreamimg   : "/images/Illustration_5.png",
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

