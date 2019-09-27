import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";

import Challenges                      from '../../allBlocks/Challenges/Challenges.js';
import "./Blogcomponents.css";
import BlogContent from "../BlogContent/BlogContent.js";
export default class Blogcomponents extends Component {

componentDidMount(){
      var accordions = document.querySelectorAll('.accordion-item');

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function(e) {
        this.querySelector('.accordion-item__content').classList.toggle('is-open');
    });
}

 }
    BlogsText(){
      return [
        {
          BlogContent1     : "As we come to the middle of 2019, oil and gas companies worldwide are facing constant changes. Compliance, pollution control, supply-demand fluctuations, price volatility, and geopolitical changes are some of them worth mentioning.",
          BlogContent2     : "The one factor that is omnipresent in all these changes is technology. When it comes to technology in Oil and Gas industry, emerging technologies in predictive analytics, APM tools, drones, sensors, cloud-based systems, AI, IoT, robotics, software, and hardware automation have the potential to improve operations by reducing costs, and increasing safety, efficiency, and speed of the processes. But utilizing these technologies to improve the business processes and thus generate quick ROI from such IT investments is an uphill task.",
          BlogContent3     : "Intelligent and flexible tools such as robots and drones reduce human intervention while improving safety and operational efficiency in the oil rigs, production facilities, and pipelines. ",
          BlogText2        : "Companies use analytical and artificial intelligence solutions to process the data which gives them the ability to make decisions much faster than humans do manually.",
          BlogContent5     : "For example, drones are great at monitoring and surveillance of remote facilities such as oil wells, storage tank and flare stack inspections etc. ",
          BlogText3        : "The digitizing oil and gas pipelines, refineries, infrastructure, field and exploration site, brings all the related data on a single platform which can detect and convey data such as movements, vibrations, leakages, corrosion, and others. Using data analytics tools, it helps in converting field/market data into actionable data within the oil and gas companies that can detect patterns and get insights into potential defects or failures.",
          BlogContent7     : "Today, the biggest trend in oil and gas companies is utilizing in-house or external expertise to analyze their data.",
          BlogText4        : "Demands also grow stronger from regulators and other stakeholders to improve environmental performance and safety. Advanced data technologies such as predictive analytics offer oil and gas companies a means to solve this. Data analytics - business intelligence and predictive maintenance – both optimize production in the field by predicting supply and demand with a view to adjusting production, but also by predicting equipment maintenance needs that help streamlining operations and reducing costs further. Apart from this, another analytic that is being noticed is - Prescriptive analytics which tells the operator the root cause of the problem and provide recommendations for corrective action. ",
          BlogContent9     : "There is a critical need for oil and gas companies to invest in emerging technologies for reducing risks, increasing productivity and optimizing costs. ",
          BlogContent10    : "",
          BlogSubImg1      : "/images/blog1.2.jpg",
          BlogSubImg2      : "/images/blog1.3.jpg",  

        }, 
        {
          BlogSubImg1      : "/images/blog2.2.jpg",
          BlogSubImg2      : "/images/blog2.3.jpg",
          BlogContent1     : "EHS software solutions facilitates streamlining all aspects environmental, health and safety programs in organization. EHS software plays a key role for providing detailed and intuitive reports on incident management, audits and inspections, risk analysis, environmental management, sustainability management, etc. These solutions are designed to increase transparency - especially in audits - and improve employee engagement. ",
          BlogText1     : "EHS applications empower clients ",
          commonulliUl     : [
                    {   
                        ulData : "● to identify hazards and manage risks.",   
                    }, 
                    {   
                        ulData : "● measure and report on workplace and process safety events.",   
                    }
                ],
          BlogContent3     : "Leading EHS software solutions focus on following key areas:",
          BlogContent4     : "1. Process Safety Management:",
          BlogContent5     : "Process safety management (PSM) deals with the identification, understanding, and control of process hazards to prevent process‐related injuries and incidents. For effective PSM systems and practices, an organization-wide systematic approach is necessary to critically review the process design and associated process technologies. Any process changes and the corresponding operational and maintenance activities should be combined with emergency preparedness, safety training, etc.",
          BlogContent6     : "2. Occupational Health and Safety Management: ",
          BlogContent7     : "Today, an increasing number of organizations are now focusing on the preventative measures to safeguard their employees and processes from the unseen hazards. Workers must be made aware of the occupational hazards associated with the process and they should be competent enough to deal with these hazards.",
          BlogContent8     : "3. Environment & Sustainability Management:",
          BlogContent9     : "In recent times, environmental management concepts and sustainable development practices have been a focal point of rapidly evolving process organizations. This trend can be associated as an outburst of the public reactions, climate-change studies, activists, and concerns about the environment. The hydrocarbon industry must play an active role in addressing the environmental problems arising due to its operations. Oil and gas majors must act to reduce emissions of carbon dioxide and other greenhouse gases, and to fight alongside with public, governments to tackle global climate change problems.",
          BlogContent10    : "EHS systems and applications make it easy to manage, track and report safety-related process data. Sometimes there are multiple solutions that meet all the requirements and sometimes there is no single solution that fits all the client’s requirement although multiple solutions partially fulfill the same. Thus identifying, selecting and implementing solutions that achieve stated objectives becomes a critical task.",
          BlogContent11    : "What should a company look for in an EHS management system?",
          BlogContent12    : "EHS software aims to improve safety, reduce risk, and maintain compliance, therefore it needs:",
          commonulliUl1    : [
                    {   
                        ulTitle :"System Functionality: ",
                        ulData : "Generates accurate regulatory and internal management reports that seek out a software solution that can manage complex, high-volume environmental data and safety-related information in one scheme. It addresses business and functional requirement of process safety, occupational health and environment management in an integrated and preferably all-in-one solution.",
                    },
                    {   
                        ulTitle :"Dashboard Visibility:",
                        ulData : " Dynamic dashboards with data drill-down capability offer insightful data visualization and management transparency. Easily highlight issues immediately, analyze performance and trends over time and track corrective actions.",
                    },
                    {   
                        ulTitle :"Mobile Capability:",
                        ulData : "Mobile based apps enable employees to capture data on the go and alert management instantly of any issues.",
                    },
                   
                ]
        },
        {
          BlogContent1     : "Process industries are asset-intensive and are witnessing many improvement opportunities as owner-operators strive to enhance asset availability, performance, efficiency and reduce operational costs. To effectively leverage critical asset data for their strategic decisions, these end-users need to overcome the challenge of data consolidation and interpretation.",
          BlogContent2     : "Operators need to maintain asset integrity to avoid unplanned downtime, ensure safety and prevent environmental incidents.",
          commonulliUl : [
                    {   
                        ulTitle :"Asset Reliability and Integrity management (RIM)",
                        ulData : "focuses on all assets to ensure that these assets deliver the required functions and performance in a sustainable manner over its entire lifecycle. Each asset is first analysed from criticality perspectives based on the worst-case scenario and prepare overall risk ranking. Then maintenance strategy such as RCM, RBI or Run to Failure are evaluated for asset type and implemented through execution tools such as EAM (ex: IBM Maximo or SAP PM).",   
                    }, 
                    {   
                        ulTitle :"Industrial IoT (IIoT) ",
                        ulData : "offers the potential for better automated collection of data which would reduce the labour-intensive aspects of inspections. In Oil and Gas Sector - many companies today have begun to move toward Smart Connected Assets.",   
                    }
                ],
        
          BlogText4     : "The connectivity, integration and analytics capabilities being afforded by the IIoT are helping O&G customers to achieve new and higher levels of reliability.",
          BlogContent9     : "Leading RIM solutions offers a seamless transition from the design-and-construct phase for a large capital project in asset-intensive industries to the operate-and-maintain phase. In order to operate efficiently with setting up and planning maintenance, clients must have knowledge of the equipment, maintenance and operational procedures in the industry. The software solutions utilize these inputs to calculate the reliability and availability of an individual asset based on a reliability model.",
          BlogContent10    : "At iOG Solutions, we specialize in consulting services to Oil and Gas industry to establish best practices, capabilities and solutions. Our Asset Management services typically focus on Asset Management Strategy, Asset monitoring, Reliability & Integrity Management, Asset Analytics, Predictive and Prescriptive Maintenance etc. ",
          BlogContent11    : "We help you choose an EAM and RIM to help in the following process: At iOG Solutions, we specialize in consulting services to Oil and Gas industry to establish best practices, capabilities and solutions. Our Asset Management services typically focus on Asset Management Strategy, Asset monitoring, Reliability & Integrity Management, Asset Analytics, Predictive and Prescriptive Maintenance etc. ",
          BlogContent12    :"Major benefits with our RIM consulting service:",
          commonulliUl1 : [
                    {   
                        ulData : "Independent provider of RIM consulting services",
                    },
                    {   
                        ulData : "Value assessment for implementing RIM solution considering following key benefit areas: Generates accurate regulatory and internal management reports that seek out a software solution that can manage complex, high-volume environmental data and safety-related information in one scheme. It addresses business and functional requirement of process safety, occupational health and environment management in an integrated and preferably all-in-one solution.",
                    },
                    {   
                        ulData : "RIM best practices and blueprinting",
                    },
                    {
                        ulData : "RIM solution – shortlisting and support for technology evaluation",
                    },
                    {
                        ulData : "Preparation of RFP for implementation of RIM",
                    },
                   
                ],
          BlogContent13   : "RIM solution and services assure the integrity and performance of assets, safeguarding Health Safety Environment (HSE) while optimising lifecycle asset performance and supporting regulatory compliance. I will cover integration aspects of RIM with HSE, EAM, MES and other solution in a further blog.",
          BlogContent14   : "Reach out to us on www.iogsolutions.com to know more about services and to learn how iOG Solutions can support you with a wide range of RIM services for the upstream and downstream oil and gas facilities."

        },
        {
          BlogContent1     : "As oil refiners face an increasingly competitive global business environment, they look out for the opportunities to reduce production costs without negatively affecting product yield or quality. Improving energy efficiency reduces operating cost and improves the refinery margin. A refinery-wide energy management system implementation is one of the most important and cost-saving initiatives an organisation can undertake.",
          BlogText1     : "Energy management in a refinery or petrochemical complex can be broadly classified into:",
          commonulliUl : [
                    {   
                        ulData : "• Optimization of energy on supply side (steam generation from boilers and electricity produced from captive power plants, etc.)",   
                    }, 
                    {   
                        ulData : "• Optimization of energy consumed across the process units",   
                    }
                ], 
          BlogContent9     : "Efficient energy management calls for optimization from a granular level (say heat recovery system in a small fired heater) to a macroscopic level (such as large crude unit).",
          BlogContent10     : "Flash steam recovery, recovering heat from the blowdown water of various boilers, waste-heat steam generators, minimisation of LP steam condensation and proper steam tracer system are some of the options for process engineers to optimize steam balance in a refinery ",
          BlogContent12    : "Energy Management Solutions offer a useful handle to:",
          commonulliUl1 : [
                    {   
                        ulData : "Examine and analyse energy usage through statistical models based on Time-Series Analysis",
                    },
                    {   
                        ulData : "Highlight and resolve energy imbalances",
                    },
                    {   
                        ulData : "Identify both system-wide and equipment-specific operational cost improvements",
                    },
                    {
                        ulData : "Facilitate accurate performance monitoring",
                    },
                    {
                        ulData : "Use energy performance KPI’s to track how energy is being consumed in a plant, identify gaps between targets, historical and actual performance and identify counter measures to improve energy performance.",
                    },
                    {
                        ulData : "Real-time online energy management to increase energy efficiency, minimize the emissions of pollutants including global warming gases and reduce total energy costs",
                    },
                    {
                        ulData : "Address 'what-if' scenarios to develop optimised operating strategies during scenarios such as plant shutdowns, equipment selection, etc.",
                    },
                ],
          BlogContent13   : "iOG Solutions recently enabled, lead and supported an energy management initiative at one of the Asia’s large refinery cum petrochemical complex.",
          BlogContent14    : "",
          BlogContent15     : "",    
        },
        {
          BlogContent1     : "Machine learning provides information systems the ability to automatically learn and improve from the experience, without being explicitly programmed. It is a subset of Artificial Intelligence that focuses on the development of computer programs that can access data, use patterns and inferences and use it to teach themselves.",
          BlogContent2     : "Digitalization is the latest trend that is taking the oil and gas industry by storm. For their digitalization initiatives, refiners are using Machine Learning and Advanced Analytics as a strategy for adding value to their businesses. Machine learning presents an exciting value proposition to turn large volumes of data generated on a day-to-day basis into actionable insights.",
          BlogText4        : "The Oil and gas industry have three different maturity levels of this technology. Few players are just exploring the capabilities, some are going through proof of concepts to estimate potential whereas very few are already reaping the benefits out of AI-ML technology.  ",
          BlogContent9     : "Companies make great efforts to embrace an ever-changing technology-based environment but often struggle to put up an effective action plan thereby depriving them from tangible benefits out of such investments. A long-term strategic plan plugged in with an agile and collaborative team of Data Scientists and Domain Experts are critical success factors for extracting value in today’s technology landscape. ",
          BlogContent10    : "iOG Solutions, over the years, has developed very strong domain expertise in downstream oil and gas services and has equipped its team with skills in Data Analytics, Machine Learning and AI technologies to assist clients with their digital initiatives, ultimately delivering tangible value out of data.",
        },
      ]
    }
    BlogsData(){
        return [
            {
                id : "Blog1",
                blogDate   : "June 28, 2019",
                numOfLike  : "209",
                blogsTitle : "How oil and gas industry is embracing new age technologies?",
                blogsimg   : "/images/blog1.1.jpg",
                BlogContent1     : "As we come to the middle of 2019, oil and gas companies worldwide are facing constant changes.....",
              
            },
            {
                id : "Blog2",
                blogDate   : "June 20, 2019",
                numOfLike  : "158",
                blogsTitle : "EHS Applications in Oil & Gas",
                blogsimg   : "/images/blog2.1.jpg",
                BlogContent1     : "EHS software solutions facilitates streamlining all aspects environmental, health and safety programs in organization. ....",
               
            },
            {
                id : "Blog3",
                blogDate   : "July 28, 2019",
                numOfLike  : "250",
                blogsTitle : "Asset Reliability and Integrity Management Today",
                blogsimg   : "/images/blog3.1.jpg",
                BlogContent1     : "Process industries are asset-intensive and are witnessing many improvement opportunities as owner-operators.....",

            },
            {
                id : "Blog4",
                blogDate   : "July 28, 2019",
                numOfLike  : "200",
                blogsTitle : "Energy Management in Refineries and Petrochemicals Complex",
                blogsimg   : "/images/blog4.1.jpg",
                BlogContent1     : "As oil refiners face an increasingly competitive global business environment, they look out for the opportunities....",

            },
            {
                id : "Blog5",
                blogDate   : "July 28, 2019",
                numOfLike  : "170",
                blogsTitle : "Leveraging Machine Learning to add value to the Oil & Gas business.",
                blogsimg   : "/images/blog5.1.jpg",
                BlogContent1     : "Machine learning provides information systems the ability to automatically learn and improve from the experience.....",

            },
           
        ]
    }
    Commonleafulblock(){
        return [
            {
              challengesTitle : "iOG Service Offerings",
              challengestext  : "Our Data Management Service offerings include:",
              challengestext2 : "",               
            }, 
                  
        ]
    }
/*
    componentWillMount() {
        $(window).scroll(function() 
      {    
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
          $(".htAuto").addClass("ht1100");
        } else {
            $(".htAuto").removeClass("ht1100");
        }
      });
    }*/
   

  render(){
    return(
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  NOpadding">
        {
          this.BlogsData().map((data, index)=>{
            return (
            <div key={index} >
              <div className="col-lg-3 Allblog">
                <div className="All1blog1 pricehover-float">
                  <a className="" id="" role="button" data-parent="#" href={"/blogs/"+data.id}  aria-controls="" >
                    <img className="img-responsive AllblogImgB" src={data.blogsimg} alt="Bannerpng"/>
                    <label className="blogDate blogsText mtop20 graycolor">{data.blogDate}</label>
                    <label className="blogDate blogsText mtop20 graycolor pull-right"><i className="fa fa-thumbs-up"></i> &nbsp;{data.numOfLike}</label><br/>
                    <h4 className="blogTitle blogsText"><b>{data.blogsTitle}</b></h4>
{/*                    <p className="blogPara blogsText graycolor">{data.BlogContent1}</p>*/}
                  </a>
                </div>                               
              </div>
            </div>
            );
          })
        }                        
      </div>
    );
  }
}