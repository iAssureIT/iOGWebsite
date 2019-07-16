import React, {Component} from 'react';

// import $                  from 'jquery';
import './Upstreamservicespage.css';

import Upstreaminfoblock                 from '../../allBlocks/Upstreaminfoblock/Upstreaminfoblock.js';
import Upstreamservicesblock             from '../../allBlocks/Upstreamservicesblock/Upstreamservicesblock.js';

export default class Upstreamservicespage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <Upstreaminfoblock />
      <Upstreamservicesblock />
      </div>
    );  
  }
}

