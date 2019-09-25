import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './CalibrationManagement.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class CalibrationManagement extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Calibration Management",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "iOG Solutions provide consultancy and training in terms of setting up the calibration system in the plant which envelops all the assets, and based on its functionality they have to be calibrated in order to avoid any critical risks from occurring and the plant remains reliable and active for the longer time period. Calibration software available in market helps in scheduling the calibration sessions to check and maintain the set order and functions of all the instruments and equipment with feed data from the instrument’s history and operability.",
                overviewtext2  : "This helps in mitigation of any kind of criticality in the plant by avoiding the risk which can occur due to destabilised equipment operations which occurs while the continuous operation of the plant.",
                overviewtext3  : "",
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

