import React, {Component} from 'react';

// import $                  from 'jquery';
import './Healthsaftypage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Healthsaftypage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Health Safety & Environment",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Health-Safety-&-Environment.png",
                servicestext  : "The Oil and gas industry has always faced a moral dilemma related to environmental sustenance and it has seen some of the major disasters and accidents which have contributed to vast safety and environmental problems in the past.",
                servicestext2 : "There are various environmental and petroleum regulation laws for monitoring and enforcement of health, safety, and proper environmental management within the downstream sector. But the risks of process safety related hazards are inherent and will always be present.",
                servicestext3 : "iOG Solutions with its years of deep understanding of refinery business process and extensive knowledge in the advanced software solutions supports its clients in health, safety and environmental consulting services offering robust, innovative and practical advice to the Energy Sector. iOG Solutions helps clients define a road map for continuous improvement for sustainable HSE practices."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/processsafty",
                downstreamTitle : "Process Safety Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "Process-safety hazards arise because of the processing activities in a plant. Any incident in a manufacturing and processing plant may result in fatalities as well as huge asset, environmental, and reputational damage. Process safety management (PSM) deals with the identification, understanding, and control of process hazards to prevent process‐related injuries and incidents....."
                    
                
            }, 
            {
                downstreamurl   : "/occupationhealth",
                downstreamTitle : "Occupational Health And Safety Management",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "A healthy and safe working environment is a foundation stone for safety management initiative in any process plant. Today, an increasing number of organizations are now focusing on the preventative measures to safeguard their employees and processes from the unseen hazards. These trends are being supported by a greater involvement from the top management....."
            }, 
            {
                downstreamurl   : "/environmentsustain",
                downstreamTitle : "Environmental Consulting",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "In recent times, environmental management concepts and sustainable development practices have been a focal point of rapidly evolving process organizations. This trend can be associated as an outburst of the public reactions, climate-change studies, activists, and concerns about the environment....."
            }, 
            {
                downstreamurl   : "/environmentsustain",
                downstreamTitle : "Sustainability Strategy",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "iOG Solutions assists its clients to assess and mitigate environmental and sustainability risk by meticulously studying the operational and corporate level business processes, utilizing their hydrocarbon industry expertise......"
            }, 
            {
                downstreamurl   : "/hsesystemevalution",
                downstreamTitle : "HSE System Evaluation",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "With the recent advancements in the IT industry, the options available in Health, Safety and Environment (HSE) – its applications and systems are becoming a complex and overwhelming experience. HSE systems and applications make it easy to manage, track and report safety-related process data....."
            }, 
            {
                downstreamurl   : "/hsebusinessprocessingmapping",
                downstreamTitle : "HSE Business Process Framing",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Different activities related to HSE are handled readily by currently available software solutions. These HSE systems and solutions work around the standard workflows as an organization can have different and more evolved workflow as per their requirements...."
            }, 
            {
                downstreamurl   : "/hsesolutionsimplementation",
                downstreamTitle : "HSE Solutions Implementation",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "An effective HSE solution selection requires lot of efforts and brainstorming from all the HSE stakeholders. The solutions should not only meet all of client’s requirements but also should be capable enough to adjust to the future changes in policies and standards......."
            }, 
            {
                downstreamurl   : "/changemanagement",
                downstreamTitle : "Change Management",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Adapting newer technologies, processes, strategies, sophisticated software solutions and many other newer assets to the existing functional and technical configuration is a common practice adopted to improve both short and long-term business performance in today’s Oil and Gas business....."
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

