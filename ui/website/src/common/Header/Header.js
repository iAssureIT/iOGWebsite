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
          lang:"en",
          id: "",
          divUrl:"",
          pageUrl:"",

        }
        this.handlechange = this.handlechange.bind(this);

      }

  
  componentWillMount() {
     var pageUrl = window.location.pathname;
     console.log("pageUrl kkk= ",pageUrl);
      let a = pageUrl ? pageUrl.split('/') : "";
          // console.log("a kkk==>",a[2]); 
          if(pageUrl == '/ourjourny'){
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
    // this.handlechange();
    var fr_id=this.state.id;
    console.log("fr_id",fr_id);

    var currentLocation = window.location.href;
    console.log("currentLocation----",currentLocation);
    var pageUrl = window.location.pathname;
    this.setState({
      pageUrl:pageUrl
    })
    var divUrl = currentLocation ? currentLocation.split('/') : "";
     console.log("divUrl[4]",divUrl[4]);
    if(divUrl[3] == "#googtrans(en|fr)"){
       $('.expertiesdropdown').css('marginLeft','-540px');
       $('.dropdown-content a').css('paddingTop','7px');
       $('.ct-topbar').css('bottom','76px');

    }

    if(divUrl[3]== "#googtrans(en|de)" ){
      $('.expertiesdropdown').css('marginLeft','-396px');

    }
    if(divUrl[3]== "#googtrans(en|es)" ){
      $('.expertiesdropdown').css('marginLeft','-407px');

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

handlechange(event){
      var id = event.currentTarget.id;
      // console.log("id---",id)
      this.setState({
         id:id
      });
      // console.log("id---",id)
       var currentLocation1 = window.location.href;
        var divUrl = currentLocation1 ? currentLocation1.split('/') : "";
        
       console.log("divUrl",divUrl);
       if(divUrl.length==5){
          this.props.history.push(divUrl[4]+"/#googtrans(en|"+id+")");
      }
      if(divUrl.length==4){
          this.props.history.push(divUrl[3]+"/#googtrans(en|"+id+")");
      }

       if(this.state.id == "fr"){
        $('.expertiesdropdown').css('marginLeft','-540px');
       }
      window.location.reload();

     /*divUrl[3]+divUrl[4]*/
   
    

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
                        <li><a href="#googtrans(en|en)" className="lang-en lang-select" data-lang="en" id="en" onClick={this.handlechange.bind(this)}>
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
               
                 {/* <div class="ct-topbar">
                    <div class="container">
                    <ul class="list-unstyled list-inline ct-topbar__list">
                      <li class="ct-language">Language <i class="fa fa-arrow-down"></i>
                      <ul class="list-unstyled ct-language__dropdown">
                        <li><a href="#googtrans(en|en)" class="lang-en lang-select" data-lang="en" onClick={this.triggerHtmlEvent.bind(this)}>
                             <img src="https://www.solodev.com/assets/google-translate/flag-usa.png" alt="USA"/>
                          </a>
                        </li>
                        <li>
                         <a href="#googtrans(en|es)" class="lang-es lang-select" data-lang="es" onClick={this.triggerHtmlEvent.bind(this)}>
                          <img src="https://www.solodev.com/assets/google-translate/flag-mexico.png" alt="MEXICO"/>
                         </a>
                        </li>
                        <li><a href="#googtrans(en|fr)" class="lang-es lang-select" data-lang="fr" onClick={this.triggerHtmlEvent.bind(this)}>
                             <img src="https://www.solodev.com/assets/google-translate/flag-france.png" alt="FRANCE"/>
                           </a>
                        </li>
    
                      </ul>
                      </li>
                    </ul>
                    </div>
                  </div>*/}
                 

                   {/* <div className="hidepoweredby">
                    </div>*/}
                   <div className="new_flagdiv">

                      {/*<a onClick={this.translateWebsite.bind(this)}  title="English" className="flag nturl" id="en">
                        <img src="/images/engelsflag.png"  className="flagdiv"  alt="English" />
                      </a>

                      <a href="#" onClick={this.translateWebsite.bind(this)}  title="Arabic" className="flag nturl" id="ar">
                        <img src="/images/arebicflag.png"  className="flagdiv"  alt="Arabic"/>
                      </a>

                      <a href="#" onClick={this.translateWebsite.bind(this)} title="French" className="flag nturl" id="fn">
                        <img   src="/images/fransflag.jpg"  className="flagdiv" alt="French"/>
                      </a>

                      <a href="#" onClick={this.translateWebsite.bind(this)}  title="German" className="flag nturl" id="de">
                        <img src="/images/Germany.png" onclick="doGTranslate('en|de');return false;"  className="flagdiv" alt="German"/>
                      </a>*/}

                     {/* <a href="#" onClick={this.translateWebsite.bind(this)}  title="Spanish" className="flag nturl" id="es">
                        <img  src="/images/spain-flag.jpg"  className="flagdiv" alt="Spanish"/>
                      </a>*/}

                   </div>  


                   {/* <div className="sepersteflagdiv">
                    <a  onClick="doGTranslate('en|en');return false;" title="English" className="flag nturl" >
                     <img src="/images/engelsflag.png"  className="flagdiv"  alt="English"/>
                    </a>
                    <a  onClick="doGTranslate('en|ar');return false;" title="Arabic" className="flag nturl" >
                     <img src="/images/arebicflag.png"  className="flagdiv"  alt="Arabic"/>
                    </a>
                    <a  onClick="doGTranslate('en|fr');return false;" title="French" className="flag nturl">
                     <img  src="/images/fransflag.jpg"  className="flagdiv"  alt="French"/>
                    </a>
                    <a  onClick="doGTranslate('en|de');return false;" title="German" className="flag nturl">
                     <img src="/images/Germany.png" className="flagdiv"  alt="German"/>
                    </a>
                    <a  onClick="doGTranslate('en|es');return false;" title="Spanish" className="flag nturl" >
                     <img  src="/images/spain-flag.jpg"  className="flagdiv" alt="Spanish"/>
                    </a>
                   </div> */}


                </div>
                    <div class="moduletable">
                     <div class="custom">
                  </div>
                </div>  
              </div>
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

           </div> 
         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 setlogo">
           <a className="headerlogo" href="/"><img alt="Logo" src="https://iogiassureit.s3.amazonaws.com/iOG/Logo.svg"/></a>         
        </div>
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
           <div class="topnav" id="myTopnav">
            <a href="/" className={this.state.pageUrl== "/" ? "Currentactivetab" : ""}>HOME</a>

            <div class="dropdown">
            {console.log("-----",this.state.pageUrl == "/masterpage/about" ? "Currentactivetab NopaddingToA" : "NopaddingToA normalTabColor")}
              <a href="/masterpage/about" className={this.state.pageUrl == "/masterpage/about" ? "Currentactivetab NopaddingToA" : "NopaddingToA" } ><button class="dropbtn">ABOUT US 
                 <i className="fa fa-angle-down Headerdownarraow"></i>
               </button>
             </a>

              <div className="dropdown-content normaldropdown dropdownintab dropdownforAbiutus" style={{position:"fixed"}}>
                 <a href="/masterpage/about">Company Profile</a>
                 <a href="/masterpage/founder-profile">Founder's Profile</a>
                 <a href="/masterpage/news-&amp;-events">News &amp; Events</a>   
                 <a href="/ourjourny">Our Journey</a>
              </div>
            </div> 

            <div class="dropdown">
              {console.log("-----",this.state.pageUrl === "/masterpage/service-arms" ? "Currentactivetab NopaddingToA" : "NopaddingToA normalTabColor")}
              <button class="dropbtn"><a href="/masterpage/service-arms"className={this.state.pageUrl == "/masterpage/service-arms" ? "Currentactivetab NopaddingToA":"NopaddingToA"}>SERVICES</a> 
                <i  className={this.state.pageUrl == "/masterpage/service-arms" ? "Currentactivetab NopaddingToA fa fa-angle-down Headerdownarraow":"NopaddingToA fa fa-angle-down Headerdownarraow"}></i>
              </button>
              <div class="dropdown-content normaldropdown dropdownintab" style={{position:"fixed"}}>
                 <a href="/masterpage/iog-study">iOGStudy</a>
                 <a href="/masterpage/iog-consult">iOGConsult</a>
                 <a href="/masterpage/iog-implement">iOGImplement</a>
                 <a href="/masterpage/iog-train">iOGTrain</a>    
              </div>
            </div> 

            <div class="dropdown ">
              <button class="dropbtn"><a href="/masterpage/newexpertise" className={this.state.pageUrl == "/masterpage/newexpertise" ? "Currentactivetab NopaddingToA" : "NopaddingToA" }>EXPERTISE</a>
                 <i className={this.state.pageUrl == "/masterpage/newexpertise" ? "Currentactivetab NopaddingToA fa fa-angle-down Headerdownarraow":"NopaddingToA fa fa-angle-down Headerdownarraow"}></i>
              </button>
              <div class="col-lg-10 col-md-10 hidden-sm hidden-xs dropdown-content expertiesdropdown NOPadding" id="dropdownFr" style={{position:"fixed"}}>
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1 ">
                    <h5 className="columnhead">
                       <a href="/masterpage/planning-&-scheduling" className="columnhead">Planning & Scheduling</a></h5>
                       <a href="/masterpage/production-plannning" className="dropdownintab expertise_a">Production Planning </a>
                       <a href="/masterpage/refinery-scheduling"className="dropdownintab expertise_a">Production Scheduling</a>
                       <a href="/masterpage/retro-analysis"className="dropdownintab expertise_a"> Retro-Analysis</a>
                       <a href="/masterpage/lp-utilities"className="dropdownintab expertise_a">LP Utilities</a>
                       <a href="/masterpage/lp-configuration"className="dropdownintab expertise_a">LP Configuration studies</a>
                 </div> 
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "style={{padding:"0px"}}>
                 <h5 className="columnhead"><a href="/masterpage/supply-&-distribution" className="columnhead">Supply & Distribution</a></h5>
                  <a href="/masterpage/demand-management" className="dropdownintab expertise_a">Demand Management</a>
                  <a href="/masterpage/invetory-management"className="dropdownintab expertise_a">Inventory Management</a>
                  <a href="/masterpage/distribution-planning"className="dropdownintab expertise_a">Distribution Planning</a>
                  <a href="/masterpage/retail-automation"className="dropdownintab expertise_a">Retail Automation</a><br/>
               </div> 
               </div>
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                  <h5 className="columnhead"><a href="/masterpage/manufacturing-exec-system" className="columnhead">Manufacturing Execution System</a></h5>
                    <a href="/masterpage/production-accounting" className="dropdownintab expertise_a">Production Accounting</a>
                    <a href="/masterpage/real-time-data-historian" className="dropdownintab expertise_a">Realtime Data Historian</a>
                    <a href="/masterpage/corporate-dashboard" className="dropdownintab expertise_a">Corporate Dashboard & Analytics</a>
                    <a href="/masterpage/operation-logbook" className="dropdownintab expertise_a">Operation Logbook</a>        
                    <a href="/masterpage/oil-movement" className="dropdownintab expertise_a">Oil Movement Management</a>
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/masterpage/digital-services"className="columnhead">Digital Services</a></h5>
                    <a href="/masterpage/digital-transformation"className="dropdownintab expertise_a">Digital Transformation</a>
                    <a href="/masterpage/application-support"className="dropdownintab expertise_a">Application Support</a>
                    <a href="/masterpage/application-integration"className="dropdownintab expertise_a">Application Integration</a>
                    <a href="/masterpage/visualization-&-dashboards"className="dropdownintab expertise_a">Visualization & Dashboards</a>
                    <a href="/masterpage/industries-v4" className=""className="dropdownintab expertise_a">Industry 4.0 Initiatives</a>
                </div>   
               </div>   
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/masterpage/simulation-and-modeling" className="columnhead">Simulation & Modeling</a></h5>
                    <a href="/masterpage/steady-state-simulation" className="red"className="dropdownintab expertise_a">Steady State Simulation</a>
                    <a href="/masterpage/dynamic-simulation"className="dropdownintab expertise_a">Dynamic Simulation</a>
                    <a href="/masterpage/operator-training"className="dropdownintab expertise_a">Operator Training</a> 
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/masterpage/health-safety-environment"className="columnhead">Health Safety & Environment</a></h5>
                    <a href="/masterpage/occupational-health-management"className="dropdownintab expertise_a">Occupational Health Management</a>
                    <a href="/masterpage/process-safety-management"className="dropdownintab expertise_a">Process Safety Management</a>
                    <a href="/masterpage/environment-management"className="dropdownintab expertise_a">Environment Management</a>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                  <h5 className="columnhead"><a href="/masterpage/other-services" className="columnhead">Other Services</a></h5>
                    <a href="/masterpage/apc-services"className="dropdownintab expertise_a">APC Services</a>
                    <a href="/masterpage/etrm"className="dropdownintab expertise_a">ETRM</a>
                </div>      
               </div>   
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                  <h5 className="columnhead"><a href="/masterpage/energy-management."className="columnhead">Energy Management</a></h5>
                    <a href="/masterpage/utility-network-optimization"className="dropdownintab expertise_a">Utility Network Optimization</a>
                    <a href="/masterpage/equipment-monitoring"className="dropdownintab expertise_a">Equipment Monitoring</a>
                    <a href="/masterpage/energy-accounting"className="dropdownintab expertise_a">Energy Accounting</a>
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                    <h5 className="columnhead"><a href="/masterpage/asset-management"className="columnhead ">Asset Performance Management</a> </h5>
                      <a href="/masterpage/asset-criticality-analysis"className="dropdownintab expertise_a">Asset Criticality Analysis </a>
                      <a href="/masterpage/asset-lifecycle"className="dropdownintab expertise_a">Asset Lifecycle Management </a>
                      <a href="/masterpage/asset-strategy-management"className="dropdownintab expertise_a">Asset Strategy Management </a>
                      <a href="/masterpage/inspection-&-calibration"className="dropdownintab">Inspection & Calibration</a>
                </div>   
               </div>   
              </div>
            </div> 
             <div class="dropdown">
              <button class="dropbtn"><a href="/masterpage/newindustries"className={this.state.pageUrl == "/masterpage/newindustries" ? "Currentactivetab NopaddingToA" : "NopaddingToA" }>INDUSTRIES</a> 
                 <i className={this.state.pageUrl == "/masterpage/newindustries" ? "Currentactivetab NopaddingToA fa fa-angle-down Headerdownarraow":"NopaddingToA fa fa-angle-down Headerdownarraow"}></i>
              </button>
              <div class="dropdown-content normaldropdown dropdownintab" style={{position:"fixed"}}>
                <a href="/masterpage/refinery">Refinery</a>
                <a href="/masterpage/petrochemical">Petrochemicals</a>
                <a href="/masterpage/chemicals">Chemicals</a>
                <a href="/masterpage/lng">LNG</a>
                <a href="/masterpage/gas-processing">Gas Processing</a>
                <a href="/masterpage/oil-&-gas-e-&-p">Oil & Gas E & P</a>
              </div>
            </div> 
             <a href="/resources"className={this.state.pageUrl == "/resources" ? "Currentactivetab " : "" } >RESOURCES</a>
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
        <a href="/contact-us">
         <button className="contactBarres hidden-lg hidden-md" >
          <div className="fixedContactBar">
            <i className="fa fa-envelope-o"style={{color:"#ffffff"}} aria-hidden="true"></i>
          </div>
          <div className="hovertext">Contact Us Now</div>
        </button>
       </a> 
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

export default withRouter(Header);