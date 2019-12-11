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
    
    /*txtRightData(){
        return [
            
                
               {
                Consultservive : "Our Approach",
                bannerimg   : "/images/iogimplmnt.jpg",
                overviewtext:"iOG follows a structured methodology to assess goals and objectives, diagnose problems, define roadmaps and blueprints and finally implement the solution.",            
            }, 

            
                        
        ]
    }
*/

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
                cosultheading    : "",
                cosultsubheading : "Following is a partial list of the Downstream O& G Business process areas and related software solutions for which we provide Implementation services to our clients: ",
                ConsultDown      : "Refinery Planning & Scheduling",
                imageText        : "1.Implementation of Planning, Scheduling Solution",
                imageText1       :" 2.Leverage Assay Management solutions for better and updated LP inputs.",
                imageText2       :" 3.Upgrade of LP yield shift vectors using rigorous kinetic mod",
                imageText3       :" 4.Implementation of  new unit models/ revamp of existing LP models  .",
                 
            }, 
            {
                ConsultDown    : "Supply and Distribution",
                imageText      : "1.Build/re-vamp supply chain demand & distribution planning models.  ",
                imageText1     : "2.Implementation Retail automation solutions",
                imageText2     : "3.Deployment of effective Sales and Operations Planning (S&OP) and Inventory Management modules ",
            },  
             {
                ConsultDown    : "Manufacturing execution systems (MES) ",
                imageText       : "1.Development of  real-time performance monitoring tools ",
                imageText1      : "2.Implementation of  KPI’s and Profit trackers for continuous performance monitoring ",
                imageText2      : "3.Development of  customized applications and interfaces to fit client-specific requirements ",
               
            },  
            {
                ConsultDown    : "Advanced Process Control ",
                imageText      : "1.Implementation of Base Control Loop tuning ",
                imageText1      : "2.Project execution/Support services to implement recommended or specified advanced process control applications ",
            
               
            }, 
            {
                ConsultDown    : "Dynamic and Steady-State Simulation ",
                imageText      : "1.Development of dynamic/steady state simulation models ",
                imageText1      : "2.Modification/maintenance of dynamic/steady state simulation models  ",
                imageText2      : "3.Development of user-defined modules on Simulation platforms for proprietary calculations ",
               
            },  
            {
                ConsultDown    : "Rigorous Reactor Modeling ",
                imageText      : "1.Build flowsheets, calibrate and validate reactor models ",
                imageText1      : "2.Setup of Model Prediction cases and validation of yields across reactor and process units ",
                imageText2      : "3.Identify dependent and independent variables, formulate cases and generate base/shift LP vectors for LP update  ",
               
               
               
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
            <div className="col-lg-offset-1 col-lg-10 col-md-12 col-sm-12 col-xs-12">
             <h2 className=""><b>Our Approach</b></h2>
             <p className="line_paraaaa">iOG follows a structured methodology to assess goals and objectives, diagnose problems, define roadmaps
              and blueprints and finally implement the solution. </p>
             <div className=" col-lg-9 col-md-12 col-sm-12 col-xs-12">
             <img src="/images/iogimplmnt.jpg" className="implementimage"/>
             </div>
            </div>

           {/* <IogconsultTxtRight txtRightData={this.txtRightData()}/>*/}

           {/* <ConsultingServices consultingservices={this.consultingservices()}/>*/}

            <ConsultDownstream  consultdownstream={this.consultdownstream()}/>
        </div>
    </div> 
    );  
  }
}

