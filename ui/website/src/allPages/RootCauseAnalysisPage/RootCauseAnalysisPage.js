import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './RootCauseAnalysisPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class RootCauseAnalysisPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Root Cause Analysis",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "At iOG Solutions, we provide solutions to analyse the failure causes which refers to the specific technical deficiency which is responsible for failure of equipment. The failure cause may lie in the process, design, or the operation itself.",
                overviewtext2  : "Root Cause Analysis is a systematic event examination tool, which allows the investigators of events to identify the safety system deficits that lead to the incidence of a loss or a potential loss. It guides the investigators through a process of loss or potential loss evaluation, identification of immediate and basic causes, and ultimately the determination of lack of control.",
                overviewtext3  : "Root Cause Analysis initially is a responsive method of problem detection and solving. This means that the analysis is done after the occurrence of an event. By gaining proficiency in Root Cause Analysis it becomes a proactive process. This means that Root Cause Analysis can forecast the likelihood of an event even before it could occur. This system offered a different kind of approach compare to Predictive and Preventive maintenance that deals with the problem even before it occurred.",
                overviewtext4  : "The possible fields of application include project management, operations, quality control, business process improvement, health and safety, and many others.",
                overviewtext5  : "Like Root Cause Analysis, identifying the failure cause is critical to avoiding future or similar problems as well as helping in the determination of a root cause. While failure causes may be the immediate cause of an incident, the root cause at times may lie in deeper, more systemic issues from which the immediate or failure cause arose.",
            
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

