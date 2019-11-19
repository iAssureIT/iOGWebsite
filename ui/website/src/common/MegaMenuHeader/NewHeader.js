import React, {Component} from 'react';
// import $                  from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import './NewHeader.css';
import 'bootstrap/js/modal.js';

import Contactform       from '../../allBlocks/Contactform/Contactform.js';

export default class NewHeader extends Component {
  
  componentWillMount() {$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

      if (scroll >= 100) {
          $(".headerflow").addClass("headerflowscroll");
      } else {
          $(".headerflow").removeClass("headerflowscroll");
      }
    });
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
    <header className="col-lg-12 headerflow"> 
      <div className="row"> 
        <div className="navbar navbar-static-top" id="bb">
          <div className="col-lg-12">
            <div className="row"> 
           {/* <div id="languages">
              <p>
                <a href="?lang=en" rel="en">English</a> / <a href="?lang=es" rel="es">Spanish</a> / <a href="?lang=it" rel="it">Italian</a> /
                <a href="?lang=fr" rel="fr">French</a>
              </p>
            </div>*/}

            {/* <div className="col-lg-12"><button className="pull-right"onClick={this.googleTranslateElementInit.bind(this)}>Hindi</button></div>*/}
             <div className="col-lg-12 top_spacing">
              <div className="row"> 
                <div className="col-lg-3">
                  <div className="navbar-header col-lg-8 col-lg-offset-2">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="headerlogo" href="/"><img alt="Logo" src="/images/logo.png"/></a>
                  </div>
                </div>
                <div className="col-lg-9 NOPadding">
                  <div className="row"> 
                    <div className="col-lg-12 takenavdown">
                    <div class="navbar1">
                    <div class="dropdown">
                     <a  href="#home" className="dropbtn headerTitle">HOME</a>
                    </div>
                    <div class="dropdown">
                    <a href="/about-us" className="dropbtn headerTitle">ABOUT US
                     <i class="fa fa-angle-down downarrow1" aria-hidden="true"></i></a>
                     <div class="col-lg-12 menudivider"></div>
                     <div class="col-lg-offset-3 dropdown-content servicedropdown abootusdrop ">
                      <div class="col-lg-12 row">
                       <div class="Servicecolumn columnmenu">
                        <a href="/iogimplement">Company Profile</a>
                            <a href="/iogconsult">Founder's Profile</a>
                            <a href="/iogtrain">Our Journey</a>
                       </div>
                      </div>
                     </div>
                      
                    </div>
                    <div class="dropdown">
                     <a href="/services" class="dropbtn headerTitle">Services 
                     <i class="fa fa-angle-down downarrow1" aria-hidden="true"></i></a>
                      <div class="col-lg-12 menudivider"></div>  
                      <div class="col-lg-offset-4 dropdown-content servicedropdown1 ">
                       <div class="col-lg-12 row">
                        <div class="Servicecolumn columnmenu">
                            <h5 className="columnhead">Service Arms</h5>
                            <a href="/iogimplement">iOGImplement</a>
                            <a href="/iogconsult">iOGCunsult</a>
                            <a href="/iogtrain">iOGTrain</a>
                            <a href="/iogstudy">iOGStudy</a>
                          </div>
                       </div>
                      </div>
                    </div> 
                    <div> 
                    <div class="dropdown">
                     <a href="/services" class="dropbtn headerTitle">Expertise 
                     <i class="fa fa-angle-down downarrow1" aria-hidden="true"></i></a>
                      {/*<button class="dropbtn headerTitle">Services 
                        <i className="fa fa-chevron-down downarrow1"></i>
                      </button>*/}
                      <div class="col-lg-12 menudivider"></div>    
                      <div class="dropdown-content expertcontrnt">
                        <div class="col-lg-12 row">
                          <div class="col-lg-2 column columnmenu">
                            <h5 className="columnhead">Planning & Scheduling</h5>
                            <a href="/refineryplanning">Production Planning </a>
                            <a href="/refineryschedule">Production Scheduling</a>
                            <a href="/backcasting">Back Casting / Retro-Analysis</a>
                            <a href="/lputility">LP Utilities</a>
                            <a href="/lpconfig">LP Configuration studies</a>
                          </div>
                          <div class="col-lg-2 column columnmenu">
                            <h5 className="columnhead">Supply & Distribution</h5>
                            <a href="/demandmanagement">Demand Management</a>
                            <a href="/inventorymanagement">Inventory Management</a>
                            <a href="/diatributionplanning">Distribution Planning & Optimization</a>
                            <a href="/retailautomation">Retail Automation</a>
                          </div>
                           <div class="col-lg-2 column columnmenu thirdcolumn">
                            <h5 className="columnhead">Manufacturing Execution System</h5>
                            <a href="#">Retail Automation</a>
                            <a href="/datahistorian">Real time Data Historian</a>
                            <a href="/corporatedashboard">Corporate Dashboard & Analytics</a>
                            <a href="/operationlogbook">Operation Logbook & Target Dashboard</a>
                            <a href="/oilmovement">Oil Movement Management Systems</a>
                          </div>
                          <div class="col-lg-2 column columnmenu">
                            <h5 className="columnhead">Simulation & Modeling</h5>
                            <a href="">Steady State Simulation </a>
                            <a href="">Dynamic Simulation</a>
                            <a href="">Operator Training</a>
                            <a href="/etrm">ETRM</a>
                          </div>
                          <div class="col-lg-2 column columnmenu">
                            <h5 className="columnhead">Energy Management</h5>
                            <a href="">Utility Network Optimization</a>
                            <a href="">Equipment Monitoring</a>
                            <a href="">Energy Accounting</a>
                            {/*<a href="/visualizationdashboard">Visualization & Dashboards</a>
                            <a href="/digitalasset">Digital Asset Life Cycle Management</a>*/}
                          </div>
                          <div class="col-lg-2 column columnmenu column6">
                            <h5 className="columnhead">Asset Management </h5>
                            <a href="">Asset Criticality Analysis</a>
                            <a href="#">Asset Lifecycle Management</a>
                            <a href="#">Asset Strategy MAnagement</a>
                            <a href="#">Inspection & Callibration Managament</a>
                          </div>
                           <div class="col-lg-2 column columnmenu column6">
                            <h5 className="columnhead">Health Safety & Environment  </h5>
                            <a href="#">Occupational Health Management</a>
                            <a href="#">Process Safety Management</a>
                            <a href="#">Environment Management</a>
                          </div>
                          <div class="col-lg-2 column columnmenu column6">
                            <h5 className="columnhead">Digital Services </h5>
                            <a href="#">Digital Transformation</a>
                            <a href="#">Application Support</a>
                            <a href="#">Application Integration</a>
                            <a href="#">Visualization & Dashboards</a>
                            <a href="#">Industry 4.0 Initiatives</a>
                           {/* <a href="#">Change Management</a>*/}
                          </div>
                          <div class="col-lg-2 column columnmenu column6">
                            <h5 className="columnhead">Other Services</h5>
                            <a href="/apc-services">APC Services</a>
                            <a href="/etrm">ETRM</a>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div> 
                    <div>
                    <div class="dropdown">
                     <a href="/services" class="dropbtn headerTitle">Industries 
                     <i class="fa fa-angle-down downarrow1" aria-hidden="true"></i></a> 
                      <div class="col-lg-4 menudivider"></div>    
                       <div class="col-lg-offset-6 dropdown-content servicedropdown">
                         <div class="col-lg-12 row">
                           <div class="Servicecolumn columnmenu">
                            <a href="#">Refinery</a>
                            <a href="#">Petrochemicals</a>
                            <a href="#">Chemicals</a>
                            <a href="#">LNG</a>
                            <a href="#">Gas Precessing</a>
                            <a href="#">oil & Gas E & P</a>
                          </div>
                         </div>
                       </div>
                       </div>
                       </div>
                        <div>
                    <div class="dropdown">
                     <a href="/services" class="dropbtn headerTitle">careers 
                    </a> 
                       </div>
                        <div>
                    <div class="dropdown">
                     <a href="/services" class="dropbtn headerTitle">resources 
                    </a> 
                      <div class="col-lg-4 menudivider"></div>    
                       <div class="col-lg-offset-6 dropdown-content servicedropdown">
                         <div class="col-lg-12 row">
                           <div class="Servicecolumn columnmenu">
                            <a href="#">Refinery</a>
                            <a href="#">Petrochemicals</a>
                            <a href="#">Chemicals</a>
                            <a href="#">LNG</a>
                            <a href="#">Gas Precessing</a>
                            <a href="#">oil & Gas E & P</a>
                          </div>
                         </div>
                       </div>
                       </div>
                        <div>
                      <div class="dropdown">
                       <a href="/services" class="dropbtn headerTitle">blogs 
                        </a> 
                        <div class="col-lg-4 menudivider"></div>    
                         <div class="col-lg-offset-6 dropdown-content servicedropdown">
                           <div class="col-lg-12 row">
                             <div class="Servicecolumn columnmenu">
                              <a href="#">Refinery</a>
                              <a href="#">Petrochemicals</a>
                              <a href="#">Chemicals</a>
                              <a href="#">LNG</a>
                              <a href="#">Gas Precessing</a>
                              <a href="#">oil & Gas E & P</a>
                            </div>
                           </div>
                         </div>
                         </div>
                          <div>
                          <div class="dropdown">
                           <a href="/services" class="dropbtn headerTitle">contact us 
                           </a> 
                            <div class="col-lg-4 menudivider"></div>    
                             <div class="col-lg-offset-6 dropdown-content servicedropdown">
                               <div class="col-lg-12 row">
                                 <div class="Servicecolumn columnmenu">
                                  <a href="#">Refinery</a>
                                  <a href="#">Petrochemicals</a>
                                  <a href="#">Chemicals</a>
                                  <a href="#">LNG</a>
                                  <a href="#">Gas Precessing</a>
                                  <a href="#">oil & Gas E & P</a>
                                </div>
                               </div>
                             </div>
                             </div>
                       </div>
                       </div>
                       </div>
                       </div>
                     </div>
                    </div>
                    </div>
                 </div>
               </div>
             </div>
           </div>
          </div>
        </div>
      </div>
      <div className="row"> 
        <button className="contactBar" data-toggle="modal" data-target="#modalId"  onClick={this.modalClickEvent.bind(this)}>
          <div className="fixedContactBar">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
          <div className="hovertext">Contact Us Now</div>
        </button>
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