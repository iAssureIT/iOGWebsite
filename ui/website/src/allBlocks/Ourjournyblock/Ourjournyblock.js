import React, {Component} from 'react';
import $                  from 'jquery';
import './Ourjournyblock.css';
import Journycaro                     from '../Journycaro/Journycaro.js';

export default class Ourjournyblock extends Component {

  componentDidMount(){
    $(document).ready(function(){
    $(window).scroll(function(){
   var windowtop =$(window).scrollTop();
   var windowheight =$(window).height();;
  

  var nb1t = (3*windowtop)+"px";
  var nbtheight = 200;
  var nbtnull = (0)+"px";
    // alert(windowheight);

  if(windowheight == 3000){
    $(".roadjourny").addClass("roadjournyoverflow");
  
  }
  else{
      $(".roadjourny").css("height",nb1t);

  }



});

});
  

        $(window).scroll(function() 
    {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".add1").addClass("addanim");
        } 
        if (scroll >= 150) {
            $(".add2").addClass("addanim");
        } 
        if (scroll >= 200) {
            $(".add3").addClass("addanim");
        } 
        if (scroll >= 250) {
            $(".add4").addClass("addanim");
        } 
        if (scroll >= 330) {
            $(".add5").addClass("addanim");
        } 
        if (scroll >= 430) {
            $(".add6").addClass("addanim");
        } 
        if (scroll >= 630) {
            $(".add7").addClass("addanim");
        } 
        if (scroll >= 750) {
            $(".add8").addClass("addanim");
        } 
        if (scroll >= 900) {
            $(".add9").addClass("addanim");
        }  
         if (scroll >= 1020) {
            $(".add9").addClass("addanim");
        } 
         if (scroll >= 1220) {
            $(".add9").addClass("addanim");
        }  
        if (scroll >= 1280) {
            $(".add9").addClass("addanim");
        }  
        if (scroll >= 1320) {
            $(".add9").addClass("addanim");
        }  

    });
 $(window).scroll(function() 
    {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".scrollwrap").addClass("scrollanim");
        }        
    });

     $(window).scroll(function() 
    {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".Journycaro1").addClass("journyanim");
        }
        if (scroll >= 150) {
            $(".Journycaro2").addClass("journyanim");
        }
        if (scroll >= 200) {
            $(".Journycaro3").addClass("journyanim");
        }
        if (scroll >= 250) {
            $(".Journycaro4").addClass("journyanim");
        } 
        if (scroll >= 330) {
            $(".Journycaro5").addClass("journyanim");
        } 
        if (scroll >= 430) {
            $(".Journycaro6").addClass("journyanim");
        }
        if (scroll >= 630) {
            $(".Journycaro7").addClass("journyanim");
        }
        if (scroll >= 750) {
            $(".Journycaro8").addClass("journyanim");
        }
        if (scroll >= 900) {
            $(".Journycaro9").addClass("journyanim");
        }
         if (scroll >= 1020) {
            $(".Journycaro9").addClass("journyanim");
        }
        if (scroll >= 1220) {
            $(".Journycaro10").addClass("journyanim");
        }
         if (scroll >= 1280) {
            $(".Journycaro11").addClass("journyanim");
        }
         if (scroll >= 1320) {
            $(".Journycaro12").addClass("journyanim");
        }
         if (scroll >= 1520) {
            $(".Journycaro13").addClass("journyanim");
        }
      
        
    });
    
}
journyData(){
    return [
        {
            journyTitle : "Apr 2013",
            journytext  : "iOGSolutions registered itself on 17th April 2013 and starts operations with an office in Pune."   
        },
       /* {
            journyTitle : "Feb 2014",
            journytext  : "iOGSolutions signs support and training services with seven refineries of IOCL."   
        }, 
        {
            journyTitle : "Jan 2015",
            journytext  : "iOGSolutions establish local UAE organization “iOG IT Solution LLC” in Abu Dhabi. The office is located in the heart of the city on Hamdan Street."   
        }*/
    ]
}

journyData1(){
    return [
        {
            journyTitle : "Nov 2013",
            journytext  : "iOG solutions move to new office 330 at Amanora Chambers on the auspicious day of Dhanteras on 1st Nov 2013. "   
        },
   /*     {
            journyTitle : "Mar 2014",
            journytext  : "iOGSolutions successful complete FEED consulting services for multi-site refinery organization in the Middle East."   
        }, 
        {
            journyTitle : "Mar 2015",
            journytext  : "iOGSolutions signs 3 years’ service contract with major E&P player in India for consulting and support services."   
        } */
        
    ]
}

