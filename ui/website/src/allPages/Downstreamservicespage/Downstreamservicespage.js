import React, {Component} from 'react';

import $                  from 'jquery';
import './Downstreamservicespage.css';

import Downstreaminfoblock                 from '../../allBlocks/Downstreaminfoblock/Downstreaminfoblock.js';
import Downstreamservicesblock             from '../../allBlocks/Downstreamservicesblock/Downstreamservicesblock.js';

export default class Downstreamservicespage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <Downstreaminfoblock />
      <Downstreamservicesblock />
      </div>
    );  
  }
}

