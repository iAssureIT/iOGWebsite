import React, {Component} from 'react';

import $                  from 'jquery';
import './HomePage.css';

import Banner                 from '../../allBlocks/Banner/Banner.js';
import Downstream             from '../../allBlocks/Downstream/Downstream.js';
import Upstream               from '../../allBlocks/Upstream/Upstream.js';
import Socialmedia            from '../../allBlocks/Socialmedia/Socialmedia.js';
import Blogs                  from '../../allBlocks/Blogs/Blogs.js';

export default class HomePage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Downstream />
        <Upstream />
        <Blogs />
      </div>
    );  
  }
}

