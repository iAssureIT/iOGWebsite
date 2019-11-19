import React, {Component} from 'react';

// import $                  from 'jquery';
import './Industriespetrochemicalpage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Industriespetrochemicalpage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Petrochemical",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Petrochemicals.png",
                servicestext  : "The petrochemical industry has seen substantial rapid growth during the past several years due to its higher value addition in recent volatile oil market.",
                servicestext2 : "Petrochemical units have complex processes such as multiple grades, grade transitions, product sequencing, multiple bagging & transportation options, the variable cost of feedstocks etc. "
                    
                
            } 
                        
        ]
    }


  DownstreamData(){
        return [
            {
                downstreamTitle : "Petrochemical Planning",
                downstreamimg   : "/images/Petrochemical_planning.png",
                downstreamtext  : "Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. "
                    
                
            }, 
            {
                downstreamTitle : "Petrochemical Scheduling",
                downstreamimg   : "/images/Petrochemical_scheduling.png",
                downstreamtext  : "Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
            }, 
            {
                downstreamurl   : "/apc-services",
                downstreamTitle : "APC Services",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Advanced Process Control (APC) technologies helps to improve operation stability, push operations closer to quality or equipment limits and improve the capability of process units to handle disturbances."
            }, 
            {
                downstreamurl   : "/simulation",
                downstreamTitle : "Process Simulation & Modeling",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Process simulation studies enable the asset owners and the system designers to gain a better insight into the design and operation of their facilities."
            }, 
            {
                downstreamurl   : "/digitalservices",
                downstreamTitle : "Digital Services, Dashboard and KPI Managers",
                downstreamimg   : "/images/Illustration_13.png",
                downstreamtext  : "Digital transformation frequently involves transformations of key business processes, operations, as well as organizational structures & management concepts...."
            },
            {
                downstreamurl   : "/Healthsafty",
                downstreamTitle : "HSE & EHS",
                downstreamimg   : "/images/Illustration_11.png",
                downstreamtext  : "The Oil and gas industry has always faced a moral dilemma related to environmental sustenance."
            }
            
        ]
    }

  render() {


    return (

      <div>
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 takeleft">
        <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable">           
          <ul class="breadcrumb breadcrumb1 breadcrumb4">
          <li class="active">&nbsp;</li><li>
          <a href="/" class="pathway">Home</a>
          <span class="divider">
          <img src="/media/system/images/arrow.png" alt=""/></span></li>
          <li><a href="/industries" class="pathway">Industries</a>
          <span class="divider"><img src="/media/system/images/arrow.png" alt=""/></span></li>
          <li class="active"><span>Pectrochemical</span></li></ul>
            </div>
        </div>
       </div> 
     </div>  
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="downstreambg1">
          <Commoninfoblock infodata={this.ServicesData()} />
          <Commonservicesblock servicedata={this.DownstreamData()}/>
        </div>
      </div>
      </div> 
    );  
  }
}

