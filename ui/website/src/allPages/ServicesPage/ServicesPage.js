import React, {Component} from 'react';

import $                  from 'jquery';

import Servicesdownblock  from '../../allBlocks/Servicesdownblock/Servicesdownblock.js';
import Servicesupblock  from '../../allBlocks/Servicesupblock/Servicesupblock.js';
import Servicesarms  from '../../allBlocks/Servicesarms/Servicesarms.js';
import Servicesdigital  from '../../allBlocks/Servicesdigital/Servicesdigital.js';
import Servicesasset  from '../../allBlocks/Servicesasset/Servicesasset.js';
import Serviceshealth  from '../../allBlocks/Serviceshealth/Serviceshealth.js';
import Servicesimgblockone  from '../../allBlocks/Servicesimgblockone/Servicesimgblockone.js';
import Servicesimgblocktwo  from '../../allBlocks/Servicesimgblocktwo/Servicesimgblocktwo.js';

import './ServicesPage.css';

export default class ServicesPage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Servicesdownblock />
        <Servicesupblock />
        <Servicesimgblockone />
        <Servicesdigital />
        <Servicesasset />
        <Serviceshealth />
        <Servicesimgblocktwo />
        <Servicesarms />
      </div>
    );  
  }
}

