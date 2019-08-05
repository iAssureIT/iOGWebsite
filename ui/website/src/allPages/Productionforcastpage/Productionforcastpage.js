import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Productionforcastpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Productionforcastpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Production Forecasting",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "iOG Solutions provides accurate and reliable production forecasting for the management and planning of petroleum reservoirs. Our team supports clients through different optimization and analysis techniques like Decline curve analysis for providing deterministic estimates for future performance and remaining reserves. ",
                overviewtext2  : "iOG Solutions Production Forecasting service offerings include",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Multiple variables Well performance prediction ",
                    },
                    {  
                        ulData : "Setting guidelines and constraint for the production forecasts.",
                    },
                    {  
                        ulData : "Execution of the prediction cases.",
                    },
                    {  
                        ulData : "Sensitivity Analysis (what if component/parameter changes)",
                    },
                    {  
                        ulData : "Sensitization on various perceived inflow and outflow parameters and evaluation of their effects on the total producing system",
                    },
                    {  
                        ulData : "Performing customized Decline curve analysis and other  interpreting other Performance curves — choke correlation and PQ curves",
                    },
                    {  
                        ulData : "Estimating unconventional sources of well production",
                    },
                    {  
                        ulData : "Total gas oil ratio calculations",
                    },
                    {  
                        ulData : "Well event planning: flowing, injecting, well tests, well status, downtime entered in minutes by date and time",
                    }
                ],
                commonulliUl2  : []


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

