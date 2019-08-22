

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Map.css';

export default class Map extends Component {

  
    render(){
        return(
          <div className="">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=iog%20magarpatta&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://www.embedgooglemap.org%26quot%3B%26gt%3Bembedgooglemap.org%26lt%3B"></a>
              </div>
              
            </div>
          </div>   
        );
    }
}
