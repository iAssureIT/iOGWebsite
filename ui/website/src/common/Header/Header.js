import React, {Component} from 'react';

// import $                  from 'jquery';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import './Header.css';
import './Megamenu.js';
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
  /*responsivemenubar(event){
  $(document).ready(function(){
        $(".dataonHover1").hide();
    $(".oilsign8").hover(function(){
        $(".dataonHover1").show();
    });
  });
} */
  modalClickEvent(){
    console.log("click event")
    $('#modalId').addClass('in');
    $('#modalId').css('display','block');
    
    // $('#modalId').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
  
 /* googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 
  'google_translate_element');
} 
*/
  render() {  
    return (
   
    <header className="col-lg-12 col-md-12 col-sm-12 col-xs-12  headerflow"> 
      <div className="row"> 
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar navbar-static-top NOPadding" id="bb">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
            <div className="row"> 
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 top_spacing NOPadding">
              <div className="row"> 
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 NOPadding">
                  <div className="navbar-header col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 ">
                    <button type="button" className="navbar-toggle responsivetoggle " data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="headerlogo" href="/"><img alt="Logo" src="/images/logo.png"/></a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                  <div className="row"> 
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <nav>
                          <label htmlFor="drop" className=""></label>
                          <input type="checkbox" id="drop" />
                          <ul className="menu">
                             <li><a href="/" className="headerTitle">Home</a></li>
                             <li>
                              <div className="dropdown1"> 
                                <a  className="headerTitle toggle">About Us <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>
                                 <div className="col-lg-offset-2 dropdown-content servicedropdown aboutusdrop ">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                   <div className="Servicecolumn columnmenu">
                                    <a href="/masterpage/about-us">Company Profile</a>
                                    <a href="/masterpage/foundersprofilepage">Founder's Profile</a>
                                     <a href="/masterpage/news-&-events">News & Events</a>
                                    <a href="/ourjourny">Our Journey</a>
                                   </div>
                                  </div>
                                 </div>
                                </div> 
                                <input type="checkbox" id="drop-1"/>
                              </li>
                              <li> 
                              <div className="dropdown1 ">  
                              <a  className="headerTitle toggle NOPadding">Services <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>  
                              <div className="col-lg-offset-5 dropdown-content servicedropdown1 ">
                               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                <div className="Servicecolumn columnmenu">
                                     {/*<a href="/oldiOGConsultPage">iOGConsult(Old)</a>*/}
                                   {/* <a href="/newiogconsult">iOGConsult</a>*/}
                                    <a href="/masterpage/iog-consult">iOGConsult</a>
                                     {/*<a href="/iogimplement">iOGImplement</a>*/}
                                     <a href="/masterpage/iog-implement">iOGImplement</a>
                                    {/* <a href="/iogtrain">iOGTrain</a>*/}
                                     <a href="/masterpage/iog-train">iOGTrain</a>
                                     <a href="/masterpage/iog-study">iOGStudy</a>
                                  </div>
                             </div>
                            </div>
                            </div>
                              <input type="checkbox" id="drop-2"/>
                            </li>
                             <li>
                            <div className="dropdown1 "> 
                            
                            <a  className="headerTitle toggle">Expertise<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>
                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>    
                          <div className="dropdown-content expertcontrnt col-lg-12 col-md-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                              <div className=" column columnmenu columnmenu1">
                                <h5 className="columnhead"><a href="/masterpage/planning-&-scheduling" className="columnhead">Planning & Scheduling</a></h5>
                                {/*<a href="/refineryplanning">Production Planning </a>*/}
                                <a href="/masterpage/production-plannning">Production Planning </a>
                               {/* <a href="/refineryschedule">Production Schedule</a>*/}
                                <a href="/masterpage/refinery-scheduling">Production Schedule</a>
                               {/* <a href="/backcasting">Back Casting / Retro-Analysis</a>*/}
                                <a href="/masterpage/retro-analysis">Retro-Analysis</a>
                                {/*<a href="/lputility">LP Utilities</a>*/}
                                <a href="/masterpage/lp-utilities">LP Utilities</a>
                               {/* <a href="/lpconfig">LP Configuration studies</a>*/}
                                <a href="/masterpage/lp-configuration">LP Configuration studies</a>
                                
                                 <h5 className="columnhead"><a href="/masterpage/supply-&-distribution" className="columnhead">Supply & Distribution</a></h5>
            {/*<a href="/demandmanagement">Demand Management</a>*/}
                            <a href="/masterpage/demand-management">Demand Management</a>
                           {/* <a href="/inventorymanagement">Inventory Management</a>*/}
                            <a href="/masterpage/invetory-management">Inventory Management</a>
                           {/* <a href="/diatributionplanning">Distribution Planning</a>*/}
                            <a href="/masterpage/distribution-planning">Distribution Planning</a>
                          {/*  <a href="/retailautomation">Retail Automation</a><br/>*/}

                            <a href="/masterpage/retail-automation">Retail Automation</a><br/>

                                
                              </div>
                          <div className=" column columnmenu columnmenu2">
                            <h5 className="columnhead"><a href="/masterpage/manufacturing-exec-system" className="columnhead">Manufacturing Execution System</a></h5>
                                          {/* <a href="/productionaccounting">Production Accounting(old)</a>*/}
                            <a href="/masterpage/production-accounting">Production Accounting</a>
                           {/* <a href="/datahistorian">Realtime Data Historian</a>*/}
                            <a href="/masterpage/data-historian">Realtime Data Historian</a>
                            {/*<a href="/corporatedashboard">Corporate Dashboard & Analytics</a>*/}
                            <a href="/masterpage/corporate-dashboard">Corporate Dashboard & Analytics</a>
                          {/*  <a href="/operationlogbook">Operation Logbook</a>*/}
                            <a href="/masterpage/operation-logbook">Operation Logbook</a>
                            {/*<a href="/oilmovement">Oil Movement Management</a>*/}
                            <a href="/masterpage/oil-movement">Oil Movement Management</a>

                          <h5 className="columnhead"><a href="/masterpage/digital-services"className="columnhead">Digital Services</a></h5>
                            <a href="/masterpage/digital-transformation">Digital Transformation</a>
                            <a href="/masterpage/application-support">Application Support</a>
                            <a href="/masterpage/application-integration">Application Integration</a>

                            <a href="/masterpage/visualization-&-dashboards">Visualization & Dashboards</a>
                            <a href="/masterpage/industries-v4" className="">Industry 4.0 Initiatives</a>
                          </div>

                           <div className=" column columnmenu thirdcolumn columnmenu3">
                           <h5 className="columnhead"><a href="/masterpage/simulation-and-modeling" className="columnhead">Simulation & Modeling</a></h5>
                           {/* <a href="/simulation" className="red">Steady State Simulation</a>*/}
                            <a href="/masterpage/steady-state" className="red">Steady State Simulation</a>
                           {/* <a href="/dynamicreservoirsimulation">Dynamic Simulation</a>*/}
                            <a href="/masterpage/dynamic-simulation">Dynamic Simulation</a>
                            <a href="/masterpage/operator-training">Operator Training</a>     
                      
                          <h5 className="columnhead"><a href="/masterpage/health-safety-environment"className="columnhead">Health Safety & Environment</a></h5>
                             {/*  <a href="/occupationhealth">Occupational Health Management</a>*/}
                            <a href="/masterpage/occupational-health">Occupational Health Management</a>
                        {/*    <a href="/processsafty">Process Safety Management</a>*/}
                            <a href="/masterpage/process-safety">Process Safety Management</a>
                        {/*    <a href="/environmentsustain">Environment Management</a>*/}
                            <a href="/masterpage/environment-management">Environment Management</a>

                             <h5 className="columnhead"><a href="/masterpage/other-services" className="columnhead">Other Services</a></h5>
                             {/* <a href="/apc-services">APC Services</a>*/}
                            <a href="/masterpage/apc-services">APC Services</a>
                            {/*<a href="/etrm">ETRM</a>*/}
                            <a href="/masterpage/etrm">ETRM</a>
                          </div>

                         
                          <div className="column columnmenu columnmenu3">
                            <h5 className="columnhead"><a href="/masterpage/new-energy-management"className="columnhead">Energy Management</a></h5>
                           <a href="/masterpage/energy-optimization">Utility Network Optimization</a>
                            <a href="/masterpage/equipment-monitoring">Equipment Monitoring</a>
                            <a href="/masterpage/energy-accounting">Energy Accounting</a>

                            <h5 className="columnhead"><a href="/masterpage/asset-management"className="columnhead ">Asset Performance Management</a> </h5>
                            <a href="/masterpage/aseet-criticality">Asset Criticality Analysis </a>
                            <a href="/masterpage/asset-lifecycle">Asset Lifecycle </a>
                            <a href="/masterpage/asset-strategy-management">Asset Strategy </a>
                            <a href="/masterpage/inspection-&-calibration">Inspection & Calibration</a>
                            {/*<a href="/riskBasedInspection">Asset Lifecycle Management</a>
                            <a href="/assetStrategyMgmt">Asset Strategy Management</a>*/}
                           
                          </div>
                        </div>
                      </div>
                        </div> 
                        <input type="checkbox" id="drop-1"/>
                       
                      </li>
                        <li>
                           <div className="dropdown"> 
                          
                            <a href="/masterpage/industries" className="headerTitle toggle servicedropdown2_pos ">Industries <i className="fa fa-angle-down" aria-hidden="true"></i></a>  
                             <div className="col-lg-offset-7 dropdown-content servicedropdown2">
                               <div className="col-lg-12 row">
                                 <div className="Servicecolumn columnmenu">
                                  {/*  <a href="/refinery">Refinery</a>*/}
                                  <a href="/masterpage/refinery-mainpage">Refinery</a>
                                  {/*<a href="/petrochemicals">Petrochemicals</a>*/}
                                  <a href="/masterpage/petrochemical-mainpage">Petrochemicals</a>
                            {/*      <a href="/chemicals">Chemicals</a>*/}
                                  <a href="/masterpage/chemicals-mainpage">Chemicals</a>
                                {/*  <a href="/lng">LNG</a>*/}
                                  <a href="/masterpage/lng">LNG</a>
                                 {/* <a href="/gasprocessing">Gas Precessing</a>*/}
                                  <a href="/masterpage/gas-processing">Gas Precessing</a>
                                  {/*<a href="/oilgasep">oil & Gas E & P</a>*/}
                                  <a href="/masterpage/oil-&-gas-e-&-p">Oil & Gas E & P</a>
                                </div>
                               </div>
                             </div>
                            </div> 
                            <input type="checkbox" id="drop-1"/>
                           
                         </li>
                        <li><a href="/masterpage/careers" className="headerTitle toggle">Careers</a></li>
                        <li><a href="/resource" className="headerTitle toggle">Resources</a></li>
                        <li><a href="/blog" className="headerTitle toggle">Blogs</a></li>
                        <li><a href="/contact-us" className="headerTitle toggle">Contact Us</a></li>
                      </ul>
                    </nav>
                 </div>
                </div>
                 </div>  
                        <div className=" col-xs-12 hidden-lg hidden-md hidden-sm ">
                      <nav className=" marginZero customNavBar navbar-default">
                        <div className="container-fluid NOPadding">
                          <div className="navbar-header1">
                            {/*<button type="button" className="navbar-toggle resmenubar collapsed" data-toggle="collapse" data-target="#navBar" aria-expanded="false" >
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                            </button>*/}
                          </div>
                          <div className="collapse navbar-collapse responsiveNavBar" id="navBar">
                            <ul className="nav navbar-nav navbar-right customUl width50">
                              <li className="nav-item dropdown dropdownresponsive">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  HOME <span className="caret"></span>
                                </a>                    
                               </li>
                                 <li className="nav-item dropdown dropdownresponsive">
                                    <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       ABOUT US <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu customDropdown " aria-labelledby="navbarDropdownMenuLink">
                                      <a  className="dropdown-item" href="/about-us">Company Profile</a>
                                      <a className="dropdown-item" href="/founderprofile">Founder's Profile</a>
                                      <a className="dropdown-item" href="/ourjourny">Our Journey</a>  
                                    </ul>
                                  </li>
                                      <li className="nav-item dropdown dropdownresponsive">
                                          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             SERVICES<span className="caret"></span>
                                          </a>
                                          <ul className="dropdown-menu customDropdown " aria-labelledby="navbarDropdownMenuLink">
                                            <a  className="dropdown-item" href="/iogimplement">iOGImplement</a>
                                            <a className="dropdown-item" href="/iogtrain">iOGTrain</a>
                                            <a className="dropdown-item" href="/iogstudy">iOGStudy</a> 
                                          </ul>
                                        </li>
                                        <li className="nav-item dropdown dropdownresponsive">
                                          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             EXPERTISE<span className="caret"></span>
                                          </a>
                                          <ul className="dropdown-menu customDropdown " aria-labelledby="navbarDropdownMenuLink">
                                            <a  className="dropdown-item" href="/#5gcpm">Company Profile</a>
                                            <a className="dropdown-item" href="/#safeHeavenMoats">Founder's Profile</a>
                                            <a className="dropdown-item" href="/#safeHeavenAlpha">Our Journey</a>
                                          
                                          </ul>
                                        </li>
                                        <li className="nav-item dropdown dropdownresponsive">
                                          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             INDUSTRIES<span className="caret"></span>
                                          </a>
                                          <ul className="dropdown-menu customDropdown " aria-labelledby="navbarDropdownMenuLink">
                                            <a  className="dropdown-item" href="/#5gcpm">Company Profile</a>
                                            <a className="dropdown-item" href="/#safeHeavenMoats">Founder's Profile</a>
                                            <a className="dropdown-item" href="/#safeHeavenAlpha">Our Journey</a>
                                          
                                          </ul>
                                        </li>
                                        <li className="nav-item dropdown dropdownresponsive">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             CAREERS<span className="caret"></span>
                                          </a>
                                        </li>
                                        <li className="nav-item dropdown dropdownresponsive">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             RESOURCES<span className="caret"></span>
                                          </a>
                                        </li>
                                        <li className="nav-item dropdown dropdownresponsive">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             BLOGS<span className="caret"></span>
                                          </a>
                                        </li>
                                        <li className="nav-item dropdown dropdownresponsive">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             CONTACT US<span className="caret"></span>
                                          </a>
                                        </li>        
                                    </ul>
                                  </div>
                                </div>
                              </nav>
                </div> 
               </div>
             </div>
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
