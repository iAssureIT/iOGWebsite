import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './SIMOPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class SIMOPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Spares Inventory Management and Optimization (SIMO)",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "",
                overviewtext2  : "",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [
                  
                ]

            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengesTitle2: "Balancing spares demand and supply",
                challengestext3  : "iOG Solutions trains and consult in managing the plants spares inventory costs at the same time as reducing stock-out and sustaining spares needs for production availability. In addition, it can help to summarise the status of current asset management from spares consumption point of view and determine which spares on which assets have abnormal short lifetime; RCA - root cause analysis can then be conducted and enhancement actions can be deployed; as a result, spares consumption will be reduced and the spares inventory can further be optimised. ",
                challengestext : "SIMO process must be in alignment with the principle of creating a balance between demand and supply which can be achieved by the following approach:",
                commonulliUl : [
                    {
                        ulData : "Inventory optimization"
                    },
                    {
                        ulData : "Spares forecasting"
                    },
                    {   
                        ulData : "Inventory rationalization"
                    },
                    {   
                        ulData : "Spares identification"
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

