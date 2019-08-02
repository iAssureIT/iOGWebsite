import React, {Component} from 'react';

// import $                  from 'jquery';
import './Riserviormanagepage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';
import Challenges                      from '../../allBlocks/Challenges/Challenges.js';

export default class Riserviormanagepage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Reservior Management",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "iOG Solutions provides end-to-end consulting services for management of reservoirs, utilizing state-of-the-art geoscience and engineering technologies. Our distinctive competencies and cutting-edge propositions are embodied in the breadth of technical expertise and diverse experience we provide. This is specifically true in the area of integrated reservoir characterization, modeling, and management.",
                servicestext2 : "Our extensive domain expertise   extends to aspects of reservoir behaviour and its’ properties and fluid movement in a dynamic surrounding environment with respect to fluid contact, temperature, pressure and saturation. Through this, customers are able to understand the reservoir extent, fluid flow via porous & permeable media and to arrive at estimates indicating the life of the Reservoir. "
                    
                
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
                    {   ulData : "Static Reservoir modeling (Characterization): To determine reservoir architecture and quality with respect to distribution of porosity, permeability and rock properties.",
                        commonulliLi : [
                                            {
                                                liData : "Build Reservoir Model: 3D Structural & 3D Petrophysical Model"
                                            },
                                            {
                                                liData : "Allocate Petrophysical Properties to each grid"
                                            },
                                            {
                                                liData : "Connect Facies"
                                            },
                                            {
                                                liData : "Enable Upscaling"
                                            }
                                        ]
                    },
                    {   ulData : "Dynamic Reservoir Modeling (Simulation): To predict the flow of fluids via Porous & Permeable Zones",
                        commonulliLi : [
                                            {
                                                liData : "Dynamic Reservoir Simulation using an industry standard state-of-the-art simulator"
                                            }
                                        ]
                    },
                    {   
                      ulData : "Reservoir Engineering:  To determine the size of extractable reserves and Production rates; identify and plan for the best recovery methods.",   
                    },
                    {   
                      ulData : "Field Development Planning:  To evaluate multiple development options for a field and select the best option for integrated field development.",   
                    }
                ]
            }, 
                  
        ]
    }



  DownstreamData(){
        return [
            {
                downstreamTitle : "Reservoir Engineering",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Field Development Plan",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Dynamic Reservoir Simulation",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Reservoir Characterization",
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

