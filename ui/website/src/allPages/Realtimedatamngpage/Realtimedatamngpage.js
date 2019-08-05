import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Realtimedatamngpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Realtimedatamngpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Real time Production Data Management",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "At iOG solutions, our objective is to help our clients track hydrocarbon-related data in real time throughout the E&P life cycle, with a high degree of automation. Our real-time data management capabilities can support the clients in ensuring that their drilling engineers, reservoir engineers and production engineers are always working on the latest data.",
                overviewtext2  : "Mapping the entire upstream value chain in real-time will ensure that any problems in the process are spotted immediately and timely responses are effected to mitigate them. We offer customized deployment of data management systems for optimizing the data flow between business units so that engineers, geologists and others related to the data can access data they need on a single platform and access it from anywhere. This, in turn, leads to an increased efficiency in terms of time and cost",
                overviewtext3  : "Real Time Production Data Management (in a Real Time Operation Centre) is effected through the PRODML data format. Production data does not have large sizes. However the diversity of data makes it difficult, with data covering volume, mass, energy and density, with data readings taken at different places. There are often several data versions.",
                overviewtext4  : "Real-time production data management tools make it easier to manage production data and engineering workflows. It is used for both daily and monthly data reporting. We provide solutions which are scalable to our client’s infrastructure and leverage their existing capability. Our solutions utilize standard work flows and provide automatic responses to real time data changes.",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Collect data:",
                        commonulliLi : [
                                            {
                                                liData : "Compliance with industry’s data standards for facilitating integration"
                                            },
                                            {
                                                liData : "Overall integration of the data flows"
                                            }
                                        ]
                    },
                    {  
                        ulData : "Data Quality and consistency:",
                        commonulliLi : [
                                            {
                                                liData : "Implementation of standard data processing workflows"
                                            },
                                            {
                                                liData : "Automation support"
                                            },
                                            {
                                                liData : "Higher confidence and control over the data"
                                            }
                                        ]

                    },
                    {  
                        ulData : "Analysis and Reporting:",
                        commonulliLi : [
                                            {
                                                liData : "Multiple well handling"
                                            },
                                            {
                                                liData : "KPI support"
                                            },
                                            {
                                                liData : "Data-warehouse/business intelligence"
                                            },
                                            {
                                                liData : "Advanced analytics and visualization tools"
                                            }
                                        ]

                    }
                ]


            } 
                        
        ]
    }

   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
      </div>
    );  
  }
}

