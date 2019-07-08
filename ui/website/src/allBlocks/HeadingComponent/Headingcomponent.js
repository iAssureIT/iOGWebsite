import React,{Component} from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import $ from 'jquery';


import './Headingcomponent.css';
import '../InformationComponent/InformationComponent.css';
import '../Careerimpactcomponent/Careerimpact.css';
import '../Maincomponent/Maincomponent.css';

// import informationComponent from '../informationComponent/informationComponent.js';




class Headingcomponent extends Component{
  constructor(){
    super();
     this.state={
     }

  }
  
  componentDidMount() {

  }

  render(){
    return(
    <div>
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                
                  <div>
                    <div className="line_1 col-lg-12 col-lg-offset-6"></div>
                  </div>                    
               

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <div className="img1">
                        <img src="/images/career1.jpg" alt="" className="career_intro_img" />
                    </div>
                </div>
                
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-lg-12">
                          <p className="text-justify ">
                           <div className="colorblue_txt career_line_subhead">
                           <b>Today's engineering challenges need the</b>
                           <br></br>
                           industry's best minds.<br></br>
                          </div>
                           <br></br>
                           <p className="career_line_paraone">
                           iOG Solutions is an exciting oil and gas consulting and<br></br>
                           service focused company based in Pune,India<br></br>
                           </p>
                           </p>
                        </div>
                    </div>
                    </div>
               
                <div>
                    <button className="butt_1 col-lg-6  col-lg-offset-4"><span>Browse jobs</span></button>
                </div>
            </div> 
   </div> 
    );
  }
}

export default Headingcomponent;


