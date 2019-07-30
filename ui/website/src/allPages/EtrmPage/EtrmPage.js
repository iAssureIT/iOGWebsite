import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './EtrmPage.css';

 import Etrmtradingrisk               from '../../allBlocks/Etrmtradingrisk/Etrmtradingrisk.js';
 import Etrmbenefits                  from '../../allBlocks/Etrmbenefits/Etrmbenefits.js';
 // import Optimization               from '../../allBlocks/Optimization/Optimization.js';
// import Refineryplanning        from '../../allBlocks/Refineryplanning/Refineryplanning.js';

export default class EtrmPage extends Component {

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <Etrmtradingrisk />
      <Etrmbenefits />
      </div>
    );  
  }
}

