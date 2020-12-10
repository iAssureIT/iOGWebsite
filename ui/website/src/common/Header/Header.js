import React, {Component} from 'react';
// import $                  from 'jquery';
import {Route, withRouter,Redirect} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import './Header.css';
import 'bootstrap/js/modal.js';
import './Megamenu.js'
import Contactform       from '../../allBlocks/Contactform/Contactform.js';

 class Header extends Component {

   constructor(props) {
    super(props);
        this.state={
          lang:"",
          id: "",
          divUrl:"",
          pageUrl:"",

        }
        this.handlechange = this.handlechange.bind(this);

      }

  
  componentWillMount() {
     var pageUrl = window.location.pathname;
     // console.log("pageUrl kkk= ",pageUrl);
      let a = pageUrl ? pageUrl.split('/') : "";
          // console.log("a kkk==>",a[2]); 
          if(pageUrl == '/ourjourney'){
            $(".hidepoweredby").css("backgroundColor", "#fff");
          }
           if(pageUrl == '/#googtrans(en|fr)'){
            $("#dropdownFr").css("color", "red");
          }

     $(".onscrollheader").css("display", "none");
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

      if (scroll >= 100) {
           $(".hidepoweredby").css("backgroundColor", "#fff");
           $(".headerflow").addClass("headerflowscroll");
           $(".onscrollheader").css("z-index", "2002");
      } else {
           $(".hidepoweredby").css("backgroundColor", "#eee");
           $(".headerflow").removeClass("headerflowscroll");
           $(".onscrollheader").css("z-index", "1");
      }
    });
  }

 componentDidMount () {
    // this.changeLanguage();

    // this.handlechange();
    var fr_id=this.state.id;
    console.log("fr_id",fr_id);

    var currentLocation = window.location.href;
    // console.log("currentLocation----",currentLocation);
    var pageUrl = window.location.pathname;
    this.setState({
      pageUrl:pageUrl
    })
    var divUrl = currentLocation ? currentLocation.split('/') : "";
     console.log("divUrl[4]",divUrl[4]);
    if(divUrl[3] == "#googtrans(en|fr)"){
       $('.expertiesdropdown').css('marginLeft','-500px');
       $('.dropdown-content a').css('paddingTop','7px');
       $('.ct-topbar').css('bottom','76px');

    }

    if(divUrl[2]== "#googtrans(en|de)" ){
      $('.expertiesdropdown').css('marginLeft','-396px');

    }
    if(divUrl[2]== "#googtrans(en|es)" ){
      $('.expertiesdropdown').css('marginLeft','-407px');

    }
    if(divUrl[2]== "#googtrans(en|fr)" ){
      $('.expertiesdropdown').css('marginLeft','-100px');

    }

    this.setState({
      divUrl:divUrl

    })

    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    var pageUrl = window.location.pathname;
    console.log("pageUrl for lang----",pageUrl);
    if(pageUrl == '/#googtrans(en|fr)'){
            $("#dropdownFr").css("color", "red");
          }

     $('.frenchFlag').click(function() {
      $('.expertiesdropdown').css('color','red');
    });
    // this.googleTranslateElementInit();
} 



myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

