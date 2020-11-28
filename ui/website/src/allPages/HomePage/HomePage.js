import React, {Component} from 'react';

// import $                  from 'jquery';
import './HomePage.css';

import Banner                 from '../../allBlocks/Banner/Banner.js';
import Downstream             from '../../allBlocks/Downstream/Downstream.js';
import Upstream               from '../../allBlocks/Upstream/Upstream.js';
// import Socialmedia            from '../../allBlocks/Socialmedia/Socialmedia.js';
import Blogs                  from '../../allBlocks/Blogs/Blogs.js';
import Commonstream           from '../../allBlocks/Commonstream/Commonstream.js';
// import Commonimgblock         from '../../allBlocks/Commonimgblock/Commonimgblock.js';

export default class HomePage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="Bubble" >
                    <div className="Main_Cards__Bubble bub1"></div>
                     <div className="Main_Cards__Bubble bub2"></div>
                  </div>
      	<Banner />
        <Downstream />
        <Commonstream />
        <Upstream />
        <Blogs />
     </div>
    );  
  }
}

