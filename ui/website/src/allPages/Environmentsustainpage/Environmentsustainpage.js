import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Environmentsustainpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Environmentsustainpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Environment & Sustainability Management",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "In recent times, environmental management concepts and sustainable development practices have been a focal point of rapidly evolving process organizations. This trend can be associated as an outburst of the public reactions, climate-change studies, activists, and concerns about the environment.",
                overviewtext2       : "Governments and other regulatory bodies are increasingly imposing stringent environmental standards and regulations. The hydrocarbon industry must play an active role in addressing the environmental problems arising due to its operations. Oil and gas majors must act to reduce emissions of carbon dioxide and other greenhouse gases, and to fight alongside with public, governments to tackle global climate change problems.",
                overviewtext3       : "iOG Solutions assists its clients to assess and mitigate environmental and sustainability risk by meticulously studying the operational and corporate level business processes, utilizing their hydrocarbon industry expertise.",
                overviewtext4       : "",
                overviewtext5       : "",               

            } 
                        
        ]
    }

    
Commonleafulblock(){
        return [
            {
                challengesTitle : "Our services in the area of Environment & Sustainability Management:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Conducting Strategic Environmental Assessments (SEA)"
                    },
                    {
                        ulData : "Drafting environmental management plans and monitoring programs"
                    },
                    {
                        ulData : "Development of Need Based Sustainability Management Plan (NBSM Plan)"
                    },
                    {
                        ulData : "Emission Monitoring"
                    },
                    {
                        ulData : "Energy Management"
                    },
                    {
                        ulData : "Water Management"
                    },
                    {
                        ulData : "Carbon Management"
                    },
                    {
                        ulData : "Soil and Waste Management"
                    },
                    {
                        ulData : "Environmental Management Initiatives"
                    },
                    {
                        ulData : "Development and implementation of Sustainability Strategies"
                    },
                    {
                        ulData : "Identify, Map and Mitigate the risks & opportunities to embed sustainability across various functional departments of an organization"
                    },
                    {
                        ulData : "Manage HSE and sustainability related information technology (IT) systems"
                    },
                    {
                        ulData : "KPI collection, verification, analysis, and reporting of company-wide sustainability"
                    }
                ]
            }, 
                  
        ]
    }

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

