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

  render() {  
    return (
   
    <header className="col-lg-12 col-md-12 col-sm-12 col-xs-12  headerflow"> 
      <div className="row"> 
        <div className="navbar navbar-static-top" id="bb">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 top_spacing">
              <div className="row"> 
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 NOPadding">
                  <div className="navbar-header col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 ">
                    <button type="button" className="navbar-toggle responsivetoggle " data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="headerlogo" href="/"><img alt="Logo" src="/images/logo.png"/></a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 hidden-sm hidden-xs">
                  <div className="row"> 
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <nav>
                          <label htmlFor="drop" className=""></label>
                          <input type="checkbox" id="drop" />
                          <ul className="menu">
                             <li><a href="/" className="headerTitle">Home</a></li>
                            
                            <li><a href="/masterpage/careers" className="headerTitle toggle">Careers</a></li>
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
      
      </div>
     
    </header>


    );  
  }
}


/*CSS CODE*/
/*
.headerflow{
    position: fixed;
  z-index: 10000;
  background-color: transparent;
  transition-duration: 0.8s;
}

.navbar {
  background-color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 14px;
}

*/
