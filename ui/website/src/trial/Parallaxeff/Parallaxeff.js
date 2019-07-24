import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";


import './Parallaxeff.css';
export default class Parallaxeff extends Component {

  componentDidMount(){
  		$(document).ready(function(){

		var p1t = $(".p1").position().top;
		var p2t = $(".p2").position().top;
		var p3t = $(".p3").position().top;
		var p4t = $(".p4").position().top;
		var p5t = $(".p5").position().top;
		var p6t = $(".p6").position().top;
		var p7t = $(".p7").position().top;
		var p8t = $(".p8").position().top;
		var p9t = $(".p9").position().top;
		var p10t = $(".p10").position().top;
		var p11t = $(".p11").position().top;
		var p12t = $(".p12").position().top;
		var p13t = $(".p13").position().top;
		var p14t = $(".p14").position().top;
		var p15t = $(".p15").position().top;
		var p16t = $(".p16").position().top;
		var p17t = $(".p17").position().top;
		var p18t = $(".p18").position().top;
		var p19t = $(".p19").position().top;
		var p20t = $(".p20").position().top;
		var p21t = $(".p21").position().top;
		var p22t = $(".p22").position().top;
		var p23t = $(".p23").position().top;
		var p24t = $(".p24").position().top;
		var p25t = $(".p25").position().top;
		var p26t = $(".p26").position().top;
		var h1t = $(".h1").position().top;




		var windowtop =$(window).scrollTop();
		 
		 
		
		$(window).scroll(function(){
		var windowtop =$(window).scrollTop();
		

		var np1t = (p1t+0.1*windowtop)+"px";
		var np2t = (p2t+0.2*windowtop)+"px";
		var np3t = (p3t+0.3*windowtop)+"px";
		var np4t = (p4t+0.4*windowtop)+"px";
		var np5t = (p5t+0.5*windowtop)+"px";
		var np6t = (p6t+0.6*windowtop)+"px";
		var np7t = (p7t+0.7*windowtop)+"px";
		var np8t = (p8t+0.8*windowtop)+"px";
		var np9t = (p9t+0.8*windowtop)+"px";
		var np10t = (p10t+0.8*windowtop)+"px";
		var np11t = (p11t+0.1*windowtop)+"px";
		var np12t = (p12t+0.2*windowtop)+"px";
		var np13t = (p13t+0.8*windowtop)+"px";
		var np14t = (p14t+0.1*windowtop)+"px";
		var np15t = (p15t+0.1*windowtop)+"px";
		var np16t = (p16t+0.16*windowtop)+"px";
		var np17t = (p17t+0.17*windowtop)+"px";
		var np18t = (p18t+0.18*windowtop)+"px";
		var np19t = (p19t+0.19*windowtop)+"px";
		var np20t = (p20t+0.20*windowtop)+"px";
		var np21t = (p21t+0.87*windowtop)+"px";
		var np22t = (p22t+0.85*windowtop)+"px";
		var np23t = (p23t+0.80*windowtop)+"px";
		var np24t = (p24t+0.2*windowtop)+"px";
		var np25t = (p25t+0.20*windowtop)+"px";
		var np26t = (p26t+0.1*windowtop)+"px";
		var nh1t = (h1t+0.8*windowtop)+"px";



		
		$(".p1").css("top",np1t);
		$(".p2").css("top",np2t);
		$(".p3").css("top",np3t);
		$(".p4").css("top",np4t);
		$(".p5").css("top",np5t);
		$(".p6").css("top",np6t);
		$(".p7").css("top",np7t);
		$(".p8").css("top",np8t);
		$(".p9").css("top",np9t);
		$(".p10").css("top",np10t);
		$(".p11").css("top",np11t);
		$(".p12").css("top",np12t);
		$(".p13").css("top",np13t);
		$(".p14").css("top",np14t);
		$(".p15").css("top",np15t);
		$(".p16").css("top",np16t);
		$(".p17").css("top",np17t);
		$(".p18").css("top",np18t);
		$(".p19").css("top",np19t);
		$(".p20").css("top",np20t);
		$(".p21").css("top",np21t);
		$(".p22").css("top",np22t);
		$(".p23").css("top",np23t);
		$(".p24").css("top",np24t);
		$(".p25").css("top",np25t);
		$(".p26").css("top",np26t);
		$(".h1").css("top",nh1t);


	});

	});


$(document).ready(function() {
$(".down").click(function() {
     $('html, body').animate({
         scrollTop: $(".up").offset().top
     }, 6500);
 });
});

$(document).ready(function() {
$(".up").click(function() {
     $('html, body').animate({
         scrollTop: $(".down").offset().top
     }, 500);
 });
});

  }


  render(){
       return(
       	<div className="para">
       	<a className="down" href="#">Scroll down &darr;</a>
		<h1 className="h1"> Scrolling Down</h1>
		<div className="p1"></div>
		<div className="p2"></div>
		<div className="p3"></div>
		<div className="p4"></div>
		<div className="p5"></div>
		<div className="p6"></div>
		<div className="p7"></div>
		<div className="p8"></div>
		<div className="p9"></div>
		<div className="p10"></div>
		<div className="p11"></div>
		<div className="p12"></div>
		<div className="p13"></div>
		<div className="p14"></div>
		<div className="p15"></div>
		<div className="p16"></div>
		<div className="p17"></div>
		<div className="p18"></div>
		<div className="p19"></div>
		<div className="p20"></div>
		<div className="p21"></div>
		<div className="p22"></div>
		<div className="p23"></div>
		<div className="p24"></div>
		<div className="p25"></div>
		<div className="p26"></div>


<a className="up" href="#">Scroll up &uarr;</a>
</div>
	);
  } 

}