triggerHtmlEvent(element, eventName) {


   $('document').ready(function () {


    // RESTYLE THE DROPDOWN MENU
    $('#google_translate_element').on("click", function () {

        // Change font family and color
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
            .css({
                'color': '#544F4B',
                'font-family': 'Roboto',
                'width':'100%'
            });
        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
      
        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
      
        // Change the padding of the languages
        $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
      
        // Change the width of the languages
        $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
        $("iframe").contents().find('td').css('width', '100%');
      
        // Change hover effects
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
            $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
        }, function () {
            $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
        });

        // Change Google's default blue border
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

        // Change the iframe's box shadow
        $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
        
      
      
        // Change the iframe's size and position?
        $(".goog-te-menu-frame").css({
            'height': '100%',
            'width': '100%',
            'top': '0px'
        });
        // Change iframes's size
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '100%'
        });
    });
  })

 }


 googleTranslateElementInit() {

    const google = window.google;
    new google.translate.TranslateElement({pageLanguage: this.state.lang, layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
     // window.location.reload();
 }

 /*  triggerHtmlEvent(element, eventName) {
    var event;
    if (document.createEvent) {
       window.location.reload();
    event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
    } else {
    event = document.createEventObject();
    event.eventType = eventName;
    element.fireEvent('on' + event.eventType, event);
    }
  }
*/
  changeLanguage(event, element, eventName){

     // window.location.reload();
   var lang = event.currentTarget.dataset;
    console.log("lang",lang);
    console.log("window.location",window.location);
    this.setState({
      lang:lang

    })

     // window.location.reload();

   this.googleTranslateElementInit();


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

// handlechange(event){
//      { var id = event.currentTarget.id;
//            console.log("id---",id)
//            this.setState({
//               id:id
//            });
//            // console.log("id---",id)
//             var currentLocation1 = window.location.href;
//              var divUrl = currentLocation1 ? currentLocation1.split('/') : "";
             
//             console.log("divUrl",divUrl);
//             if(divUrl.length==5){
//                this.props.history.push(divUrl[4]+"/#googtrans(en|"+id+")");
//            }
//            if(divUrl.length==4){
//                this.props.history.push(divUrl[3]+"/#googtrans(en|"+id+")");
//            }
     
//             if(this.state.id == "fr"){
//              $('.expertiesdropdown').css('marginLeft','-540px');
//             }
//            window.location.reload();
     
//           /*divUrl[3]+divUrl[4]*/
//         }
    

//   }

handlechange(event){
    var lang = event.currentTarget.dataset;
    console.log("lang---",lang);
    this.setState({
      lang:lang

    })

    var pageUrl = window.location.pathname;
    var currentLocation1 = window.location.href;
    console.log("currentLocation1",currentLocation1);
    
//[8]

     var id = event.currentTarget.id;
      console.log("id---",id)
      this.setState({
         id:id
      });
      console.log("id---",id)
      this.props.history.push(pageUrl+"#googtrans(en|"+id+")");
       if(this.state.lang == "fr"){
        $('.expertiesdropdown').css('marginLeft','-540px');
       }
      window.location.reload();
}

  render() {  
     var toolBar = document.getElementsByClassName('goog-te-banner-frame skiptranslate')[0];
         if(toolBar !== undefined) {
             toolBar.style.display  = 'none';
             document.body.style.top = '0px';
              } 
    return (
    <header className="col-lg-12 col-md-12 col-sm-12 col-xs-12 headerflow"> 
      <div className="row"> 
       {/* <ul>
            <li><a href="javascript:;" id="German" onclick="translateLanguage(this.id);"><span>German </span>
                <img src="img/flags/germany_flag.jpg" alt="" /></a> </li>
            <li><a href="javascript:;" id="Italian" onclick="translateLanguage(this.id);"><span>Italian
            </span>
                <img src="img/flags/italy_flag.jpg" alt="" /></a> </li>
            <li><a href="javascript:;" id="Hindi" onclick="translateLanguage(this.id);"><span>Hindi </span>
                <img src="img/flags/india_flag.png" alt="" /></a> </li>
            <li><a href="javascript:;" id="French" onclick="translateLanguage(this.id);"><span>French </span>
                <img src="img/flags/french_flag.jpg" alt="" /></a> </li>
            <li><a href="javascript:;" id="Spanish" onclick="translateLanguage(this.id);"><span>Spanish
            </span>
                <img src="img/flags/spain_flag.jpg" alt="" /></a> </li>
            <li><a href="javascript:;" id="Russian" onclick="translateLanguage(this.id);"><span>Russian
            </span>
                <img src="img/flags/russia_flag.jpg" alt="" /></a> </li>
        </ul>*/}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar navbar-static-top" id="bb">
         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 onscrollheader"></div>
          {/*<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 sepersteflagdiv ">*/}
             <div className="navbar-form navbar-left pull-right">
               <div className="moduletable">
                  <div className="ct-topbar">
                    <div className="container new_container">
                    <ul className="list-unstyled list-inline ct-topbar__list">
                      <li className="ct-language">
                      <ul className="list-unstyled ct-language__dropdown">
                        <li>
                          <a href="#googtrans(en|en)" className="lang-en lang-select" data-lang="en" id="en" onClick={this.handlechange.bind(this)}>
                            <img src="/images/engelsflag.png" className="flagdiv" alt="ENGLISH" title="English"/>
                            </a>
                        </li>
                        <li>
                          <a href="#googtrans(en|ar)" className="lang-es lang-select" data-lang="ar" id="ar" onClick={this.handlechange.bind(this)}>
                           <img src="/images/arebicflag.png" className="flagdiv" alt="ARABIC" title="Arabic"  />
                          </a>
                        </li>
                        <li>
                          <a href="#googtrans(en|de)" className="lang-es lang-select" data-lang="de" id="de" onClick={this.handlechange.bind(this)}>
                           <img src="/images/Germany.png" className="flagdiv" alt="GERMAN" title="German"/>
                          </a>
                         </li>
                        <li>
                         <a href="#googtrans(en|fr)" className="lang-es lang-select frenchFlag" data-lang="fr" id="fr" onClick={this.handlechange.bind(this)}>
                          <img src="/images/fransflag.jpg" className="flagdiv" alt="FRENCH" title="French"/>
                           </a>
                        </li>
                        <li>
                         <a href="#googtrans(en|es)" className="lang-es lang-select" data-lang="es" id="es" onClick={this.handlechange.bind(this)}>
                          <img src="/images/spain-flag.jpg" className="flagdiv" alt="SPANISH" title="Spanish"/>
                         </a>
                        </li>
                      </ul>
                      </li>
                    </ul>
                    </div>
                  </div>
                   <div className="new_flagdiv">
                   </div>  
                </div>
                    <div class="moduletable">
                     <div class="custom">
                  </div>
                </div>  
              </div>
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

           </div> 
         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 setlogo">
           <a className="headerlogo" href="/"><img alt="Logo" src="https://iogiassureit.s3.amazonaws.com/iOG/Logo (1).svg"/></a>         
        </div>
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 TopnavPadding">
           <div class="topnav" id="myTopnav">
            <a href="/" className="">HOME</a>

            <div class="dropdown">
            {console.log("-----",this.state.pageUrl == "/about-us" ? "Currentactivetab NopaddingToA" : "NopaddingToA normalTabColor")}
              <a href="/about-us" className={this.state.pageUrl == "/about" || this.state.pageUrl == "/founder-profile" || this.state.pageUrl == "/news-&-events" || this.state.pageUrl == "/ourjourney"  ? "Currentactivetab NopaddingToA" : "NopaddingToA" } >
                <button class="dropbtn">ABOUT US 
                 <i className="fa fa-angle-down Headerdownarraow"></i>
               </button>
             </a>

              <div className="dropdown-content normaldropdown dropdownintab dropdownforAbiutus hidden-xs" style={{position:"fixed"}}>
                {/* <a href="/about">Company Profile</a>*/}
                 <a href="/founder-profile">Founder's Profile</a>
                 <a href="/news-&amp;-events">News &amp; Events</a>   
                 <a href="/ourjourney">Our Journey</a>
              </div>
            </div> 

            <div class="dropdown">
              {console.log("-----",this.state.pageUrl === "/service-arms" ? "Currentactivetab NopaddingToA" : "NopaddingToA normalTabColor")}
              <button class="dropbtn"><a href="/services"className={this.state.pageUrl == "/services" ? "Currentactivetab NopaddingToA":"NopaddingToA"}>SERVICES</a> 
                <i  className={this.state.pageUrl == "/service-arms" ? "Currentactivetab NopaddingToA fa fa-angle-down Headerdownarraow":"NopaddingToA fa fa-angle-down Headerdownarraow"}></i>
              </button>
              <div class="dropdown-content normaldropdown dropdownintab  hidden-xs" style={{position:"fixed"}}>
                 <a href="/iog-study" className={this.state.pageUrl == "/iog-study" ? "Currentactivetab " : "" } >iOGStudy</a>
                 <a className={this.state.pageUrl == "/iog-consult" ? "Currentactivetab " : "" } href="/iog-consult">iOGConsult</a>
                 <a className={this.state.pageUrl == "/iog-implement" ? "Currentactivetab " : "" } href="/iog-implement">iOGImplement</a>
                 <a className={this.state.pageUrl == "/iog-train" ? "Currentactivetab " : "" } href="/iog-train">iOGTrain</a>    
              </div>
            </div> 

            <div class="dropdown ">
              <button class="dropbtn"><a href="/expertise" className={this.state.pageUrl == "/expertise" ||  this.state.pageUrl == "/supply-&-distribution" ||  this.state.pageUrl == "/planning-&-scheduling" ||  this.state.pageUrl == "/manufacturing-execution-system"   
                ||  this.state.pageUrl == "/digital-services" ||  this.state.pageUrl == "/simulation-and-modeling"  ||  this.state.pageUrl == "/health-safety-environment" ||  this.state.pageUrl == "/energy-management." ||  this.state.pageUrl == "/asset-management"  
                ||  this.state.pageUrl == "/other-services"  ||  this.state.pageUrl == "/production-plannning" ||  this.state.pageUrl == "/refinery-scheduling" ||  this.state.pageUrl == "/lp-utilities" ||  this.state.pageUrl == "/retro-analysis" ||  this.state.pageUrl == "/lp-configuration"
                ||  this.state.pageUrl == "/production-accounting"  ||  this.state.pageUrl == "/real-time-data-historian" ||  this.state.pageUrl == "/corporate-dashboard" ||  this.state.pageUrl == "/operation-logbook" ||  this.state.pageUrl == "/oil-movement"   
                ||  this.state.pageUrl == "/demand-management"  ||  this.state.pageUrl == "/invetory-management" ||  this.state.pageUrl == "/distribution-planning" ||  this.state.pageUrl == "/retail-automation" ||  this.state.pageUrl == "/digital-transformation"  
                ||  this.state.pageUrl == "/application-support"  ||  this.state.pageUrl == "/application-integration" ||  this.state.pageUrl == "/visualization-&-dashboards" ||  this.state.pageUrl == "/industries-v4" ||  this.state.pageUrl == "/steady-state-simulation" 
                ||  this.state.pageUrl == "/dynamic-simulation"  ||  this.state.pageUrl == "/operator-training" ||  this.state.pageUrl == "/occupational-health-management" ||  this.state.pageUrl == "/process-safety-management" ||  this.state.pageUrl == "/environment-management" 
                ||  this.state.pageUrl == "/apc-services"  ||  this.state.pageUrl == "/etrm" ||  this.state.pageUrl == "/utility-network-optimization" ||  this.state.pageUrl == "/equipment-monitoring" ||  this.state.pageUrl == "/energy-accounting" 
                ||  this.state.pageUrl == "/asset-lifecycle"  ||  this.state.pageUrl == "/asset-criticality-analysis" ||  this.state.pageUrl == "/asset-strategy-management" ||  this.state.pageUrl == "/inspection-&-calibration" 
                  ? "Currentactivetab NopaddingToA" : "NopaddingToA" }>EXPERTISE</a>
                 <i className={this.state.pageUrl == "/newexpertise" ||  this.state.pageUrl == "/supply-&-distribution" ||  this.state.pageUrl == "/planning-&-scheduling" ||  this.state.pageUrl == "/manufacturing-execution-system"   
                ||  this.state.pageUrl == "/digital-services" ||  this.state.pageUrl == "/simulation-and-modeling"  ||  this.state.pageUrl == "/health-safety-environment" ||  this.state.pageUrl == "/energy-management." ||  this.state.pageUrl == "/asset-management"  
                ||  this.state.pageUrl == "/other-services"  ||  this.state.pageUrl == "/production-plannning" ||  this.state.pageUrl == "/refinery-scheduling" ||  this.state.pageUrl == "/lp-utilities" ||  this.state.pageUrl == "/retro-analysis" ||  this.state.pageUrl == "/lp-configuration"
                ||  this.state.pageUrl == "/production-accounting"  ||  this.state.pageUrl == "/real-time-data-historian" ||  this.state.pageUrl == "/corporate-dashboard" ||  this.state.pageUrl == "/operation-logbook" ||  this.state.pageUrl == "/oil-movement"   
                ||  this.state.pageUrl == "/demand-management"  ||  this.state.pageUrl == "/invetory-management" ||  this.state.pageUrl == "/distribution-planning" ||  this.state.pageUrl == "/retail-automation" ||  this.state.pageUrl == "/digital-transformation"  
                ||  this.state.pageUrl == "/application-support"  ||  this.state.pageUrl == "/application-integration" ||  this.state.pageUrl == "/visualization-&-dashboards" ||  this.state.pageUrl == "/industries-v4" ||  this.state.pageUrl == "/steady-state-simulation" 
                ||  this.state.pageUrl == "/dynamic-simulation"  ||  this.state.pageUrl == "/operator-training" ||  this.state.pageUrl == "/occupational-health-management" ||  this.state.pageUrl == "/process-safety-management" ||  this.state.pageUrl == "/environment-management" 
                ||  this.state.pageUrl == "/apc-services"  ||  this.state.pageUrl == "/etrm" ||  this.state.pageUrl == "/utility-network-optimization" ||  this.state.pageUrl == "/equipment-monitoring" ||  this.state.pageUrl == "/energy-accounting" 
                ||  this.state.pageUrl == "/asset-lifecycle"  ||  this.state.pageUrl == "/asset-criticality-analysis" ||  this.state.pageUrl == "/asset-strategy-management" ||  this.state.pageUrl == "/inspection-&-calibration"  ? "Currentactivetab NopaddingToA fa fa-angle-down Headerdownarraow":"NopaddingToA fa fa-angle-down Headerdownarraow"}></i>
              </button>
              <div class="col-lg-10 col-md-10 hidden-sm hidden-xs dropdown-content expertiesdropdown NOPadding" id="dropdownFr" style={{position:"fixed"}}>
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1 ">
                    <h5 className="columnhead">
                       <a href="/planning-&-scheduling" className="columnhead">Planning & Scheduling</a></h5>
                       <a href="/production-plannning" className="dropdownintab expertise_a">Production Planning </a>
                       <a href="/refinery-scheduling"className="dropdownintab expertise_a">Production Scheduling</a>
                       <a href="/retro-analysis"className="dropdownintab expertise_a"> Retro-Analysis</a>
                       <a href="/lp-utilities"className="dropdownintab expertise_a">LP Utilities</a>
                       <a href="/lp-configuration"className="dropdownintab expertise_a">LP Configuration studies</a>
                 </div> 
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "style={{padding:"0px"}}>
                 <h5 className="columnhead"><a href="/supply-&-distribution" className="columnhead">Supply & Distribution</a></h5>
                  <a href="/demand-management" className="dropdownintab expertise_a">Demand Management</a>
                  <a href="/invetory-management"className="dropdownintab expertise_a">Inventory Management</a>
                  <a href="/distribution-planning"className="dropdownintab expertise_a">Distribution Planning</a>
                  <a href="/retail-automation"className="dropdownintab expertise_a">Retail Automation</a><br/>
               </div> 
               </div>
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                  <h5 className="columnhead"><a href="/manufacturing-execution-system" className="columnhead">Manufacturing Execution System</a></h5>
                    <a href="/production-accounting" className="dropdownintab expertise_a">Production Accounting</a>
                    <a href="/real-time-data-historian" className="dropdownintab expertise_a">Realtime Data Historian</a>
                    <a href="/corporate-dashboard" className="dropdownintab expertise_a">Corporate Dashboard & Analytics</a>
                    <a href="/operation-logbook" className="dropdownintab expertise_a">Operation Logbook</a>        
                    <a href="/oil-movement" className="dropdownintab expertise_a">Oil Movement Management</a>
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/digital-services"className="columnhead">Digital Services</a></h5>
                    <a href="/digital-transformation"className="dropdownintab expertise_a">Digital Transformation</a>
                    <a href="/application-support"className="dropdownintab expertise_a">Application Support</a>
                    <a href="/application-integration"className="dropdownintab expertise_a">Application Integration</a>
                    <a href="/visualization-&-dashboards"className="dropdownintab expertise_a">Visualization & Dashboards</a>
                    <a href="/industries-v4" className=""className="dropdownintab expertise_a">Industry 4.0 Initiatives</a>
                </div>   
               </div>   
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/simulation-and-modeling" className="columnhead">Simulation & Modeling</a></h5>
                    <a href="/steady-state-simulation" className="red"className="dropdownintab expertise_a">Steady State Simulation</a>
                    <a href="/dynamic-simulation"className="dropdownintab expertise_a">Dynamic Simulation</a>
                    <a href="/operator-training"className="dropdownintab expertise_a">Operator Training</a> 
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/health-safety-environment"className="columnhead">Health Safety & Environment</a></h5>
                    <a href="/occupational-health-management"className="dropdownintab expertise_a">Occupational Health Management</a>
                    <a href="/process-safety-management"className="dropdownintab expertise_a">Process Safety Management</a>
                    <a href="/environment-management"className="dropdownintab expertise_a">Environment Management</a>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                  <h5 className="columnhead"><a href="/other-services" className="columnhead">Other Services</a></h5>
                    <a href="/apc-services"className="dropdownintab expertise_a">APC Services</a>
                    <a href="/etrm"className="dropdownintab expertise_a">ETRM</a>
                </div>      
               </div>   
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                  <h5 className="columnhead"><a href="/energy-management."className="columnhead">Energy Management</a></h5>
                    <a href="/network-optimization-utility"className="dropdownintab expertise_a">Utility Network Optimization</a>
                    <a href="/equipment-monitoring"className="dropdownintab expertise_a">Equipment Monitoring</a>
                    <a href="/energy-accounting"className="dropdownintab expertise_a">Energy Accounting</a>
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                    <h5 className="columnhead"><a href="/asset-management"className="columnhead ">Asset Performance Management</a> </h5>
                      <a href="/asset-criticality-analysis"className="dropdownintab expertise_a">Asset Criticality Analysis </a>
                      <a href="/asset-lifecycle"className="dropdownintab expertise_a">Asset Lifecycle Management </a>
                      <a href="/asset-strategy-management"className="dropdownintab expertise_a">Asset Strategy Management </a>
                      <a href="/inspection-&-calibration"className="dropdownintab">Inspection & Calibration</a>
                </div>   
               </div>   
              </div>
            </div> 
             <div class="dropdown">
              <button class="dropbtn"><a href="/industries"className={this.state.pageUrl == "/industries" ||  this.state.pageUrl == "/refinery" ||  this.state.pageUrl == "/petrochemical"  ||  this.state.pageUrl == "/chemicals" ||  this.state.pageUrl == "/gas-processing" ||  this.state.pageUrl == "/oil-&-gas-e-&-p"  
                ||  this.state.pageUrl == "/well-drilling" ||  this.state.pageUrl == "/reservior-management" ||  this.state.pageUrl == "/geology-geophysics" ||  this.state.pageUrl == "/supply-chain-management"
/*                ||  this.state.pageUrl == "/production-management" ||  this.state.pageUrl == "/operation-logbook" ||  this.state.pageUrl == "/oil-movement"   
                ||  this.state.pageUrl == "/demand-management"  ||  this.state.pageUrl == "/invetory-management" ||  this.state.pageUrl == "/distribution-planning" ||  this.state.pageUrl == "/retail-automation" ||  this.state.pageUrl == "/digital-transformation"  
                ||  this.state.pageUrl == "/application-support"  ||  this.state.pageUrl == "/application-integration" ||  this.state.pageUrl == "/visualization-&-dashboards" ||  this.state.pageUrl == "/industries-v4" ||  this.state.pageUrl == "/steady-state-simulation" 
                ||  this.state.pageUrl == "/dynamic-simulation"  ||  this.state.pageUrl == "/operator-training" ||  this.state.pageUrl == "/occupational-health-management" ||  this.state.pageUrl == "/process-safety-management" ||  this.state.pageUrl == "/environment-management" 
                ||  this.state.pageUrl == "/apc-services"  ||  this.state.pageUrl == "/etrm" ||  this.state.pageUrl == "/utility-network-optimization" ||  this.state.pageUrl == "/equipment-monitoring" ||  this.state.pageUrl == "/energy-accounting" */
                       ? "Currentactivetab NopaddingToA" : "NopaddingToA" }>INDUSTRIES</a> 
                 <i className={this.state.pageUrl == "/newindustries" ||  this.state.pageUrl == "/refinery" ||  this.state.pageUrl == "/petrochemical"  ||  this.state.pageUrl == "/chemicals" ||  this.state.pageUrl == "/gas-processing" ||  this.state.pageUrl == "/oil-&-gas-e-&-p"  
                ||  this.state.pageUrl == "/well-drilling" ||  this.state.pageUrl == "/reservior-management" ||  this.state.pageUrl == "/geology-geophysics" ||  this.state.pageUrl == "/supply-chain-management" ? "Currentactivetab NopaddingToA fa fa-angle-down Headerdownarraow":"NopaddingToA fa fa-angle-down Headerdownarraow"}></i>
              </button>
              <div class="dropdown-content normaldropdown dropdownintab  hidden-xs" style={{position:"fixed"}}>
                <a href="/refinery">Refinery</a>
                <a href="/petrochemical">Petrochemicals</a>
                <a href="/chemicals">Chemicals</a>
                <a href="/lng">LNG</a>
                <a href="/gas-processing">Gas Processing</a>
                <a href="/oil-&-gas-e-&-p">Oil & Gas E & P</a>
              </div>
            </div> 

             <a href="/resources"className={this.state.pageUrl == "/resources" ? "Currentactivetab " : "" } >RESOURCES</a>
             <a href="/careers"className={this.state.pageUrl == "/careers" ? "Currentactivetab " : "" } >CAREERS</a>
             <a href="/blogs" className={this.state.pageUrl == "/blogs" ? "Currentactivetab " : "" } >BLOGS</a>
             <a href="/contact-us"className={this.state.pageUrl == "/contact-us" ? "Currentactivetab " : "" } >CONTACT US</a>
            <a href="javascript:void(0);" class="icon" onClick={this.myFunction.bind(this)}>&#9776;</a>
          </div>
          </div>
        </div>
         <button className="contactBar hidden-xs" data-toggle="modal" data-target="#modalId" onClick={this.modalClickEvent.bind(this)}>
          <div className="fixedContactBar">
            <i className="fa fa-phone envelopeIcon"style={{color:"#ffffff"}} aria-hidden="true"style={{paddingRight:"3px"}}></i>
          </div>
          <div className="hovertext">Contact Us Now</div>
        </button>
       {/* <a href="/contact-us">
         <button className="contactBarres hidden-lg hidden-md" >
          <div className="fixedContactBar">
            <i className="fa fa-envelope-o"style={{color:"#ffffff"}} aria-hidden="true"></i>
          </div>
          <div className="hovertext">Contact Us Now</div>
        </button>
       </a> */}
      </div>
      <div className="row"style={{zIndex:"10"}} > 
        <div className="modal fade" style={{zIndex:"10"}} id="modalId" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

export default withRouter(Header);