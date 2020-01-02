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

  render() {  
    return (
     <header className="col-lg-12 col-md-12 col-sm-12 col-xs-12 headerflow"> 
      <div className="row"> 
        <div className="navbar navbar-static-top" id="bb">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row"> 
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 top_spacing">
              <div className="row"> 
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 NOPadding">

                  <div className="navbar-header col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 ">
                    <button type="button" className="navbar-toggle collapsed responsivetoggle"  data-toggle="collapse" data-target="#navBar" aria-expanded="false">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="headerlogo" href="/"><img alt="Logo" src="/images/logo.png"/></a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-3 col-xs-3 collapse navbar-collapse" id="navBar ">
                  <div className="row"> 
                    <nav className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      
                          <label htmlFor="drop" className=""></label>
                          <input type="checkbox" id="drop" />
                          <ul className="menu navbar-nav navbar-right ">
                             <li><a href="/" className="headerTitle">Home</a></li>
                             <li>
                              <div className="dropdown1"> 
                                <a href="/about-us" className="nav-link dropdown-toggle headerTitle toggle" id="navbarDropdownMenuLink"role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us
                                 <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>
                                 <div className="col-lg-offset-2 dropdown-content servicedropdown aboutusdrop ">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                   <div className="Servicecolumn columnmenu">
                                    <a href="/about-us">Company Profile</a>
                                    <a href="/founderprofile">Founder's Profile</a>
                                    <a href="/ourjourny">Our Journey</a>
                                   </div>
                                  </div>
                                 </div>
                                </div> 
                                <input type="checkbox" id="drop-1"/>
                              </li>
                              <li> 
                              <div className="dropdown1 ">  
                              <a href="/servicearms" className="headerTitle toggle NOPadding"className="nav-link dropdown-toggle headerTitle toggle" id="navbarDropdownMenuLink"role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services 
                               <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>  
                              <div className="col-lg-offset-5 dropdown-content servicedropdown1 ">
                               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                <div className="Servicecolumn columnmenu">
                                     {/*<a href="/oldiOGConsultPage">iOGConsult(Old)</a>*/}
                                     <a href="/newiogconsult">iOGConsult</a>
                                     <a href="/iogimplement">iOGImplement</a>
                                     <a href="/iogtrain">iOGTrain</a>
                                     <a href="/iogstudy">iOGStudy</a>
                                  </div>
                             </div>
                            </div>
                            </div>
                              <input type="checkbox" id="drop-2"/>
                            </li>
                             <li>
                            <div className="dropdown1 ">  
                             <a href="/services" className="headerTitle toggle">Expertise<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menudivider"></div>    
                               <div className="dropdown-content expertcontrnt">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                 <div className=" column columnmenu columnmenu1">
                                <h5 className="columnhead"><a href="/planningschedul" className="columnhead">Planning & Scheduling</a></h5>
                                {/*<a href="/refineryplanning">Production Planning </a>*/}
                                <a href="/masterpage/prodplanningpage">Production Planning </a>
                               {/* <a href="/refineryschedule">Production Schedule</a>*/}
                                <a href="/masterpage/refineryschedulingpage">Production Schedule</a>
                               {/* <a href="/backcasting">Back Casting / Retro-Analysis</a>*/}
                                <a href="/masterpage/retroanalysispage">Back Casting / Retro-Analysis</a>
                                {/*<a href="/lputility">LP Utilities</a>*/}
                                <a href="/masterpage/lputilities">LP Utilities</a>
                               {/* <a href="/lpconfig">LP Configuration studies</a>*/}
                                <a href="/masterpage/lpconfigurationpage">LP Configuration studies</a>
                              </div>
                          <div className=" column columnmenu columnmenu2">
                            <h5 className="columnhead"><a href="/supplydistribute" className="columnhead">Supply & Distribution</a></h5>
                            {/*<a href="/demandmanagement">Demand Management</a>*/}
                            <a href="/masterpage/demandmanagement">Demand Management</a>
                           {/* <a href="/inventorymanagement">Inventory Management</a>*/}
                            <a href="/masterpage/invetorymgntpage">Inventory Management</a>
                           {/* <a href="/diatributionplanning">Distribution Planning</a>*/}
                            <a href="/masterpage/distributionplpage">Distribution Planning</a>
                          {/*  <a href="/retailautomation">Retail Automation</a><br/>*/}
                            <a href="/masterpage/retailautopage">Retail Automation</a><br/>

                            <h5 className="columnhead"><a href="/digitalservices"className="columnhead">Digital Services</a></h5>
                            <a href="/masterpage/digitaltransformpage">Digital Transformation</a>
                            <a href="/masterpage/applicationsupportpage">Application Support</a>
                            <a href="/masterpage/applicationintegrationpage">Application Integration</a>
                            <a href="/masterpage/industriesv4page">Visualization & Dashboards</a>
                            <a href="/masterpage/industry4-0" className="">Industry 4.0 Initiatives</a>
                          </div>
                           <div className=" column columnmenu thirdcolumn columnmenu3">
                            <h5 className="columnhead"><a href="/manufacturesystem" className="columnhead">Manufacturing Exec System</a></h5>
                           {/* <a href="/productionaccounting">Production Accounting(old)</a>*/}
                            <a href="/NewProductionaccountingpage">Production Accounting</a>
                           {/* <a href="/datahistorian">Realtime Data Historian</a>*/}
                            <a href="/masterpage/datahistoriapage">Realtime Data Historian</a>
                            {/*<a href="/corporatedashboard">Corporate Dashboard & Analytics</a>*/}
                            <a href="/masterpage/corpdashboardspage">Corporate Dashboard & Analytics</a>
                          {/*  <a href="/operationlogbook">Operation Logbook</a>*/}
                            <a href="/masterpage/operationlogbookpage">Operation Logbook</a>
                            {/*<a href="/oilmovement">Oil Movement Management</a>*/}
                            <a href="/masterpage/oilmovementpage">Oil Movement Management</a>
                             <h5 className="columnhead"><a href="/Healthsafty"className="columnhead">Health Safety & Environment</a></h5>
                          {/*  <a href="/occupationhealth">Occupational Health Management</a>*/}
                            <a href="/masterpage/occuhealthpage">Occupational Health Management</a>
                        {/*    <a href="/processsafty">Process Safety Management</a>*/}
                            <a href="/masterpage/processsafetypage">Process Safety Management</a>
                        {/*    <a href="/environmentsustain">Environment Management</a>*/}
                            <a href="/masterpage/envmanagementpage">Environment Management</a>
                          </div>
                          <div className=" column columnmenu columnmenu3 columnmenu2 ">
                            <h5 className="columnhead"><a href="/simulation" className="columnhead">Simulation & Modeling</a></h5>
                           {/* <a href="/simulation" className="red">Steady State Simulation</a>*/}
                            <a href="/masterpage/steadystatepage" className="red">Steady State Simulation</a>
                           {/* <a href="/dynamicreservoirsimulation">Dynamic Simulation</a>*/}
                            <a href="/masterpage/dynamicpage">Dynamic Simulation</a>
                            <a href="/masterpage/operatortrainingpage">Operator Training</a>
                           {/* <a href="/etrm">ETRM</a>*/}
                            <h5 className="columnhead "><a href="#" className="columnhead">Other Services</a></h5>
                           {/* <a href="/apc-services">APC Services</a>*/}
                            <a href="/masterpage/apcpage">APC Services</a>
                            {/*<a href="/etrm">ETRM</a>*/}
                            <a href="/masterpage/etrmpage">ETRM</a>
                          </div>
                          <div className="column columnmenu ">
                            <h5 className="columnhead"><a href="/energy"className="columnhead">Energy Management</a></h5>
                            <a href="/masterpage/energyoptpage">Utility Network Optimization</a>
                            <a href="/masterpage/equipmonitoringpage">Equipment Monitoring</a>
                            <a href="/masterpage/energyaccpage">Energy Accounting</a>
                            <div>
                              <h5 className="columnhead"><a href="/energy"className="columnhead dataneeded">Asset Management</a> </h5>
                             {/* <a href="/assetCriticalAnalysis">Asset Criticality Analysis</a>
                              <a href="/riskBasedInspection">Asset Lifecycle Management</a>*/}
                              <a href="/AssetStrategyManagement" className="">Asset Strategy Management</a>
                           </div>
                          </div>
                        </div>
                      </div>
                     </div> 
                      <input type="checkbox" id="drop-1"/>
                    </li>
                  <li>
                   <div className="dropdown"> 
                    <a href="/industries" className="headerTitle toggle">Industries <i className="fa fa-angle-down" aria-hidden="true"></i></a>  
                     <div className="col-lg-offset-7 dropdown-content servicedropdown2">
                       <div className="col-lg-12 row">
                         <div className="Servicecolumn columnmenu">
                        {/*  <a href="/refinery">Refinery</a>*/}
                          <a href="/masterpage/refinerypage">Refinery</a>
                          {/*<a href="/petrochemicals">Petrochemicals</a>*/}
                          <a href="/masterpage/petrochemicalpage">Petrochemicals</a>
                    {/*      <a href="/chemicals">Chemicals</a>*/}
                          <a href="/masterpage/chemicalspage">Chemicals</a>
                        {/*  <a href="/lng">LNG</a>*/}
                          <a href="/masterpage/lngpage">LNG</a>
                         {/* <a href="/gasprocessing">Gas Precessing</a>*/}
                          <a href="/masterpage/gasprocessingpage">Gas Precessing</a>
                          {/*<a href="/oilgasep">oil & Gas E & P</a>*/}
                          <a href="/masterpage/oilgaseppage">oil & Gas E & P</a>
                        </div>
                       </div>
                     </div>
                    </div> 
                    <input type="checkbox" id="drop-1"/>
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
   <button className="contactBar hidden-sm hidden-xs" data-toggle="modal" data-target="#modalId"  onClick={this.modalClickEvent.bind(this)}>
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