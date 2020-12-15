import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import './Upstream.css';

export default class Upstream extends Component {

  componentDidMount(){

  var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  if (isSafari){
      $('.cards').css('-webkit-transform','translate3d(0,0,0)');
  }

  window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);

  function init(e)
  {
    if(document.querySelector(".cards"))
    {
      let cards = document.querySelector(".cards");
      cards.addEventListener('click', clicked, false);
      document.querySelectorAll(".cards .card")[0].click();
    }
  }

  function clicked(e)
  {
    let card = e.target;
    if(card.getAttribute("data-card")){rearrange(card.getAttribute("data-card"));}
  }

  function rearrange(card)
  {
    let cards = document.querySelectorAll(".cards .card");
    for(let n = 0; n < cards.length; n++)
    {
      cards[n].classList.remove("card--left");
      cards[n].classList.remove("card--left-left");
      cards[n].classList.remove("card--center");
      cards[n].classList.remove("card--right");
      cards[n].classList.remove("card--right-right");
    }
    cards[card].classList.add("card--center");
    if(card == 0)
    {
      cards[4].classList.add("card--left");
      cards[3].classList.add("card--left-left");
      cards[1].classList.add("card--right");
      cards[2].classList.add("card--right-right");
    }
    if(card == 1)
    {
      cards[0].classList.add("card--left");
      cards[4].classList.add("card--left-left");
      cards[2].classList.add("card--right");
      cards[3].classList.add("card--right-right");    }
    if(card == 2)
    {
      cards[1].classList.add("card--left");
      cards[0].classList.add("card--left-left");
      cards[3].classList.add("card--right");
      cards[4].classList.add("card--right-right");    }
    if(card == 3)
    {
      cards[2].classList.add("card--left");
      cards[1].classList.add("card--left-left");
      cards[4].classList.add("card--right");
      cards[0].classList.add("card--right-right");
    }
    if(card == 4)
    {
      cards[3].classList.add("card--left");
      cards[2].classList.add("card--left-left");
      cards[0].classList.add("card--right");
      cards[1].classList.add("card--right-right");
    }
 }

  return {
    init
  }

  }

    upstreamData(){
        return [
            {
                upstreamTitle : "Geology & Geophysics",
                hryperlink    : "/geology-geophysics",
                upstreamimg   : "/images/upstream1.png",
                upstreamtext  : "iOG understands the various paradigms of the sub-surface ecosystem. The domain knowledge & expertise enables it to understand the subsurface."
                    
                
            }, 
            {
                upstreamTitle : "Production Management",
                hryperlink    : "/production-management",
                upstreamimg   : "/images/upstream3.png",
                upstreamtext  : "iOG solutions provide the complete range of Production Management services."
            },  
            {
                upstreamTitle : "Reservoir Management",
                hryperlink    : "/reservoir-engineering-services",
                upstreamimg   : "/images/upstream4.png",
                upstreamtext  : "iOG solutions provide end-to-end consulting services for management of reservoirs, utilizing state of the art geo-science and engineering technologies."
            }, 
            {
                upstreamTitle : "Data Management Services",
                hryperlink    : "/data-management",
                upstreamimg   : "/images/upstream2.png",
                upstreamtext  : "iOG solutions provide the complete range of Production Management services."
            },
             {
                upstreamTitle : "Well & Drilling Services",
                hryperlink    : "/well-drilling-services",
                upstreamimg   : "/images/upstream5.png",
                upstreamtext  : "iOG solutions provide Management Services for Well Planning, Drilling, Test & Log Interpretation, Performance Monitoring to abandonment."
            }
            
        ]
    
    }

    render(){
        return(
          <div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-xs upstreamblock lightbluebg NOpadding"style={{overflow:"hidden"}}>
                <div id="price" className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12   contentheader1 text-center">
                    <hr/>
                     <h2 style={{color:"#fff"}}><b>Upstream Oil & Gas Industry</b></h2>
                    </div>
                        <div className="cards col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {
                                this.upstreamData().map((data, index)=>{
                                 return (
                                         <div key={index}className="col-lg-4 col-md-4 card NOpadding" data-card={index}>
                                            <div className="price price-three col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <h3 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 uptitle "><b>{data.upstreamTitle}</b></h3>
                                                <div className="price-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <img src={data.upstreamimg  } />
                                                </div>
                                                <div className="price-body  col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <p className="text-center upstreamtext">{data.upstreamtext}</p>
                                                </div>
                                                <div className="price-footer price-footer_upstream  price-bodyhover col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                    <a className="upstreamfoot" href={data.hryperlink}><input type="button" className="btn pricebtn1 buttonhover upbuttonhover lightbluebg" value="Read More"/></a>                                    
                                                </div>
                                            </div>
                                        </div>                       
                                     );
                                 })
                            }
                       </div>
                </div>                
            </div> 
             {/*responsive*/}
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-lg hidden-md hidden-sm upstreamblock_new lightbluebg NOpadding">
                <div id="price" className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12   contentheader1 text-center">
                    <hr/>
                     <h2 style={{color:"#fff"}}><b>Upstream Oil & Gas Industry</b></h2>
                    </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="cards col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {
                                this.upstreamData().map((data, index)=>{
                                 return (
                                         <div key={index}className="" data-card={index}>
                                            <div className="price price-three col-lg-12 col-md-12 col-sm-6 col-xs-12 upstream_tab">
                                                <h3><div className="uptitle lightbluetext"><b>{data.upstreamTitle}</b></div></h3>
                                                <div className="price-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <img src={data.upstreamimg  } />
                                                </div>
                                                <div className="price-body  col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <p className="text-center upstreamtext">{data.upstreamtext}</p>
                                                </div>
                                                <div className="price-footer price-bodyhover col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                {console.log("data.hryperlink",data.hryperlink)}
                                                    <a className="upstreamfoot" href={data.hryperlink}><input type="button" className="btn pricebtn1 buttonhover upbuttonhover lightbluebg" value="View More"/></a>                                    
                                                </div>
                                            </div>
                                        </div>                       
                                     );
                                 })
                            }
                       </div>
                    </div>
                </div>                
            </div> 
             {/*responsive end*/}  
          </div> 
        );
    }
}



