import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Iogconsultpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
import IogconsultTxtRight      from '../../allBlocks/IogconsultTxtRight/IogconsultTxtRight.js';
import ConsultingServices      from '../../allBlocks/ConsultingServices/ConsultingServices.js';
import ConsultDownstream      from '../../allBlocks/ConsultDownstream/ConsultDownstream.js';

export default class Iogconsultpage extends Component {

     overviewData(){
        return [
            {
                
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "iOG provides expert consulting services to improve a client’s business process & raising them up to the best practices in the industry iOGConsult is our service arm through which we provide extensive or specific consultation by our domain experts. Our consultants help clients in assessing their current business processes, identifying gaps and opportunities for improvement. Utilizing our strong knowledge and experience in the various aspects of the global Oil and Gas value chain, we help our clients in filling up their operational gaps and eventually unlocking hidden value delivery opportunities.",
                overviewtext3       : "",
                

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
                servicetitle   : "Our Consulting Service differentiators",
                Consultservive : "Strong domain",
                bannerimg      : "/images/consultsrvice.png",
                overviewtext   :"Strong domain knowledge of refining, petrochemicals & other process industries",
               
            }, 
            {
                Consultservive : "Technical Expertise",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"World-class technical expertise in all the leading advanced software solutions in the industries",
               
            },  
            {
               Consultservive : "Domain Experts",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"The unparalleled combination ofdomain-experts & subjectmatter experts, that are qualified to meet our clients’ needs and expectations."
            },  
            {
                Consultservive : "Implementation",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"End-to-end Implementation and Integration skills",
               
            },  
             {
                Consultservive : "Extensive",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Extensive experience  on  software applications",
               
            },
             {
                Consultservive : "Ability",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Ability to review problems independently and bring fresh perspectives to clients.",
               
            },     
            {
                Consultservive : "Consultative",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"An open mind and consultative approach to evolving best solutions that meet client requirements",
               
            },  
             {
                Consultservive : "Proprietary Analysis",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Proprietary analysis,structured consulting and decision-making approaches",
               
            },
             {
                Consultservive : "Value creation",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Focus on value creation and ensuring a good return on investments",
               
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
      <div className="col-lg-11  col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />

        <IogconsultTxtRight txtRightData={this.txtRightData()}/>

        <ConsultingServices consultingservices={this.consultingservices()}/>

        <ConsultDownstream  consultdownstream={this.consultdownstream()}/>
      </div>
     </div> 
    );  
  }
}

