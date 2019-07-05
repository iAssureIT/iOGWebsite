import React,{Component} from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Headingcomponent from '../../allBlocks/HeadingComponent/Headingcomponent.js';
// import InformationComponent from '../../allBlocks/InformationComponent/InformationComponent.js';
import JobsComponent from '../../allBlocks/JobsComponent/Jobscomponent.js';
import Careerimpactcomponent from '../../allBlocks/Careerimpactcomponent/Careerimpact.js';
import Maincomponent from '../../allBlocks/Maincomponent/Maincomponent.js';

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
            <Careerimpactcomponent />
            <Maincomponent />
            
            <JobsComponent />
          </div>    
    );
  }
}

export default Careerspage;



