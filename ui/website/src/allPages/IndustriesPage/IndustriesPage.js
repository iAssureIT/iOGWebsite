import React, {Component} from 'react';

// import $                  from 'jquery';

import Industriesrefinery        from '../../allBlocks/Industriesrefinery/Industriesrefinery.js';
import Industriespetrochemicals  from '../../allBlocks/Industriespetrochemicals/Industriespetrochemicals.js';
import Industrieschemical        from '../../allBlocks/Industrieschemical/Industrieschemical.js';
import Industrieslng             from '../../allBlocks/Industrieslng/Industrieslng.js';
import Industriesprocessing      from '../../allBlocks/Industriesprocessing/Industriesprocessing.js';
import Industriesep              from '../../allBlocks/Industriesep/Industriesep.js';

import './IndustriesPage.css';

export default class ServicesPage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <div className="industrybg1 col-lg-12">
      <div className="row">
        <Industriesrefinery />
        <Industriespetrochemicals />
        <Industrieschemical />
      </div>
      </div>

      <div className="industrybg2 col-lg-12">
      <div className="row">
        <Industrieslng />
        <Industriesprocessing />
        <Industriesep />
      </div>
      </div>
      </div>
    );  
  }
}

