import React, {Component} from 'react';

// import $                  from 'jquery';
import './Digitalservicespage.css';

import Digitalserviceinfoblock                 from '../../allBlocks/Digitalserviceinfoblock/Digitalserviceinfoblock.js';
import Digitalservicesblock             from '../../allBlocks/Digitalservicesblock/Digitalservicesblock.js';

export default class Digitalservicespage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <Digitalserviceinfoblock />
      <Digitalservicesblock />
      </div>
    );  
  }
}

