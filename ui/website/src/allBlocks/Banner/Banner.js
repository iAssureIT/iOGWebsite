import React, {Component} from 'react';
import $                  from 'jquery';
import './Banner.css';
// import $ from "jquery";

export default class newbanner extends Component {
    constructor(props) {
    super(props);
        this.state={
          hide:"true",
        }

      }

componentDidMount(){

    $(".waterimg").fadeIn(6000);
    $(".waterimg2").fadeIn(6000);
    $(".petrolimage1").fadeIn(6000);
    $(".nexttogasimage").fadeIn(6000);
    $(".plantimage1").fadeIn(6000);
    $(".plantimage11").fadeIn(6000);
    $(".boat_img").fadeIn(6000);
    $(".boat_img2").fadeIn(6000);
 

 
  
  $("#waterimgDiv").hover(function() { 
       $('.new_HoverDiv').css('display','block');
       // $('.boat_img').css('z-index','100');
    
    }, function() {
      $(".new_HoverDiv").css('display','none');
      // $('.boat_img').css('z-index','10');
      $(".new_HoverDiv").css('display','none');
     
    });

     $("#waterimg2Div").hover(function() {
     // $('.new_HoverDiv1').css('display','block'); 
         
       
    
    }, function() {
     // $(".new_HoverDiv1").css('display','none');
    
    });

      $("#boat_imgDiv").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');

        $('.boat_img').css('z-index','150');
         $('.waterimg').css('z-index','100');
         $('.new_HoverDivforboat').css('display','block');
         // $('#hidepoweredbyblack1').removeClass('hiddendiv');
      

    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
       $('.boat_img').css('z-index','0');
       $('.waterimg').css('z-index','0');
       $('.new_HoverDivforboat').css('display','none');
        // $('#hidepoweredbyblack1').addClass('hiddendiv');
    
    });
    

    $("#boat_img2Div").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
       $('.waterimg2').css('z-index','110');
       // $('.boat_img').css('z-index','10');
       // $('#hidepoweredbyblack1').removeClass('hiddendiv');
      

    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      $('#hidepoweredbyblack').addClass('hiddendiv');
      // $('#hidepoweredbyblack1').addClass('hiddendiv');
      $('.waterimg2').css('z-index','0');
     
    });
    $("#nexttogasimageDiv").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
        // $('#hidepoweredbyblack1').removeClass('hiddendiv');
       // $('.boat_img').css('z-index','10');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
         // $('#hidepoweredbyblack1').addClass('hiddendiv');
     
    });
   /* $("#plantimage1Div").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
     
    });*/
    $("#plantimage11Div").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
       // $('#hidepoweredbyblack1').removeClass('hiddendiv');
       // $('.boat_img').css('z-index','10');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      $('#hidepoweredbyblack1').addClass('hiddendiv');
       // $('.boat_img').css('z-index','10');
     
    });
    $("#oilimageDiv").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
       // $('#hidepoweredbyblack').removeClass('hiddendiv');
       // $('#hidepoweredbyblack2').removeClass('hiddendiv');
       // $('#hidepoweredbyblack3').removeClass('hiddendiv');
       $('.oilimage_img').css('z-index','10');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      // $('#hidepoweredbyblack').addClass('hiddendiv');
      // $('#hidepoweredbyblack2').addClass('hiddendiv');
      // $('#hidepoweredbyblack3').addClass('hiddendiv');
     
    });
    $("#petrolimage1Div").hover(function() {
         // $('.new_HoverDiv2').addClass();
        
       $('#blackbannerDiv').removeClass('hiddendiv');
        // $('#hidepoweredbyblack1').removeClass('hiddendiv');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      // $('#hidepoweredbyblack').addClass('hiddendiv');
      // $('#hidepoweredbyblack1').addClass('hiddendiv');
       // $('.petrolimage1_img').css('z-index','100');
     
    });
} 

