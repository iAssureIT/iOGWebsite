import React, {Component} from 'react';

// import $                  from 'jquery';
import './Ourjourny.css';

import Ourjournyblock                 from '../../allBlocks/Ourjournyblock/Ourjournyblock.js';

export default class Ourjourny extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Well & Drilling",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "The upstream segment of oil & gas industry, also known as Exploration and Production (E&P), encompasses activities related to prospecting for oil and gas fields, drilling of exploratory, appraisal and production wells, analysis of wells for production and economic viability, and the operation of viable wells to bring crude oil and raw natural gas to the surface.",
                servicestext2 : "Each of the activities in the upstream value chain involves amalgamation of a wide variety of technical expertise and domain-specific knowledge for effectively managing E&P life cycle. Looking for hydrocarbons beneath the surface involves geological, geophysical, and petrophysical analysis of subsurface terrain for probable deposits of oil and natural gas. Upon identification of potential locations of oil and gas reserves, the next step is drilling of appraisal wells to ascertain the quantity and quality of underground reserves. The data obtained from appraisal wells is then combined with G&G data to determine the number and location of wells for meeting and optimizing production requirements. After primary (natural pressure and flow) and secondary (water flooding) recovery methods well operators employ tertiary or Enhanced Oil Recovery (EOR) techniques to boost the performance of depleting wells and maximize production."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamTitle : "Well Planning & Drilling",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }, 
            {
                downstreamTitle : "Well Performance Analysis",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Well Modeling",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Well Log Interpretation",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Well Drilling Services",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }, 
            {
                downstreamTitle : "Well Data Management",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
            }
        ]
    }

  render() {


    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding overhidden">
          <div className="">
              <Ourjournyblock infodata={this.ServicesData()} />
          </div>
      </div>
    );  
  }
}