journyData2(){
    return [
        {
            journyTitle : "Mar 2014",
            journytext  : "Successful completion of the first FEED project for a multi-site refinery organization in the Middle East. "   
        },
   /*     {
            journyTitle : "July 2014",
            journytext  : "iOGSolutions successful complete FAT for LP implementation at five refineries."   
        }, 
        {
            journyTitle : "June 2015",
            journytext  : "iOG Solutions partners with leading IT firm and provide consulting services for a complete review of IT spending of an O&G Global Major."   
        }*/ 
        
    ]
}
journyData3(){
    return [
        {
            journyTitle : "Oct 2014",
            journytext  : " Successful completion of the first SCM Transformation project with SAT and training programs including the back-casting / LP model update in Spain.  "   
        },
 /*       {
            journyTitle : "Oct 2014",
            journytext  : "iOGSolutions successful complete SAT and training programs including back-casting / LP model update in Spain."   
        }, 
        {
            journyTitle : "Aug 2015",
            journytext  : "Beginning of our Upstream Oil & Gas practice."   
        } */
        
    ]
}
journyData4(){
    return [
        {
            journyTitle : "June 2015",
            journytext  : "iOG Solutions partners with leading IT firm and provide consulting services for a complete review of IT spending of an O&G Global Major. "   
        },
    /*    {
            journyTitle : "",
            journytext  : ""   
        }, 
        {
            journyTitle : "Sep 2015",
            journytext  : "iOG Solutions launch its new website on 9th Sep 2015."   
        } */
        
    ]
}
journyData5(){
    return [
        {
            journyTitle : "Sep 2015",
            journytext  : "iOG Solutions launch its new website on 9th Sep 2015. "   
        },
   /*     {
            journyTitle : "",
            journytext  : ""   
        }, 
        {
            journyTitle : "",
            journytext  : ""   
        } 
        */
    ]
}
journyData6(){
    return [
        {
            journyTitle : "Sept 2017",
            journytext  : " Joined hands with Leading Simulation company in South East Asia to develop the LP Model for a Refinery. "   
        },
 
    ]
}
journyData7(){
    return [
        {
            journyTitle : "Apr 2018",
            journytext  : " Celebrated 5 Years anniversary of iOG Solutions being the reputed Service provider across the world for Oil & Gas industry.  "   
        },
 
        
    ]
}
journyData8(){
    return [
        {
            journyTitle : "Mar 2019",
            journytext  : "Successful Delivery and Go-Live of Petrochemical Scheduling, Mass Balance and Energy Management Systems for a Greenfield Refinery and Petrochemical Complex in the Asia Pacific.  "   
        },
 
        
    ]
}
journyData9(){
    return [
        {
            journyTitle : "June 2019",
            journytext  : "  Conducted Value Discovery Workshop for multiple refineries to identify significant opportunities for improvement.  "   
        },
 
        
    ]
}
journyData10(){
    return [
        {
            journyTitle : "Apr 2018",
            journytext  : " Celebrated 5 Years anniversary of iOG Solutions being the reputed Service provider across the world for Oil & Gas industry.  "   
        },
 
        
    ]
   } 
    journyData11(){
    return [
        {
            journyTitle : "Aug 2019",
            journytext  : "Providing support services for a Gas Producing Facility in the Middle East for ensuring uptime of Implemented PI System. "   
        },
 
        
    ]
}
journyData12(){
    return [
        {
            journyTitle : "Nov 2019",
            journytext  : " iOG Solutions moved to its new office space in #7090, Marvel Feugo, Pune with a grand inaugural ceremony. "   
        },
 
        
    ]
}


  render() {  
    return (
      <div>
                  <div className="scrollwrap">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <span className="text">Scroll down</span>
                  </div>
                  <div className="Journycaro1">
                    <Journycaro journyData={this.journyData()}/>
                  </div>
                  <div className="Journycaro2">
                    <Journycaro journyData={this.journyData1()}/>
                  </div>
                  <div className="Journycaro3">
                    <Journycaro journyData={this.journyData2()}/>
                  </div>
                  <div className="Journycaro4">
                    <Journycaro journyData={this.journyData3()}/>
                  </div>
                  <div className="Journycaro5">
                    <Journycaro journyData={this.journyData4()}/>
                  </div>
                  <div className="Journycaro6">
                    <Journycaro journyData={this.journyData5()}/>
                  </div>
                  <div className="Journycaro7">
                    <Journycaro journyData={this.journyData6()}/>
                  </div>
                  <div className="Journycaro8">
                    <Journycaro journyData={this.journyData7()}/>
                  </div>
                  <div className="Journycaro9">
                    <Journycaro journyData={this.journyData8()}/>
                  </div>
                 {/* <div className="Journycaro10">
                    <Journycaro journyData={this.journyData9()}/>
                  </div>
                  <div className="Journycaro11">
                    <Journycaro journyData={this.journyData10()}/>
                  </div>
                  <div className="Journycaro12">
                    <Journycaro journyData={this.journyData11()}/>
                  </div>
                  <div className="Journycaro13">
                    <Journycaro journyData={this.journyData12()}/>
                  </div>*/}


                  
                  {/*<div className="Journycaro13">
                    <Journycaro journyData={this.journyData13()}/>
                  </div>
                  <div className="Journycaro14">
                    <Journycaro journyData={this.journyData14()}/>
                  </div>
                  <div className="Journycaro15">
                    <Journycaro journyData={this.journyData15()}/>
                  </div>*/}
                  <div className="overflowjourny">
                    <div className="roadjourny">
                        <img alt="" src="/images/roadjourny.png" />
                    </div>
                  </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  NOpadding">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 NOpadding">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 journytextblock lightbluebg">
              <h1 className="col-lg-10 col-lg-offset-2"><b>Our</b> Journey</h1>
              </div>
                <img className="add1" src="/images/add1.png" />
              </div>
                <img className="add2" src="/images/add1.png" />
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 journybg1">
              </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  NOpadding">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 journybg">
                <img className="add3" src="/images/add1.png" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 journybg3">
              <img className="add4" src="/images/add1.png" />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 journybg4">
              <img className="add5" src="/images/add1.png" />
              </div>
              <img className="add6" src="/images/add1.png" />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  NOpadding">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 journybg2">
              <img className="add7" src="/images/add1.png" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 journybg31">
                <img className="add8" src="/images/add1.png" />
              </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  NOpadding">
              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 journybg5">
              <img className="add9" src="/images/add1.png" />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 journybg6">
              </div>
          </div>
          {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div className="col-lg-4 col-md-7">
               <nav aria-label="breadcrumb">
                <ol class="breadcrumb">

                  <li class="breadcrumb-item"><a href="#">Home </a></li>
                  <li class="breadcrumb-item"><a href="/about-us">About Us</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Our Profile</li>
                </ol>
              </nav>
               </div>
            </div> */}
      </div>
    );  
  }
}







