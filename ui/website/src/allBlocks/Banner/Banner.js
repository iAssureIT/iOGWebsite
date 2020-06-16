import React, {Component} from 'react';
import $                  from 'jquery';
import './Banner.css';

export default class newbanner extends Component {

componentDidMount(){

  $(document).ready(function(){
    $(".waterimg").hover(function(){
       // $(".bannerContainer1").css("opacity", "0.3");
        // $(".bannerContainer1").toggleClass(".onhoverimages");
        // $(".bannerContainer1").toggleClass(".onhoverimages");
        $("#backimage1").toggleClass(".onhoverBackgImg");

    })
 
});
  /*

 $(".waterimg").mouseover(function(){
    $(".bannerContainer1").css("opacity", "0.3");
    $("new_HoverDiv").css("opacity", "1");
  });
  $("waterimg").mouseout(function(){
    $(".bannerContainer1").css("opacity", "1");
  });
  */
  
 
} 
pinclick(event){
  $(document).ready(function(){
        $(".dataonHover1").hide();
        $(".triangle-down1").show();
        $(".triangle-down211").show();

    $(".oilsign8").hover(function(){
        $(".dataonHover1").show();
        $(".triangle-down1").show();
        $(".triangle-down211").show();

    });
  });
} 
pin7click(event){
  $(document).ready(function(){
        $(".dataonHover").hide();
        $(".arrow-right").hide();

    $(".oilsign7").hover(function(){
        $(".dataonHover").show();
        $(".arrow-right").show();

    });
  });
} 
onHoverOut1(event){
  /*$(document).ready(function(){
        $(".dataonHover").hide();

    $(".oilsign7").hover(function(){
        $(".dataonHover").show();

    });
  });*/
} 
onHover(event)
{
  /*$(document).ready(function(){
        $(".dataonHover1").hide();

    $(".oilsign8").hover(function(){
        $(".dataonHover1").hide();

    });
  });*/
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
            <div id="backimage1"className=" bannerContainer1 img-responsive col-lg-12 col-md-12 col-sm-12 col-xs-12"style={{overflow:"hidden"}}>
            {/* <img src="/images/newbanner_1.png"className="col-lg-12 col--md-12 col-sm-12 col-xs-12 img-responsive NOpadding"/>*/}
              <div className="row"style={{overflow:"hidden"}}>
                <figure className="oilimage">
                 <div className="new_HoverDiv7">
                  <div style={{width:"177px"}}>
                   <p className="newhovertxt"> iOG Solutions helps clients define a road map for sustainable Health and Safety practices.</p>
                   <a href="/masterpage/health-safety-environment"><span className="servicekbtnarrow7"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>  
                 </div>
                 <img alt="" src="/images/newbanner_img13.png"style={{width:"250px"}}/>
                </figure>
                <figure className="gasimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img8.png"style={{width:"250px"}}/>
                </figure>
                <figure className="nexttogasimage">
                 <div className="new_HoverDiv5">
                  <div style={{width:"165px"}}>
                   <p className="newhovertxt_8"> Entire process of chemicals takes place here. </p>
                   <a href="/masterpage/chemicals-mainpage"><span className="servicekbtnarrow8"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>  
                 </div>
                 <img alt="" src="/images/newbanner_img9.png"style={{width:"250px"}}/>
                </figure>
                <figure className="petrolimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img10.png"style={{width:"250px"}}/>
                </figure>
                <figure className="petrolimage1">
                 <div className="new_HoverDiv2">
                  <div style={{width:"165px"}}>
                   <p className="newhovertxt"> Entire process of refining takes place here. </p>
                   <a href="/masterpage/refinery-mainpage"><span className="servicekbtnarrow1"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>  
                 </div>
                 <img alt="" className="img-responsive"src="/images/newbanner_img5.png"style={{width:"350px"}}/>
                </figure>
                 <figure className="plantimage1">
                  <div className="new_HoverDiv3">
                   <div style={{width:"188px"}}>
                   <p className="newhovertxt_ptrchemical">Petrochemical industry & its higher value addition in recent volatile oil market.</p>
                   <a href="/masterpage/petrochemical-mainpage"><span className="servicekbtnarrow5"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div> 
                  </div>
                 <img alt="" className="img-responsive"src="/images/newbanner_img6.png"style={{width:"350px"}}/>
                </figure>
                <figure className="plantimage11">
                 <div className="new_HoverDiv4"> 
                  <div style={{width:"165px"}}>
                     <p className="newhovertxt_4">The LNG value chain aggregately comprises of E&P, Liquefaction & Shipping.</p>
                   <a href="/masterpage/supply-&-distribution"><span className="servicekbtnarrow3"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>
                 </div>
                 <img alt="" className="img-responsive"src="/images/newbanner_img7.png"style={{width:"350px"}}/>
                </figure>
                <figure className="waterimg">
                  <div className="new_HoverDiv">
                   <div style={{width:"165px"}}>
                     <p className="newhovertxt_1">The LNG value chain aggregately comprises of E&P, Liquefaction & Shipping.</p>
                   <a href="/masterpage/lng"><span className="servicekbtnarrow3"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>
                   </div>
                   <img alt="" className="img-responsive  "src="/images/newbanner_img1.png"style={{width:"100px"}}/> 
                    {/*  <p className="pinhoverdata text-center">Finding, augmenting, producing, and merchandising different types of oil and gas<br/> 
                       <a href="/masterpage/oil-&-gas-e-&-p">

                        </a> 
                      </p>*/}
                </figure>
                 <figure className="boat_img"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img3.png"style={{width:"200px"}}/>
                </figure>
                 <figure className="boat_img2">
                  <div className="new_HoverDiv1">
                   <div style={{width:"171px"}}>
                   <p className="newhovertxt_e_p">The upstream segment of oil & gas industry, also known as Exploration and Production (E&P)</p>
                   <a href="/masterpage/oil-&-gas-e-&-p"><span className="servicekbtnarrow4"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div> 
                  </div>
                   <img alt="" className="img-responsive"src="/images/newbanner_img2.png"style={{width:"300px"}}/>
                </figure>
                <figure className="waterimg2">
                 <div className="new_HoverDiv6">
                 <div style={{width:"139px"}}>
                   <p className="newhovertxt_6">Merchandising different types of oil and gas</p>
                   <a href="/masterpage/oil-&-gas-e-&-p"><span className="servicekbtnarrow2"><i className="fa fa-chevron-circle-right"></i></span></a>
                  </div>
                  </div>
                 <img alt="" className="img-responsive"src="/images/newbanner_img4.png"style={{width:"150px"}}/>
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