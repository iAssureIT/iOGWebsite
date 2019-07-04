import React, {Component} from 'react';

import $                  from 'jquery';

import Resourcevideo        from '../../allBlocks/Resourcevideo/Resourcevideo.js';
import Resourcedownload        from '../../allBlocks/Resourcedownload/Resourcedownload.js';
import Resourceprivacy        from '../../allBlocks/Resourceprivacy/Resourceprivacy.js';

import './ResourcePage.css';

export default class ResourcePage extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Resourcevideo />
        <Resourcedownload />
        <Resourceprivacy />
      </div>
    );  
  }
}

