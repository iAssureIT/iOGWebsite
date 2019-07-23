import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Challenges.css';

export default class Challenges extends Component {

ChallengesData(){
        return [
            {
                challengesTitle : "Planning Challenges",
                challengestext  : "At this juncture, it is worthwhile to mention that the challenges involved in devising a robust plan are many.Following are a partial list of these challenges:"
            }, 
                  
        ]
    }

    ChallengesData1(){
        return [
            {
                
                challengestext2  : "Usage of advanced techniques in LP tools such as advanced optimization, adherent recursion; non-linear optimization and mixed integer programming resolve the above issues to a great extent."
            }, 
                        
        ]
    }

    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  
                    <hr className="grey_line col-lg-12 col-md-12 col-sm-12 col-xs-12 "></hr>
                 
                   {
                    this.ChallengesData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <p className="challenges_line_subheadd ">{data.challengesTitle}</p>
                                            <p className="challenges_line_paraaaa">{data.challengestext}
                                            <br></br>
                                            </p> 
                                           </div>

                                           
                                           <ul className="challenges_list">
                                           <li>Choice of the right set of prices to be used in LP (often derived as a function of both forecaste available quotes) as these play a major role in optimization</li>
                                           <li>Choice of the right tool for planning that best suits the refinery needs</li>
                                           <li>Availability and ease of receiving the necessary inputs for completing the planning process</li>
                                           <li>Identification and incorporation of valid constraints from an exhaustive list that truly matters the mostIdentification and incorporation of valid constraints from an exhaustive list that truly matters the most</li>
                                           <li>Identification of a cushion to cover for the operational inefficiencies such as in blending, unit start-up, and shut-down plan.</li>
                                           <li>Application of an approach which is more practical rather than theoretical to avoid situations such a tea-spoon blending in product recipes</li>
                                           <li>Accuracy of the LP model is strongly dependent on the inputs from related tools such as Assay Data from simulation models fine-tuned unit-wise yield and limitations from rigorous reactor models etc.</li>
                                           <li>LP model’s inherent limitations such as assumption of linearity in refinery operations, local optima which may lead to incorrect decision-making</li>
                                           <li>The need for both holistic (Multi-plant model) and realistic approaches at the corporate and refinery level respectively.</li>
                                           </ul>
                                           
                                           
                                            


                                       </div>
                                      </div>
                                    </div>         
                                  </div>
                                     );
                                  })
                               }


                   {
                    this.ChallengesData1().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                          <p className="challenges_line_paraaaa2">{data.challengestext2}
                                          </p>
                                       </div>
                                      </div>
                                    </div>         
                                  </div>
                                     );
                                  })
                               }




                                    
                                           
                               
                          </div>




                        </div>

        );
    }
}