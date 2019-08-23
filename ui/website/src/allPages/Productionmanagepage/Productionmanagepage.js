import React, {Component} from 'react';

// import $                  from 'jquery';
import './Productionmanagepage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';
import Challenges                      from '../../allBlocks/Challenges/Challenges.js';

export default class Productionmanagepage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Production Management",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "iOG Solutions offers its clients the complete range of Production Management services. These include design completion and surface systems management, selection and design of the artificial lift, design and implementation of production allocation and accounting systems, monitoring production volumes and other parameters in real-time, calculating and reporting KPIs, optimization of oil/gas production rates as well as in predicting future performance. It also includes diagnosis of productivity problems and evaluation of stimulation treatments.",
                servicestext2 : ""
                    
                
            } 
                        
        ]
    }
  Commonleafulblock(){
        return [
            {
                challengesTitle : "Our Production Management services can be broadly divided into the following categories:",
                challengestext  : "",
                challengestext2 : "",
                 commonulliUl : [
                    {   
                        ulData : "Production Engineering",   
                    },
                    {   
                        ulData : "Production Allocation & Accounting",   
                    },
                    {   
                        ulData : "Production Monitoring",   
                    },
                    {   
                        ulData : "Production Optimization & Integrated Asset Management",   
                    },
                    {   
                        ulData : "Production Forecasting",   
                    },
                    {   
                        ulData : "Well Operations",   
                    }
                ]
            }, 
                  
        ]
    }


  DownstreamData(){
        return [
            {
                downstreamurl   : "/productionengineering",
                downstreamTitle : "Production Engineering",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "iOG’s Production Engineering involves designing and selecting the equipment that will get the well to produce oil and gas after it is drilled. It is based on the reservoir and well engineering design. In production engineering, iOG selects the artificial lift method; optimizes the design of tubing string and the design of the surface gathering system..."
                    
                
            }, 
            {
                downstreamurl   : "/productionmonitoringsurveillance",
                downstreamTitle : "Production Monitoring and Surveillance",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Production Monitoring is focused on identifying improvement opportunities by identifying underperforming wells or fields by real-time data capture and analysis. Ultimate purpose is to provide information which can help to maximize oil recovery, extend life of well and reduce operating cost......"
            }, 
            {
                downstreamurl   : "/productionaccountingsolution",
                downstreamTitle : "Production Accounting",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Production accounting helps you monitor business processes for production, transport, sales and revenue of oil and gas. By monitoring every hydrocarbon produced, transported or sold, the value of the oil and gas from different sources can be determined....."
            }, 
            {
                downstreamurl   : "/productionoptimization",
                downstreamTitle : "Production Optimization",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "The objective of production optimization is to maximize the total oil/gas production rate and to minimize the total cost of operation. For single wells or other small systems, simple well optimization and nodal analysis may be adequate but for large complex systems, a much more sophisticated approach is needed to predict the response accurately and to examine alternative operational scenarios efficiently...."
            }, 
            {
                downstreamurl   : "/productionforecasting",
                downstreamTitle : "Production Forecasting",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "iOG Solutions provides accurate and reliable production forecasting for the management and planning of petroleum reservoirs. Our team supports clients through different optimization and analysis techniques like Decline curve analysis for providing deterministic estimates for future performance and remaining reserves..... "
            }, 
            {
                downstreamurl   : "/welltesting",
                downstreamTitle : "Well Testing",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Well Test is a tool for reservoir evaluation and characterization which investigates a much larger volume of the reservoir than cores or logs, provides estimate of permeability under in-situ conditions, near-wellbore condition and distances to boundaries. Well test helps in defining reservoir limits (distances to boundaries, drainage area), estimate average drainage area pressure, characterize reservoir, diagnose productivity problems..."
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

