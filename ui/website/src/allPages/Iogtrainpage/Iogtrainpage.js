import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Iogtrainpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
// import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Iogtrainpage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "iOGTrain",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "iOGTrain is a dedicated training and orientation solution providing expert training services on downstream process technologies, advanced software applications, and the various Oil & Gas business processes. Rapid developments in the field of advanced solutions demand to impart the workforce with the necessary skills and competencies.",
                overviewtext2       : "We provide onsite skill-enhancement training workshops customized to meet the client’s need, with modules that focus on the actual application of those skills at our client’s facilities in order to run the business effectively with the highest standards of deliveries. The iOG team comes with strong cross-domain knowledge and extensive experience in delivering advanced software solutions throughout the downstream Oil & Gas value chain. They thus can help clients in training their frontline, operational, technical and management personnel.",
                overviewtext3       : "iOG Solutions brings to our clients the best and most relevant training programs, certified by the International Certification Agencies. Our training programs are custom designed, factoring in the present skill levels of your team.",
                overviewtext4       : "Our approach is to provide providing a combination of modules conducted by experts, projects conducted at the client locations, field and lab training, providing hands-on experience on some of the most advanced technologies in the market. This enables client teams to keep pace with the rapidly evolving Oil & Gas downstream industry and optimally address the real-world challenges.",
                

            } 
                        
        ]
    }

  
  commonulliData(){
        return [
            {
                commonulliheading       : "Our Training Services:",
                commonullisubheading    : "",
                commonullitext          : "iOG Solutions offers standard & customized training programs on most of leading industry software solutions in the following core areas of Oil & Gas downstream:",
                commonullitext2         : "The list offers only an overview of the typical domain-training programs we conduct for our clients. Do you have any specific topic that you want your team to get trained on? Discuss it with us.",
                commonulliUl            : [
                    {   ulData          : "Refinery Planning & Scheduling",
                        commonulliLi    : [
                                            {
                                                liData : "Essential, Intermediate and Advanced training courses on leading Aspen (PIMS, APS) and Haverly products (GRTMPS, HCAMS, H/Sched, etc.)"
                                            },
                                            {
                                                liData : "Customized training programs such as Conceptual training for Sr. Management, Best Modelling/ Model Maintenance practices and solution analysis"
                                            },
                                            {
                                                liData : "Best practices training on how to carry out Planning, Scheduling and Retro-analysis BP’s"
                                            }
                                        ]
                    },
                    {   
                        ulData : "Supply and Distribution",   
                    },
                    {   
                        ulData : "Manufacturing Execution Systems (MES)",   
                    },
                    {   
                        ulData : "Dynamic and Steady-State Simulation",   
                    },
                    {   
                        ulData : "Rigorous Reactor Modelling",   
                    },
                    {   
                        ulData : "Advanced Process Control",   
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
                plansimg          : "images/iogtrain.png",

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
                <li class="active"><span>iOGTrain</span></li></ul>
            </div>
          </div>
        </div> 
       </div>   
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Commonulliblock CommonulliData={this.commonulliData()} />
      </div>
     </div>  
    );  
  }
}
