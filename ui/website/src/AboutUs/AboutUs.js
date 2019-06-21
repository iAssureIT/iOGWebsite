import React, { Component } from 'react';
import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './AboutUs.css';


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
                <div className="col-lg-12 contentWraper">
                    <div className="row">
                        <div className="col-lg-12">
                              <div className="col-lg-6">
                                  <div className="col-lg-12">
                                      <h2 className="textcolorblue para-top">Company Profile</h2>
                                      <p className="text-justify ">
                                       iOG Solutions stands for intelligent O&G solutions.
                                       iOG Solutions is an independent and reputed provider of consulting and 
                                       implementation services for advanced and intelligent Software solutions 
                                       in the Oil & Gas industry. Our headquarters have been established since 
                                       2013 in Pune (India).
                                       </p>

                                       <p className="text-justify ">
                                       We always work with a strong motive to provide our clients with best-in-class services of international standards. We are an incredible team of professionals with rich experience in various domains across the Oil & Gas industry. We constantly strive hard to gain insights in our customer’s business module and provide innovative solutions that integrate discretely operating business processes across the value chain to a unified profit making center with clear alignment to the goals and objectives of our client.
                                       </p>
                                  </div>
                              </div>
                              <div className="col-lg-6"></div>
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-lg-12">
                        <div className="col-lg-6"></div>
                              <div className="col-lg-6">
                                  <div className="col-lg-12 ">
                                      <h2></h2>
                                        <p className="text-justify pull-right">
                                         As we serve the Oil & Gas industry across the world, we constantly 
                                         encounter challenges and we work smart and hard to turn them into a rich experience.
                                         </p>

                                       <p className="text-justify pull-right">
                                         iOG has a strong domain experience in Oil & Gas industry and
                                         experience on leading software solutions in the area of MES,
                                         SCM, Modeling, Optimization and other software solutions.
                                         We deliver true results, focus on decisions and practical actions
                                         tailored for our clients’ unique requirement.
                                       </p>

                                       <p className="text-justify pull-right">
                                         We engage at all levels of an organization, build momentum and capabilities to sustain success. 
                                         Our key strength is personnel by creating an enriching atmosphere that allows us to attract,
                                         train and retain the best talent.
                                         </p>
                                  </div>
                              </div>
                              
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-lg-12">
                                  <div className="col-lg-12 ">
                                      <h2 className="textcolorblue text-center para1-top"><b>Our</b> Engagement Model</h2>
                                      <p className="text-center ">
                                          iOG delivers services to the industry through 4 distinct arms of engagement.
                                          We would consider it our privilege to join hands and work with you to explore 
                                          every possibility of enhancing your company’s profitability. We are only a phone
                                          call or email away from you.Looking forward to an opportunity to partner with you.
                                        </p>          
                                  </div>
                              </div>
                              <div className="col-lg-3 block block1height">
                              <p className="iog_txt"><b>iOG</b>Study</p>
                              </div>
                              <div className="col-lg-3 block1 block2height">
                              <p className="iog_txt1"><b>iOG</b>Implement</p>
                              </div>
                              <div className="col-lg-3 block block1height">
                              <p className="iog_txt"><b>iOG</b>Consult</p>
                              </div>
                              <div className="col-lg-3 block block1height">
                              <p className="iog_txt"><b>iOG</b>Train</p>
                              </div>
                        </div>
                       

                        <div className="row">
                        <div className="col-lg-12">
                              <div className="btm_txt col-lg-6">
                                  <div className="col-lg-12 ">
                                      <h2></h2>
                                      <p className="text-justify">
                                      iOG operates through a team of young and innovative consultants which has strong domain
                                      knowledge in upstream and downstream aspects of the O & G industry and all leading software
                                      solutions pertaining to the industry.
                                       </p>

                                       <p className="text-justify">
                                          The team has executed many projects within the last few years spanning Europe,
                                          the Middle East, India, and South East Asia..
                                       </p>

                                       <p className="text-justify">
                                      Needless to add, the impact of iOG interventions and its support is directly reflected 
                                      in the phenomenal growth and progress of the company engaging its services.

                                       </p>
                                  </div>
                              </div>
                              <div className="col-lg-6"></div>
                            </div>
                        </div> 

                        <div className="row">
                        <div className="col-lg-12 ">
                         <div className="col-lg-6"></div>
                              <div className=" col-lg-6">
                                  <div className="col-lg-12 block block1height b1width">
                                      <h2 className="textcolorblue vision_align1">VISION</h2>
                                      <p className="text-justify vision_align">
                                      To be a global market leader in Intelligent Support
                                      Systems for Oil and Gas Industry.
                                       </p>
                                       </div>
                                       <div className="col-lg-12 block block1height b2width">
                                       <h2 className="textcolorblue mission_align">MISSION</h2>
                                       <p className="text-justify">
                                          Nurture a talented team of professionals to provide
                                          best-in-class consulting and implementation servic-
                                          es improving the profitability of our valued clients
                                          across the globe.
                                       </p>
                                       </div>                                       
                                  </div>
                              </div>
                            </div>

                        <div className="row">
                        <div className="col-lg-12 head_spacing">
                        <div className="col-lg-6"></div>
                              <div className="col-lg-6">
                                  <div className="col-lg-12 ">
                                      <h2 className="txt-size-director textcolorblue"><b>Pankaj Zawar</b></h2>
                                      <h1 className="txt-size-founder">Founder and Director of iOG Solutions</h1>
                                        <p className="para_spacing text-justify pull-right">
                                        Our Founder and Director, Pankaj Zawar is a chemical engineer from
                                        UICT, Mumbai with 20+ years of experience in providing consulting, en-
                                        gineering and implementation services for MES, APC and SCM solu-
                                        tions. Pankaj has worked with Reliance at Jamnagar refinery as PIMS &
                                        Optimization consultant. He then moved to business consulting and ex-
                                        panded the scope to MES, APC, and SCM at Aspen Technology. He has
                                        been at the forefront of consulting with several remarkable projects at
                                        various national and international oil and gas majors. He has been the
                                        distinguished recipient of prestigious President Award for Excellence
                                        twice at Aspen Technology
                                         </p>                                      
                                  </div>
                              </div>
                              
                            </div>
                        </div>
                      </div> 

                       


                 
                   

        );
    } 
}