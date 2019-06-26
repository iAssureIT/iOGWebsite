import React,{Component} from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Headingcomponent from './HeadingComponent/Headingcomponent.js';


class Careerspage extends Component{
  constructor(){
    super();
     this.state={
     }

  }
  
  render(){
    return(
          <div>
          <Headingcomponent />
          </div>    
    );
  }
}

export default Careerspage;



