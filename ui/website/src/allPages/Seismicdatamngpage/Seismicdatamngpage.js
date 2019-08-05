import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Seismicdatamngpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Seismicdatamngpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Seismic Data Management",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Seismic data helps to get a geophysical picture of sub-surface structures. Interpretation of sub-surface structures for, seismic data is indeed a difficult task. for the evaluation of well productivity and reservoir characteristics, iOG provides well test solutions over the entire E & P cycle including Drilling, Completion and Production phases. Our team is experienced in the interpretation of data acquired from single & multi-well test, deliverability tests.",
                overviewtext2  : "iOG’s Seismic Data Management Service Offerings  include:",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Geophysical data conversion and reformatting",
                    },
                    {  
                        ulData : "Data validation and QC services",
                    },
                    {  
                        ulData : "Merging of navigation data into SEG-D/SEG-Y",
                    },
                    {  
                        ulData : "Implementation of Geophysical lifecycle data solutions",
                    },
                    {  
                        ulData : "Complete plotting services for seismic data, maps, sections and well logs",
                    },
                    {  
                        ulData : "Management of Seismic Application Data",
                    },
                    {  
                        ulData : "Seismic Data Migration",
                    },
                    {  
                        ulData : "Recovering Field Data from tapes.",
                    }
                ],
                commonulliUl2  : []


            } 
                        
        ]
    }


      

    imgleafblockData(){
        return [
            {
                plansTitle        : "",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/sismicdata.png",

            }
        ]
    }

   
   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
      </div>
    );  
  }
}

