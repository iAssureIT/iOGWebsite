import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ApcServices.css';

 import Benefits                from '../../allBlocks/Benefits/Benefits.js';
 import Controlloop             from '../../allBlocks/Controlloop/Controlloop.js';
 import Apcscope                from '../../allBlocks/Apcscope/Apcscope.js';
// import Refineryplanning        from '../../allBlocks/Refineryplanning/Refineryplanning.js';

export default class ApcServices extends Component {

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <Benefits />
      <Controlloop />
      <Apcscope />
      </div>
    );  
  }
}

