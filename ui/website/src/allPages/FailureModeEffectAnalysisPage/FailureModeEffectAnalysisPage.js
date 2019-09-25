import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './FailureModeEffectAnalysisPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class FailureModeEffectAnalysisPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Failure Mode Effect Analysis",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "Failure Mode Effect Analysis is one of the parts of Criticality Analysis which indicates the possibility of equipment which can fail and inspects for the effects that will follow on it’s failure and so on. The assessment of these risks is done which provides the data on each failure risk and its criticality which helps in prioritising the corrective measure to be taken in order to mitigate the problems which may occur.",
                overviewtext2  : "While performing FMEA certain factors which are analysed with special focus are:",
                overviewtext3  : "",
                overviewtext4  : "In all this, a single point failure analysis is done and accordingly its criticality is ranked to mitigate the risk associated with the equipment.",
                overviewtext5  : "",
                commonulliUl   : [   
                    {
                        ulData : "Design"
                    },
                    {
                        ulData : "Process"
                    },
                    {   
                        ulData : "Functional"
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

