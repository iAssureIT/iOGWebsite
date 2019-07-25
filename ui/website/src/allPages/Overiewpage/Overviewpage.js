import React, {Component} from 'react';

// import $                  from 'jquery';
import './Overviewpage.css';

import Commonoverviewblock  from '../../allBlocks/Commonoverviewblock/Commonoverviewblock.js';

export default class Overiewpage extends Component {
 OverviewData(){
        return [
            {
                overviewTitle    : "Refinery Planning",
                overviewSubTitle : "Overview",
                overviewimg      : "/images/2.png",
                overviewtext     : "Crude Oil Refining is by its very nature a diversified and complex business model. Newer and specialized non-linear constraints such as volatility in oil prices, changing demand patterns for petroleum products,stringent environmental regulations related to clean fuels and start-up of new production technologies are continuously being embedded into the system resulting in more complex refining schemes.In this context, intellectual production planning plays a vital role in maximizing refinery profitability and ensuring logistic reliability, more so in the current day Refinery Downstream Model which oscillates its nature between a supply-driven and a Demand-driven model.Linear programming software such as Aspen PIMS, Haverly GRTMPS, Spiral Plan, Honeywell RPMS, etc. become handy planning tools to select crude, optimize product mix and to determine optimal operating conditions over the desired time-frame."
            } 
                        
        ]
    }


  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="">
          <Commonoverviewblock data={this.OverviewData()} />
        </div>
      </div>
    );  
  }
}

