import React, {Component} from 'react';
// import $                  from 'jquery';
import './Header.css';

export default class Header extends Component {
  
componentWillMount() {}

  render() {  
    return (
    <div className="col-lg-12 headerflow"> 
      <div className="row"> 
        <div className="navbar navbar-static-top" id="bb">
          <div className="col-lg-12">
            <div className="row"> 
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
                <div className="col-lg-9">
                  <div className="row"> 
                    <div className="col-lg-12">
                        <nav>
                          <label htmlFor="drop" className="toggle">&#8801; Menu</label>
                          <input type="checkbox" id="drop" />
                          <ul className="menu">
                             <li><a href="/">Home</a></li>
                             <li> 
                                <label htmlFor="drop-1" className="toggle">About Us</label>
                                <a href="/about-us">About Us <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <input type="checkbox" id="drop-1"/>
                                <ul>
                                  <li><a href="/about-us">Company Profile</a></li>
                                  <li><a href="/about-us">Founder's Profile</a></li>
                                  <li><a href="/about-us">Our Journey</a></li>
                                </ul>
                              </li>
                              <li>  
                              <label htmlFor="drop-2" className="toggle">Services</label>
                              <a href="/services">Services <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                              <input type="checkbox" id="drop-2"/>
                              <ul>
                                <li> 
                                  <label htmlFor="drop-3" className="toggle">Downstream</label>
                                  <a href="/downstream">Downstream <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                  <input type="checkbox" id="drop-3"/>
                                  <ul>
                                    <li className="zindex">
                                    <label htmlFor="drop-4" className="toggle">Supply Chain Management</label>
                                    <a href="/supplychain">Supply Chain Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li className="zindex">
                                        <label htmlFor="drop-5" className="toggle">Planning & Scheduling</label>
                                        <a href="/planningschedul">Planning & Scheduling <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                        <input type="checkbox" id="drop-5"/>
                                          <ul>
                                            <li><a href="/">Production Planning </a></li>
                                            <li><a href="/">Production Scheduling</a></li>
                                            <li><a href="/">Back Casting / Retro-Analysis</a></li>
                                            <li><a href="/">LP Utilities</a></li>
                                            <li><a href="/">LP Configuration studies</a></li>
                                          </ul>
                                        </li>
                                        <li className="zindex">
                                        <label htmlFor="drop-5" className="toggle">Supply & Distribution</label>
                                        <a href="/supplydistribute">Supply & Distribution <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                        <input type="checkbox" id="drop-5"/>
                                          <ul>
                                            <li><a href="/">Demand Management</a></li>
                                            <li><a href="/">Inventory Management</a></li>
                                            <li><a href="/">Distribution Planning and Optimization</a></li>
                                            <li><a href="/">Retail Automation</a></li>
                                          </ul>
                                        </li>
                                        <li><a href="/">&nbsp;</a></li>
                                        <li><a href="/">&nbsp;</a></li>
                                        <li><a href="/">&nbsp;</a></li>
                                        <li><a href="/">&nbsp;</a></li>
                                      </ul>
                                    </li>
                                    <li className="zindex">
                                    <label htmlFor="drop-4" className="toggle">Manufacturing Execution System</label>
                                    <a href="/manufacturesystem">Manufacturing Execution System <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Production Accounting</a></li>
                                        <li><a href="/">Real time Data Historian</a></li>
                                        <li><a href="/">Corporate Dashboard & Analytics</a></li>
                                        <li><a href="/">Operation Logbook & Target Dashboard</a></li>
                                        <li><a href="/">Oil Movement Management Systems</a></li>
                                      </ul>
                                    </li>
                                    <li className="zindex"><a href="/">Simulation & Modelling</a></li>
                                    <li className="zindex"><a href="/">Energy Management</a></li>
                                    <li className="zindex"><a href="/">APC Services</a></li>
                                    <li className="zindex"><a href="/">ETRM and Pricing Tool Application</a></li>
                                   </ul>
                                </li>
                                <li> 
                                  <label htmlFor="drop-3" className="toggle">Upstream</label>
                                  <a href="/upstream">Upstream <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                  <input type="checkbox" id="drop-3"/>
                                  <ul>
                                    <li className="zindex">
                                    <label htmlFor="drop-4" className="toggle">Geology & Geophysics</label>
                                    <a href="/geoligy">Geology & Geophysics <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Geophysical Interpretation</a></li>
                                        <li><a href="/">Geological Interpretation</a></li>
                                        <li><a href="/">Petrophysical Analysis</a></li>
                                        <li><a href="/">Subsurface Modeling</a></li>
                                      </ul>
                                    </li>
                                     <li className="zindex">
                                    <label htmlFor="drop-4" className="toggle">Reservior Management</label>
                                    <a href="/reserviormanagement">Reservior Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Reservoir Engineering</a></li>
                                        <li><a href="/">Field Development Plan</a></li>
                                        <li><a href="/">Dynamic Reservoir Simulation</a></li>
                                        <li><a href="/">Reservoir Characterization</a></li>
                                      </ul>
                                    </li> 
                                    <li className="zindex">
                                    <label htmlFor="drop-4" className="toggle">Well & Drilling</label>
                                    <a href="/welldrilling">Well & Drilling <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Well Planning & Drilling</a></li>
                                        <li><a href="/">Well Performance Analysis</a></li>
                                        <li><a href="/">Well Modeling</a></li>
                                        <li><a href="/">Well Log Interpretation</a></li>
                                        <li><a href="/">Well Drilling Services</a></li>
                                        <li><a href="/">Well Data Management</a></li>
                                      </ul>
                                    </li> 
                                    <li className="zindex">
                                    <label htmlFor="drop-4" className="toggle">Production Management</label>
                                    <a href="/productionmanagement">Production Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Production Engineering</a></li>
                                        <li><a href="/">Production Monitoring and Surveillance</a></li>
                                        <li><a href="/">Production Accounting</a></li>
                                        <li><a href="/">Production Optimization</a></li>
                                        <li><a href="/">Production Forecasting</a></li>
                                        <li><a href="/">Well Testing</a></li>
                                      </ul>
                                    </li> 
                                    <li className="zindex">
                                    <label htmlFor="drop-4" className="toggle">Data Management</label>
                                    <a href="/datamanagement">Data Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Seismic Data Management</a></li>
                                        <li><a href="/">Well Data Management </a></li>
                                        <li><a href="/">Real-time Production Data Management</a></li>
                                        <li><a href="/">Data Governance</a></li>
                                        <li><a href="/">Comprehensive E & P Master Data Management</a></li>
                                        <li><a href="/">Cloud-based Data Management</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                 <li> 
                                  <label htmlFor="drop-3" className="toggle">Digital Services</label>
                                  <a href="/digitalservices">Digital Services <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                  <input type="checkbox" id="drop-3"/>
                                  <ul>
                                      <li className="zindex"><a href="/servicearms">Digital IT Strategy & Roadmaps</a></li>
                                      <li className="zindex"><a href="/digitalservices">Application Development & Application Management (ADAM)</a></li>
                                      <li className="zindex"><a href="/assetmanagement">Enabling Technologies</a></li>
                                      <li className="zindex"><a href="/Health&safty">Visualization & Dashboards</a></li>                                     
                                      <li className="zindex"><a href="/Health&safty">Digital Asset Life Cycle Management</a></li>                                     
                                  </ul>
                                </li>
                                <li> 
                                  <label htmlFor="drop-3" className="toggle">Health Safety & Environment</label>
                                  <a href="/Healthsafty">Health Safety & Environment <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                  <input type="checkbox" id="drop-3"/>
                                  <ul>
                                      <li className="zindex"><a href="/">Process Safety Management</a></li> 
                                      <li className="zindex"><a href="/">Occupational Health And Safety Management</a></li> 
                                      <li className="zindex"><a href="/">Environmental Consulting</a></li> 
                                      <li className="zindex"><a href="/">Sustainability Strategy</a></li> 
                                      <li className="zindex"><a href="/">HSE System Evaluation</a></li> 
                                      <li className="zindex"><a href="/">HSE Business Process Framing</a></li> 
                                      <li className="zindex"><a href="/">HSE Solutions Implementation</a></li> 
                                      <li className="zindex"><a href="/">Change Management</a></li> 
                                  </ul>
                                </li>
                                 <li> 
                                  <label htmlFor="drop-3" className="toggle">Service Arms</label>
                                  <a href="/servicearms">Service Arms <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                  <input type="checkbox" id="drop-3"/>
                                  <ul>
                                      <li className="zindex"><a href="/">iOGImplement</a></li>  
                                      <li className="zindex"><a href="/">iOGConsult</a></li>  
                                      <li className="zindex"><a href="/">iOGTrain</a></li>  
                                      <li className="zindex"><a href="/">iOGStudy</a></li>  
                                  </ul>
                                </li>
                                  <li> 
                                  <label htmlFor="drop-3" className="toggle">Asset Management</label>
                                  <a href="/assetmanagement">Asset Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                  <input type="checkbox" id="drop-3"/>
                                  <ul>
                                     <li className="zindex"><a href="/">Enterprise Asset Management</a></li>
                                     <li className="zindex">
                                    <label htmlFor="drop-4" className="toggle">Asset Reliability & Integraity Management</label>
                                    <a href="/arimanagement">Asset Reliability & Integraity Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Asset Criticality Analysis</a></li>
                                        <li><a href="/">Risk Based Inspection</a></li>
                                        <li><a href="/">Root Cause Analysis</a></li>
                                        <li><a href="/">Failure Mode Effect Analysis</a></li>
                                        <li><a href="/">Reliability Centered Maintenance</a></li>
                                        <li><a href="/">Asset Strategy Management</a></li>
                                        <li><a href="/">Inspection Management</a></li>
                                        <li><a href="/">Calibration Management</a></li>
                                        <li><a href="/">Reliability Availability & Maintainability (RAM) Moeling</a></li>
                                        <li><a href="/">Spares Inventory Management and Optimisation (SIMO) </a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li> 
                                <label htmlFor="drop-1" className="toggle">Industries</label>
                                <a href="/industries">Industries<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <input type="checkbox" id="drop-1"/>
                                <ul>
                                  <li><a href="/refinery">Refinery</a></li>
                                  <li><a href="/petrochemicals">Petrochemicals</a></li>
                                  <li><a href="/chemicals">Chemicals</a></li>
                                  <li><a href="/lng">LNG</a></li>
                                  <li><a href="/gasprocessing">Gas Processing</a></li>
                                  <li><a href="/oilgasep">Oil & Gas E&P</a></li>
                                </ul>
                            </li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/resource">Resources</a></li>
                            <li><a href="/blog">Blogs</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
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
      </div>
    </div>
    );  
  }
}
