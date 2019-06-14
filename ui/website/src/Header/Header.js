import React, {Component} from 'react';
import $                  from 'jquery';
import './Header.css';
export default class Header extends Component {
  
componentWillMount() {
  $(function(){ 
     var navMain = $("#bs-example-navbar-collapse-1");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });
}
//==========

  render() {  
    return (
      <div>
        <nav className="navbar navbar-inverse NavBlue" role="navigation">
          <div className="col-lg-10 col-lg-offset-1">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src="/images/logo.png"/></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div className="navbar-header">
              </div>
              <div className="hrdField">
                <ul className="nav navbar-nav headerMargin">
                  <li className="homeHeader"><a href="/">HOME</a></li>
                  <li><a href="/who-we-are">ABOUT US</a></li>
                  <li><a href="/what-we-do">SERVICES</a></li>
                  <li><a href="/portfolio">INDUSTRIES</a></li>
                  <li><a href="/contactus">EXPERTISE</a></li>
                  <li><a href="/contactus">CAREERS</a></li>
                  <li><a href="/contactus">DOWNLOADS</a></li>
                  <li><a href="/contactus">BLOG</a></li>
                  <li><a href="/contactus">CONTACT US</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );  
  }
}

