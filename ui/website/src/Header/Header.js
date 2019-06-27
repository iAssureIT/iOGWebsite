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
openSubMenu(event){
  event.preventDefault();
  var id = event.target.id;
  // console.log('id',id);
  if($("."+id).hasclassNameName("subnav-content-display")){
    $('.NavBlue').css({"background-color":"transparent", "transition-delay": "0.6s"});
    $(".subnav-content ").css({"display":"none"});
  }else{
    // console.log('false');
    $('div').removeclassNameName('subnav-content-display');
    $('.NavBlue').css({"background-color":"#332c81", "transform": "perspective(1px) translateZ(0)", "transition-duration": "0.5s"});
    $('.'+id).css({"background-color":"#332c81", "margin-top": "12px", "opacity":"1", "position": "absolute", "width": "100%", "z-index": 100, "left": 0, "transform": "perspective(1px) translateZ(0)", "transition-delay": "0.5s", "transition-duration": "0.5s"});
    $("."+id).addclassNameName('subnav-content-display');
    // $("."+id).addclassNameName('content-display');
  }
}

  render() {  
    return (  
      <div className="navbar navbar-default navbar-static-top" id="bb">
        <div className="">
          <div className="navbar-header col-lg-3">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><img alt="Logo" src="/images/logo.png"/></a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navPadding">
              <li><a href="/">Home</a></li>
              <li className="dropdown menu-large " id="aa">
                <a href="/about-us">About Us </a>          
              </li>
              <li className="dropdown menu-large dropDownA">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Services <b className="fa fa-angle-down"></b></a>          
                <ul className="dropdown-menu megamenu row dropDownMenu">
                  <li className="col-sm-3 col-lg-3 col-lg-offset-3">
                    <ul>
                      <li className="dropdown-header">For Upstream</li>
                      <li><a href="#">iOGImplement</a></li>
                      <li><a href="#">iOGConsult</a></li>
                      <li><a href="#">iOGTrain</a></li>
                      <li><a href="#">iOGStudy</a></li>
                    </ul>
                  </li>
                  <li className="col-sm-3 col-lg-6">
                    <ul>
                      <li className="dropdown-header">For Downstream</li>
                      <li><a href="#">iOGImplement</a></li>
                      <li><a href="#">iOGConsult</a></li>
                      <li><a href="#">iOGTrain</a></li>
                      <li><a href="#">iOGStudy</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown menu-large">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Industries <b className="fa fa-angle-down"></b></a>          
                <ul className="dropdown-menu megamenu row dropDownMenu">
                  <li className="col-sm-3 col-lg-3 col-lg-offset-3">
                    <ul>
                      <li className="col-lg-12"><a href="#">Upstream Industry</a></li>
                      
                    </ul>
                  </li>
                  <li className="col-sm-3 col-lg-6">
                    <ul>
                      <li className="col-lg-12"><a href="#">Downstream Industry</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown menu-large">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Expertise <b className="fa fa-angle-down"></b></a>          
                <ul className="dropdown-menu megamenu row dropDownMenu">
                  <li className="col-sm-3 col-lg-3 col-lg-offset-3">
                    <ul>
                      <li className="dropdown-header">For Upstream</li>
                      <li><a href="#">Geology & Geophisics</a></li>
                      <li><a href="#">Reservior Management</a></li>
                      <li><a href="#">Well & Drilling</a></li>
                      <li><a href="#">Production Management</a></li>
                      <li><a href="#">Data Management</a></li>
                    </ul>
                  </li>
                  <li className="col-sm-3 col-lg-6">
                    <ul>
                      <li className="dropdown-header">For Downstream</li>
                      <li><a href="#">Supply Chain Management</a></li>
                      <li><a href="#">ETRM and Pricing Tool Application</a></li>
                      <li><a href="#">Manufacturing Execution System</a></li>
                      <li><a href="#">APC Services</a></li>
                      <li><a href="#">Simulation & Modelling</a></li>
                      <li><a href="#">Energy Management</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    );  
  }
}

