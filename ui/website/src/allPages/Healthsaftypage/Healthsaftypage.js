import React, {Component} from 'react';

import $                  from 'jquery';
import './Healthsaftypage.css';

import Healthinfoblock                 from '../../allBlocks/Healthinfoblock/Healthinfoblock.js';
import Healthservicesblock             from '../../allBlocks/Healthservicesblock/Healthservicesblock.js';

export default class Healthsaftypage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <Healthinfoblock />
      <Healthservicesblock />
      </div>
    );  
  }
}

