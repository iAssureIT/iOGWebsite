import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Energy.css';

 import Energyintro                from '../../allBlocks/Energyintro/Energyintro.js';
 import Primarystrategies          from '../../allBlocks/Primarystrategies/Primarystrategies.js';
 import Optimization               from '../../allBlocks/Optimization/Optimization.js';
// import Refineryplanning        from '../../allBlocks/Refineryplanning/Refineryplanning.js';

export default class Energy extends Component {

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Energyintro />
        <Primarystrategies />
        <Optimization />
      </div>
    );  
  }
}

