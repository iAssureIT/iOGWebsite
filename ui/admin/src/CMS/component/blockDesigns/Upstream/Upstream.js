import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Upstream.css';

export default class Upstream extends Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks:"",
      blockID:"",
      block_id:""
    }; 
  }
componentDidMount(){
console.log("==>",this.props.block_id);
// 
/*
import axios from 'axios';

{this.state.blocks.blockSubTitle}
*/
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                /*var blocks = this.state.blocks;
                blocks.push(response.data);*/
                this.setState({
                  blocks:response.data
                  });
                })
                .catch(function(error){
                  console.log(error);
                  if(error.message === "Request failed with status code 401")
                    {
                        // swal("Your session is expired! Please login again.","", "error");
                    }
              })
            }
      this.setState({
                block_id:this.props.block_id
              });



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
                hryperlink    : "geoligy",
                upstreamimg   : "/images/upstream1.png",
                upstreamtext  : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface."
                    
                
            }, 
            {
                upstreamTitle : "Production Management",
                hryperlink    : "productionmanagement",
                upstreamimg   : "/images/upstream3.png",
                upstreamtext  : "iOG solutions provide the complete range of Production Management services."
            },  
            {
                upstreamTitle : "Reservoir Management",
                hryperlink    : "reserviormanagement",
                upstreamimg   : "/images/upstream4.png",
                upstreamtext  : "iOG solutions provide end-to-end consulting services for management of reservoirs, utilizing state of the art geo-science and engineering technologies."
            }, 
            {
                upstreamTitle : "Data Management Services",
                hryperlink    : "datamanagement",
                upstreamimg   : "/images/upstream2.png",
                upstreamtext  : "iOG solutions provide the complete range of Production Management services."
            },
             {
                upstreamTitle : "Well & Drilling Services",
                hryperlink    : "welldrilling",
                upstreamimg   : "/images/upstream5.png",
                upstreamtext  : "iOG solutions provide Management Services for Well Planning, Drilling, Test & Log Interpretation, Performance Monitoring to abandonment."
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
                               {this.state.blocks.blockTitle}
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
                                                <h3><div className="uptitle lightbluetext"><b>{this.state.blocks.blockTitle}</b></div></h3>
                                                <div className="price-body col-lg-12">
                                                <img src={data.upstreamimg  } />
                                                </div>
                                                <div className="price-body  col-lg-12">
                                                  
                                                    <div className="text-justify upstreamtext" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                                                  
                                                </div>
                                                <div className="price-footer price-bodyhover col-lg-12 ">
                                                    <a className="upstreamfoot" href={"/"+data.hryperlink}><input type="button" className="btn pricebtn1 buttonhover upbuttonhover lightbluebg" value="View More"/></a>                                    
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