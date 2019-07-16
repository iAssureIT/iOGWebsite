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
                    <div className="col-lg-10 col-lg-offset-1">
                        <nav>
                          <label htmlFor="drop" className="toggle">&#8801; Menu</label>
                          <input type="checkbox" id="drop" />
                          <ul className="menu">
                             <li><a href="/">Home</a></li>
                             <li><a href="/about-us">About Us</a></li>
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
                                    <li><a href="/">Supply Chain Management</a></li>
                                    <li><a href="/">Manufacturing Execution System</a></li>
                                    <li><a href="/">Simulation & Modelling</a></li>
                                    <li><a href="/">Energy Management</a></li>
                                    <li><a href="/">APC Services</a></li>
                                    <li><a href="/">ETRM and Pricing Tool Application</a></li>
                                    <li>
                                    <label htmlFor="drop-4" className="toggle">Python +</label>
                                    <a href="/">Python</a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="/">HTML/CSS</a></li>
                                        <li><a href="/">jQuery</a></li>
                                        <li><a href="/">Python</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li><a href="/upstream">Upstream</a></li>
                                <li><a href="/servicearms">Service Arms</a></li>
                                <li><a href="/digitalservices">Digital Services</a></li>
                                <li><a href="/assetmanagement">Asset Management</a></li>
                                <li><a href="/Health&safty">Health Safety & Environment</a></li>
                              </ul>
                            </li>
                            <li><a href="/industries">Industries</a></li>
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
