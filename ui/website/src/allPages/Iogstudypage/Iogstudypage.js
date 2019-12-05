import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
// import './Iogtrainpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
// import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
import IogconsultTxtRight      from '../../allBlocks/IogconsultTxtRight/IogconsultTxtRight.js';
import ConsultingServices      from '../../allBlocks/ConsultingServices/ConsultingServices.js';
import ConsultDownstream      from '../../allBlocks/ConsultDownstream/ConsultDownstream.js';




export default class Iogstudypage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "iOGTrain",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "iOGTrain is a dedicated training and orientation solution providing expert training services on downstream process technologies, advanced software applications, and the various Oil & Gas business processes. Rapid developments in the field of advanced solutions demand to impart the workforce with the necessary skills and competencies.",
                

            } 
                        
        ]
    }

  
  

    txtRightData(){
        return [
            
                
               {
                Consultservive : "Our Approach",
                bannerimg   : "/images/consultrightimg.png",
                overviewtext:"iOG follows a structured methodology to assess goals and objectives, diagnose problems, define roadmaps and blueprints and finally implement the solution.",
               
            }, 

            
                        
        ]
    }


    consultingservices(){
       return [

          {
                servicetitle   : "Our differentiators:",
                Consultservive : "Refinery Planning & Scheduling",
                bannerimg      : "/images/consultsrvice.png",
                overviewtext   :"Customized training programs such as Conceptual training for Sr. Management, Best Modelling/ Model Maintenance practices and solution analysis",
               
            }, 
            {
                Consultservive : "Supply and Distribution",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"World-class technical expertise in all the leading advanced software solutions in the industries",
               
            },  
            {
               Consultservive : "Manufacturing Execution Systems ",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"The unparalleled combination ofdomain-experts & subjectmatter experts, that are qualified to meet our clients’ needs and expectations."
            },  
            {
                Consultservive : "Dynamic and Steady-State Simulation",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"End-to-end Implementation and Integration skills",
               
            },  
             {
                Consultservive : "Rigorous Reactor Modelling",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Extensive experience  on  software applications",
               
            },
             {
                Consultservive : "Advanced Process Control",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Ability to review problems independently and bring fresh perspectives to clients.",
               
            },     
                
        ]
    }

    consultdownstream(){
        return[


           {
                cosultheading    : "iOGConsult for Downstream",
                cosultsubheading : "We at iOG Solutions believe in providing solutions that are as unique as our clients requirements.Following is a partial listof our consulting services under our iOGConsult service arm",
                ConsultDown      : "BUSINESS PROCESS MAPPING",
                imageText        : "Design Efficient FEED that strikes the right balance of IT investments and the business",
               
            }, 
            {
                ConsultDown    : "FEED FOR INTEGRATED",
                imageText      : "Detailed Analysis of Business Processes & Client quirement Reengineering processes to align",
               
            },  
             {
                ConsultDown    : "DOWNSTREAM OIL & EXPERT",
                imageText      : "Assessment of the business requirements, analyze and enhance the Downstream",
               
            },  
            {
                ConsultDown    : "OPTIMIZE THE OF EXISTING",
                imageText      : "Finding simplification opportunities to reduce the cost of application support",
               
            }, 
            {
                ConsultDown    : "BUSINESS CASE",
                imageText      : "Devise structured ap-proach to transition and manage applications to",
               
            },  
            {
                ConsultDown    : "REVIEW OF AREAS NEEDING",
                imageText      : "Detailed Analysis of Business Processes & Client quirement Reengineering processes to align",
               
            },
            {
                ConsultDown    : "ESTABLISHING INDUSTRY",
                imageText      : "Ensure process streamlining & standardization and efficiency improvements thereof",
               
            },  
            {
                ConsultDown    : "ASSESSMENT OF READINESS",
                imageText      : "Review of performance on key metrics Identification of opportunities for Infrastructure Rationalizationscing",
               
            },    
                  
        ]

    }

 render() {

    return (
      <div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <img src="/images/concultback.png" className="consultMainImg"/>  
      </div>  
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Overview OverviewData={this.overviewData()} />
        <IogconsultTxtRight txtRightData={this.txtRightData()}/>
        <ConsultingServices consultingservices={this.consultingservices()}/>
        <ConsultDownstream  consultdownstream={this.consultdownstream()}/>
        {/*<Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Commonulliblock CommonulliData={this.commonulliData()} />*/}
      </div>
     </div> 
    );  
  }
}

