import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ReliabilityCentredMaintenance.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class ReliabilityCentredMaintenance extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Reliability Centred Maintenance",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "At iOG solutions, we help our clients in understanding their assets and the risk associated with it. Reliability Centred Management involves analysing the assets to understands its criticality and associated downtime that can be caused by them. After inspecting all such assets an optimum maintenance strategy is calculated and planned for implementation to mitigate and related hazards in the refinery.",
                overviewtext2  : "Effective RCM involves the following steps:",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [   
                    {
                        ulData : "Monitoring"
                    },
                    {
                        ulData : "Plan / Design"
                    },
                    {   
                        ulData : "Analysis"
                    },
                    {   
                        ulData : "Implementation"
                    },
                    {   
                        ulData : "Action Plan"
                    },
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

