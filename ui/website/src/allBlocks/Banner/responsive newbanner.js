import React, {Component} from 'react';
import $                  from 'jquery';
import './Banner.css';

export default class newbanner extends Component {

componentDidMount(){
  
  
 
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
     <div> 
      <div className="col-lg-12 col-md-12 hidden-sm hidden-xs banner-wrapper NOpadding full-height ">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner  NOpadding ">
          <div className="row">
            <div className=" bannerContainer1 img-responsive col-lg-12 col-md-12 col-sm-12 col-xs-12"style={{overflow:"hidden"}}>
             <img src="/images/newbanner_1.png"className="col-lg-12 col--md-12 col-sm-12 col-xs-12 img-responsive NOpadding"/>
              <div className="row"style={{overflow:"hidden"}}>
                <figure className="oilimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img13.png"style={{width:"250px"}}/>
                </figure>
                <figure className="gasimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img8.png"style={{width:"250px"}}/>
                </figure>
                <figure className="nexttogasimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img9.png"style={{width:"250px"}}/>
                </figure>
                <figure className="petrolimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img10.png"style={{width:"250px"}}/>
                </figure>
                <figure className="petrolimage1"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img5.png"style={{width:"350px"}}/>
                </figure>
                 <figure className="plantimage1"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img6.png"style={{width:"350px"}}/>
                </figure>
                <figure className="plantimage11"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img7.png"style={{width:"350px"}}/>
                </figure>
                <figure className="waterimg"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img1.png"style={{width:"150px"}}/>
                </figure>
                 <figure className="boat_img"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img3.png"style={{width:"200px"}}/>
                </figure>
                 <figure className="boat_img2"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img2.png"style={{width:"300px"}}/>
                </figure>
                <figure className="waterimg2"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img4.png"style={{width:"150px"}}/>
                </figure>
               </div> 
               </div>
             
          </div>
        </div>
       {/* <div className="resbanner hidden-lg hidden-md"></div>*/}
      </div>
      <div className="col-sm-12 col-xs-12 hidden-lg hidden-md banner-wrapper NOpadding  ">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner  NOpadding ">
          <div className="row">
            <div className="  img-responsive col-lg-12 col-md-12 col-sm-12 col-xs-12 resbannerimg"style={{height:"600px"}}>
             <img src=""className="col-lg-12 col--md-12 col-sm-12 col-xs-12  img-responsive NOpadding"/>
              <div className="row"style={{overflow:"hidden"}}>
                <figure className="oilimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img13.png"style={{width:"250px"}}/>
                </figure>
                <figure className="gasimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img8.png"style={{width:"250px"}}/>
                </figure>
                <figure className="nexttogasimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img9.png"style={{width:"250px"}}/>
                </figure>
                <figure className="petrolimage"style={{overflow:"hidden"}}>
                 <img alt="" src="/images/newbanner_img10.png"style={{width:"250px"}}/>
                </figure>
                <figure className="petrolimage1"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img5.png"style={{width:"350px"}}/>
                </figure>
                 <figure className="plantimage1"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img6.png"style={{width:"350px"}}/>
                </figure>
                <figure className="plantimage11"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img7.png"style={{width:"350px"}}/>
                </figure>
                <figure className="waterimg"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img1.png"style={{width:"150px"}}/>
                </figure>
                 <figure className="boat_img"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img3.png"style={{width:"200px"}}/>
                </figure>
                 <figure className="boat_img2"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img2.png"style={{width:"300px"}}/>
                </figure>
                <figure className="waterimg2"style={{overflow:"hidden"}}>
                 <img alt="" className="img-responsive"src="/images/newbanner_img4.png"style={{width:"150px"}}/>
                </figure>
               </div> 
               </div>
             
          </div>
        </div>
       {/* <div className="resbanner hidden-lg hidden-md"></div>*/}
      </div>
     </div> 
    );  
  }
}