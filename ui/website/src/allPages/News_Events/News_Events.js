import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './News_Events.css';

// import ExpertiseTemplateBanner          from '../../allBlocks/ExpertiseTemplateBanner/ExpertiseTemplateBanner.js';
import TemplateOverview                 from '../../allBlocks/TemplateOverview/TemplateOverview.js';
import ApplicationsTemp                 from '../../allBlocks/ApplicationsTemp/ApplicationsTemp.js';
import News_Events                      from '../../allBlocks/News_Events/News_Events.js';
import ServicesOffered                  from '../../allBlocks/ServicesOffered/ServicesOffered.js';
import AccountingUI                     from '../../allBlocks/AccountingUI/AccountingUI.js';
import ExpertiseTemplateBanner           from '../../allBlocks/ExpertiseTemplateBanner/ExpertiseTemplateBanner.js';

export default class News_Events_Page extends Component {

   

    News_Events(){
        return [
            
            {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/news.jpeg",
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



  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding ">
         <h2 className="BT1_bannerTitle text-center HistorianTitle">News & Events</h2>
          <img src="/images/acc.png" className="BT1_img"/>
        </div>
       
        <News_Events News_Events={this.News_Events()}/>
     
      	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      </div>
    );  
  }
}

