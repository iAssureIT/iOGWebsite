import React, { Component } from 'react';
import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './AboutUs.css';
import Header from '../Header/Header.js';



export default class AboutUs extends Component {
   aboutusData(){
        return [
            {
                aboutusTitle : "Company Profile",
                aboutusLi : [
                    {
                        liData : "iOG Solutions stands for intelligent O&G solutions.iOG Solutions is an independent and reputed provider of consulting and implementation services for advanced and intelligent Software solutions in the Oil & Gas industry. Our headquarters have been established since 2013 in Pune (India)."
                     },
                    {
                        liData : " We always work with a strong motive to provide our clients with best-in-class services of international standards. We are an incredible team of professionals with rich experience in various domains across the Oil & Gas industry. We constantly strive hard to gain insights in our customer’s business module and provide innovative solutions that integrate discretely operating business processes across the value chain to a unified profit making center with clear alignment to the goals and objectives of our client."
                    },
                            ]
            }, 
            {
                aboutusTitle : "",
                aboutusLi : [
                    {
                        liData : "As we serve the Oil & Gas industry across the world, we constantly encounter challenges and we work smart and hard to turn them into a rich experience."
                    },
                    {
                        liData : "iOG has a strong domain experience in Oil & Gas industry and experience on leading software solutions in the area of MES, SCM, Modeling, Optimization and other software solutions. We deliver true results, focus on decisions and practical actions tailored for our clients’ unique requirement."
                    },
                    {
                        liData : "We engage at all levels of an organization, build momentum and capabilities to sustain success. Our key strength is personnel by creating an enriching atmosphere that allows us to attract, train and retain the best talent."
                    },
                ]
            }, 
            {
                aboutusTitle : "Our Engagement Model",
                aboutusLi : [
                    {
                        liData : "iOG delivers services to the industry through 4 distinct arms of engagement.We would consider it our privilege to join hands and work with you to explore every possibility of enhancing your company’s profitability. We are only a phone call or email away from you.Looking forward to an opportunity to partner with you."
                    },                   
                ]
            }, 

            {
                aboutusTitle : "",
                aboutusLi : [
                    {
                        liData : "iOG operates through a team of young and innovative consultants which has strong domain knowledge in upstream and downstream aspects of the O & G industry and all leading software solutions pertaining to the industry."
                    },
                    {
                        liData : "The team has executed many projects within the last few years spanning Europe, the Middle East, India, and South East Asia."
                    },
                    {
                        liData : "Needless to add, the impact of iOG interventions and its support is directly reflected in the phenomenal growth and progress of the company engaging its services."
                    },
                ]
            }
          ]
      }
    


  // xyz(){
  //   return(0);
  // }

