import React, {Component} from 'react';

// import $                  from 'jquery';
import './Geologypage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';
import Imgleafblock                    from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges                      from '../../allBlocks/Challenges/Challenges.js';

export default class Geologypage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Geology & Geophysics",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Geology__Geophysics.png",
                servicestext  : "iOG understands the various paradigms of the subsurface ecosystem and its complexity. The domain knowledge and expertise in multiple disciplines (Geophysics, Geology, Petrophysics, and Geochemistry) enables it to understand, interpret and model the subsurface. ",
                servicestext2 : ""
                    
                
            } 
                        
        ]
    }
  
  imgleafblockData(){
        return [
            {
                plansTitle        : "",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/geophysic.png",

            }
        ]
    }

       Commonleafulblock(){
        return [
            {
                challengesTitle : "Over the years, iOG’s experts have developed and optimized a strategic approach to perform subsurface modelling as illustrated below:",
                challengestext  : "It broadly covers the three main knowledge areas:",
                challengestext2 : "",
                 commonulliUl : [
                    {   ulData : "Geophysics:",
                        commonulliLi : [
                                            {
                                                liData : "Designing Seismic Acquisition Programs, Geostatistical & 3D Inversion Modeling, Quantitative Analysis, Velocity Modeling"
                                            }
                                        ]
                    },
                    {   ulData : "Geology:",
                        commonulliLi : [
                                            {
                                                liData : "Study of Subsurface with respect to Structure, Stratigraphy, Tectonic Activity, Facies Analysis, Sedimentology, Paleontology, Petroleum Geology and Well Log Analysis."
                                            },
                                            {
                                                liData : "Pore Pressure Analysis by using Well Log & Seismic Data."
                                            }
                                        ]
                    },
                    {   ulData : "Petrophysics:",
                        commonulliLi : [
                                            {
                                                liData : "Study of the characteristics of the rocks that make up the reservoir in terms of their Porosity, Permeability, etc."
                                            }
                                        ]
                    }
                ]
            }, 
                  
        ]
    }



  DownstreamData(){
        return [
            {
                downstreamurl   : "/geophysicalinterpretation",
                downstreamTitle : "Geophysical Interpretation",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Geophysical Interpretation is the extraction of subsurface geologic information from the data obtained using various techniques such as Seismic, Gravitational, Magnetic etc. Geophysical Interpretation is best carried out in integration with Geological Data and we combine our expertise in both to provide our clients a balanced interpretation...."
                    
                
            }, 
            {
                downstreamurl   : "/geologicalinterpretation",
                downstreamTitle : "Geological Interpretation",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "iOG Solutions is a comprehensive solution provider in the Oil and Gas industry domain. It brings to the table vast domain expertise in the oil and gas space across the entire spectrum of the domain, adapted into innovative solutions to help clients address their Geological Interpretation and related needs......"
            }, 
            {
                downstreamurl   : "/petrophysicalanalysis",
                downstreamTitle : "Petrophysical Analysis",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Rock Physics plays a fundamental role in all exploration & production analysis because the physical properties data form the basis for interpreting seismic data. iOG offers the services of  world´s top experts in rock physics & physical properties analysis to provide world-class petrophysical solutions. Our experts analyse the client´s well log data & use this information to perform physical properties feasibility studies for the area of interest that can be used in all aspects of geophysical work...."
            }, 
            {
                downstreamurl   : "/subsurfacemodeling",
                downstreamTitle : "Subsurface Modeling",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Seismic to simulation sub-surface modelling solutions are a critical input to exploration processes & decision making as regards any asset or field. iOG offers a solution that helps reduce geological uncertainty & consequent vulnerability of processes. The overall impact is to enhance production, resulting in much better return on investment (ROI).... "
            }
        ]
    }

  render() {


    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
          <div className="downstreambg1">
              <Commoninfoblock infodata={this.ServicesData()} />
              <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
              <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
              <Commonservicesblock servicedata={this.DownstreamData()}/>
          </div>
      </div>
    );  
  }
}

