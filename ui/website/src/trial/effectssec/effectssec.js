/*import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";


import './effectssec.css';
export default class Effectssec extends Component {

  componentDidMount(){

const Cards = ((() => {
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
})());
  }

   upstreamData(){
        return [
            {
                upstreamTitle : "Geology & Geophysics 1",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            }, 
            {
                upstreamTitle : "Geology & Geophysics 2",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            }, 
            {
                upstreamTitle : "Geology & Geophysics 3",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            }, 
            {
                upstreamTitle : "Geology & Geophysics 4",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            },
            {
                upstreamTitle : "Geology & Geophysics 5",
                upstreamLi : [
                    {
                        liData : "Two Web Designs"
                    },
                    {
                        liData : "Unlimited Revision"
                    },
                    {
                        liData : "Free One Year Domain"
                    },
                    {
                        liData : "Free Six Months Hosting"
                    },
                    {
                        liData : "Free Installation"
                    },
                    {
                        liData : "Full Support"
                    }
                ]
            }
        ]
    }


  render(){
       return(

            <div className="cards">
                {
                    this.upstreamData().map((data, index)=>{
                        return (
                                <div key={index}className="card" data-card={index}>
                                    <div className="col-lg-12">
                                        <div className="col-lg-6 col-lg-offset-3">{data.upstreamTitle}</div>
                                        <div className="col-lg-12">
                                            <ul>
                                                {
                                                    data.upstreamLi.map((liDetail, index)=>{
                                                        return(
                                                            <li key={index}>{liDetail.liData}</li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="button" className="btn" value="View More"/>                                    
                                        </div>
                                    </div>
                                </div>                       
                        );
                    })
                }
            </div>
        );
  } 

}*/