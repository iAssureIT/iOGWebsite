import React, {Component} from 'react';

// import $                  from 'jquery';
import './Refineryplanningpage.css';

import Commonrefineryplanningblock  from '../../allBlocks/Commonrefineryplanningblock/Commonrefineryplanningblock.js';

export default class Refineryplanningpage extends Component {
 RefineryPlanningData(){
        return [
            {
                refineryplanningTitle : "iOG Solutions for Refinery Planning",
                refineryplanningtext  : "We, at iOG Solutions, are a team of consultants with a rich and vast experience in deploying end-to-end solutions of Refinery Planning business process at refineries in Spain, Middle-East, Vietnam, India and various other client sites across the world."
            }, 
           {
                refineryplanningSubTitle1 : "iOG Solutions offers:"
            }, 
                        
        ]
    }



  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="">
          <Commonrefineryplanningblock data5={this.RefineryPlanningData()} />
        </div>
      </div>
    );  
  }
}

