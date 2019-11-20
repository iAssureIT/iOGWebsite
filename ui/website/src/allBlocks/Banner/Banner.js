import React, {Component} from 'react';
// import $                  from 'jquery';
import './Banner.css';

export default class Banner extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner-wrapper NOpadding ">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner">
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
                <figure className="oilsign hoveroilsign">
                  <img alt="" src="/images/oilsign.png" className="dataonHover1"/>
                  <div className="triangle-down"></div>
                  <div className="dataonHover"></div>
                </figure>
                <figure className="oilsign2 hoveroilsign">
                  <img alt="" src="/images/oilsign.png"/>
                  <div className="triangle-down"></div>
                  <div className="dataonHover"></div>
                </figure>
                <figure className="oilsign3 hoveroilsign">
                  <img alt="" src="/images/oilsign.png"/>
                   <div className="triangle-down"></div>
                  <div className="dataonHover"></div>
                </figure>
                <figure className="oilsign4 hoveroilsign">
                  <img alt="" src="/images/oilsign.png"/>
                   <div className="triangle-down"></div>
                  <div className="dataonHover"></div>
                </figure>
               <figure className="oilsign5 hoveroilsign2">
                  <img alt="" src="/images/oilsign.png"/>
                  <div className="triangle-left"></div>
                  <div className="dataonHover2"></div>
                </figure>
                <figure className="oilsign6 hoveroilsign1">
                  <div className="triangle-down1"></div>
                  <div className="dataonHover1"></div>
                  <img alt="" src="/images/oilsign.png"/>
                </figure>
                <figure className="oilsign7 ">
                  <img alt="" src="/images/oilsign.png"/>
                  <div className="dataonHover"></div>
                </figure>
                <div className="hoveroilsign">
                  <figure className="oilsign8 ">
                    <img alt="" src="/images/oilsign.png"/>
                     <div className="dataonHover"></div>
                  </figure>
                </div>
                  <img alt="" src="/images/anim.png" className="animnewimg"/>
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
      </div>
    );  
  }
}