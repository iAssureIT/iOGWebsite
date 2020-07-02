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

 
  $(document).ready(function(){
    $(".waterimg").hover(function(){
        $("#backimage1").toggleClass(".onhoverBackgImg");

    })
 
  });
 
} 
pinremoveclick(event){
   $(document).ready(function(){
      $(".new_HoverDiv").click(function(){
      $("#blackbackground").hide();
      $(".new_HoverDiv").hide();
       $(".ripplebox").show();
      $(".boat_img").css('opacity','0.8');
      $(".oilimage").css('opacity','0.8');
      $(".gasimage").css('opacity','0.8');
      $(".plantimage1").css('opacity','0.8');
      $(".plantimage11").css('opacity','0.8');
      $(".petrolimage").css('opacity','0.8');
      $(".petrolimage1").css('opacity','0.8');
      $(".waterimg2").css('opacity','0.8');
      $(".nexttogasimage").css('opacity','0.8');
      $(".boat_img2").css('opacity','0.8');

     });

   });

}
pin1removeclick(event){
   $(document).ready(function(){
      $(".new_HoverDiv1").click(function(){
      $("#blackbackground").hide();
      $(".new_HoverDiv1").hide();
       $(".ripplebox1").show();
      $(".boat_img").css('opacity','0.8');
      $(".oilimage").css('opacity','0.8');
      $(".gasimage").css('opacity','0.8');
      $(".plantimage1").css('opacity','0.8');
      $(".plantimage11").css('opacity','0.8');
      $(".petrolimage").css('opacity','0.8');
      $(".petrolimage1").css('opacity','0.8');
      $(".waterimg2").css('opacity','0.8');
      $(".nexttogasimage").css('opacity','0.8');
      $(".waterimg").css('opacity','0.8');

     });

   });

}
pin3removeclick(event){
  $(document).ready(function(){
      $(".new_HoverDiv3").click(function(){
      $("#blackbackground").hide();
      $(".new_HoverDiv3").hide();
       $(".ripplebox2").show();
      $(".boat_img").css('opacity','0.8');
      $(".oilimage").css('opacity','0.8');
      $(".gasimage").css('opacity','0.8');
      $(".boat_img2").css('opacity','0.8');
      $(".plantimage11").css('opacity','0.8');
      $(".petrolimage").css('opacity','0.8');
      $(".petrolimage1").css('opacity','0.8');
      $(".waterimg2").css('opacity','0.8');
      $(".nexttogasimage").css('opacity','0.8');
      $(".waterimg").css('opacity','0.8');

     });

   });


}
pinclick(event){

  $(document).ready(function(){
    $(".ripplebox").click(function(){
    $(".new_HoverDiv").show();
    $("#blackbackground").show();
    $(".ripplebox").hide();
    $(".boat_img").css('opacity','0.2');
    $(".oilimage").css('opacity','0.2');
    $(".gasimage").css('opacity','0.2');
    $(".plantimage1").css('opacity','0.2');
    $(".plantimage11").css('opacity','0.2');
    $(".petrolimage").css('opacity','0.2');
    $(".petrolimage1").css('opacity','0.2');
    $(".waterimg2").css('opacity','0.2');
    $(".nexttogasimage").css('opacity','0.2');
    $(".boat_img2").css('opacity','0.2');

    });
  });
} 
pin2click(event){

  $(document).ready(function(){
    $(".ripplebox1").click(function(){
    $(".new_HoverDiv1").show();
    $("#blackbackground").show();
    $(".ripplebox1").hide();
    $(".boat_img").css('opacity','0.2');
    $(".oilimage").css('opacity','0.2');
    $(".gasimage").css('opacity','0.2');
    $(".plantimage1").css('opacity','0.2');
    $(".plantimage11").css('opacity','0.2');
    $(".petrolimage").css('opacity','0.2');
    $(".petrolimage1").css('opacity','0.2');
    $(".waterimg2").css('opacity','0.2');
    $(".nexttogasimage").css('opacity','0.2');
    $(".waterimg").css('opacity','0.2');

    });
  });
} 

pin3click(event){
  $(document).ready(function(){
    $(".ripplebox2").click(function(){
    $(".new_HoverDiv3").show();
    $("#blackbackground").show();
    $(".ripplebox2").hide();
    $(".boat_img").css('opacity','0.2');
    $(".oilimage").css('opacity','0.2');
    $(".gasimage").css('opacity','0.2');
    $(".boat_img2").css('opacity','0.2');
    $(".plantimage11").css('opacity','0.2');
    $(".petrolimage").css('opacity','0.2');
    $(".petrolimage1").css('opacity','0.2');
    $(".waterimg2").css('opacity','0.2');
    $(".nexttogasimage").css('opacity','0.2');
    $(".waterimg").css('opacity','0.2');

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
                 <div className="new_HoverDiv5">
                  <div style={{width:"165px"}}>
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
                 <div className="new_HoverDiv4"> 
                  <div style={{width:"165px"}}>
                     <p className="newhovertxt_4">The LNG value chain aggregately comprises of E&P, Liquefaction & Shipping.</p>
                   <a href="/masterpage/supply-&-distribution"><span className="servicekbtnarrow3"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>
                 </div>
                 <img alt="" className="img-responsive tabimage"src="/images/newbanner_img7.png"style={{width:"241px"}}/>
                </figure>
                <figure className="waterimg">
                  <div className="ripplediv">
                     <div className="ripplebox" onClick={this.pinclick.bind(this)} title="Click Me">
                      <span style={{"--i":"1"}}></span>
                      <span style={{"--i":"2"}}></span>
                      <span style={{"--i":"3"}}></span>
                      <span style={{"--i":"4"}}></span>
                      <span style={{"--i":"5"}}></span>
                     </div>
                   </div>
                  <div className="new_HoverDiv"onClick={this.pinremoveclick.bind(this)}>
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
                 <div className="new_HoverDiv6">
                  <div style={{width:"139px"}}>
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
        <div className="resbanner hidden-lg hidden-md"></div>
      </div>
      
    );  
  }
}