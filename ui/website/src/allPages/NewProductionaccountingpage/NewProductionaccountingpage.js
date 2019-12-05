import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './NewProductionaccountingpage.css';

import TemplateBanner          from '../../allBlocks/TemplateBanner/TemplateBanner.js';
import TemplateOverview        from '../../allBlocks/TemplateOverview/TemplateOverview.js';
import ApplicationsTemp        from '../../allBlocks/ApplicationsTemp/ApplicationsTemp.js';
import ChallengesTemp          from '../../allBlocks/ChallengesTemp/ChallengesTemp.js';
import ServicesOffered         from '../../allBlocks/ServicesOffered/ServicesOffered.js';
import AccountingUI            from '../../allBlocks/AccountingUI/AccountingUI.js';

export default class NewProductionaccountingpage extends Component {

  tempalebannerData(){
        return [
             {
                bannerTitle : "Production Accounting",
                bannerimg   : "/images/acc.png",
               
            }           
        ]
    }
    templateOverviewData(){
        return [
             {
                overviewTitle : "Overview",
                bannerimg   : "/images/block1.png",
                overviewtext:"The Production accounting application performs reconciliation of the measured raw data and provides accurate data for daily production accounting and performance reporting. It provides reconciled data for daily, weekly and monthly reporting and provides key inputs for fiscal / revenue accounting. It also provides other tangible and nontangible benefits such as loss minimization, quality giveaway minimization, etc.",
               
            }           
        ]
    }

    applicationsright (){

     
      return  [     
              {
                featureTitle :"App4",
                featureText  :"Accurate production data inflow for Refinery profitability assessment",
                icon         :"images/star.png"
              },  
            
              {

                featureTitle :"App6",
                featureText  :"Precise classification and reporting of accounted and unaccounted losses",
                icon         :"images/star.png"
              },  
              

              ]     
        }

    challengesData(){
        return [
            
            {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch1.png",
                overviewtext:"Accuracy in data imported as garbage-in garbage-out",
               
            }, 
            {
              
                bannerimg   : "/images/ch2.png",
                overviewtext:"Man hours wasted in tracking and resolving gross errors",
               
            },  
            {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch3.png",
                overviewtext:"Ineffective communication between the yield accounting engineer and with other concerned staff.",
               
            },  
            {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch4.png",
                overviewtext:"Achieve tangible benefits for acceptance of the oil accounting system",
               
            },  
             {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch5.png",
                overviewtext:"Application/scope of Oil accounting on the refinery-wide or unit-wide basis.",
               
            },
             {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch6.png",
                overviewtext:"Accuracy in data imported as garbage-in garbage-out",
               
            },          
               
        ]
    }

    servicesOffered(){
        return [
            
            {
                servicepageTitle   :"Services Offered",
                bannerimg          : "/images/s1.png",
                serviceTitle       : "Service1",
                serviceText        : "Consulting services to study the oil accounting system “As-is” and provide best-in-class solutions to improve instrumentation reliability and network infrastructure robustness.",
               
            }, 
            {
               
                bannerimg      : "/images/s2.png",
                serviceTitle   : "Service2",
                serviceText    : "Provide solutions for auditing the oil accounting system and develop procedures to aid transparency and repeatability and gain refinery-wide acceptance",
               
            },  
            {
               
                bannerimg   : "/images/s3.png",
                serviceTitle   : "Service3",
                serviceText    : "Design and establish “best-practice” standardized and customized reports",

            },  
            {
               
                bannerimg   : "/images/s4.png",
                serviceTitle   : "Service4",
                serviceText    : "Implementation and support of production accounting tool",

            },    
            {
               
                bannerimg   : "/images/s5.png",
                serviceTitle   : "Service5",
                serviceText    : "Deploy expert solutions to track and mitigate gross errors in complicated networks",

            },
            {
               
                bannerimg   : "/images/s6.png",
                serviceTitle   : "Service6",
                serviceText    : "Tuning and maintenance of oil accounting systems to reduce daily and monthly imbalances to tolerant levels",

            },            
               
        ]
    }


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <TemplateBanner    tempalebannerData={this.tempalebannerData()} />
      <TemplateOverview  templateOverviewData={this.templateOverviewData()}/>
      <ApplicationsTemp  applicationsright={this.applicationsright()}/>
      <ChallengesTemp challengesData={this.challengesData()}/>
      <AccountingUI/>
      <ServicesOffered servicesOffered={this.servicesOffered()}/>
      
      	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      </div>
    );  
  }
}

