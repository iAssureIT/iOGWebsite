import React, {Component} from 'react';

// import $                  from 'jquery';
import './Digitalservicespage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Digitalservicespage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Digital Services",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Digital-Services.png",
                servicestext  : "In recent years, the oil & gas industry has seen a number of initiatives to explore new digital technologies & to exploit their benefits. Digital transformation frequently involves transformations of key business processes, operations, as well as organizational structures & management concepts.",
                servicestext2 : "iOG Solutions brings in strong oil & gas domain knowledge with our extensive experience in advanced software solutions to lead any Digital Transformation initiative, & we strongly advocate identification & implementation of various Digital Services."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/digitalstratergy",
                downstreamTitle : "Digital IT Strategy & Roadmaps",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "In recent years, the oil and gas industry has seen a number of initiatives to explore new digital technologies and to exploit their benefits. Digital transformation frequently involves transformations of key business processes, operations, as well as organizational structures and management concepts. The exploitation and integration of digital technologies often affect large parts of the oil business and impacts end products, business processes, distribution channels, and supply chains....."
                    
                
            }, 
            {
                downstreamurl   : "/applicationdevlopment",
                downstreamTitle : "Application Development & Application Management (ADAM)",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Maintenance and enhancement of advanced applications for oil and gas companies consume a major portion of the total life-cycle cost of any IT system. Oil and gas industry features applications across all functional departments that inherently focus on features and functionalities. However, the digital transformation has forced organizations to change and adapt quickly, and legacy application management must change accordingly...."
            }, 
            {
                downstreamurl   : "/enablingtechnology",
                downstreamTitle : "Enabling Technologies",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "New technologies that either alone or in combination with associated technologies, provide the means to drive radical changes in performance and capabilities of end-users and are defined as Enabling Technologies. The basic objective of Enabling Technologies is to help in the rapid development of tools and systems for analyzing and transforming legacy systems....."
            }, 
            {
                downstreamurl   : "/visualizationdashboard",
                downstreamTitle : "Visualization & Dashboards",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Dashboards provide an integrated and visual representation of the complete oil business right from crude procurement all the way down to product distribution. And with the advent of industry 4.0 wave, corporate dashboards are among the most important technologies that are strategic to any Business Intelligence....."
            }, 
            {
                downstreamurl   : "/digitalasset",
                downstreamTitle : "Digital Asset Life Cycle Management",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Assets throughout their life cycle go through many phases which begins by acquiring the assets, continue through maintaining & operating, and ends by decommissioning/retiring. In the context of the oil and gas industry, the specialized equipment and related complex systems make it a very challenging task to maintain and manage assets and thus remain a pain area for decision makers....."
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

