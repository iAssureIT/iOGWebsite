import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Hsesolutionimplementpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Hsesolutionimplementpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "HSE Solutions Implementations",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "An effective HSE solution selection requires lot of efforts and brainstorming from all the HSE stakeholders. The solutions should not only meet all of client’s requirements but also should be capable enough to adjust to the future changes in policies and standards.",
                overviewtext2       : "Implementation of such solutions is also as critical as its selection. To generate quick ROI from adapting the HSE solutions, solutions must address the pain-points that a client may have. If the solution is user-friendly, it will be adopted by all users across the organization.",
                overviewtext3       : "iOG Solutions is an independent consulting and implementation services provider on leading HSE software solutions. iOG Solutions brings in best practices and lessons learned across the hydrocarbon industry to share.",
                overviewtext4       : "iOG Solutions have years of expertise in implementing advanced IT systems for our oil and gas clients. This translates to a quick, low cost and reliable implementation project for their clients.",
                overviewtext5       : "",               

            } 
                        
        ]
    }

    
Commonleafulblock(){
        return [
            {
                challengesTitle : "Services that iOG Solutions offer in the area of HSE Solutions Implementation include:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "End to end implementation and integration of leading HSE solutions"
                    },
                    {
                        ulData : "Analyse & review customer requirements and HSE business processes"
                    },
                    {
                        ulData : "Configuration and integration services"
                    },
                    {
                        ulData : "Workshops and Trainings sessions for HSE Solutions"
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

