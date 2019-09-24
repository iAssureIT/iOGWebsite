

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Map.css';

export default class Map extends Component {

  
    render(){
        return(
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sitemap">
            <div className="row mapouter">
              <div className="gmap_canvas">
                <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=iog%20magarpatta&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                <a href="https://www.embedgooglemap.org%26quot%3B%26gt%3Bembedgooglemap.org%26lt%3B"></a>
              </div>
            </div>
          </div>   
        );
    }
}
