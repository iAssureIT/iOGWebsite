import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Hseevalutionpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Hseevalutionpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "HSE System Evaluation",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "With the recent advancements in the IT industry, the options available in Health, Safety and Environment (HSE) – its applications and systems are becoming a complex and overwhelming experience.",
                overviewtext2       : "HSE systems and applications make it easy to manage, track and report safety-related process data. Sometimes there are multiple solutions that meet all the requirements and sometimes there is no single solution that fits all the client’s requirement although multiple solutions partially fulfil the same. Thus identifying, selecting and implementing solutions that achieve stated objectives becomes a critical task.",
                overviewtext3       : "iOG Solutions help clients to set business requirements, assist in developing HSE system roadmaps, assist in solution selection. iOG consultants with their extensive experience in the advanced application landscape, will study the existing systems and processes and conduct ‘As-Is’ Analysis. The next step involves conducting ‘To-Be’ Analysis which will define how the system should proceed. Gap Analysis between the ‘As-Is’ and ‘To-Be’ state will be a guiding document to build a roadmap to achieve excellence in HSE business processes.",
                overviewtext4       : "",
                overviewtext5       : "",               

            } 
                        
        ]
    }

    
Commonleafulblock(){
        return [
            {
                challengesTitle : "Our services in the area of HSE System Evaluation includes:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Conducting workshops to benchmark ‘As-Is’ state of HSE business processes."
                    },
                    {
                        ulData : "To-Be Analysis with a detailed listing of functional requirements and expectations"
                    },
                    {
                        ulData : "Gap Analysis"
                    },
                    {
                        ulData : "HSE System Roadmap Consulting"
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

