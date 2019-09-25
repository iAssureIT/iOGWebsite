import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './AssetCriticalAnalysisPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class AssetCriticalAnalysisPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Asset Criticality Analysis",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "iOG Solutions consider Asset Criticality Analysis as one of the important parts which help the industry to discover and analyse their assets and it’s various associated criticality factors based on the risk of failure associated with the equipment along with knowing how reliable and durable it is going to be in the longer run of the plant. ",
                overviewtext2  : "Asset criticality analysis mainly deals with the following factors while inspecting a plant for criticality of assets which are running and are planned to be run in the plant:",
                overviewtext3  : "We focus mainly on interpreting the data obtained using Seismic methods. A comprehensive interpretation of seismic data requires an understanding of the subsurface formations, and their effect on wave characteristics & reception. We use industry-standard tools for seismic interpretation which enable the following workflow.",
                overviewtext4  : "Based on the information gathered from the inspection the assets are then arranged according to their criticality rank which helps to prioritize the actions to be taken on any particular asset among the criticality list. This helps the Operations/Plant head to be predictive and reliable in terms of avoiding any kind of downtime and hazards in the plant.",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Preventive Maintenance (PM) history"
                    },
                    {
                        ulData : "Ability to isolate/recover from single-point-failures"
                    },
                    {   
                        ulData : "Corrective Maintenance (CM) history"
                    },
                    {   
                        ulData : "Environmental, Health, and Safety impact"
                    },
                    {   
                        ulData : "Mean-Time-Between-Failures (MTBF) or “Reliability”"
                    },
                    {   
                        ulData : "Spares lead-time"
                    },
                    {   
                        ulData : "Asset replacement value"
                    }
                ]

            } 
                        
        ]
    }
    

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
      </div>
    );  
  }
}

