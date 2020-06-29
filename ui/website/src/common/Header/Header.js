import React, {Component} from 'react';
// import $                  from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import './Header.css';
import 'bootstrap/js/modal.js';
import './Megamenu.js'
import Contactform       from '../../allBlocks/Contactform/Contactform.js';

export default class Header extends Component {
  
  componentWillMount() {$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

      if (scroll >= 100) {
          $(".headerflow").addClass("headerflowscroll");
      } else {
          $(".headerflow").removeClass("headerflowscroll");
      }
    });
  }
  myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  modalClickEvent(){
    console.log("click event")
    $('#modalId').addClass('in');
    $('#modalId').css('display','block');
  }
  
 /* googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 
  'google_translate_element');
} 
*/
  render() {  
    return (
    <header className="col-lg-12 col-md-12 col-sm-12 col-xs-12 headerflow"> 
      <div className="row"> 
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar navbar-static-top" id="bb">
         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 setlogo">
           <a className="headerlogo" href="/"><img alt="Logo" src="/images/logo.png"/></a>         
        </div>
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
           <div class="topnav" id="myTopnav">
            <a href="/">HOME</a>
            <div class="dropdown">
              <button class="dropbtn">ABOUT US 
                 <i className="fa fa-angle-down"></i>
              </button>
              <div class="dropdown-content normaldropdown" style={{position:"fixed"}}>
                 <a href="/masterpage/about-us">Company Profile</a>
                 <a href="/masterpage/foundersprofilepage">Founder's Profile</a>
                 <a href="/masterpage/news-&amp;-events">News &amp; Events</a>
                 
                 <a href="/ourjourny">Our Journey</a>
              </div>
            </div>  
            <div class="dropdown">
              <button class="dropbtn">SERVICES 
                <i className="fa fa-angle-down"></i>
              </button>
              <div class="dropdown-content normaldropdown" style={{position:"fixed"}}>
                 <a href="/masterpage/iog-consult">iOGConsult</a>
                 <a href="/masterpage/iog-implement">iOGImplement</a>
                 <a href="/masterpage/iog-train">iOGTrain</a>
                 <a href="/masterpage/iog-study">iOGStudy</a>
              </div>
            </div> 
            <div class="dropdown ">
              <button class="dropbtn">EXPERTIES 
                 <i className="fa fa-angle-down"></i>
              </button>
              <div class="col-lg-12 col-md-10 col-sm-10 col-xs-6 dropdown-content expertiesdropdown" style={{position:"fixed"}}>
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                    <h5 className="columnhead"><a href="/planningschedul" className="columnhead">Planning & Scheduling</a></h5>
                      <a className="columnheadsub" href="/refineryplanning">Production Planning </a>
                      <a className="columnheadsub" href="/refineryschedule">Production Schedule</a>
                      <a className="columnheadsub" href="/backcasting"> Retro-Analysis</a>
                      <a className="columnheadsub" href="/lputility">LP Utilities</a>
                      <a className="columnheadsub" href="/lpconfig">LP Configuration studies</a>
                 </div> 
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "style={{padding:"0px"}}>
                 <h5 className="columnhead"><a href="/masterpage/supply-&-distribution" className="columnhead">Supply & Distribution</a></h5>
                  <a href="/masterpage/demand-management">Demand Management</a>
                  <a href="/masterpage/invetory-management">Inventory Management</a>
                  <a href="/masterpage/distribution-planning">Distribution Planning</a>
                  <a href="/masterpage/retail-automation">Retail Automation</a><br/>
               </div> 
               </div>
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                  <h5 className="columnhead"><a href="/masterpage/manufacturing-exec-system" className="columnhead">Manufacturing Execution System</a></h5>
                    <a href="/masterpage/production-accounting">Production Accounting</a>
                    <a href="/masterpage/data-historian">Realtime Data Historian</a>
                    <a href="/masterpage/corporate-dashboard">Corporate Dashboard & Analytics</a>
                    <a href="/masterpage/operation-logbook">Operation Logbook</a>        
                    <a href="/masterpage/oil-movement">Oil Movement Management</a>
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/masterpage/digital-services"className="columnhead">Digital Services</a></h5>
                    <a href="/masterpage/digital-transformation">Digital Transformation</a>
                    <a href="/masterpage/application-support">Application Support</a>
                    <a href="/masterpage/application-integration">Application Integration</a>
                    <a href="/masterpage/visualization-&-dashboards">Visualization & Dashboards</a>
                    <a href="/masterpage/industries-v4" className="">Industry 4.0 Initiatives</a>
                </div>   
               </div>   
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/masterpage/simulation-and-modeling" className="columnhead">Simulation & Modeling</a></h5>
                    <a href="/masterpage/steady-state" className="red">Steady State Simulation</a>
                    <a href="/masterpage/dynamic-simulation">Dynamic Simulation</a>
                    <a href="/masterpage/operator-training">Operator Training</a> 
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/masterpage/health-safety-environment"className="columnhead">Health Safety & Environment</a></h5>
                    <a href="/masterpage/occupational-health">Occupational Health Management</a>
                    <a href="/masterpage/process-safety">Process Safety Management</a>
                    <a href="/masterpage/environment-management">Environment Management</a>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                  <h5 className="columnhead"><a href="/masterpage/other-services" className="columnhead">Other Services</a></h5>
                    <a href="/masterpage/apc-services">APC Services</a>
                    <a href="/masterpage/etrm">ETRM</a>
                </div>      
               </div>   
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                  <h5 className="columnhead"><a href="/masterpage/new-energy-management"className="columnhead">Energy Management</a></h5>
                    <a href="/masterpage/energy-optimization">Utility Network Optimization</a>
                    <a href="/masterpage/equipment-monitoring">Equipment Monitoring</a>
                    <a href="/masterpage/energy-accounting">Energy Accounting</a>
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                    <h5 className="columnhead"><a href="/masterpage/asset-management"className="columnhead ">Asset Performance Management</a> </h5>
                      <a href="/masterpage/aseet-criticality">Asset Criticality Analysis </a>
                      <a href="/masterpage/asset-lifecycle">Asset Lifecycle </a>
                      <a href="/masterpage/asset-strategy-management">Asset Strategy </a>
                      <a href="/masterpage/inspection-&-calibration">Inspection & Calibration</a>
                </div>   
               </div>   
              </div>
            </div> 
             <div class="dropdown">
              <button class="dropbtn">INDUSTRIES 
                 <i className="fa fa-angle-down"></i>
              </button>
              <div class="dropdown-content normaldropdown" style={{position:"fixed"}}>
                <a href="/masterpage/petrochemical-mainpage">Petrochemicals</a>
                <a href="/masterpage/chemicals-mainpage">Chemicals</a>
                <a href="/masterpage/lng">LNG</a>
                <a href="/masterpage/gas-processing">Gas Precessing</a>
              </div>
            </div> 
             <a href="/masterpage/careers">CAREERS</a>
             <a href="/resource" >RESOURCES</a>
             <a href="/blog" >BLOGS</a>
             <a href="/contact-us" >CONTACT US</a>
            <a href="javascript:void(0);" class="icon" onClick={this.myFunction.bind(this)}>&#9776;</a>
          </div>
          </div>
        </div>
         <button className="contactBar hidden-xs" data-toggle="modal" data-target="#modalId" onClick={this.modalClickEvent.bind(this)}>
          <div className="fixedContactBar">
            <i className="fa fa-envelope-o"style={{color:"#ffffff"}} aria-hidden="true"></i>
          </div>
          <div className="hovertext">Contact Us Now</div>
        </button>
        <a href="/contact-us">
         <button className="contactBar hidden-lg hidden-md" >
          <div className="fixedContactBar">
            <i className="fa fa-envelope-o"style={{color:"#ffffff"}} aria-hidden="true"></i>
          </div>
          <div className="hovertext">Contact Us Now</div>
        </button>
       </a> 
      </div>
      <div className="row"> 
       
        <div className="modal fade" id="modalId" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg " role="document">
            <div className="modal-content ContactmodalContent col-lg-10 col-lg-offset-1 col-md-8 col-md-offset-2 col-sm-12 col-xs-12   ">
{/*              <button type="button" className="close closeButton" data-dismiss="modal">&times;</button>*/}
              <div className="modal-body contactModalBody row ">
               <div className="row">
                  <Contactform />                               
                </div>   
              </div>        
            </div>
          </div>
        </div>
      </div>
    </header>


    );  
  }
}
