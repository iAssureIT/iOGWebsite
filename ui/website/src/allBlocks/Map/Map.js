

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Map.css';

export default class Map extends Component {

  
    render(){
        return(
          <div>
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <h1 className="text-center sitemapheading"><span className="sitemapheading1">SITEMAP</span></h1>
           </div>
            <div className=" col-lg-12 col-md-12 col-xs-12  ">
             <div className="maindiv1234 servicediv col-lg-3 ">
              
               <div className="mainpages ">
                <span class="bottomlinksraquo left_h21 "></span> 
                 <a href="/about-us" className="Aboutuslink">ABOUT US</a><br/>
                  <div className="col-lg-6 sitemapline"></div>
                </div>
                <div className="submenu"> 
                <span class="bottomlinksraquo  subdata "></span> <a href="/about-us" className="">Company Profile</a><br/>
                <span class="bottomlinksraquo  subdata "></span> <a href="/founderprofile" className="">Founder's Profile</a><br/>
                <span class="bottomlinksraquo  subdata "></span> <a href="/ourjourny" className="">Our Journey</a><br/>
                </div>

              </div>
               <div className="maindiv1234 servicediv col-lg-3">
                <div className="mainpages ">
                <span class="bottomlinksraquo left_h21"></span> 
                 <a href="/services" className="Aboutuslink">SERVICES</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div>
                <div className="submenu">
                  <span class="bottomlinksraquo  subdata"></span> <a href="/iogimplement" className="">iOGImplement</a><br/>
                  <span class="bottomlinksraquo  subdata"></span> <a href="/iogconsult" className="">iOGConsult</a><br/>
                  <span class="bottomlinksraquo  subdata"></span> <a href="/iogtrain" className="">iOGTrain</a><br/>
                  <span class="bottomlinksraquo  subdata"></span> <a href="/iogstudy" className="">iOGStudy</a><br/>
                </div>
               </div> 
              <div className="maindiv1234 servicediv col-lg-3 ">
                <div className="mainpages">
                <span class="bottomlinksraquo"></span> 
                 <a href="/industries" className="Aboutuslink">INDUSTRIES</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div> 
                <div className="submenu submenuindustries">
                <span class="bottomlinksraquo  subdata"></span> <a href="/iogimplement" className="">Refinery</a><br/>
                <span class="bottomlinksraquo  subdata"></span> <a href="/iogconsult" className="">Petrochemicals</a><br/>
                <span class="bottomlinksraquo  subdata"></span> <a href="/iogtrain" className="">Chemicals</a><br/>
                <span class="bottomlinksraquo  subdata"></span> <a href="/iogstudy" className="">LNG</a><br/>
                <span class="bottomlinksraquo  subdata"></span> <a href="/iogstudy" className="">Gas Processing</a><br/>
                <span class="bottomlinksraquo  subdata"></span> <a href="/iogstudy" className="">Oil & Gas E & P</a><br/>
               </div>
              </div>
               <div className="maindiv1234 servicediv col-lg-3">
                <div className="mainpages ">
                <span class="bottomlinksraquo left_h21"></span> 
                 <a href="/careers" className="Aboutuslink">Careers</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div><br/>
                <div className="mainpages ">
                <span class="bottomlinksraquo left_h21"></span> 
                 <a href="/blog" className="Aboutuslink">Blogs</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div><br/>
                <div className="mainpages ">
                <span class="bottomlinksraquo left_h21"></span> 
                 <a href="/resource" className="Aboutuslink">Resources</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div><br/>
                 <div className="mainpages ">
                <span class="bottomlinksraquo left_h21"></span> 
                 <a href="/contact-us" className="Aboutuslink">Contact Us</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div><br/>
               
               </div> 
             </div>
             <div className=" col-lg-12 col-md-col-sm-12 col-xs-12 NOPadding  ">
              
               <div className=" col-lg-12 col-md-12 col-xs-12  ">
                <div className=" servicediv col-lg-3 "> 
               <div className="mainpages ">
                <span class="bottomlinksraquo left_h21 "></span> 
                 <a href="/about-us" className="Aboutuslink">Planning & Scheduling</a><br/>
                  <div className="col-lg-6 sitemapline"></div>
                </div>
                <div className="submenu"> 
                <span class="bottomlinksraquo  subdata"></span> <a href="/iogimplement" className="">Production Planning</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/iogconsult"   className="">Production Scheduling</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/iogtrain"     className="">Back-Casting</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/iogstudy"     className="">LP Utilities</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/iogstudy"     className="">LP Configuration Studies</a><br/> 
                </div>

              </div>
               <div className=" servicediv col-lg-3">
                <div className="mainpages ">
                <span class="bottomlinksraquo left_h21"></span> 
                 <a href="/services" className="Aboutuslink">Supply & Distribution</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div>
                <div className="submenu">
                  <span class="bottomlinksraquo  subdata"></span> <a href="/demandMgmt"               className="">Demand Mgmt</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/inventoryMgmt"            className="">Inventory Mgmt</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/diatributionplanning"     className="">Distribution Planning & Optimization</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/retailautomation"         className="">Retail Automation</a><br/>
                </div>
               </div> 
              <div className=" servicediv col-lg-3 ">
                <div className="mainpages">
                <span class="bottomlinksraquo"></span> 
                 <a href="/industries" className="Aboutuslink">Mfg Execution System</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div> 
                <div className="submenu submenuindustries">
               <span class="bottomlinksraquo  subdata"></span> <a href="/demandMgmt"               className="">Prod Accounting</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/inventoryMgmt"            className="">Realtime Data Historian</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/corporatedashboard"       className="">Corporate Dashboard & Analytics</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/operationlogbook"         className="">Operation Logbook & Target Dashboard</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/oilmovement"              className="">Oil Movement Mgmt Systems</a><br/>
               </div>
              </div>
               <div className=" servicediv col-lg-3 "> 
               <div className="mainpages ">
                <span class="bottomlinksraquo left_h21 "></span> 
                 <a href="/about-us" className="Aboutuslink">Simulation & Modeling</a><br/>
                  <div className="col-lg-6 sitemapline"></div>
                </div>
                <div className="submenu"> 
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Steady State Simulation </a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Dynamic Simulation</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Operator Training</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/etrm"  className="">ETRM</a> <br/>
                </div>

              </div>
             </div>
             <div className=" col-lg-12 col-md-12 col-xs-12 maindiv1234 ">
               
               <div className=" servicediv col-lg-3">
                <div className="mainpages ">
                <span class="bottomlinksraquo left_h21"></span> 
                 <a href="/services" className="Aboutuslink">Energy Management </a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div>
                <div className="submenu">
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Util Network Optimiz</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Equipment Monitoring</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Energy Accounting</a><br/><br/>
                </div>
               </div> 
              <div className=" servicediv col-lg-3 ">
                <div className="mainpages">
                <span class="bottomlinksraquo"></span> 
                 <a href="/industries" className="Aboutuslink">Asset Management</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div> 
                <div className="submenu submenuindustries">
               <span class="bottomlinksraquo  subdata"></span> <a href="/demandMgmt"               className="">Prod Accounting</a><br/>
                   <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Asset Criticality Anls</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Asset Lifecycle Mgmt</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Asset Strategy Mgmt</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Inspection & Callibration Mgmt</a><br/>
               </div>
              </div>
               <div className=" servicediv col-lg-3 "> 
               <div className="mainpages ">
                <span class="bottomlinksraquo left_h21 "></span> 
                 <a href="/about-us" className="Aboutuslink">Health Safety & Env</a><br/>
                  <div className="col-lg-6 sitemapline"></div>
                </div>
                <div className="submenu"> 
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Occupational Health Mgmt</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Process Safety Mgmt</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Process Safety Mgmt</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="#"      className="">Environment Mgmt</a><br/>
                </div>
              </div>
              <div className=" servicediv col-lg-3">
                <div className="mainpages ">
                <span class="bottomlinksraquo left_h21"></span> 
                 <a href="/services" className="Aboutuslink">Other Services</a><br/>
                 <div className="col-lg-6 sitemapline"></div>
                </div>
                <div className="submenu">
                    <span class="bottomlinksraquo  subdata"></span> <a href="/apc-services"      className="">APC Services</a><br/>
                    <span class="bottomlinksraquo  subdata"></span> <a href="/etrm"      className="">ETRM</a><br/>     
                </div>
               </div> 
             </div>
              <div className="col-lg-offset-1 col-lg-12 col-md-12 col-xs-12 maindiv1234 ">
               
               
             </div>
             </div>
            </div>  
            
        );
    }
}
