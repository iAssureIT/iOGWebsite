import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Iogconsultpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Iogconsultpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "iOGConsult",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "iOG provides expert consulting services to improve a client’s business process & raising them up to the best practices in the industry.",
                overviewtext2       : "iOGConsult is our service arm through which we provide extensive or specific consultation by our domain experts. Our consultants help clients in assessing their current business processes, identifying gaps and opportunities for improvement. Utilizing our strong knowledge and experience in the various aspects of the global Oil and Gas value chain, we help our clients in filling up their operational gaps and eventually unlocking hidden value delivery opportunities.",
                overviewtext3       : "",
                

            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "Our Consulting Service differentiators:",
                challengestext  : "",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Strong domain knowledge of refining, petrochemicals and other process industries."
                    },
                    {
                        ulData : "World-class technical expertise in all the leading advanced software solutions in the industry."
                    },
                    {   
                        ulData : "The unparalleled combination of domain-experts and subject matter experts, that are qualified to meet our clients’ needs and expectations."
                    },
                    {   
                        ulData : "End-to-end Implementation and Integration skills"
                    },
                    {   
                        ulData : "Extensive experience both on business and software applications"
                    },
                    {   
                        ulData : "Ability to review problems independently and bring fresh perspectives to clients."
                    },
                    {   
                        ulData : "An open mind and consultative approach to evolving best solutions that meet client requirements"
                    },
                    {   
                        ulData : "Proprietary analysis, structured consulting and decision-making approaches"
                    },
                    {   
                        ulData : "Focus on value creation and ensuring a good return on investments"
                    }
                ]
            }, 
                  
        ]
    }


  
  commonulliData(){
        return [
            {
                commonulliheading       : "iOGConsult for Downstream",
                commonullisubheading    : "Following is a partial list of our consulting services under our iOGConsult service arm.",
                commonullitext          : "We at iOG Solutions believe in providing solutions that are as unique as our clients’ requirements. Every situation is different and comes with its own specific set of constraints and our consultants can help you in identifying and addressing them in ways designed specifically to address the problem.",
                commonullitext2         : "The list offers only an overview of the typical problems we address for our clients. Do you have something specific to discuss? Connect with us now.",
                commonulliUl            : [
                    {   ulData          : "Business Process Mapping (As-Is, To-Be & Gap Analysis)",
                        commonulliLi    : [
                                            {
                                                liData : "Detailed Analysis of Business Processes and Client requirement"
                                            },
                                            {
                                                liData : "Reengineering processes to align with applications and industry best practices"
                                            },
                                            {
                                                liData : "Design organization charts for role clarity"
                                            },
                                            {
                                                liData : "Fostering of end-to-end process excellence through improvisation of inter-departmental activities"
                                            }
                                        ]
                    },
                    {   ulData : "Downstream Oil & Gas Expert Consulting & PMC services",
                        commonulliLi : [
                                            {
                                                liData : "Assessment of the business requirements, analyze and enhance the Downstream Value chain of activities comprising of Production Planning & Scheduling, Supply-Distribution, Yield accounting, Simulation, etc. through our SME services"
                                            },
                                            {
                                                liData : "Assessment of the requirements for technological and functional architecture design for an integrated solution which allows seamless flow of information between applications"
                                            },
                                            {
                                                liData : "Technology Assessment of all downstream applications"
                                            },
                                            {
                                                liData : "Value-added consulting in core areas of the downstream value chain such as Application Understanding, Domain Knowledge, Productivity Improvement opportunities related to it, Performance tuning, etc."
                                            },
                                            {
                                                liData : "Innovative dug-out of potential profit improvement areas through supporting the implementation of effective KPI’s"
                                            },
                                            {
                                                liData : "Support interface development activities"
                                            },
                                            {
                                                liData : "Introduction of new business processes to track operational gaps and enablement of sustained business excellence"
                                            },
                                            {
                                                liData : "PMC and Change Management services"
                                            }
                                        ]
                    },
                    {   
                        ulData : "Review of areas needing Application Integration",   
                    },
                    {   ulData : "Establishing industry-wide best practices",
                        commonulliLi : [
                                            {
                                                liData : "Ensure process streamlining and standardization and efficiency improvements thereof"
                                            },
                                            {
                                                liData : "Guidance to the client on domain knowledge and expertise in refinery applications"
                                            }
                                        ]
                    },
                    {   ulData : "Assessment of Readiness for Advanced Downstream Value Chain solutions",
                        commonulliLi : [
                                            {
                                                liData : "Review of performance on key metrics"
                                            },
                                            {
                                                liData : "Identification of opportunities for Infrastructure Rationalization"
                                            }
                                        ]
                    },
                    {   ulData : "Business Case (development & presentation)",
                        commonulliLi : [
                                            {
                                                liData : "Devise structured approach to transition and manage applications to arrive at Go/No-Go decisions and to decommission sunset applications"
                                            }
                                        ]
                    },
                    {   ulData : "Optimize the use of existing applications and suggest new packages to increase profitability.",
                        commonulliLi : [
                                            {
                                                liData : "Finding simplification opportunities to reduce the cost of application support while still retaining desired service levels"
                                            },
                                            {
                                                liData : "Identification of key challenges and opportunities for improvement"
                                            }
                                        ]
                    },
                    {   ulData : "FEED for Integrated Refinery Information System",
                        commonulliLi : [
                                            {
                                                liData : "Design Efficient FEED that strikes the right balance of IT investments and the business benefits of the new best-of-breed, state-of-the-art technology"
                                            },
                                            {
                                                liData : "Devise RIS FEED both for green-field refinery and brown-field expansion projects that assess the existing applications/system, evaluate client’s requirements and develop application functional and architecture specifications along with cost estimates."
                                            }
                                        ]
                    }

                ]
            }                        
        ]
    }

    imgleafblockData(){
        return [
            {
                plansTitle        : "Our Approach",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "iOG follows a structured methodology to assess goals and objectives, diagnose problems, define roadmaps and blueprints and finally implement the solution.",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/iOGConsult.png",

            }
        ]
    }

   

  render() {

    return (
      <div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 iogimplmntbrdCrm">
       <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable takelftconsult">           
           <ul class="breadcrumb breadcrumb2">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="/services" class="pathway">Services</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
                <li><a href="/servicearms" class="pathway">Service Arms</a>
                <span class="divider"><img src="/media/system/images/arrow.png" alt=""/></span></li>
                <li class="active"><span>iOGConsult</span></li></ul>
            </div>
          </div>
        </div> 
       </div>   
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Commonulliblock CommonulliData={this.commonulliData()} />
      </div>
     </div> 
    );  
  }
}

