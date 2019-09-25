import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './AssetStrategyManagement.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class AssetStrategyManagement extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Asset Strategy Management",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "This modern approach of analysis and data collection helps companies in developing new techniques resulting in greater efficiency, less unplanned downtime, improved safety, less operational risk, better yields, and increased flexibility of production.",
                overviewtext2  : "Proper and systematic data analysis tools like a common APM solution can help management make data-driven decisions from a source they can trust. This single APM source allows easy understanding of asset condition to both the management as well as the maintenance team.",
                overviewtext3  : "With the help of an APM solution, you can not only optimize your delivery but also cut down on unnecessary scheduled maintenance as well as unplanned downtime. Here is how an Asset Performance Management program helps the Oil and Gas Industry.",
                overviewtext4  : "",
                overviewtext5  : "",
              

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

