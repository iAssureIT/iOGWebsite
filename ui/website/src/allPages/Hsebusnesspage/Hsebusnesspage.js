import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Hsebusnesspage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Hsebusnesspage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "HSE Business Process Mapping",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Different activities related to HSE are handled readily by currently available software solutions. These HSE systems and solutions work around the standard workflows as an organization can have different and more evolved workflow as per their requirements.",
                overviewtext2       : "Business process mapping breaks down the activities of a selected area into definable and repeatable steps to make the HSE vision of an organization quantifiable. A well-defined business process translates technical activities into small and manageable activities. Mapping of these business processes helps the team to understands how the activities and process are organized.",
                overviewtext3       : "",
                overviewtext4       : "",
                overviewtext5       : "",               

            } 
                        
        ]
    }

    
Commonleafulblock(){
        return [
            {
                challengesTitle : "Our services in the area of HSE Business Process Mapping include:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "HSE Process mapping"
                    },
                    {
                        ulData : "Operational controls and Work Instructions"
                    },
                    {
                        ulData : "Process improvement and reporting"
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

