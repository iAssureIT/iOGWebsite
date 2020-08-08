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
  
  componentWillMount() {

     

     var pageUrl = window.location.pathname;;
     console.log("pageUrl kkk= ",pageUrl);
      let a = pageUrl ? pageUrl.split('/') : "";
          // console.log("a kkk==>",a[2]); 
          if(pageUrl == '/ourjourny'){
            $(".hidepoweredby").css("backgroundColor", "#fff");
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
  myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
translateWebsite(event){
 event.preventDefault();
  var langId=event.currentTarget.id;
  console.log("langId",langId);

  function googleTranslateElementInit(){
    const google = window.google;
    new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element')
  }
  
 var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" + "&callback=initialize";
            document.body.appendChild(script);

 eval(function(p,a,c,k,e,r){e=function(c){
  return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};
  if(!''.replace(/^/,String))
    { while(c--)r[e(c)]=k[c]||e(c);k=[function(e){
       return r[e]}];e=function(){
         return'\\w+'};c=1};while(c--)
          if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}',43,43,'||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|translateWebsite||getElementById|google_translate_element|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'),0,{}))
           

 
}




/*function googleTranslateElementInit()
 {
  new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element');}*/
/*translateLanguage(lang) 
{

  var $frame = $('.goog-te-menu-frame:first');
  if (!$frame.size()) {
      alert("Error: Could not find Google translate frame.");
      return false;
  }
  $frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();
  return false;
}
 googleTranslateElementInit() 
 {
  new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element');
 }*/

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
             <div class="navbar-form navbar-left pull-right">
               <div class="moduletable">
                  <div className="translatediv" id="google_translate_element">
                    </div>
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
               {/*<div class="navbar-form navbar-left pull-right">
                 <div class="moduletable">
                  <div className="translatediv" id="google_translate_element2">
                   <div className="skiptranslate goog-te-gadget" dir="ltr">
                    <div id=":0.targetLanguage">
                     <select className="goog-te-combo" aria-label="Language Translate Widget">
                       <option value="">Select Language</option>
                       <option value="af">Afrikaans</option>
                       <option value="sq">Albanian</option>
                       <option value="am">Amharic</option>
                       <option value="ar">Arabic</option>
                       <option value="hy">Armenian</option>
                       <option value="az">Azerbaijani</option>
                       <option value="eu">Basque</option>
                       <option value="be">Belarusian</option>
                       <option value="bn">Bengali</option>
                       <option value="bs">Bosnian</option>
                       <option value="bg">Bulgarian</option>
                       <option value="ca">Catalan</option>
                       <option value="ceb">Cebuano</option>
                       <option value="ny">Chichewa</option>
                       <option value="zh-CN">Chinese (Simplified)</option>
                       <option value="zh-TW">Chinese (Traditional)</option>
                       <option value="co">Corsican</option>
                       <option value="hr">Croatian</option>
                       <option value="cs">Czech</option>
                       <option value="da">Danish</option>
                       <option value="nl">Dutch</option>
                       <option value="eo">Esperanto</option>
                       <option value="et">Estonian</option>
                       <option value="tl">Filipino</option>
                       <option value="fi">Finnish</option>
                       <option value="fr">French</option>
                       <option value="fy">Frisian</option>
                       <option value="gl">Galician</option>
                       <option value="ka">Georgian</option>
                       <option value="de">German</option>
                       <option value="el">Greek</option>
                       <option value="gu">Gujarati</option>
                       <option value="ht">Haitian Creole</option>
                       <option value="ha">Hausa</option>
                       <option value="haw">Hawaiian</option>
                       <option value="iw">Hebrew</option>
                       <option value="hi">Hindi</option>
                       <option value="hmn">Hmong</option>
                       <option value="hu">Hungarian</option>
                       <option value="is">Icelandic</option>
                       <option value="ig">Igbo</option>
                       <option value="id">Indonesian</option>
                       <option value="ga">Irish</option>
                       <option value="it">Italian</option>
                       <option value="ja">Japanese</option>
                       <option value="jw">Javanese</option>
                       <option value="kn">Kannada</option>
                       <option value="kk">Kazakh</option>
                       <option value="km">Khmer</option>
                       <option value="rw">Kinyarwanda</option>
                       <option value="ko">Korean</option>
                       <option value="ku">Kurdish (Kurmanji)</option>
                       <option value="ky">Kyrgyz</option>
                       <option value="lo">Lao</option>
                       <option value="la">Latin</option>
                       <option value="lv">Latvian</option>
                       <option value="lt">Lithuanian</option>
                       <option value="lb">Luxembourgish</option>
                       <option value="mk">Macedonian</option>
                       <option value="mg">Malagasy</option>
                       <option value="ms">Malay</option>
                       <option value="ml">Malayalam</option>
                       <option value="mt">Maltese</option>
                       <option value="mi">Maori</option>
                       <option value="mr">Marathi</option>
                       <option value="mn">Mongolian</option>
                       <option value="my">Myanmar (Burmese)</option>
                       <option value="ne">Nepali</option>
                       <option value="no">Norwegian</option>
                       <option value="or">Odia (Oriya)</option>
                       <option value="ps">Pashto</option>
                       <option value="fa">Persian</option>
                       <option value="pl">Polish</option>
                       <option value="pt">Portuguese</option>
                       <option value="pa">Punjabi</option>
                       <option value="ro">Romanian</option>
                       <option value="ru">Russian</option>
                       <option value="sm">Samoan</option>
                       <option value="gd">Scots Gaelic</option>
                       <option value="sr">Serbian</option>
                       <option value="st">Sesotho</option>
                       <option value="sn">Shona</option>
                       <option value="sd">Sindhi</option>
                       <option value="si">Sinhala</option>
                       <option value="sk">Slovak</option>
                       <option value="sl">Slovenian</option>
                       <option value="so">Somali</option>
                       <option value="es">Spanish</option>
                       <option value="su">Sundanese</option>
                       <option value="sw">Swahili</option>
                       <option value="sv">Swedish</option>
                       <option value="tg">Tajik</option>
                       <option value="ta">Tamil</option>
                       <option value="tt">Tatar</option>
                       <option value="te">Telugu</option>
                       <option value="th">Thai</option>
                       <option value="tr">Turkish</option>
                       <option value="tk">Turkmen</option>
                       <option value="uk">Ukrainian</option>
                       <option value="ur">Urdu</option>
                       <option value="ug">Uyghur</option>
                       <option value="uz">Uzbek</option>
                       <option value="vi">Vietnamese</option>
                       <option value="cy">Welsh</option>
                       <option value="xh">Xhosa</option>
                       <option value="yi">Yiddish</option>
                       <option value="yo">Yoruba</option>
                       <option value="zu">Zulu</option>
                     </select>
                   </div> 
                   <a onClick="doGTranslate('en|en');return false;"   title="Engels" className="flag nturl">
                   <img src="/images/engelsflag.png"  className="flagdiv"  alt="Engels"/>
                   </a>
                  <a href="#" onclick="doGTranslate('en|ar');return false;"  title="Arabies" className="flag nturl">
                   <img src="/images/arebicflag.png"  className="flagdiv"  alt="Arabies"/>
                   </a>
                  <a href="#" onclick="doGTranslate('en|fr');return false;" title="Frans" className="flag nturl">
                   <img   src="/images/fransflag.jpg"  className="flagdiv" alt="Frans"/></a>
                  <a href="#"  title="Duitse" className="flag nturl">
                   <img src="/images/Germany.png" onclick="doGTranslate('en|de');return false;"  className="flagdiv" alt="Duitse"/></a>
                  <a href="#" onclick="doGTranslate('en|es');return false;"  title="Spaans" className="flag nturl">
                   <img  src="/images/spain-flag.jpg"  className="flagdiv" alt="Spaans"/></a>
                 </div>    
                </div>
               </div>
             </div>*/}
           {/* </div>*/}
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

           </div> 
         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 setlogo">
           <a className="headerlogo" href="/"><img alt="Logo" src="/images/logo.png"/></a>         
        </div>
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
           <div class="topnav" id="myTopnav">
            <a href="/">HOME</a>
            <div class="dropdown">
              <a href="/masterpage/about-us" className="NopaddingToA"><button class="dropbtn">ABOUT US 
                 <i className="fa fa-angle-down Headerdownarraow"></i>
               </button>
             </a>
              <div className="dropdown-content normaldropdown dropdownintab dropdownforAbiutus" style={{position:"fixed"}}>
                 <a href="/masterpage/about-us">Company Profile</a>
                 <a href="/masterpage/founder-profile">Founder's Profile</a>
                 <a href="/masterpage/news-&amp;-events">News &amp; Events</a>
                 
                 <a href="/ourjourny">Our Journey</a>
              </div>
            </div>  
            <div class="dropdown">
              <button class="dropbtn"><a href="/masterpage/service-arms"className="NopaddingToA">SERVICES</a> 
                <i className="fa fa-angle-down Headerdownarraow"></i>
              </button>
              <div class="dropdown-content normaldropdown dropdownintab" style={{position:"fixed"}}>
                 <a href="/masterpage/iog-study">iOGStudy</a>
                 <a href="/masterpage/iog-consult">iOGConsult</a>
                 <a href="/masterpage/iog-implement">iOGImplement</a>
                 <a href="/masterpage/iog-train">iOGTrain</a>
                
              </div>
            </div> 
            <div class="dropdown ">
              <button class="dropbtn"><a href="/masterpage/expertise-main-page" className="NopaddingToA">EXPERTISE</a>
                 <i className="fa fa-angle-down Headerdownarraow"></i>
              </button>
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-6 dropdown-content expertiesdropdown NOPadding" style={{position:"fixed"}}>
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1 ">
                    <h5 className="columnhead">
                       <a href="/masterpage/planning-&-scheduling" className="columnhead">Planning & Scheduling</a></h5>
                       <a href="/masterpage/production-plannning" className="dropdownintab expertise_a">Production Planning </a>
                       <a href="/masterpage/refinery-scheduling"className="dropdownintab expertise_a">Production Schedule</a>
                       <a href="/masterpage/retro-analysis"className="dropdownintab expertise_a">Back Casting / Retro-Analysis</a>
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
                    <a href="/masterpage/production-accounting"className="dropdownintab expertise_a">Production Accounting</a>
                    <a href="/masterpage/data-historian"className="dropdownintab expertise_a">Realtime Data Historian</a>
                    <a href="/masterpage/corporate-dashboard"className="dropdownintab expertise_a">Corporate Dashboard & Analytics</a>
                    <a href="/masterpage/operation-logbook"className="dropdownintab expertise_a">Operation Logbook</a>        
                    <a href="/masterpage/oil-movement"className="dropdownintab expertise_a">Oil Movement Management</a>
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
                    <a href="/masterpage/steady-state" className="red"className="dropdownintab expertise_a">Steady State Simulation</a>
                    <a href="/masterpage/dynamic-simulation"className="dropdownintab expertise_a">Dynamic Simulation</a>
                    <a href="/masterpage/operator-training"className="dropdownintab expertise_a">Operator Training</a> 
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                   <h5 className="columnhead"><a href="/masterpage/health-safety-environment"className="columnhead">Health Safety & Environment</a></h5>
                    <a href="/masterpage/occupational-health"className="dropdownintab expertise_a">Occupational Health Management</a>
                    <a href="/masterpage/process-safety"className="dropdownintab expertise_a">Process Safety Management</a>
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
                  <h5 className="columnhead"><a href="/masterpage/new-energy-management"className="columnhead">Energy Management</a></h5>
                    <a href="/masterpage/energy-optimization"className="dropdownintab expertise_a">Utility Network Optimization</a>
                    <a href="/masterpage/equipment-monitoring"className="dropdownintab expertise_a">Equipment Monitoring</a>
                    <a href="/masterpage/energy-accounting"className="dropdownintab expertise_a">Energy Accounting</a>
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 column columnmenu columnmenu1">
                    <h5 className="columnhead"><a href="/masterpage/asset-management"className="columnhead ">Asset Performance Management</a> </h5>
                      <a href="/masterpage/aseet-criticality"className="dropdownintab expertise_a">Asset Criticality Analysis </a>
                      <a href="/masterpage/asset-lifecycle"className="dropdownintab expertise_a">Asset Lifecycle </a>
                      <a href="/masterpage/asset-strategy-management"className="dropdownintab expertise_a">Asset Strategy </a>
                      <a href="/masterpage/inspection-&-calibration"className="dropdownintab">Inspection & Calibration</a>
                </div>   
               </div>   
              </div>
            </div> 
             <div class="dropdown">
              <button class="dropbtn"><a href="/masterpage/industries"className="NopaddingToA">INDUSTRIES</a> 
                 <i className="fa fa-angle-down Headerdownarraow"></i>
              </button>
              <div class="dropdown-content normaldropdown dropdownintab" style={{position:"fixed"}}>
                <a href="/masterpage/refinery-mainpage">Refinery</a>
                <a href="/masterpage/petrochemical-mainpage">Petrochemicals</a>
                <a href="/masterpage/chemicals-mainpage">Chemicals</a>
                <a href="/masterpage/lng">LNG</a>
                <a href="/masterpage/gas-processing">Gas Processing</a>
                <a href="/masterpage/oil-&-gas-e-&-p">Oil & Gas E & P</a>
              </div>
            </div> 
             <a href="/masterpage/careers">CAREERS</a>
             <a href="/resource" >RESOURCES</a>
             <a href="/blog" >BLOGS</a>
             <a href="/contact-us" >CONTACT US</a>
            <a href="javascript:void(0);" class="icon" onClick={this.myFunction.bind(this)}>&#9776;</a>
          </div>
          </div>
        </div>
         <button className="contactBar hidden-xs" data-toggle="modal" data-target="#modalId" onClick={this.modalClickEvent.bind(this)}>
          <div className="fixedContactBar">
            <i className="fa fa-envelope-o"style={{color:"#ffffff"}} aria-hidden="true"></i>
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
