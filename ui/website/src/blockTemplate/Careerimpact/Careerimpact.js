import React,{Component} from 'react';
// import { render } from 'react-dom';
// import renderHTML from 'react-render-html';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

// import $ from 'jquery';

import './Careerimpact.css';

class Careerimpact extends Component{

     constructor(props) {
    super(props);
    this.state = {

                
      blocks: {
        "blockTitle"          : "<b>Be a part of our exciting journey!</b>",
        "blockDescription"    : "<li>Relevant work experience in petroleum industry</li><li>Bachelor's/ Master's Degree in Petroleum/Mechanical/Chemical.</li><li>Thorough knowledge of drilling and work-over operations</li><li>Ability to determine data requirements for carrying out various studies,gather relevant data and proper utilization of the data.</li><li>Skilled in Landmark Software Package like WellPlan, Compass, WellCat, StressCheck, and Openwells</li><li>Experience in OLGA- Wells Management software</li><li>Good experience in designing of vertical,horizontal, multi-laterals, complex wells etc. </li><li>Experience in carrying out drilling and work-over operations</li><li>Knowledge of emerging new technology in drilling and ability to implement new solutions based on feasibility study</li><li>Independently write drilling programs, design drill strings and implements strategies</li><li>Expert in implementation of technological upgradation in drilling technology</li><li>Independently supervise and provide expert support for technically challenging projects</li><li>Expert in Well Control opertions, Blow-out prevention, knowledge of various well control equipment used in drilling operations</li><li>Knowledge of drilling muds, mud-pumps,rotary equipments, other rig equipments etc</li><li>Completion of industry recognized certified courses in Drilling Technology will be an added advantage</li> <li>Experience in preparation of field development plan,field monitoring and simulation studies using industry standard numerical simulators.</li><li>Analyzing geological data and interpreting well-logging results to ascertain resource potential</li><li>Carry out fluid characterization studies and prepare black oil as well as compositional PVT and Equation of State</li><li>Estimating reserves and forecasting for property evaluations and development planning.</li><li>Carrying out reservoir simulation studies to optimize recoveries.</li><li>Predicting reserves and performance for well proposals.</li><li>Predicting and evaluating waterflood and enhanced recovery performance.</li><li>Developing and applying reservoir optimization techniques.</li><li>Developing cost-effective reservoir monitoring and surveillance programs.</li><li>Performing reservoir characterization studies and analyzing pressure transients.</li><li>Designing and coordinating petrophysical studies.</li><li>Analyzing the economics and risk assessments of major development programs.</li><li>Skilled in Numerical reservoir modelling,Production forecasting,Decline curve analysis,Well test design and interpretation,Development planning,Reservoir fluid analysis,Well design optimization,Economic modelling.</li><li>Experience using Simulators like Eclipse,IMEX,STARS,GEM,tNavigator,Forgas,<br/>COMET3,Tempest,Petrel RE or other E&P software.</li><li>Coding experience will be highly advantageous like C,C++,Fortran,Matlab,Python etc</li>" ,
       
        "blockComponentName"  : "Careerimpact",
        "fgImage"             : "images/career_2.png",
        "repeatedBlocks"      : 
                          [
                            {
                              "Title"       : "WELL ENGINEER",
                              "SubTitle"    : "Pune",
                              "Description" : "Implementation of the Data Historian Tool",
                              
                              
                          },
                          {
                            "Title"         : "RESERVOIR ENGINEER",
                              "SubTitle"    : "Mumbai",
                              "Description" : "Implementation of the Data Historian Tool",
                              
                             
                          },
                          {
                              "Title"       : "PRODUCTION TECHNOLOGIST",
                              "SubTitle"    : "Pune",
                              "Description" : "Implementation of the Data Historian Tool",
                            
                          }
        ],
      },
      blockID:"",
      block_id:""
    }; 

    
  }
componentDidMount(){
/*console.log("==>",this.props.block_id);*/
      var accordions = document.querySelectorAll('.accordion-item');

      for (var i = 0; i < accordions.length; i++) {
          accordions[i].addEventListener('click', function(e) {
              this.querySelector('.accordion-item__content').classList.toggle('is-open');
          });
      }
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                  console.log("career response---------------------",response);
                    if(response.data){
                      this.setState({
                          blocks:response.data
                      });
                    }                  
                  })           
                .catch(function(error){
                  console.log(error);
                    if(error.message === "Request failed with status code 401")
                      {
                          // swal("Your session is expired! Please login again.","", "error");
                      }
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
}

/*



CareersData(){
        return [
            {
                careersTitle : "WELL ENGINEER",
                location     : "Pune",
                careersimg   : "/images/Illustration_2.png",
                careerstext  : "",
                // para         : "<li>Relevant work experience in petroleum industry</li><li>Bachelor's/ Master's Degree in Petroleum/Mechanical/Chemical.</li><li>Thorough knowledge of drilling and work-over operations</li><li>Ability to determine data requirements for carrying out various studies,gather relevant data and proper utilization of the data.</li><li>Skilled in Landmark Software Package like WellPlan, Compass, WellCat, StressCheck, and Openwells</li><li>Experience in OLGA- Wells Management software</li><li>Good experience in designing of vertical,horizontal, multi-laterals, complex wells etc. </li><li>Experience in carrying out drilling and work-over operations</li><li>Knowledge of emerging new technology in drilling and ability to implement new solutions based on feasibility study</li><li>Independently write drilling programs, design drill strings and implements strategies</li><li>Expert in implementation of technological upgradation in drilling technology</li><li>Independently supervise and provide expert support for technically challenging projects</li><li>Expert in Well Control opertions, Blow-out prevention, knowledge of various well control equipment used in drilling operations</li><li>Knowledge of drilling muds, mud-pumps,rotary equipments, other rig equipments etc</li><li>Completion of industry recognized certified courses in Drilling Technology will be an added advantage</li>" 
            },
            {
                careersTitle : "RESERVOIR ENGINEER",
                location     : "Mumbai",
                careersimg   : "/images/Illustration_2.png",
                    
                
            },
            {
                careersTitle : "PRODUCTION TECHNOLOGIST",
                location     : "Pune",
                careersimg   : "/images/Illustration_2.png",
                    
                
            },
            {
                careersTitle : "CONSULTANT-GEOPHYSICIST",
                location     : "Banglore",
                careersimg   : "/images/Illustration_2.png",
            },
            {
                careersTitle : "CONSULTANT-GEOLOGIST",
                location     : "Pune",
                careersimg   : "/images/Illustration_2.png",
                    
                
            },

            {
                careersTitle : "CONSULTANT-DATA MANAGEMENT",
                location     : "Pune",
                careersimg   : "/images/Illustration_2.png",
                    
                
            },

            {
                careersTitle : "SUPPLY CHAIN CONSULTANT(REFINERY PLANNING)",
                location     : "Delhi",
                careersimg   : "/images/Illustration_2.png",
            },
            {
                careersTitle : "SUPPLY CHAIN CONSULTANT(REFINERY SCHEDULING)",
                location     : "Pune",
                careersimg   : "/images/Illustration_2.png",
            },

            {
                careersTitle : "MES CONSULTANT",
                location     : "Sydney",
                careersimg   : "/images/Illustration_2.png",
            },
            {
                careersTitle : "MANAGER-PROJECTS ",
                location     : "Pune",
                careersimg   : "/images/Illustration_2.png",
            },
            {
                careersTitle : "MANAGER-BUSINESS DEVELOPEMENT",
                location     : "Rio",
                careersimg   : "/images/Illustration_2.png",
                
            },
            {
                careersTitle : "UPSTREAM PRODUCTION OPTIMIZATION CONSULTANT",
                location     : "Singapore",
                careersimg   : "/images/Illustration_2.png",
                
            },
            {
                careersTitle : "APC CONSULTANT",
                location     : "Pune",
                careersimg   : "/images/Illustration_2.png",
                    
                
            },
            
        ]
    }*/

  render(){
    console.log("CareersData ==",this.state.blocks.repeatedBlocks[0].Description)
    return(
     <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
     <div className="row">
      <div>
       {/* <div className="lineee2 col-lg-12 col-lg-offset-6"></div>*/}
      </div>       
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Padding_career">
          <h2 className="career_para-top2 text-center"style={{color:"#333"}}dangerouslySetInnerHTML={{ __html: this.state.blocks.blockTitle}} ></h2>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 career2_img">
              <div className="img_2">
                <img src={this.state.blocks.fgImage} alt="" className="img-responsive" />
              </div>
          </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                
                  <div className="row spacing1">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                              {
                                this.state.blocks.repeatedBlocks.map((data, index)=>{
                                  var textPara = this.state.para;
                                  var textPara1 = this.state.para1;
       
                                  console.log("textPara",textPara);
                                 return (
                                          <div key={index} className="panel panel-default blockdefault">
                                            <div className="panel-heading" role="tab" id="headingThree">
                                              <h4 className="panel-title">
                                              <a className="collapsed careerAnchorhover" role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapseThree"+index} aria-expanded="false" aria-controls="collapseThree">
                                                {data.Title}
                                              </a>
                                            </h4>
                                            </div>
                                            <div id={"collapseThree"+index} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                              <div className="panel-body">
                                                <h3 className="full_head padding_zero">Title</h3>
                                                <p>{data.Title}</p>
                                                <h3 className="full_head padding_zero">Location</h3>
                                                <p>{data.SubTitle}</p>
                                                <h3 className="full_head padding_zero">Job Information</h3>
                                                <h5>ROLES AND RESPONSIBILITIES</h5>
                                                <ul className="simple_list bottom_pad" dangerouslySetInnerHTML={{ __html: data.Description}}></ul>
                                                <h5>QUALIFICATIONS AND EDUCATION REQUIREMENTS</h5>
                                                <ul className="simple_list bottom_pad">
                                                  <li>Bachelor's/ Master's Degree in Petroleum/Mechanical/Chemical.</li>
                                                </ul>
                                                <h5>
                                                  Send CVs on 
                                                <b>
                                                  <a href="mailto:careers@iogsolutions.com"> careers@iogsolutions.com</a>
                                                </b>
                                                </h5>
                                                  {data.careerstext}
                                                <div>
                                                    <a href="/form" className="btn lightbluebg buttonhover buttonn_1 col-lg-6 col-lg-offset-8" role="button" onClick={this.handleShow}>Click here to apply</a>
                                                </div>
                                              </div>
                                              
                                            </div>
                                          </div>
                                          );
                                      })
                                }
                        </div>
                      </div>
                  </div>
                </div>
              </div>       
        </div>
      </div>
    </div>

    );
  }
}


export default Careerimpact;
