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
                servicesimg   : "/images/Downstreaminfoblock.png",
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
                downstreamTitle : "Geophysical Interpretation",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Geological Interpretation",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Petrophysical Analysis",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Subsurface Modeling",
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
              <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
              <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
              <Commonservicesblock servicedata={this.DownstreamData()}/>
          </div>
      </div>
    );  
  }
}

