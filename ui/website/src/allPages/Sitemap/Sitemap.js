import React,{Component}      from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Map from '../../allBlocks/Map/Map.js';

import './Sitemap.css';
class Sitemap extends Component{
  constructor(){
    super();
     this.state={
     }

  }
  render(){
  
    return(
          <div className="siteMapBlock"> 
            <Map />
          </div>    
    );
  }
}

export default Sitemap;