pinremoveclick(event){
   $(document).ready(function(){
      $(".new_HoverDiv").click(function(){
      $(".banner-cover").css("display", "none");
      $(".new_HoverDiv").css("display", "none");
       $(".ripplebox").show();
       $("#hidemydiv").show().delay(3200).fadeOut(3000);;
      /*$(".boat_img").css('opacity','0.8');
      $(".oilimage").css('opacity','0.8');
      $(".gasimage").css('opacity','0.8');
      $(".plantimage1").css('opacity','0.8');
      $(".plantimage11").css('opacity','0.8');
      $(".petrolimage").css('opacity','0.8');
      $(".petrolimage1").css('opacity','0.8');
      $(".waterimg2").css('opacity','0.8');
      $(".nexttogasimage").css('opacity','0.8');
      $(".boat_img2").css('opacity','0.8');*/

     });

   });

}
pin1removeclick(event){
   $(document).ready(function(){
      $(".new_HoverDiv1").click(function(){
      $(".banner-cover").hide();
      $(".new_HoverDiv1").hide();
       $(".ripplebox1").show();
      /*$(".boat_img").css('opacity','0.8');
      $(".oilimage").css('opacity','0.8');
      $(".gasimage").css('opacity','0.8');
      $(".plantimage1").css('opacity','0.8');
      $(".plantimage11").css('opacity','0.8');
      $(".petrolimage").css('opacity','0.8');
      $(".petrolimage1").css('opacity','0.8');
      $(".waterimg2").css('opacity','0.8');
      $(".nexttogasimage").css('opacity','0.8');
      $(".waterimg").css('opacity','0.8');*/

     });

   });

}
pin3removeclick(event){
  $(document).ready(function(){
      $(".new_HoverDiv3").click(function(){
      $(".banner-cover").hide();
      $(".new_HoverDiv3").hide();
       $(".ripplebox2").show();
     });

   });
}
pin4removeclick(event){
  $(document).ready(function(){
      $(".new_HoverDiv4").click(function(){
      $(".banner-cover").hide();
      $(".new_HoverDiv4").hide();
      $(".ripplebox2").show();
     });

   });
}
pin5removeclick(event){
  $(document).ready(function(){
      $(".new_HoverDiv6").click(function(){
      $(".banner-cover").hide();
      $(".new_HoverDiv6").hide();
      $(".ripplebox4").show();
     });

   });
}
pin6removeclick(event){
  $(document).ready(function(){
      $(".new_HoverDiv5").click(function(){
      $(".banner-cover").hide();
      $(".new_HoverDiv5").hide();
      $(".ripplebox5").show();
     });

   });
}
pinclick(event){

  $(document).ready(function(){
    $(".rippleboxhov").click(function(){
     $(".new_HoverDiv").css("display", "block");
     $(".new_HoverDiv").fadeIn();
    $(".banner-cover").css("display", "block");
    $(".ripplebox").css("display", "none");
     $(".waterimg").css('z-index','110');
    });
  });
} 
pin2click(event){

  $(document).ready(function(){
    $(".ripplebox1").click(function(){
    $(".new_HoverDiv1").show();
    $(".banner-cover").show();
    $(".ripplebox1").hide();
    $(".boat_img2").css('z-index','110');
    });
  });
} 

