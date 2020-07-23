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
       $('#blackbannerDiv').removeClass('hiddendiv');
       $('#hidepoweredbyblack').css('z-index','11000').removeClass('hiddendiv');
       $('#hidepoweredbyblack1').css('z-index','11000').removeClass('hiddendiv');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      $(".new_HoverDiv").fadeOut(6000);
      $('#hidepoweredbyblack').addClass('hiddendiv');
      $('#hidepoweredbyblack1').addClass('hiddendiv');
     
    });

   $("#waterimg2Div").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
        $('#hidepoweredbyblack').css('z-index','11000').removeClass('hiddendiv');
       $('#hidepoweredbyblack1').css('z-index','11000').removeClass('hiddendiv');
    
    
    }, function() {
      $('.banner-cover').addClass('hiddendiv');
      $('#hidepoweredbyblack').addClass('hiddendiv');
      $('#hidepoweredbyblack1').addClass('hiddendiv');
     
    });

    $("#boat_img2Div").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
       $('#hidepoweredbyblack').css('z-index','11000').removeClass('hiddendiv');
       $('#hidepoweredbyblack1').css('z-index','11000').removeClass('hiddendiv');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      $('#hidepoweredbyblack').addClass('hiddendiv');
      $('#hidepoweredbyblack1').addClass('hiddendiv');
     
    });
    $("#nexttogasimageDiv").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
       $('#hidepoweredbyblack').css('z-index','11000').removeClass('hiddendiv');
       $('#hidepoweredbyblack1').css('z-index','11000').removeClass('hiddendiv');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      $('#hidepoweredbyblack').addClass('hiddendiv');
      $('#hidepoweredbyblack1').addClass('hiddendiv');
     
    });
   /* $("#plantimage1Div").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
     
    });*/
    $("#plantimage11Div").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
       $('#hidepoweredbyblack').css('z-index','11000').removeClass('hiddendiv');
       $('#hidepoweredbyblack1').css('z-index','11000').removeClass('hiddendiv');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      $('#hidepoweredbyblack').addClass('hiddendiv');
      $('#hidepoweredbyblack1').addClass('hiddendiv');
     
    });
    $("#oilimageDiv").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
       $('#hidepoweredbyblack').css('z-index','11000').removeClass('hiddendiv');
       $('#hidepoweredbyblack1').css('z-index','11000').removeClass('hiddendiv');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      $('#hidepoweredbyblack').addClass('hiddendiv');
      $('#hidepoweredbyblack1').addClass('hiddendiv');
     
    });
    $("#petrolimage1Div").hover(function() { 
       $('#blackbannerDiv').removeClass('hiddendiv');
       $('#hidepoweredbyblack').css('z-index','11000').removeClass('hiddendiv');
       $('#hidepoweredbyblack1').css('z-index','11000').removeClass('hiddendiv');
    
    }, function() {
      $('#blackbannerDiv').addClass('hiddendiv');
      $('#hidepoweredbyblack').addClass('hiddendiv');
      $('#hidepoweredbyblack1').addClass('hiddendiv');
     
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
          <div className="row">
            <div id="backimage1"className=" bannerContainer1 img-responsive col-lg-12 col-md-12 col-sm-12 hidden-xs"style={{overflow:"hidden"}}>
             <div id="blackbackground"></div>
                 
            {/* <img src="/images/newbanner_1.png"className="col-lg-12 col--md-12 col-sm-12 col-xs-12 img-responsive NOpadding"/>*/}
              <div className="row"style={{overflow:"hidden"}}>
                <figure className="oilimage"id="oilimageDiv">
                 <div className="new_HoverDiv7">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"177px"}}>
                   <p className="newhovertxt"> iOG Solutions helps clients to define a road map for sustainable Health and Safety practices.</p>
                   <a href="/masterpage/health-safety-environment"><span className="servicekbtnarrow7"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>  
                 </div>
                 <img alt="" src="/images/Banner3_11.png"className="tabimage scaleimage"style={{width:"241px"}}/>
                </figure>
                <figure className="gasimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/Banner3_8.png" className="tabimage scaleimage"style={{width:"241px"}}/>
                </figure>
                <figure className="nexttogasimage"id="nexttogasimageDiv">
                 <div className="new_HoverDiv5">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                    <div style={{width:"165px"}}>
                    <p className="newhovertxt_8"> Entire process of chemicals takes place here. </p>
                    <a href="/masterpage/chemicals-mainpage">
                      <span className="servicekbtnarrow8">
                       <i className="fa fa-chevron-circle-right"></i>
                      </span>
                    </a>
                  </div>  
                 </div>
                  <img alt="" className="img-responsive scaleimage nexttogasimg_size"src="/images/Banner3_5.png" /> 
                </figure>
                <figure className="petrolimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img10.png"className="tabimage"style={{width:"241px"}}/>
                </figure>
                <figure className="petrolimage1"id="petrolimage1Div">
                 <div className="new_HoverDiv2">
                  <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                  <div style={{width:"165px"}}>
                   <p className="newhovertxt_again"> Entire process of refining takes place here. </p>
                   <a href="/masterpage/refinery-mainpage"><span className="servicekbtnarrow1"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>  
                 </div>
                 <img alt="" className="img-responsive tabimage scaleimage"src="/images/newbanner_img5.png"style={{width:"241px"}}/>
                </figure>
                 <figure className="plantimage1"id="plantimage1Div">
                  {/* <div className="ripplediv">
                     <div className=" ripplebox2" onClick={this.pin3click.bind(this)} title="Click Me">
                      <span style={{"--i":"1"}}></span>
                      <span style={{"--i":"2"}}></span>
                      <span style={{"--i":"3"}}></span>
                      <span style={{"--i":"4"}}></span>
                      <span style={{"--i":"5"}}></span>
                     </div>
                   </div>*/}
                  <div className="new_HoverDiv3">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"188px"}}>
                   {/* <i className="fa fa-times hover_close"onClick={this.pin3removeclick.bind(this)}></i>*/}
                   <p className="newhovertxt_ptrchemical">Petrochemical industry & its higher value addition in recent volatile oil market.</p>
                   <a href="/masterpage/petrochemical-mainpage"><span className="servicekbtnarrow5"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div> 
                  </div>
                 <img alt="" className="img-responsive scaleimage"src="/images/Banner3_6.png"className="tabimage"style={{width:"241px"}}/>
                </figure>
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
                 <div className="new_HoverDiv4"onClick={this.pin4removeclick.bind(this)}> 
                  <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                  <div style={{width:"165px"}}>
                     {/*<i className="fa fa-times hover_close"onClick={this.pin4removeclick.bind(this)}></i>*/}
                     <p className="newhovertxt_4">The LNG value chain aggregately comprises of E&P, Liquefaction & Shipping.</p>
                   <a href="/masterpage/supply-&-distribution"><span className="servicekbtnarrow3"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>
                 </div>
                 <img alt="" className="img-responsive tabimage scaleimage"src="/images/newbanner_img7.png"style={{width:"241px"}}/>
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
                  <div className="new_HoverDiv">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"165px"}}>
                   {/* <div><i className="fa fa-times hover_close"></i></div>*/}
                     <p className="newhovertxt_1">The LNG value chain aggregately comprises of E&P, Liquefaction & Shipping.</p>
                      <a href="/masterpage/lng">
                       <span className="servicekbtnarrow3">
                        <i className="fa fa-chevron-circle-right">
                        </i>
                       </span>
                      </a>
                  </div>
                   </div>
                   <img alt="" className="img-responsive scaleimage waterimg_size"src="/images/Banner3_1.png" /> 
                </figure>
                
                 <figure className="boat_img"style={{overflow:"hidden"}} id="boat_imgDiv">
                   <div class="drop-container">
                      <div class="drop">
                      </div>
                   </div>
                   <div class="drop-container1">
                      <div class="drop1">
                      </div>
                   </div>
                 <img alt="" className="img-responsive boat_img_size"src="/images/newbanner_img3.png"/>
                </figure>
                 <figure className="boat_img2" id="boat_img2Div">
                  <div className="new_HoverDiv1">
                    <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"171px"}}>
                   {/* <i className="fa fa-times hover_close"onClick={this.pin1removeclick.bind(this)}></i>*/}
                    <p className="newhovertxt_e_p">The upstream segment of oil & gas industry, also known as Exploration & Production (E&P)</p>
                   <a href="/masterpage/oil-&-gas-e-&-p"><span className="servicekbtnarrow4"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div> 
                  </div>
                   <img alt="" className="img-responsive tabimage scaleimage"src="/images/Banner3_4.png"style={{width:"241px"}}/>
                </figure>
                <figure className="waterimg2"id="waterimg2Div">
                 <div className="new_HoverDiv6">
                  <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                  <div style={{width:"139px"}}>
                   <p className="newhovertxt_6">Merchandising different types of oil and gas</p>
                   <a href="/masterpage/oil-&-gas-e-&-p"><span className="servicekbtnarrow2"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>
                  </div>
                 <img alt="" className="img-responsive scaleimage"src="/images/newbanner_img4.png"style={{width:"110px"}}/>
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
        <div id="hidepoweredbyblack"></div>
        <div id="hidepoweredbyblack1"></div>
        <div className="resbanner hidden-lg hidden-md"style={{height:"500px"}}></div>
      </div>
      
    );  
  }
}