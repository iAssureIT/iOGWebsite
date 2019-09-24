import React, {Component} from 'react';

// import $                  from 'jquery';
import './Datamanagepage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
/*import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';*/
import Commonservicesleafpageblock     from '../../allBlocks/Commonservicesblock/Commonservicesleafpageblock.js';
import Challenges                      from '../../allBlocks/Challenges/Challenges.js';

export default class Datamanagepage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Data Management",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/data_Management.png",
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
                downstreamurl   : "/seismicdatamanagement",
                downstreamTitle : "Seismic Data",
                downstreamTitle1 : " Management",
                downstreamimg   : "/images/Seismic_data_management.png",
                downstreamtext  : "Seismic data helps to get a geophysical picture of sub-surface structures. Interpretation of sub-surface structures for, seismic data is indeed a difficult task. For the evaluation of well productivity and reservoir characteristics, iOG provides well test solutions over the entire E & P cycle including Drilling, Completion and Production phases. Our team is experienced in the interpretation of data acquired from single & multi-well test, deliverability tests....."
                    
                
            }, 
            {
                downstreamurl   : "/welldatamanagements",
                downstreamTitle : "Well Data",
                downstreamTitle1 : "Management ",
                downstreamimg   : "/images/Well_data_management.png",
                downstreamtext  : "The most important aspect of preparing the well plan, and subsequent drilling engineering, is determining the expected characteristics and problems to be encountered in the well. A well cannot be planned properly if these environments are unknown...."
            }, 
            {
                downstreamurl   : "/realtimeproductiondatamanagement",
                downstreamTitle : "Real-time Production",
                downstreamTitle1 : "Data Management",
                downstreamimg   : "/images/Real-time_production_data_management.png",
                downstreamtext  : "At iOG solutions, our objective is to help our clients track hydrocarbon-related data in real time throughout the E&P life cycle, with a high degree of automation. Our real-time data management capabilities can support the clients in ensuring that their drilling engineers, reservoir engineers and production engineers are always working on the latest data.... "
            }, 
            {
                downstreamurl   : "/datagovernance",
                downstreamTitle : "Data",
                downstreamTitle1 : "Governance",
                downstreamimg   : "/images/Data_governance.png",
                downstreamtext  : "For iOG Solutions, data governance is one of the pillars of data management (DM) and is often considered hand-in-hand with data quality efforts and master data management programs. In exploration and production (E&P) community, initiatives to implement data governance are often seen as either organizational efforts or technology efforts and are driven from the corporate office with a top-down emphasis...."
            }, 
            {
                downstreamurl   : "/comprehensivemasterdatamanagement",
                downstreamTitle : "Comprehensive E & P Master",
                downstreamTitle1 : "Data Management",
                downstreamimg   : "/images/Compressive_E_&_P_master_data_management.png",
                downstreamtext  : "Oil and gas enterprises handle a huge amount of data from disparate sources on a daily basis and most of it is unstructured. The upstream enterprises can address the magnitude and complexity of E & P data with a holistic data management solution...."
            }, 
            {
                downstreamurl   : "/cloudbaseddatamanagement",
                downstreamTitle : "Cloud-based Data ",
                downstreamTitle1 : "Management",
                downstreamimg   : "/images/Cloud_database_management.png",
                downstreamtext  : "Cloud based applications aims to reduce IT infrastructure and cost by outsourcing it to specialized service organizations. The reduced infrastructure and maintenance costs while improved utilization and increased flexibility help clients in meeting changing business requirements."
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

