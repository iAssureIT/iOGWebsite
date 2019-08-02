import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Changemanagepage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Changemanagepage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Change Management",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Adapting newer technologies, processes, strategies, sophisticated software solutions and many other newer assets to the existing functional and technical configuration is a common practice adopted to improve both short and long-term business performance in today’s Oil and Gas business.",
                overviewtext2       : "However, any significant transformation in an organization often faces the following roadblocks for successful implementation:",
                overviewtext3       : "Leading HSE solutions can help your safety and functional teams identify potential hazards and risks associated with changes to operations, equipment, and people. Therefore, Management of Change (MOC) processes should by standardizing with your teams for identification, evaluation, and communication of changes effectively.",
                overviewtext4       : "iOG Solutions, with their vast experience in deploying state-of-art Change Management strategies and solutions successfully at various client sites across the world, can assist the client to identify & implement business value drivers aligned with organization’s growth strategy & target metrics.",
                overviewtext5       : "",
                commonulliUl   : [
                    {
                        ulData : "Resistance to change within the organization Vs age-old practices"
                    },
                    {
                        ulData : "Limitations of existing systems to migrate to newer working arenas    "
                    },
                    {   
                        ulData : "Lack of commitment from senior management to push projects harder towards completion"
                    },
                    {   
                        ulData : "Unrealistic expectations/targets"
                    }
                ]
               

            } 
                        
        ]
    }

    
Commonleafulblock(){
        return [
            {
                challengesTitle : "The services offered by iOG solutions in the area of Change Management include:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Study the business improvement strategy “As-is” and develop a defined end-state approach to achieve the best-in-class through gap analysis."
                    },
                    {
                        ulData : "Re-define organizational structure for better accountability and consistency across the business"
                    },
                    {
                        ulData : "Handle complete implementation cycle of most of the popular HSE software & technologies"
                    },
                    {
                        ulData : "Devise innovative planning, control and investment processes for improved and sustained performance"
                    },
                    {
                        ulData : "Define KPI’s and targets to measure and track organizational growth."
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

