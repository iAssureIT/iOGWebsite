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
                servicesTitle : "Reservoir Management",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Reservoir_Management.png",
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
                downstreamurl   : "/reservoirengineering",
                downstreamTitle : "Reservoir Engineering",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "We at iOG solutions help our clients during the development and production of oil and gas reservoirs by maximizing their production rates with the aim of optimizing economic Hydrocarbon recovery. Our Reservoir Engineering team works together with geologists and geophysicists to find the reserves of oil and gas relying on the basic laws of physics and chemistry that affect the behaviour of liquid and vapour phases of oil, natural gas and water in rock...."
                    
                
            }, 
            {
                downstreamurl   : "/fielddevelopmentplan",
                downstreamTitle : "Field Development Plan",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Generating Field development plans (FDPs) is the process of evaluating multiple development options for a field and selecting the best option based on assessing trade-offs among multiple factors. It gives you the best technical solutions for field optimization. iOG performs detailed and comprehensive field development plans to cover all technical aspects inclusive of seismic, geological, petrophysical, reservoir engineering, production technology,......"
            }, 
            {
                downstreamurl   : "/dynamicreservoirsimulation",
                downstreamTitle : "Dynamic Reservoir Simulation",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Dynamic Reservoir simulation is an area of reservoir engineering in which computer models are used to predict the flow of fluids. Reservoir simulation models are used for: The Development of new fields through the identification of the number of wells required, the optimal completion of wells, the present and future needs for an artificial lift and the expected production of oil, water and gas....."
            }, 
            {
                downstreamurl   : "/reservoircharacterization",
                downstreamTitle : "Reservoir Characterization",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Static Reservoir modeling, also sometimes referred to as Reservoir Characterization is carried out to determine reservoir architecture and quality with respect to distribution of porosity, permeability and rock properties...... "
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

