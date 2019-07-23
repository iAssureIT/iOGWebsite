import React,{Component} from 'react';
/*import { render } from 'react-dom';
import {Link} from 'react-router';
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $ from 'jquery';


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
         <div className="line_headd col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                  {/* <hr></hr>*/}

                  <div className="lineee1 ">
                  </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 NOpadding">
                    <div className="row">
                        <div className="col-lg-12">
                          <p className="text-justify ">
                           <div className="col-lg-offset-1 colorblue_txt career_line_subhead">
                           <b>Today's engineering <br></br></b><b>challenges need the</b>
                           <br></br>
                           industry's best minds.<br></br>
                          </div>
                           <br></br>
                           <p className="col-lg-offset-1 career_line_paraone">
                           iOG Solutions is an exciting oil and gas consulting and<br></br>
                           service focused company based in Pune, India.<br></br>
                           </p>
                           </p>
                        </div>
                    </div>

                     {/*<div>
                    <p className="col-lg-offset-6 rcorners1">Browse Jobs <b> >></b></p>
                    </div>*/}

                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                      <div className="img1">
                          <img src="/images/career2.jpg" alt="" className="career_intro_img" />
                      </div>
                    </div>

                   

            </div> 
   </div> 
    );
  }
}

export default Headingcomponent;



