import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Upstream.css';

export default class Upstream extends Component {

     componentDidMount(){


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
      cards[3].classList.add("card--left");
      cards[4].classList.add("card--left-left");
      cards[1].classList.add("card--right");
      cards[2].classList.add("card--right-right");
    }
    if(card == 1)
    {
      cards[4].classList.add("card--left");
      cards[0].classList.add("card--left-left");
      cards[2].classList.add("card--right");
      cards[3].classList.add("card--right-right");    }
    if(card == 2)
    {
      cards[0].classList.add("card--left");
      cards[1].classList.add("card--left-left");
      cards[3].classList.add("card--right");
      cards[4].classList.add("card--right-right");    }
    if(card == 3)
    {
      cards[1].classList.add("card--left");
      cards[2].classList.add("card--left-left");
      cards[4].classList.add("card--right");
      cards[0].classList.add("card--right-right");
    }
    if(card == 4)
    {
      cards[2].classList.add("card--left");
      cards[3].classList.add("card--left-left");
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
                hryperlink    : "geoligy",
                upstreamimg   : "/images/upstream1.png",
                upstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus."
                    
                
            }, 
            {
                upstreamTitle : "Production Management",
                upstreamimg   : "/images/upstream3.png",
                upstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus."
            },  
            {
                upstreamTitle : "Reservoir Management",
                upstreamimg   : "/images/upstream4.png",
                upstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus."
            }, 
            {
                upstreamTitle : "Data Management Services",
                upstreamimg   : "/images/upstream2.png",
                upstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus."
            },
             {
                upstreamTitle : "Well & Drilling Services",
                upstreamimg   : "/images/upstream5.png",
                upstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus."
            }
            
        ]
    
    }

    render(){
        return(
            <div className="col-lg-12 upstreamblock lightbluebg NOpadding">
                <div id="price" className=" col-lg-12">
                    <div className="">
                        <div className="upstreamcontentheader col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 text-center ">                        
                            <hr/>
                            <h1 className=" priceh1 pricefont-size-normal pricecolor-light">
                                <b>iOG Solutions for</b> Upstream Oil & Gas Industry
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="cards">
                            {
                                this.upstreamData().map((data, index)=>{
                                 return (
                                         <div key={index}className="card" data-card={index}>
                                            <div className="price price-three col-lg-12">
                                                <h3><div className="uptitle lightbluetext"><b>{data.upstreamTitle}</b></div></h3>
                                                <div className="price-body col-lg-12">
                                                <img src={data.upstreamimg  } />
                                                </div>
                                                <div className="price-body col-lg-12">
                                                    <p className="text-justify upstreamtext">{data.upstreamtext}</p>
                                                </div>
                                                <div className="price-footer col-lg-12">
                                                    <a className="upstreamfoot" href={"/"+data.hryperlink}><input type="button" className="btn pricebtn1 lightbluebg" value="View More"/></a>                                    
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
        );
    }
}