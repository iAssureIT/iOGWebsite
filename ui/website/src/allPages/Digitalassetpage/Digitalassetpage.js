import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Digitalassetpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Digitalassetpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Digital Asset Life Cycle Management",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "Assets throughout their life cycle go through many phases which begins by acquiring the assets, continue through maintaining & operating, and ends by decommissioning/retiring. In the context of the oil and gas industry, the specialized equipment and related complex systems make it a very challenging task to maintain and manage assets and thus remain a pain area for decision makers.",
                overviewtext2       : "An integrated approach to optimize the life cycle of assets will unearth hidden value waiting to be tapped.  An era of low oil and gas prices is pushing energy companies to rapidly adopt and accept the cost savings initiatives like digital transformations. A holistic enterprise-wide asset management solution coupled with the enabling technologies like Machine Learning, Artificial Intelligence, etc. can deliver cost savings by optimizing asset maintenance cycle and ultimately turning this into a competitive advantage.",
                overviewtext3       : "iOG Solutions brings in strong oil and gas domain knowledge with our extensive experience in advanced software solutions to lead any Digital Transformation initiative with a focus on increasing Asset Lifecycle Management. Our experience enables us to develop strategies and plans for long term asset maintenance and reliability improvement by leveraging the skills of our digital service(s).",
                overviewtext4       : "",
                overviewtext5       : "",
                

            } 
                        
        ]
    }

  
  
Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Digital Twins"
                    },
                    {
                        ulData : "AI-ML based Asset Management"
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

