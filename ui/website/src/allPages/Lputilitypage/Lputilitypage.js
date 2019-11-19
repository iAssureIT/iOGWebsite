import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Lputilitypage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Lputilitypage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Use of Simulation models for the LP Model",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "It is a common problem in the refinery planning world that process unit yields and stream properties do not match with the actual plant performance because of poorly maintained and infrequently audited LP models. The problem gets further magnified when the LP model is used to make decisions from a global perspective as the unit inter-dependency plays a major role and the accuracy of the data in the individual sub-models is the key to take the right decisions in such situations.",
                overviewtext2       : "Process simulation tools with kinetic reactor models have a valuable role to play in maintaining and improving the accuracy of the LP Planning models as the reactor models can be tuned to match real operations using specialized calibration interfaces. More accurate planning models enable refiners to make more confident feedstock selections and deliver achievable operating plans.",
                overviewtext3       : "Process unit kinetic reactor models with an integrated flowsheet simulation tool generate data are used for the LP model process unit sub-models. Utilities which develop yield shift vectors are many which include “Delta-Base Utility” in Aspen HYSYS, “LP Utility” in KBC Petro-SIM, and “Sensitivity Analysis Tool” in Invensys ROMeo, to name a few. Excel template integration of the utility output with widely used LP tools such as Aspen PIMS, Haverly GRMTPS, Spiral Suite, etc. will enhance the productivity of the business.",
            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Following is the typical approach adopted in the generation of yield shift vectors using rigorous simulation:",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "Process unit model calibration followed by validation using design data"
                    },
                    {
                        ulData : "Build entire flow-sheets around the process unit model"
                    },
                    {   
                        ulData : "Complete model validation using actual plant data"
                    },
                    {   
                        ulData : "Run a large number of cases to identify and isolate dependent and independent variables"
                    },
                    {   
                        ulData : "Perform statistical analysis to visualize the effect on dependent variables (process unit yield) due to unit changes in independent variables (process unit feed quality)."
                    },
                    {   
                        ulData : "The analysis can be carried out in the simulation software itself (easier to guide into the LP model) or outside of the tool using scenario dependent user defined excel templates."
                    }
                ]
            }, 
                  
        ]
    }


  
  commonulliData(){
        return [
            {
                commonulliheading : "iOG offerings",
                commonullisubheading : "",
                commonullitext  : "We, at iOG Solutions, have in-depth knowledge in the usage and implementation of the aforementioned utilities and we offer onsite and offline services in the following areas:",
                commonulliUl : [
                    {
                        ulData : "Build unit kinetic reactor models using rigorous simulation"
                    },
                    {
                        ulData : "Model Calibration and validation"
                    },
                    {
                        ulData : "Model validation using actual plant data"
                    },
                    {
                        ulData : "Precise data generation for LP tools through case scenarios and statistical analysis"
                    },
                    {
                        ulData : "Build customized LP utility templates to pass on base and delta yield vector data from the simulation tool to LP models"
                    },
                    {
                        ulData : "Data validation and reconciliation to ensure data completeness"
                    },
                    {
                        ulData : "Optimization of refinery-wide performance using integrated models."
                    }
                ]
            }                        
        ]
    }

    imgleafblockData(){
        return [
            {
                plansTitle        : "",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "LP models with updated yield shift vectors facilitate the generation of accurate refinery plans which reflect actual plant performance which will serve as a useful guide to generate detailed refinery schedules, maximize asset utilization and therefore drive improved decisions and enhance profitability.",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/lputility.jpg",

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
                <li class="active"><span>LP Utility</span></li></ul>
            </div>
          </div>
        </div> 
       </div>   
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
	    <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Commonulliblock CommonulliData={this.commonulliData()} />
      </div>
      </div>
    );  
  }
}

