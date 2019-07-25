import React, {Component} from 'react';
import $                  from 'jquery';
import './Ourjournyblock.css';

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
        } else {
            $(".add1").removeClass("addanim");
        }
        if (scroll >= 150) {
            $(".add2").addClass("addanim");
        } else {
            $(".add2").removeClass("addanim");
        }
        if (scroll >= 200) {
            $(".add3").addClass("addanim");
        } else {
            $(".add3").removeClass("addanim");
        }
        if (scroll >= 250) {
            $(".add4").addClass("addanim");
        } else {
            $(".add4").removeClass("addanim");
        }
        if (scroll >= 330) {
            $(".add5").addClass("addanim");
        } else {
            $(".add5").removeClass("addanim");
        }
        if (scroll >= 430) {
            $(".add6").addClass("addanim");
        } else {
            $(".add6").removeClass("addanim");
        }
        if (scroll >= 630) {
            $(".add7").addClass("addanim");
        } else {
            $(".add7").removeClass("addanim");
        }
        if (scroll >= 750) {
            $(".add8").addClass("addanim");
        } else {
            $(".add8").removeClass("addanim");
        }
        if (scroll >= 900) {
            $(".add9").addClass("addanim");
        } else {
            $(".add9").removeClass("addanim");
        }
        
    });
    
}



  render() {  
    return (
      <div>
              <div className="roadjourny">
                  <img alt="" src="/images/roadjourny.png" />
              </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  NOpadding">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 NOpadding">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 journytextblock lightbluebg">
              <h1 className="col-lg-8 col-lg-offset-2"><b>Our</b> Journey</h1>
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