import React, { Component } from 'react';
// import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './Blogs.css';

const OwlCarousel = Loadable({
    
  loader: () => import('react-owl-carousel'),
  loading() {
    return <div className="col-sm-12 col-xs-12 col-lg-2 col-lg-offset-5 col-md-12 loadingImg"><img src="../images/loadersglms.gif" className="img-responsive" alt="loading"/></div>
  }
});

export default class Blogs extends Component {
    constructor(props){
    super(props);
    this.state = {
    "Blogs" : [],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
}
};
}
    upstreamData(){
        return [
            {
                upstreamTitle : "EHS Applications in Oil & Gas",
                downstreamimg : "/images/Ehs_Application.jpg",
                upstreamLi    : "EHS software solutions facilitates streamlining all aspects environmental, health and safety programs in organization. EHS software plays a key role for providing detailed and intuitive reports."

            }, 
            {
                upstreamTitle : "Leveraging Machine Learning to add value to the Oil and Gas business.",
                downstreamimg : "/images/Leveraging_Machine.jpg",
                upstreamLi    : "Machine learning provides information systems the ability to automatically learn and improve from the experience, without being explicitly programmed."

            }, 
            {
                upstreamTitle : "Energy Management in Refineries and Petrochemicals Complex",
                downstreamimg : "/images/energy_managemnt.jpg",
                upstreamLi    : "As oil refiners face an increasingly competitive global business environment, they look out for the opportunities to reduce production costs without negatively affecting product yield or quality."

            },
            {
                upstreamTitle : "How oil and gas industry is embracing new age technologies?",
                downstreamimg : "/images/gas_industy_embracing.jpg",
                upstreamLi    : "As we come to the middle of 2019, oil and gas companies worldwide are facing constant changes. Compliance, pollution control, supply-demand fluctuations, price volatility, and geopolitical changes are some of them worth mentioning."

            },
            {
                upstreamTitle : "Asset Reliability and Integrity Management Today",
                downstreamimg : "/images/oil-and-gas-management.jpg",
                upstreamLi    : "Process industries are asset-intensive and are witnessing many improvement opportunities as owner-operators strive to enhance asset availability, performance and reduce operational costs."

            } 
           
        ]
    }

    render(){
        return(
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  contentheader text-center">
                    <hr/>
                     <h2 style={{color:"#333"}}><b>Latest Blogs</b></h2>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-md-offset-1 col-sm-offset-1  col-lg-offset-1 hidden-sm hidden-xs">
                      <div>
                        <OwlCarousel 
                        className="owl-theme col-lg-12 col-md-12 col-sm-12 col-xs-12"
                        loop
                        // nav
                        dots={false}
                        items={3}
                        margin={0}
                        responsiveClass =  {true}
                        // slideBy={2}
                        navText={["<div class='fa fa-angle-left blogleftarrow'></div>","<div class='fa fa-angle-right blogrightarrow'></div>"]}
                        // responsive={
                        // {'0':{items:this.props.items},'768':{items:this.props.items}, '992':{items:this.props.items}, '1200':{items:this.props.items}}
                        // }
                        autoplay={true}
                        autoplayHoverPause={true}
                        >
                        {
                            this.upstreamData().map((data, index)=>{
                            return (
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" key={index}style={{height:"600px"}}>
                                  <div className="">
                                    <div className={" index"+index}>
                                        <div className=" blogtext pricehover-float ">
                                          <div>
                                             <div className="blogblock col-lg-12 col-md-12 col-sm-12 col-xs-12"style={{height:"600px"}}>
                                                <div className="">
                                                  <div className="img-responsive blogsimg">
                                                    <img alt="" src={data.downstreamimg}/>
                                                  </div>
                                                  <div className=""><h4>{data.upstreamTitle}</h4></div>
                                                     <div className="">
                                                     <p>{data.upstreamLi}</p>
                                                    </div>
                                                    <div className="price-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                      <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blogdate">July 5,2019</div>
                                                         <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                                                            <a className="" href="/blogs">
                                                                <input type="button" className="col-lg-10 col-md-12 col-sm-12 col-xs-12 btn blogbtn1 lightbluebg buttonhover" value="Read More"/>                                    
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                              </div>
                                             </div>
                                            </div>
                                        </div>                       
                                     </div>
                                  </div>
                                </div>
                                );
                            })
                        }
                    </OwlCarousel>
                </div>                
              </div>   
              {/*res*/}
              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 hidden-lg hidden-md">
                  <div>
                        <OwlCarousel 
                        className="owl-theme col-lg-12 col-md-12 col-sm-12 col-xs-12"
                        loop
                        // nav
                        dots={false}
                        items={1}
                        margin={0}
                        responsiveClass =  {true}
                        // slideBy={2}
                        navText={["<div class='fa fa-angle-left blogleftarrow'></div>","<div class='fa fa-angle-right blogrightarrow'></div>"]}
                        // responsive={
                        // {'0':{items:this.props.items},'768':{items:this.props.items}, '992':{items:this.props.items}, '1200':{items:this.props.items}}
                        // }
                        autoplay={true}
                        autoplayHoverPause={true}
                        >
                        {
                            this.upstreamData().map((data, index)=>{
                            return (
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" key={index}>
                                  <div className="">
                                    <div className={" index"+index}>
                                        <div className=" blogtext pricehover-float ">
                                          <div>
                                             <div className="blogblock col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="">
                                                  <div className="row blogsimg">
                                                    <img alt="" src={data.downstreamimg}/>
                                                  </div>
                                                  <div className=""><h4>{data.upstreamTitle}</h4></div>
                                                     <div className="">
                                                     <p>{data.upstreamLi}</p>
                                                    </div>
                                                    <div className="price-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                      <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 blogdate">july 5,2019</div>
                                                         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                            <a className="" href="/blog">
                                                                <input type="button" className="col-lg-10 col-md-10 col-sm-12 col-xs-12 btn blogbtn1 lightbluebg buttonhover" value="Read More"/>                                    
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                              </div>
                                             </div>
                                            </div>
                                        </div>                       
                                     </div>
                                  </div>
                                </div>
                                );
                            })
                        }
                    </OwlCarousel>
                </div>                
              </div> 
            
          </div> 
         </div>   
        );
    }
}