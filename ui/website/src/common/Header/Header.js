import React, {Component} from 'react';
import $                  from 'jquery';
import './Header.css';

export default class Header extends Component {
  
componentWillMount() {}

  render() {  
    return (
    <div className="col-lg-12"> 
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
                    <a className="navbar-brand" href="/"><img alt="Logo" src="/images/logo.png"/></a>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row"> 
                    <div className="col-lg-12">
                     <div className="row"> 
                        <nav>
                          <label htmlFor="drop" className="toggle">&#8801; Menu</label>
                          <input type="checkbox" id="drop" />
                          <ul className="menu">
                             <li><a href="/">Home</a></li>
                             <li><a href="/about-us">About Us</a></li>
                                <li> 
                                  <label htmlFor="drop-1" className="toggle">Services +</label>
                                  <a href="/services">Services</a>
                                  <input type="checkbox" id="drop-1"/>
                                  <ul>
                                    <li><a href="#">Downstream</a></li>
                                    <li><a href="#">Upstream</a></li>
                                    <li><a href="#">Service Arms</a></li>
                                    <li><a href="#">Digital Services</a></li>
                                    <li><a href="#">Asset Management</a></li>
                                    <li><a href="#">Health Safety & Environment</a></li>
                                  </ul>
                               </li>
                              <li>  
                              <label htmlFor="drop-2" className="toggle">Portfolio +</label>
                              <a href="#">Portfolio</a>
                              <input type="checkbox" id="drop-2"/>
                              <ul>
                                <li><a href="#">Portfolio 1</a></li>
                                <li><a href="#">Portfolio 2</a></li>
                                <li> 
                                  <label htmlFor="drop-3" className="toggle">Works +</label>
                                  <a href="#">Works</a>
                                  <input type="checkbox" id="drop-3"/>
                                  <ul>
                                    <li><a href="#">HTML/CSS</a></li>
                                    <li><a href="#">jQuery</a></li>
                                    <li>
                                    <label htmlFor="drop-4" className="toggle">Python +</label>
                                    <a href="#">Python</a>
                                    <input type="checkbox" id="drop-4"/>
                                      <ul>
                                        <li><a href="#">HTML/CSS</a></li>
                                        <li><a href="#">jQuery</a></li>
                                        <li><a href="#">Python</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
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
    </div>
    );  
  }
}
