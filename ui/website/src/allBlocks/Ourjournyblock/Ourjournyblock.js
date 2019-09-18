import React, {Component} from 'react';
import $                  from 'jquery';
import './Ourjournyblock.css';
import Journycaro                     from '../Journycaro/Journycaro.js';

export default class Ourjournyblock extends Component {

  componentDidMount(){
    $(document).ready(function(){
    $(window).scroll(function(){
   var windowtop =$(window).scrollTop();
  

  var nb1t = (2*windowtop)+"px";
  
  $(".roadjourny").css("height",nb1t);

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
            journyTitle : "May 2013",
            journytext  : "iOGSolutions presents a case study of the implementation of Assay Management solutions for a downstream refining organization in India at a seminar in Singapore."   
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
            journyTitle : "June 2013",
            journytext  : "iOGSolutions bags contract to provide FEED consulting services for multi-site refinery organization in the Middle East."   
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
            journyTitle : "July 2013",
            journytext  : "iOG Solutions signed a contract in India to provide support services for seven refineries in the area of Planning & Scheduling."   
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
            journyTitle : "Aug 2013",
            journytext  : "iOG Solutions provides support for the implementation of a corporate dashboard system for an O&G client in India. The project is being executed from Singapore."   
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
            journyTitle : "Sept 2013",
            journytext  : "iOG Solutions signs up for 1200 sq. ft office in Pune at Amanora Chambers."   
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
            journyTitle : "Oct 2013",
            journytext  : "iOG Solutions establishes a base in Abu Dhabi near Mushriff Mall."   
        },
  /*      {
            journyTitle : "",
            journytext  : ""   
        }, 
        {
            journyTitle : "",
            journytext  : ""   
        } */
        
    ]
}
journyData7(){
    return [
        {
            journyTitle : "Nov 2013",
            journytext  : "iOG solutions moves to new office 330 at Amanora Chambers on the auspicious day of Dhanteras on 1st Nov 2013."   
        },
      /*  {
            journyTitle : "",
            journytext  : ""   
        }, 
        {
            journyTitle : "",
            journytext  : ""   
        } */
        
    ]
}
journyData8(){
    return [
        {
            journyTitle : "Dec 2013",
            journytext  : "iOGSolutions bags SCM transformation project through IT Major for implementing LP tool at five refineries in Spain."   
        },
/*        {
            journyTitle : "",
            journytext  : ""   
        }, 
        {
            journyTitle : "",
            journytext  : ""   
        } */
        
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
      </div>
    );  
  }
}







