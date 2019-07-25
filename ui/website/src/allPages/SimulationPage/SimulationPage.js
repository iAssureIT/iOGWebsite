import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './SimulationPage.css';

 import Intro                from '../../allBlocks/Intro/Intro.js';
 // import Lifecycle            from '../../allBlocks/Lifecycle/Lifecycle.js';
// import Challenges              from '../../allBlocks/Challenges/Challenges.js';
// import Refineryplanning        from '../../allBlocks/Refineryplanning/Refineryplanning.js';

export default class SimulationPage extends Component {

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <Intro />
       
      </div>
    );  
  }
}

