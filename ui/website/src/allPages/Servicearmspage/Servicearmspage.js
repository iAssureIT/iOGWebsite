import React, {Component} from 'react';

import $                  from 'jquery';
import './Servicearmspage.css';

import Servicearminfoblock                 from '../../allBlocks/Servicearminfoblock/Servicearminfoblock.js';
import Servicearmservicesblock             from '../../allBlocks/Servicearmservicesblock/Servicearmservicesblock.js';

export default class Servicearmspage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <Servicearminfoblock />
      <Servicearmservicesblock />
      </div>
    );  
  }
}

