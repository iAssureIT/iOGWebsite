
import React, {Component} from 'react';

import $                  from 'jquery';
import './AssetCriticalAnalysisPage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';
import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';


export default class AssetCriticalAnalysisPage extends Component {
  ServicesData(){
        return [
            {
                /*servicesTitle    : "Asset Criticality Analysis",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg      : "/images/1.png",
                servicestext     : "iOG Solutions consider Asset Criticality Analysis as one of the important parts which help the industry yo discover and analyse their assets and it’s various associated criticality factors based on the risk of failure associated with the equipment along with knowing how reliable and durable it is going to be in the longer run of the plant. ",
                servicestext2    : "Asset criticality analysis mainly deals with the following factors while inspecting a plant for criticality of assets which are running and are planned to be run in the plant:"
                    */
                
            } 
                        
        ]
    }



  render() {


    return (

      <div>
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 takeleft">
        <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable">           
          <ul class="breadcrumb breadcrumb1 breadcrumb4">
          <li class="active">&nbsp;</li><li>
          <a href="/" class="pathway">Home</a>
          <span class="divider">
          <img src="/media/system/images/arrow.png" alt=""/></span></li>
          <li><a href="/industries" class="pathway">Industries</a>
          <span class="divider"><img src="/media/system/images/arrow.png" alt=""/></span></li>
          <li class="active"><span>Pectrochemical</span></li></ul>
            </div>
        </div>
       </div> 
     </div>  
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="downstreambg1">
          <div> 
           <img src="/images/1.png" className="assetimg"/>
            <h1 className="assetimgtxt">Asset Criticality Analysis</h1>
          </div>
           <div className="criticalitytext col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <div className="col-lg-1">
            <img src="/images/3.png" className="assetTxticon"/>
           </div>
            <p className="col-lg-offset-1 criticalitytext1"> <b>iOG Solutions consider Asset Criticality Analysis as one of the important parts which help the industry to<br/>
                discover and analyse their assets and it’s various associated criticality factors based on the risk of
                failure<br/> </b></p>
           <div className="col-lg-12 col-md-12">
            <p className="criticalitytext12"><b>associated with the equipment&nbsp; along with knowing how reliable and durable it is going to be in the 
                longer run of<br/> the plant.</b></p>
           </div>     
          </div> 
          <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 colxs-12">
           <p className="criticalitytext123">Asset criticality analysis mainly deals with the following factors while inspecting a plant for
            criticality of assets which are running and<br/> are planned to be run in the plant:</p>
          </div>
          <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 listposition">
          <div className="col-lg-2 assetlisticon">
           <div className="iconcircle"></div>
          </div> 
          <div className="col-lg-10 col-md-10">
           <h4>Preventive Maintenance (PM) history</h4>
          </div>
          </div> 
           <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 listposition">
          <div className="col-lg-2 assetlisticon">
           <div className="iconcircle"></div>
          </div> 
          <div className="col-lg-10 col-md-10">
           <h4>Ability to isolate/recover from single-point-failures</h4>
          </div>
          </div> 
           <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 listposition">
          <div className="col-lg-2 assetlisticon">
           <div className="iconcircle"></div>
          </div> 
          <div className="col-lg-10 col-md-10">
           <h4>Corrective Maintenance (CM) history</h4>
          </div>
          </div> 
           <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 listposition">
          <div className="col-lg-2 assetlisticon">
           <div className="iconcircle"></div>
          </div> 
          <div className="col-lg-10 col-md-10">
           <h4>Environmental, Health, and Safety impact</h4>
          </div>
          </div> 
           <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 listposition">
          <div className="col-lg-2 assetlisticon">
           <div className="iconcircle"></div>
          </div> 
          <div className="col-lg-10 col-md-10">
           <h4>Mean-Time-Between-Failures (MTBF) or “Reliability”</h4>
          </div>
          </div> 
           <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 listposition">
          <div className="col-lg-2 assetlisticon">
           <div className="iconcircle"></div>
          </div> 
          <div className="col-lg-10 col-md-10">
           <h4>Spares lead-time</h4>
          </div>
          </div> 
           <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 listposition">
          <div className="col-lg-2 assetlisticon">
           <div className="iconcircle"></div>
          </div> 
          <div className="col-lg-10 col-md-10">
           <h4>Asset replacement value</h4>
          </div>
          </div> 
          <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 colxs-12 listposition">
           <p className="criticalitytext123">Based on the information gathered from the inspection the assets are then arranged
            according to their criticality rank which helps to <br/>  prioritize the actions to be taken on any particular
            asset among the criticality list. This helps the Operations/Plant head to be predictive<br/> and reliable in 
            terms of avoiding any kind of downtime and hazards in the plant.</p>
          </div>
          <div div className="col-lg-12 col-md-12 img2ndasset">
            <img src="/images/2.png" className="col-lg-offset-3 image2ndasset"/>
          </div>
        </div> 
      </div>
      </div> 
    );  
  }
}




/*
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './AssetCriticalAnalysisPage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';
 
export default class AssetCriticalAnalysisPage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Asset Criticality Analysis",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "iOG Solutions consider Asset Criticality Analysis as one of the important parts which help the industry to discover and analyse their assets and it’s various associated criticality factors based on the risk of failure associated with the equipment along with knowing how reliable and durable it is going to be in the longer run of the plant. ",
                overviewtext2  : "Asset criticality analysis mainly deals with the following factors while inspecting a plant for criticality of assets which are running and are planned to be run in the plant:",
                overviewtext3  : "We focus mainly on interpreting the data obtained using Seismic methods. A comprehensive interpretation of seismic data requires an understanding of the subsurface formations, and their effect on wave characteristics & reception. We use industry-standard tools for seismic interpretation which enable the following workflow.",
                overviewtext4  : "Based on the information gathered from the inspection the assets are then arranged according to their criticality rank which helps to prioritize the actions to be taken on any particular asset among the criticality list. This helps the Operations/Plant head to be predictive and reliable in terms of avoiding any kind of downtime and hazards in the plant.",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Preventive Maintenance (PM) history"
                    },
                    {
                        ulData : "Ability to isolate/recover from single-point-failures"
                    },
                    {   
                        ulData : "Corrective Maintenance (CM) history"
                    },
                    {   
                        ulData : "Environmental, Health, and Safety impact"
                    },
                    {   
                        ulData : "Mean-Time-Between-Failures (MTBF) or “Reliability”"
                    },
                    {   
                        ulData : "Spares lead-time"
                    },
                    {   
                        ulData : "Asset replacement value"
                    }
                ]

            } 
                        
        ]
    }
    

  render() {  
    return (

        <div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 iogimplmntbrdCrm refinerybrdCrm ">
         <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable">           
           <ul class="breadcrumb breadcrumb2">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="/services" class="pathway">Expertise</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>      
                <li class="active"><span>Asset Criticality</span></li></ul>
            </div>
          </div>
        </div> 
       </div> 
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
          	<Overview OverviewData={this.overviewData()} />
          </div>
          <div className="">
           <img src="/images/2.png"/>
          </div>
       </div> 
    );  
  }
}*/

