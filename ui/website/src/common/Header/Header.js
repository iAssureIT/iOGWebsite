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
                                    <li>
                                    <label htmlFor="drop-4" className="toggle">Supply Chain Management</label>
                                    <a href="/">Supply Chain Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Planning & Scheduling</a></li>
                                        <li><a href="/">Supply & Distribution</a></li>
                                      </ul>
                                    </li>
                                    <li className="zindex"><a href="/">Manufacturing Execution System</a></li>
                                    <li className="zindex"><a href="/">Simulation & Modelling</a></li>
                                    <li className="zindex"><a href="/">Energy Management</a></li>
                                    <li className="zindex"><a href="/">APC Services</a></li>
                                    <li className="zindex"><a href="/">ETRM and Pricing Tool Application</a></li>
                                  </ul>
                                </li>
                                <li> 
                                  <label htmlFor="drop-3" className="toggle">Upstream</label>
                                  <a href="/downstream">Upstream <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                  <input type="checkbox" id="drop-3"/>
                                  <ul>
                                    <li>
                                    <label htmlFor="drop-4" className="toggle">Geology & Geophysics</label>
                                    <a href="/">Geology & Geophysics <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Geophysical Interpretation</a></li>
                                        <li><a href="/">Geological Interpretation</a></li>
                                        <li><a href="/">Petrophysical Analysis</a></li>
                                        <li><a href="/">Subsurface Modeling</a></li>
                                      </ul>
                                    </li> <li>
                                    <label htmlFor="drop-4" className="toggle">Reservior Management</label>
                                    <a href="/">Reservior Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Geophysical Interpretation</a></li>
                                        <li><a href="/">Geological Interpretation</a></li>
                                        <li><a href="/">Petrophysical Analysis</a></li>
                                        <li><a href="/">Subsurface Modeling</a></li>
                                      </ul>
                                    </li> 
                                    <li>
                                    <label htmlFor="drop-4" className="toggle">Well & Drilling</label>
                                    <a href="/">Well & Drilling <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Geophysical Interpretation</a></li>
                                        <li><a href="/">Geological Interpretation</a></li>
                                        <li><a href="/">Petrophysical Analysis</a></li>
                                        <li><a href="/">Subsurface Modeling</a></li>
                                      </ul>
                                    </li> 
                                    <li>
                                    <label htmlFor="drop-4" className="toggle">Production Management</label>
                                    <a href="/">Production Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Geophysical Interpretation</a></li>
                                        <li><a href="/">Geological Interpretation</a></li>
                                        <li><a href="/">Petrophysical Analysis</a></li>
                                        <li><a href="/">Subsurface Modeling</a></li>
                                      </ul>
                                    </li> 
                                    <li>
                                    <label htmlFor="drop-4" className="toggle">Data Management</label>
                                    <a href="/">Data Management <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">Geophysical Interpretation</a></li>
                                        <li><a href="/">Geological Interpretation</a></li>
                                        <li><a href="/">Petrophysical Analysis</a></li>
                                        <li><a href="/">Subsurface Modeling</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li><a href="/servicearms">Service Arms</a></li>
                                <li><a href="/digitalservices">Digital Services</a></li>
                                <li><a href="/assetmanagement">Asset Management</a></li>
                                <li><a href="/Health&safty">Health Safety & Environment</a></li>
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
