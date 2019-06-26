import React, {Component} from 'react';
import $                  from 'jquery';
import './HomePage.css';

import Banner             from '../Banner/Banner.js';
import Downstream             from '../Downstream/Downstream.js';
import Upstream             from '../Upstream/Upstream.js';
import Contactform             from '../Contactform/Contactform.js';
import Footer             from '../Footer/Footer.js';
import Socialmedia             from '../Socialmedia/Socialmedia.js';
import Effects             from '../effects/effects.js';

export default class HomePage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Banner />
        <Downstream />
        <Upstream />
        <Socialmedia />
       <Effects />
      </div>
    );  
  }
}

