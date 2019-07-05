import React, {Component} from 'react';

import $                  from 'jquery';

import Videocontentblock        from '../../allBlocks/Videocontentblock/Videocontentblock.js';

import './VideoPage.css';

export default class VideoPage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Videocontentblock />
      </div>
    );  
  }
}

