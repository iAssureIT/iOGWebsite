import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Iogimplementpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
import IogconsultTxtRight      from '../../allBlocks/IogconsultTxtRight/IogconsultTxtRight.js';
import ConsultingServices      from '../../allBlocks/ConsultingServices/ConsultingServices.js';
import ConsultDownstream      from '../../allBlocks/ConsultDownstream/ConsultDownstream.js';


export default class Iogimplementpage extends Component {

     overviewData(){
        return [
            {
            
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "iOGImpement is a specialized solution focused on addressing the implementation requirements across the entire chain of downstream operations. iOG Solutions provides expert implementation services of advanced software solutions to meet our client’s requirements. iOG consultants come with a wealth of experience in implementing advanced software solutions across the entire Oil & Gas industry. This enables us to help our clients implement new software solutions in the areas of the downstream value chain as well as in upgrading and streamlining existing systems.",
                overviewtext2       : "",
                overviewtext3       : "",
                

            } 
                        
        ]
    }
    
    txtRightData(){
        return [
            
                
               {
                Consultservive : "Our Approach",
                bannerimg   : "/images/iOGImplement.png",
                overviewtext:"iOG follows a structured methodology to assess goals and objectives, diagnose problems, define roadmaps and blueprints and finally implement the solution.",            
            }, 

            
                        
        ]
    }


    consultingservices(){
       return [

          {
                servicetitle   : "Our differentiators",
                Consultservive : "Strong domain",
                bannerimg      : "/images/consultsrvice.png",
                overviewtext   :"Extensive cross-sector expertise with strong domain knowledge of both the Upstream and Downstream Verticals",
               
            }, 
            {
                Consultservive : "Technical Expertise",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"World-class technical expertise in some of the most advanced solutions in the industry",
               
            },  
            {
               Consultservive : "Domain Experts",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"The unparalleled combination of domain-experts in our teams. The teams are built keeping in mind our clients’ requirements and needs."
            },  
            {
                Consultservive : "Implementation",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"End-to-end Implementation skills and experience on leading-market solutions",
               
            },  
             {
                Consultservive : "Extensive",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Customization of solutions so as to cater to your specific situation",
               
            },
             {
                Consultservive : "Ability",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Provision of independent consulting on process-centric applications widely used across the world",
               
            },     
            {
                Consultservive : "Consultative",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"A young, dynamic and confident team armed with a solution and goal-oriented approach.",
               
            },  
             {
                Consultservive : "Proprietary Analysis",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Learning through sharing from our experience gained through interaction with different clients.",
               
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
                cosultheading    : "iOGImplement for Downstream",
                cosultsubheading : "We at iOG Solutions believe in providing solutions that are as unique as our clients requirements.Following is a partial listof our consulting services under our iOGConsult service arm",
                ConsultDown      : "Refinery Planning & Scheduling",
                imageText        : "Implementation of Planning, Scheduling Solution Leverage Assay Management solutions for better and updated LP inputs.",
               
            }, 
            {
                ConsultDown    : "Supply and Distribution",
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
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  NOpadding">
            <img src="/images/iogimpl.png" className="consultMainImg"/>  
        </div> 
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	    <Overview OverviewData={this.overviewData()} />

            <IogconsultTxtRight txtRightData={this.txtRightData()}/>

            <ConsultingServices consultingservices={this.consultingservices()}/>

            <ConsultDownstream  consultdownstream={this.consultdownstream()}/>
        </div>
    </div> 
    );  
  }
}