pin3click(event){
  $(document).ready(function(){
    $(".ripplebox2").click(function(){
    $(".new_HoverDiv3").show();
    $(".banner-cover").show();
    $(".ripplebox2").hide();
    $(".plantimage1").css('z-index','110');

    });
  });

}
pin4click(event){
  $(document).ready(function(){
    $(".ripplebox3").click(function(){
    $(".new_HoverDiv4").show();
    $(".banner-cover").show();
    $(".ripplebox3").hide();
    

    });
  });

}
pin5click(event){
  $(document).ready(function(){
    $(".ripplebox4").click(function(){
    $(".new_HoverDiv6").show();
    $(".banner-cover").show();
    $(".ripplebox4").hide();
    $(".waterimg2").css('z-index','110');
    

    });
  });

}
pin6click(event){
  $(document).ready(function(){
    $(".ripplebox5").click(function(){
    $(".new_HoverDiv5").show();
    $(".banner-cover").show();
    $(".ripplebox5").hide();
    $(".nexttogasimage").css('z-index','110');
    

    });
  });

}



  render() { 

    var y = 330;
    var h = y + 'px';
    var x = $(window).height();  
    var z = 0;
    var winHeight =(x-z) + 'px';
    var winHeight1 =(x-z) ;
    // console.log('x',$(window).height());
    // console.log('winHeight',winHeight1);
    var innerheight = winHeight1-60 + 'px';
    var innerheight1 = winHeight1-100 ;  
    var margin = parseInt( innerheight1-y );
    var margint = (margin/2);
    // console.log('margint',margint);
    // console.log('margin',margin);
    var windowWidth = $(window).width();
    // console.log('ww',windowWidth);
    if(windowWidth>=320&&windowWidth<=992){
    var backImage = "visible-xs col-xs-12 visible-sm col-sm-12 noBackImage"
    }else{
    var backImage = "signUpBackground hidden-xs hidden-sm"
    }
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container-fluid banner-wrapper NOpadding full-height"style={{overflow:"hidden"}}>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner  NOpadding"style={{overflow:"hidden"}}>
          <div className="">
            <div id="backimage1"className=" bannerContainer1 img-responsive col-lg-12 col-md-12 col-sm-12 hidden-xs"style={{overflow:"hidden"}}>
             <div id="blackbackground"></div>
                 
            {/* <img src="/images/newbanner_1.png"className="col-lg-12 col--md-12 col-sm-12 col-xs-12 img-responsive NOpadding"/>*/}
              <div className=""style={{overflow:"hidden"}}>
              <figure className="oilimage"id="oilimageDiv">
                 <a href="/petrochemicals">
                  <div className="new_HoverDiv7">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"177px"}}>
                   <p className="newhovertxt scrollbar3">Digital transformation in petrochemicals industry presents significant opportunities to increase innovation in products and solutions, in addition to improvement in the operational performance.</p>
                  {/* <a href="/petrochemicals"><span className="servicekbtnarrow7"><i className="fa fa-chevron-circle-right"></i></span></a>
                   */}
                  </div>  
                 </div>
                </a> 
                 <img alt="" src="/images/Banner3_6.png"className="tabimage scaleimage oilimage_img"/>
                </figure>
               {/* <figure className="gasimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/Banner3_8.png" className="tabimage scaleimage"style={{width:"255px"}}/>
                </figure>*/}
                <figure className="nexttogasimage"id="nexttogasimageDiv">
                  <a href="/refinery"><div className="new_HoverDiv5">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                      <div style={{width:"165px"}}>
                       <p className="newhovertxt_8 scrollbar2" id="style-14">Refiners seeking to improve their manufacturing processes with digital technology are focusing on innovations to reduce production costs and improve manufacturing efficiency while gearing up their workforce for the new, digital way of working.</p>
                      {/*<a href="/refinery">
                        <span className="servicekbtnarrow8">
                         <i className="fa fa-chevron-circle-right"></i>
                        </span>
                      </a>*/}
                    </div>  
                  </div>
                 </a> 
                  <img alt="" className="img-responsive scaleimage nexttogasimg_size nexttogasimage_img"src="/images/Banner3_5.png" /> 
                </figure>
               {/* <figure className="petrolimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img10.png"className="tabimage"style={{width:"241px"}}/>
                </figure>*/}
                <figure className="petrolimage1"id="petrolimage1Div">
                 <a href="/chemicals">
                  <div className="new_HoverDiv2">
                    <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                    <div style={{width:"165px"}}>
                     <p className="newhovertxt_again scrollbar4" id="style-14">Digitally enabled business work processes have tremendous potential for the Chemicals Industry, allowing them to innovate and impact demand trends, create new distribution channels and strengthen their production processes in terms of yield and opex.</p>
                    </div>  
                   </div>
                 </a> 
                 <img alt="" className="img-responsive tabimage scaleimage petrolimage1_img"src="/images/newbanner_img5.png"/>
                </figure>
                {/* <figure className="plantimage1"id="plantimage1Div">
                  <div className="new_HoverDiv3">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"188px"}}>
                  
                   <p className="newhovertxt_ptrchemical">Petrochemical industry & its higher value addition in recent volatile oil market.</p>
                   <a href="//petrochemical-mainpage"><span className="servicekbtnarrow5"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div> 
                  </div>
                 <img alt="" className="img-responsive scaleimage"src="/images/Banner3_6.png"className="tabimage"style={{width:"255px"}}/>
                </figure>*/}
                <figure className="plantimage11"id="plantimage11Div">
                 <div className="ripplediv">
                    {/* <div className="ripplebox3" onClick={this.pin4click.bind(this)} title="Click Me">
                      <span className="rippleboxhov" style={{"--i":"1"}}></span>
                      <span className="rippleboxhov" style={{"--i":"2"}}></span>
                      <span className="rippleboxhov" style={{"--i":"3"}}></span>
                      <span className="rippleboxhov" style={{"--i":"4"}}></span>
                      <span className="rippleboxhov" style={{"--i":"5"}}></span>
                     </div>*/}
                   </div>
                 <div className="new_HoverDiv4"> 
                  <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                     <a href="/gas-processing">
                      <div style={{width:"165px"}}> 
                       <p className="newhovertxt_4 scrollbar5">The extent of digital adoption in the Gas Processing sector will likely depend on companies’ receptiveness to change. A data-driven approach can potentially reduce annual downtime to a reasonable extent as well as help reduce the high capital intensity of the industry.</p>
{/*                       <span className="servicekbtnarrow3"><i className="fa fa-chevron-circle-right"></i></span></a>*/}
                      </div>
                     </a>  
                 </div>
                 <img alt="" className="img-responsive tabimage scaleimage plantimage11_img"src="/images/Banner3_8.png"/>
                 </figure>
                <figure className="waterimg"id="waterimgDiv">
                  <div className="ripplediv">
                    {/* <div className="ripplebox" onClick={this.pinclick.bind(this)} title="Click Me">
                      <span className="rippleboxhov" style={{"--i":"1"}}></span>
                      <span className="rippleboxhov" style={{"--i":"2"}}></span>
                      <span className="rippleboxhov" style={{"--i":"3"}}></span>
                      <span className="rippleboxhov" style={{"--i":"4"}}></span>
                      <span className="rippleboxhov" style={{"--i":"5"}}></span>
                     </div>*/}
                   </div>
                  {/*<div className="new_HoverDiv">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"165px"}}>
                     <p className="newhovertxt_1">The LNG value chain aggregately comprises of E&P, Liquefaction & Shipping.</p>
                      <a href="//lng">
                       <span className="servicekbtnarrow3">
                        <i className="fa fa-chevron-circle-right">
                        </i>
                       </span>
                      </a>
                  </div>
                   </div>*/}
                   <img alt="" className="img-responsive scaleimage waterimg_size"src="/images/Banner3_1.png" /> 
                </figure>
                
                 <figure className="boat_img " style={{overflow:"hidden"}} id="boat_imgDiv">
                  <a href="/lng"><div className="new_HoverDivforboat">
                    <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                     <div style={{width:"171px"}}>
                     {/* <i className="fa fa-times hover_close"onClick={this.pin1removeclick.bind(this)}></i>*/}
                      {/*<div class="scrollbar" id="style-14">
                        <div class="force-overflow"></div>
                      </div>*/}
                      <p className="newhovertxt_e_p1 scrollbar"><span className="force-overflow">Digital transformation of the LNG value chain is going to play the key role along its growth at the fastest rate among all fossil fuels in the coming decade. More & more LNG operators are striving for centralized integrated platform to exchange information and ensure standardization across operations.</span></p>
                    {/* <a href="/lng"><span className="servicekbtnarrow4_1"><i className="fa fa-chevron-circle-right"></i></span></a>*/}
                     </div> 
                  </div>
                 </a> 
                  
                   
                   <div class="drop-container1">
                      <div class="drop1">
                      </div>
                   </div>
                 <img alt="" className="img-responsive boat_img_size "src="/images/newboat.png"/>
                </figure>
               {/* <div className="ripple_Div"style={{width:"200"},{overflow:"hidden"},{position:"absolute"}}>
                  <div class="drop-container">
                      <div class="drop">
                      </div>
                   </div>
               </div> */}
                 {/*<div className="ripple_Div" style={{overflow:"hidden"}}>
                  <div className="drop-container">
                      <div className="drop">
                      </div>
                   </div>
                 </div>  */}
                 <figure className="boat_img2" id="boat_img2Div">
                   <a href="/oil-&-gas-e-&-p"><div className="new_HoverDiv1">
                    <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                     <div style={{width:"171px"}}>
                     {/* <i className="fa fa-times hover_close"onClick={this.pin1removeclick.bind(this)}></i>*/}
                      <p className="newhovertxt_e_p scrollbar1" id="style-14">While striving to discover what lies below the surface, the E&P segment has not only learnt to deal with large volumes of data by leveraging IT, in the next phase of digital transformation, it is focussing on data mapping, analysis and real-time decision-making between the layers of IT applications and machines.</p>
                     {/*<a href="/oil-&-gas-e-&-p"><span className="servicekbtnarrow4"><i className="fa fa-chevron-circle-right"></i></span></a>*/}
                    </div>
                   </div>
                  </a> 
                 <img alt="" className="img-responsive tabimage  boat_img2_img"src="/images/Banner3_4.png"/>
                </figure>
                <figure className="waterimg2"id="waterimg2Div">
                 <div className="new_HoverDiv6">
                  <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                  <div style={{width:"139px"}}>
                   <p className="newhovertxt_6">Merchandising different types of oil and gas</p>
                   {/*<a href="/oil-&-gas-e-&-p"><span className="servicekbtnarrow2"><i className="fa fa-chevron-circle-right"></i></span></a>*/}
                  </div>
                  </div>
                 <img alt="" className="img-responsive scaleimage waterimg2Div_img"src="/images/newbanner_img4.png"/>
                </figure>
               </div> 
              </div> 
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container-fluid banner-cover hiddendiv NOpadding" id="blackbannerDiv"> 

         <div class="curtain">    
            <div class="left-panel">
            </div>
            <div class="right-panel">
            </div>
        </div>  
        </div>
        <div id="hidepoweredbyblack"className="hiddendiv"></div>
        <div id="hidepoweredbyblack1"className="hiddendiv"></div>
        <div id="hidepoweredbyblack2"className="hiddendiv"></div>
        <div id="hidepoweredbyblack3"className="hiddendiv"></div>
        <div className="resbanner hidden-sm hidden-lg hidden-md"style={{height:"400px"},{width:"100%"}}></div>
      </div>
      
    );  
  }
}