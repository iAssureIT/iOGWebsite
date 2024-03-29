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
                bannerimg      : "/images/news.jpeg",
                Newsyear       : "May 2013",
                NewsHeading    : "Newsletter May 2019",
                overviewtext   :" iOGSolutions presents a case study of the implementation of Assay Management solutions for a downstream refining organization in India at a seminar in Singapore. ",
               
            }, 
            {
              
                bannerimg      : "/images/newsevents.jpg",
                Newsyear       : "July 2013 ",
                NewsHeading    : "Newsletter July 2013",
                overviewtext   :"iOG Solutions signed a contract in India to provide support services for seven refineries in the area of Planning & Scheduling. ",
               
            },  
           /* {
                ChallengeTitle : "Challenges",
                Newsyear       : "Aug 2013",
                NewsHeading    : "Newsletter Aug 2013",
                bannerimg      : "/images/ch3.png",
                overviewtext   :" iOG Solutions provides support for the implementation of a corporate dashboard system for an O&G client in India. The project is being executed in Singapore.",
               
            },  
            {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch4.png",
                Newsyear       : "May 2013",
                NewsHeading    : "Newsletter May 2019",
                overviewtext:"Achieve tangible benefits for acceptance of the oil accounting system",
               
            },*/  
            /* {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch5.png",
                Newsyear       : "May 2013",
                NewsHeading    : "Newsletter May 2019",
                overviewtext:"Application/scope of Oil accounting on the refinery-wide or unit-wide basis.",
               
            },
             {
                ChallengeTitle : "Challenges",
                Newsyear       : "May 2013",
                NewsHeading    : "Newsletter May 2019",
                bannerimg   : "/images/ch6.png",
                overviewtext:"Accuracy in data imported as garbage-in garbage-out",
               
            },          
               */
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

