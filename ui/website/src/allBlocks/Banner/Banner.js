import React, {Component} from 'react';
import $                  from 'jquery';
import './Banner.css';

export default class Banner extends Component {

componentDidMount(){
  
  
 
} 
onHoverOut(event){
 /* $(document).ready(function(){
        $(".dataonHover1").hide();

    $(".oilsign8").hover(function(){
        $(".dataonHover1").show();

    });
  });*/
} 
onHoverOut7(event){
  /*$(document).ready(function(){
        $(".dataonHover").hide();

    $(".oilsign7").hover(function(){
        $(".dataonHover").show();

    });
  });*/
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
    // var backImage = "visible-xs col-xs-12 visible-sm col-sm-12 noBackImage"
    }else{
    // var backImage = "signUpBackground hidden-xs hidden-sm"
    }
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner-wrapper NOpadding ">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner hidden-sm hidden-xs ">
          <div className="row">
            <div className="bannerContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                <figure className="bannersun">
                  <img alt="" src="/images/bannersun.png"/>
                </figure>
                <figure className="tree1">
                  <img alt="" src="/images/tree1.png"/>
                </figure>
                <figure className="tree2">
                  <img alt="" src="/images/tree2.png"/>
                </figure>
                <figure className="tree3">
                  <img alt="" src="/images/tree3.png"/>
                </figure>
                <figure className="tree4">
                  <img alt="" src="/images/tree4.png"/>
                </figure>
                <figure className="cloud1">
                  <img alt="" src="/images/cloud1.png"/>
                </figure>
                <figure className="cloud2">
                  <img alt="" src="/images/cloud2.png"/>
                </figure> 
                <figure className="cloud3">
                  <img alt="" src="/images/cloud2.png"/>
                </figure>
                <figure className="cloud4">
                  <img alt="" src="/images/cloud1.png"/>
                </figure>
                <figure className="boat">
                  <img alt="" src="/images/boat.png"/>
                </figure>
                <figure className="up">
                  <img alt="" src="/images/37.png"/>
                </figure>
                <figure className="up1">
                  <img alt="" src="/images/up2.png"/>
                </figure>
               <figure className="oilsign5 hoveroilsign2">
                 <img alt="" href="" src="/images/oilsign.png"/>
                  <div className="triangle-down2">
                    <div className="triangle-down21"></div>
                  </div>
                   <div className="dataonHover2">
                    <p className="pinhoverdata text-center">Finding, augmenting, producing, and merchandising different types of oil and gas<br/> 
                     <a href="/masterpage/oil-&-gas-e-&-p"><span className="Hoverreadmore">Read More</span> </a> 
                    </p>
                  </div>
                
                </figure>

                <figure className="oilsign7 hoveroilsign4">
                 <img alt=""  href="" src="/images/oilsign.png"/>
                    <div className="arrow-right"></div>
                   <div className="dataonHover">
                    <p className="pinhoverdata text-center">Conversion of petroleum and natural resources such as natural gas, ores and minerals into chemical products for a wide range of applications. <br/> 
                     <a href="/masterpage/petrochemical-mainpage"><span className="Hoverreadmore">Read More</span> </a> 
                    </p>
                  </div>
                
                </figure>
                {/*<figure className="oilsign7 " onMouseOver={this.onHover.bind(this)} onMouseOut={this.onHoverOut7.bind(this)}>
                  <a href=""><img alt="" title="Click Her to read more" src="/images/oilsign.png"/></a>   
                  </figure>
                  <div className="dataonHover">
                   <div className="arrow-right"></div>
                      <p className="pinhoverdata text-center">Conversion of petroleum and natural resources such as natural gas, ores and minerals into chemical products for a wide range of applications.  <br/>
                       </p>
                  </div>*/}
                <figure className="oilsign8 hoveroilsign3">
                  <img alt=""   href="" src="/images/oilsign.png"/>
                  <div className="triangle-down1">
                    <div className="triangle-down211"></div>
                  </div>
                   <div className="dataonHover1">
                    <p className="pinhoverdata text-center">Finding, augmenting, producing, and merchandising different types of oil and gas<br/> 
                     <a href="/masterpage/refinery-mainpage"><span className="Hoverreadmore">Read More</span> </a> 
                    </p>
                  </div>
                </figure>
                {/*<figure className="oilsign8" onMouseOver={this.onHover.bind(this)}
                             onMouseOut={this.onHoverOut.bind(this)}>
                    <a href="/masterpage/refinery-mainpage"><img alt="" title="Click Her to read more" src="/images/oilsign.png"/></a>   
                  </figure> 
                   <div className="dataonHover1">   
                     <div className="triangle-down1"></div>
                      <div className="triangle-down211"></div>
                      <p className="pinhoverdata text-center">Crude oil distillation, fractionation, 
                       heating, gas and light fuel formation and heavy oil
                       sedimentation and the entire process of refining takes place here<br/>
                       
                       </p>
                    </div>*/}
                  {/*<img alt="" src="/images/anim.png" className="animnewimg"/>*/}
                <figure className="anim">
                </figure>
                <figure className="tank">
                  <img alt="" src="/images/tank.png"/>
                </figure>
                <figure className="car">
                  <img alt="" src="/images/car.png"/>
                  <img alt="" className="wheel1" src="/images/wheel1.png"/>
                  <img alt="" className="wheel2" src="/images/wheel2.png"/>
                </figure>
                <figure className="contanim">
                  <img alt="" src="/images/container.png"/>
                </figure>
               {/* <div className="truckanim1">
                  <figure className="truckanim">
                    <img alt="" src="/images/truck.png"/>
                    <img alt="" className="twheel1" src="/images/wheel1.png"/>
                    <img alt="" className="twheel2" src="/images/wheel2.png"/>
                    <img alt="" className="twheel3" src="/images/wheel2.png"/>
                  </figure>
                </div>*/}
                <div className="">
                  <figure className="">
                    <img alt="" src=""/>
                    <img alt="" className="" src=""/>
                    <img alt="" className="" src=""/>
                    <img alt="" className="twheel6" src=""/>
                  </figure>
                </div>
                {/*<figure className="truckfront">
                  <img alt="" src="/images/truckfront.png"/>
                </figure>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resbanner hidden-lg hidden-md"></div>
      </div>
    );  
  }
}