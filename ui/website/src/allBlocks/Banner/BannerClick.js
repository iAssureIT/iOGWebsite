import React, {Component} from 'react';
import $                  from 'jquery';
import './Banner.css';

export default class newbanner extends Component {


    constructor(props) {
    super(props);
        this.state={
          hide:"true",
        }
      }

componentDidMount(){
  
   
    $(function(){
  
  var useMax = false;
  if (useMax){
       $('.box').css('-webkit-transform', 'rotate(0deg)');
    
  }else {
    
    setInterval(function(){      
      var deg = -Math.random() *   100;

        $('.box').css('-webkit-transform', 'rotate(' + deg   +'deg)')
        .css('-moz-transform', 'rotate(' + deg   +'deg)')
        .css('-ms-transform', 'rotate(' + deg   +'deg)')
;


      
           deg = -Math.random() *   100;
      
        $('.gauge2 .box').css('-webkit-transform', 'rotate(' + deg   +'deg)');
    
      console.log(deg);

    }, 1000);
  }
  
});
  


    $(".new_HoverDiv").css("display", "none");
     $("#hidemydiv").css("display", "none");
    $("#hidemydiv").delay(3200).fadeOut(3000);
  
  $(document).ready(function(){
    $(".waterimg").hover(function(){
        $("#backimage1").toggleClass(".onhoverBackgImg");

    })
 
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
                <figure className="oilimage">
                 <div className="new_HoverDiv7">
                  <div style={{width:"177px"}}>
                   <p className="newhovertxt"> iOG Solutions helps clients to define a road map for sustainable Health and Safety practices.</p>
                   <a href="/masterpage/health-safety-environment"><span className="servicekbtnarrow7"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>  
                 </div>
                 <img alt="" src="/images/Banner3_11.png"className="tabimage"style={{width:"241px"}}/>
                </figure>
                <figure className="gasimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/Banner3_8.png" className="tabimage"style={{width:"241px"}}/>
                </figure>
                <figure className="nexttogasimage">
                 <div className="ripplediv">
                     <div className=" ripplebox5" onClick={this.pin6click.bind(this)} title="Click Me">
                      <span style={{"--i":"1"}}></span>
                      <span style={{"--i":"2"}}></span>
                      <span style={{"--i":"3"}}></span>
                      <span style={{"--i":"4"}}></span>
                      <span style={{"--i":"5"}}></span>
                     </div>
                   </div>
                 <div className="new_HoverDiv5">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                  <div style={{width:"165px"}}>
                    <i className="fa fa-times hover_close"onClick={this.pin6removeclick.bind(this)}></i>
                   <p className="newhovertxt_8"> Entire process of chemicals takes place here. </p>
                   <a href="/masterpage/chemicals-mainpage"><span className="servicekbtnarrow8"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>  
                 </div>
                 <img alt="" src="/images/Banner3_5.png"clasName="tabimage_1"style={{width:"200px"}}/>
                </figure>
                <figure className="petrolimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img10.png"className="tabimage"style={{width:"241px"}}/>
                </figure>
                <figure className="petrolimage1">
                 <div className="new_HoverDiv2">
                  <div style={{width:"165px"}}>
                   <p className="newhovertxt"> Entire process of refining takes place here. </p>
                   <a href="/masterpage/refinery-mainpage"><span className="servicekbtnarrow1"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>  
                 </div>
                 <img alt="" className="img-responsive tabimage"src="/images/newbanner_img5.png"style={{width:"241px"}}/>
                </figure>
                 <figure className="plantimage1">
                   <div className="ripplediv">
                     <div className=" ripplebox2" onClick={this.pin3click.bind(this)} title="Click Me">
                      <span style={{"--i":"1"}}></span>
                      <span style={{"--i":"2"}}></span>
                      <span style={{"--i":"3"}}></span>
                      <span style={{"--i":"4"}}></span>
                      <span style={{"--i":"5"}}></span>
                     </div>
                   </div>
                  <div className="new_HoverDiv3">
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"188px"}}>
                    <i className="fa fa-times hover_close"onClick={this.pin3removeclick.bind(this)}></i>
                   <p className="newhovertxt_ptrchemical">Petrochemical industry & its higher value addition in recent volatile oil market.</p>
                   <a href="/masterpage/petrochemical-mainpage"><span className="servicekbtnarrow5"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div> 
                  </div>
                 <img alt="" className="img-responsive"src="/images/Banner3_6.png"className="tabimage"style={{width:"241px"}}/>
                </figure>
                <figure className="plantimage11">
                 <div className="ripplediv">
                     <div className="ripplebox3" onClick={this.pin4click.bind(this)} title="Click Me">
                      <span className="rippleboxhov" style={{"--i":"1"}}></span>
                      <span className="rippleboxhov" style={{"--i":"2"}}></span>
                      <span className="rippleboxhov" style={{"--i":"3"}}></span>
                      <span className="rippleboxhov" style={{"--i":"4"}}></span>
                      <span className="rippleboxhov" style={{"--i":"5"}}></span>
                     </div>
                   </div>
                 <div className="new_HoverDiv4"onClick={this.pin4removeclick.bind(this)}> 
                  <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                  <div style={{width:"165px"}}>
                     <i className="fa fa-times hover_close"onClick={this.pin4removeclick.bind(this)}></i>
                     <p className="newhovertxt_4">The LNG value chain aggregately comprises of E&P, Liquefaction & Shipping.</p>
                   <a href="/masterpage/supply-&-distribution"><span className="servicekbtnarrow3"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>
                 </div>
                 <img alt="" className="img-responsive tabimage"src="/images/newbanner_img7.png"style={{width:"241px"}}/>
                </figure>
                <figure className="waterimg">
                  <div className="ripplediv">
                     <div className="ripplebox" onClick={this.pinclick.bind(this)} title="Click Me">
                      <span className="rippleboxhov" style={{"--i":"1"}}></span>
                      <span className="rippleboxhov" style={{"--i":"2"}}></span>
                      <span className="rippleboxhov" style={{"--i":"3"}}></span>
                      <span className="rippleboxhov" style={{"--i":"4"}}></span>
                      <span className="rippleboxhov" style={{"--i":"5"}}></span>
                     </div>
                   </div>
                  <div className="new_HoverDiv" id="new_HoverDivhide"onClick={this.pinremoveclick.bind(this)}>
                   <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"165px"}}>
                   { <div><i className="fa fa-times hover_close"></i></div>}
                     <p className="newhovertxt_1">The LNG value chain aggregately comprises of E&P, Liquefaction & Shipping.</p>
                      <a href="/masterpage/lng">
                       <span className="servicekbtnarrow3">
                        <i className="fa fa-chevron-circle-right">
                        </i>
                       </span>
                      </a>
                  </div>
                   </div>
                   <img alt="" className="img-responsive  "src="/images/Banner3_1.png"style={{width:"130px"}}/> 
                    {/*  <p className="pinhoverdata text-center">Finding, augmenting, producing, and merchandising different types of oil and gas<br/> 
                       <a href="/masterpage/oil-&-gas-e-&-p">
                       </a> 
                      </p>*/}
                </figure>
                {/*<div className="svgBox">
                    <ul class="chart-skills">
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                    </ul>
                </div>*/}
               {/* <div className="svgBox1">
                    <ul class="chart-skills1">
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                    </ul>
                </div>*/}
                 <figure className="boat_img"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img3.png"style={{width:"155px"}}/>
                </figure>
                 <figure className="boat_img2">
                  <div className="ripplediv">
                     <div className=" ripplebox1" onClick={this.pin2click.bind(this)} title="Click Me">
                      <span style={{"--i":"1"}}></span>
                      <span style={{"--i":"2"}}></span>
                      <span style={{"--i":"3"}}></span>
                      <span style={{"--i":"4"}}></span>
                      <span style={{"--i":"5"}}></span>
                     </div>
                   </div>
                  <div className="new_HoverDiv1">
                    <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                   <div style={{width:"171px"}}>
                    <i className="fa fa-times hover_close"onClick={this.pin1removeclick.bind(this)}></i>
                    <p className="newhovertxt_e_p">The upstream segment of oil & gas industry, also known as Exploration & Production (E&P)</p>
                   <a href="/masterpage/oil-&-gas-e-&-p"><span className="servicekbtnarrow4"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div> 
                  </div>
                   <img alt="" className="img-responsive tabimage"src="/images/Banner3_4.png"style={{width:"241px"}}/>
                </figure>
                <figure className="waterimg2">
                  <div className="ripplediv">
                     <div className=" ripplebox4" onClick={this.pin5click.bind(this)} title="Click Me">
                      <span style={{"--i":"1"}}></span>
                      <span style={{"--i":"2"}}></span>
                      <span style={{"--i":"3"}}></span>
                      <span style={{"--i":"4"}}></span>
                      <span style={{"--i":"5"}}></span>
                     </div>
                   </div>
                 <div className="new_HoverDiv6">
                  <img className="img-responsive" id="loading" src="/images/newbanner_img14.png"/>
                  <div style={{width:"139px"}}>
                   <i className="fa fa-times hover_close"onClick={this.pin5removeclick.bind(this)}></i>
                   <p className="newhovertxt_6">Merchandising different types of oil and gas</p>
                   <a href="/masterpage/oil-&-gas-e-&-p"><span className="servicekbtnarrow2"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>
                  </div>
                 <img alt="" className="img-responsive"src="/images/newbanner_img4.png"style={{width:"110px"}}/>
                </figure>
               </div> 
              </div> 
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container-fluid banner-cover NOpadding">   
        </div>
        <div className="resbanner hidden-lg hidden-md"></div>
      </div>
      
    );  
  }
}