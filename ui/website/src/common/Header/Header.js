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
        <div className="navbar navbar-static-top" id="bb">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row"> 
           {/* <div id="languages">
              <p>
                <a href="?lang=en" rel="en">English</a> / <a href="?lang=es" rel="es">Spanish</a> / <a href="?lang=it" rel="it">Italian</a> /
                <a href="?lang=fr" rel="fr">French</a>
              </p>
            </div>*/}

            {/* <div className="col-lg-12"><button className="pull-right"onClick={this.googleTranslateElementInit.bind(this)}>Hindi</button></div>*/}
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 top_spacing">
              <div className="row"> 
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <div className="navbar-header col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="headerlogo" href="/"><img alt="Logo" src="/images/logo.png"/></a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-3 col-xs-3">
                  <div className="row"> 
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <nav>
                          <label htmlFor="drop" className="toggle">&#8801; Menu</label>
                          <input type="checkbox" id="drop" />
                          <ul className="menu">
                             <li><a href="/" className="headerTitle">Home</a></li>
                             <li>
                              <div class="dropdown1"> 
                                <a href="/about-us" className="headerTitle toggle">About Us <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>
                                 <div class="col-lg-offset-3 dropdown-content servicedropdown aboutusdrop ">
                                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                   <div class="Servicecolumn columnmenu">
                                    <a href="/about-us">Company Profile</a>
                                    <a href="/founderprofile">Founder's Profile</a>
                                    <a href="/ourjourny">Our Journey</a>
                                   </div>
                                  </div>
                                 </div>
                                </div> 
                                <input type="checkbox" id="drop-1"/>
                               {/* <ul>
                                  <li><a href="/about-us">Company Profile</a></li>
                                  <li><a href="/founderprofile">Founder's Profile</a></li>
                                  <li><a href="/ourjourny">Our Journey</a></li>
                                </ul>*/}
                              </li>
                              <li> 
                              <div class="dropdown1 ">  
                              <a href="/services" className="headerTitle toggle NOPadding">Services <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>  
                              <div class="col-lg-offset-4 dropdown-content servicedropdown1 ">
                               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                <div class="Servicecolumn columnmenu">
                                    <a href="/iogimplement">iOGImplement</a>
                                    <a href="/iogconsult">iOGCunsult</a>
                                    <a href="/iogtrain">iOGTrain</a>
                                    <a href="/iogstudy">iOGStudy</a>
                                  </div>
                             </div>
                            </div>
                            </div>
                              <input type="checkbox" id="drop-2"/>
                            </li>
                             <li>
                            <div class="dropdown1 "> 
                            
                            <a href="/about-us" className="headerTitle toggle">Expertise<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>
                             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>    
                          <div class="dropdown-content expertcontrnt">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                              <div class=" column columnmenu columnmenu1">
                                <h5 className="columnhead"><a href="/planningschedul" className="columnhead">Planning & Scheduling</a></h5>
                                <a href="/refineryplanning">Prod Planning </a>
                                <a href="/refineryschedule">Prod Schedule</a>
                                <a href="/backcasting">Back Casting / Retro-Analysis</a>
                                <a href="/lputility">LP Utilities</a>
                                <a href="/lpconfig">LP Configuration studies</a>
                                
                              </div>
                          <div class=" column columnmenu columnmenu2">
                            <h5 className="columnhead"><a href="/supplydistribute" className="columnhead">Supply & Distribution</a></h5>
                            <a href="/demandmanagement">Demand Mgmt</a>
                            <a href="/inventorymanagement">Inventory Mgmt</a>
                            <a href="/diatributionplanning">Distribution Planning & Optimization</a>
                            <a href="/retailautomation">Retail Automation</a><br/>
                             <h5 className="columnhead"><a href="/energy"className="columnhead">Digital Services</a></h5>
                            <a href="#">Digital Transformation</a>
                            <a href="#">Application Support</a>
                            <a href="#">Application Integration</a>
                            <a href="#">Visualization & Dashboards</a>
                            <a href="#">Industry 4.0 Initiatives</a>
                          </div>
                           <div class=" column columnmenu thirdcolumn columnmenu3">
                            <h5 className="columnhead"><a href="/manufacturesystem" className="columnhead">Manufacturing Exec System</a></h5>
                            <a href="/productionaccounting">Prod Accounting</a>
                            <a href="/datahistorian">Realtime Data Historian</a>
                            <a href="/corporatedashboard">Corporate Dashboard & Analytics</a>
                            <a href="/operationlogbook">Operation Logbook</a>
                            <a href="/oilmovement">Oil Movement Mgmt Systems</a>
                             <h5 className="columnhead"><a href="/energy"className="columnhead">Health Safety & Env</a></h5>
                            <a href="#">Occupational Health Mgmt</a>
                            <a href="#">Process Safety Mgmt</a>
                            <a href="#">Environment Mgmt</a>
                          </div>
                          <div class=" column columnmenu columnmenu3 columnmenu2">
                            <h5 className="columnhead"><a href="/simulation" className="columnhead">Simulation & Modeling</a></h5>
                            <a href="/simulation">Steady State Simulation </a>
                            <a href="">Dynamic Simulation</a>
                            <a href="">Operator Training</a>
                            <a href="/etrm">ETRM</a>
                            <h5 className="columnhead"><a href="#" className="columnhead">Other Services</a></h5>
                            <a href="/apc-services">APC Services</a>
                            <a href="/etrm">ETRM</a>
                          </div>
                          <div class="column columnmenu">
                            <h5 className="columnhead"><a href="/energy"className="columnhead">Energy Management</a></h5>
                            <a href="">Util Network Optimiz</a>
                            <a href="">Equipment Monitoring</a>
                            <a href="">Energy Accounting</a>
                            <h5 className="columnhead"><a href="/energy"className="columnhead">Asset Management</a> </h5>
                            <a href="/assetCriticalAnalysis">Asset Criticality Anls</a>
                            <a href="/riskBasedInspection">Asset Lifecycle Mgmt</a>
                            <a href="/assetStrategyMgmt">Asset Strategy Mgmt</a>
                            <a href="#">Inspection & Callibration Mgmt</a>
                          </div>
                        </div>
                      </div>
                                </div> 
                                <input type="checkbox" id="drop-1"/>
                               {/* <ul>
                                  <li><a href="/about-us">Company Profile</a></li>
                                  <li><a href="/founderprofile">Founder's Profile</a></li>
                                  <li><a href="/ourjourny">Our Journey</a></li>
                                </ul>*/}
                              </li>
                            <li>
                               <div class="dropdown"> 
                              
                                <a href="/industries" className="headerTitle toggle">Industries <i className="fa fa-angle-down" aria-hidden="true"></i></a>  
                                 <div class="col-lg-offset-6 dropdown-content servicedropdown2">
                                   <div class="col-lg-12 row">
                                     <div class="Servicecolumn columnmenu">
                                      <a href="/refinery">Refinery</a>
                                      <a href="/petrochemicals">Petrochemicals</a>
                                      <a href="/chemicals">Chemicals</a>
                                      <a href="/lng">LNG</a>
                                      <a href="/gasprocessing">Gas Precessing</a>
                                      <a href="/oilgasep">oil & Gas E & P</a>
                                    </div>
                                   </div>
                                 </div>
                                </div> 
                                <input type="checkbox" id="drop-1"/>
                               {/* <ul>
                                  <li><a href="/refinery">Refinery</a></li>
                                  <li><a href="/petrochemicals">Petrochemicals</a></li>
                                  <li><a href="/chemicals">Chemicals</a></li>
                                  <li><a href="/lng">LNG</a></li>
                                  <li><a href="/gasprocessing">Gas Processing</a></li>
                                  <li><a href="/oilgasep">Oil & Gas E&P</a></li>
                                </ul>*/}
                            </li>
                            <li><a href="/careers" className="headerTitle toggle">Careers</a></li>
                            <li><a href="/resource" className="headerTitle toggle">Resources</a></li>
                            <li><a href="/blog" className="headerTitle toggle">Blogs</a></li>
                            <li><a href="/contact-us" className="headerTitle toggle">Contact Us</a></li>
                          </ul>
                        </nav>
                     </div>
                    </div>
                 </div>
               </div>
             </div>
           </div>
          </div>
        </div>
         <button className="contactBar" data-toggle="modal" data-target="#modalId"  onClick={this.modalClickEvent.bind(this)}>
          <div className="fixedContactBar">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
          <div className="hovertext">Contact Us Now</div>
        </button>
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