 render(){
       return(
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contentWraper">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <div className="curve_img">
                  <img src="/images/1.png" alt="" />
                </div>
             </div>
                    <div className="col-lg-2 col-offset-1">
                    <div className="line1"></div>
                    </div>                    
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <div className="col-lg-12">
                                    
                                      <h2 className="textcolorblue para-top"><b>Company</b> Profile</h2>
                                      <p className="text-justify ">
                                       <div className="line_subhead">iOG Solutions stands for intelligent O&G solutions.</div>
                                       <br></br>
                                       <p className="line_para">iOG Solutions is an independent and reputed <b>provider of con-<br></br>
                                       sulting and implementation services on advanced and intel-<br></br>
                                       ligent Software solutions</b>in the Oil & Gas industry. Our head-<br></br>
                                       quarters have been established since 2013 in Pune (India).
                                       </p>
                                       </p>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                <div className="img1">
                                  <img src="/images/2.png" alt="" className="intro_img" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-6 col-md-6 hidden-sm hidden-xs img1">
                              <img src="/images/3.png" alt="" className="third_img" />
                          </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  {/*<div className="col-lg-6 col-md-16 col-sm-12 col-xs-12 ">*/}
                                      <h2></h2>
                                        <p className="line_para1 text-justify ">
                                        We have a strong team of team of motivated
                                        and self-driven consultants with strong
                                        domain knowledge in areas of Supply Chain
                                        Management (SCM), Manufacturing Execution 
                                        Systems (MES), Simulation & Modeling,
                                        Energy Management, Asset Reliability & In
                                        tegrity Management (RIM), Environmen
                                        tal-Health-Safety (EHS), Enabling Technolo
                                        gies and Oil & Gas E&P services.
                                         </p>
                                  {/*</div>*/}
                              </div>
                              
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                  <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-lg-offset-5 line2"></div>
                                      <h2 className="textcolorblue text-center para1-top"><b>Our</b> Engagement Model</h2>
                                      <br></br>
                                      <p className="line_para2  text-center">
                                          iOG delivers services to the industry through 4 distinct arms of engagement.We would consider it our privi-<br></br>
                                          lege to join hands and work with you to explore every possibility of enhancing your company’s profitability.<br></br>
                                           We are only a phone call or email away from you.Looking forward to an opportunity to partner with you.<br></br>
                                        </p>          
                                  </div>
                              </div>
                        </div>
                        <div  className="col-lg-12 blk_ht">
                              <div className="col-lg-3  col-md-3 col-sm-12 col-xs-12">
                                <div className="aboutus_block aboutus_block1height">
                                <div className="icon1">
                                <img src="/images/Icon_1.png" alt="" className="icn_1" />
                                <img src="/images/11.png" alt="" className="icn1_hover"  />
                                </div>
                                  <p className="iog_txt"><b>iOG</b>Study</p>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="aboutus_block aboutus_block1height">
                                <div className="icon2">
                                <img src="/images/Icon_2.png" alt="" className="icn_2" />
                                <img src="/images/12.png" alt="" className="icn2_hover"  />
                                </div>
                                <p className="iog_txt "><b>iOG</b>Implement</p>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="aboutus_block aboutus_block1height">
                                <div className="icon3">
                                <img src="/images/Icon_3.png" alt="" className="icn_3" />
                                <img src="/images/13.png" alt="" className="icn3_hover"  />
                                </div>
                                <p className="iog_txt "><b>iOG</b>Consult</p>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="aboutus_block aboutus_block1height">
                                <div className="icon4">
                                <img src="/images/Icon_4.png" alt="" className="icn_3" />
                                <img src="/images/14.png" alt="" className="icn4_hover"  />
                                </div>
                                <p className="iog_txt "><b>iOG</b>Train</p>
                                </div>
                              </div>
                       </div>

                        <div className="row">
                        <div className="bckgrnd_curve_img  col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <div className="btm_txt">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <h2></h2>
                                      <div className="col-lg-2 line_yellow">
                                      </div>
                                      <p className="line_para3 text-justify">
                                      Our key strength is our Team. iOG operates through a team
                                      of young and innovative consultants which has strong
                                      domain knowledge in all aspects of the O&G value chain
                                      and expertise in all leading software solutions. Needless to
                                      add, the impact of iOG interventions and its support is directly reflected in the phenomenal growth and progress of
                                      the company engaging its services.
                                      </p>
                                  </div>
                                  </div>
                              </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <img src="/images/4.png" alt="" className="truck" />
                            </div>
                            </div>
                        </div> 

                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img1">
                              <img src="/images/5.png" alt="" className="plane" />
                        </div>
                              <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blck blck1height b1width">
                                      <h2 className="line_subhead textcolorblue vision_align1">VISION</h2>
                                      <p className="text-justify vision_align">
                                      <b>To be a global market leader in Intelligent Support
                                      Systems for Oil and Gas Industry.</b>
                                       </p>
                                       </div>
                                       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blck blck2height b2width">
                                       <h2 className="line_subhead textcolorblue mission_align">MISSION</h2>
                                       <p className="text-justify">
                                          <b>Nurture a talented team of professionals to provide
                                          best-in-class consulting and implementation servic-
                                          es improving the profitability of our valued clients
                                          across the globe.</b>
                                       </p>
                                       </div>                                       
                                  </div>
                              </div>
                            </div>

                        <div className="row">
                        <div className="backgrd_curve1 col-lg-12 col-md-12 col-sm-12 col-xs-12 head_spacing">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img1">
                              <img src="/images/7.png" alt="" className="director_img"/>
                        </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                      <h2 className="para-top3 txt-size-director textcoloryellow"><b>Pankaj Zawar</b></h2>
                                      <h1 className="txt-size-founder">Founder and Director of iOG Solutions</h1>
                                        <p className="para_spacing text-justify pull-right">
                                        Our Founder and Director,<b> Pankaj Zawar</b> is a chemical engineer from
                                        UICT, Mumbai with 20+ years of experience in providing consulting,engineering
                                        and implementation services for MES, APC and SCM solutions.
                                         </p> 
                                        
                                       <ul className="alg_lft">
                                      <li className="line_ht">Strong domain knowledge in Oil and Gas industry</li>
                                      <li className="ln_ht">Strong skills in using refinery LP and Scheduling tools 
                                          for refinery production planning and scheduling.</li>
                                      <li className="ln_ht2">Led several remarkable MES and SCM projects at state-owned.<br></br>
                                          Private refineries and petrochemical plants in India, SE Asia, and the Middle East.</li>
                                      </ul>                                     
                                  </div>
                              </div>
                              
                            </div>
                        </div>
                     
                      </div>       

        );
    } 
}