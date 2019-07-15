import React, {Component} from 'react';

import $                  from 'jquery';
import './Assetmanagementpage.css';

import Assetinfoblock                 from '../../allBlocks/Assetinfoblock/Assetinfoblock.js';
import Assetservicesblock             from '../../allBlocks/Assetservicesblock/Assetservicesblock.js';

export default class Assetmanagementpage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <Assetinfoblock />
      <Assetservicesblock />
      </div>
    );  
  }
}

