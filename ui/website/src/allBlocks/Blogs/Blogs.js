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
                downstreamimg : "/images/blog1.jpg",
                upstreamLi    : "EHS software solutions facilitates streamlining all aspects environmental, health and safety programs in organization. EHS software plays a key role for providing detailed and intuitive reports on incident management, audits and inspections, risk analysis, environmental management, sustainability management, etc. These solutions are designed to increase transparency - especially in audits - and improve employee engagement."

            }, 
            {
                upstreamTitle : "Leveraging Machine Learning to add value to the Oil and Gas business.",
                downstreamimg : "/images/blog2.jpg",
                upstreamLi    : "Machine learning provides information systems the ability to automatically learn and improve from the experience, without being explicitly programmed. It is a subset of Artificial Intelligence that focuses on the development of computer programs that can access data, use patterns and inferences and use it to teach themselves."

            }, 
            {
                upstreamTitle : "Energy Management in Refineries and Petrochemicals Complex",
                downstreamimg : "/images/blog3.jpg",
                upstreamLi    : "As oil refiners face an increasingly competitive global business environment, they look out for the opportunities to reduce production costs without negatively affecting product yield or quality. Improving energy efficiency reduces operating cost and improves the refinery margin. A refinery-wide energy management system implementation is one of the most important and cost-saving initiatives an organisation can undertake."

            },
            {
                upstreamTitle : "How oil and gas industry is embracing new age technologies?",
                downstreamimg : "/images/blog4.jpg",
                upstreamLi    : "As we come to the middle of 2019, oil and gas companies worldwide are facing constant changes. Compliance, pollution control, supply-demand fluctuations, price volatility, and geopolitical changes are some of them worth mentioning."

            },
            {
                upstreamTitle : "Asset Reliability and Integrity Management Today",
                downstreamimg : "/images/blog5.jpg",
                upstreamLi    : "Process industries are asset-intensive and are witnessing many improvement opportunities as owner-operators strive to enhance asset availability, performance, efficiency and reduce operational costs. To effectively leverage critical asset data for their strategic decisions, these end-users need to overcome the challenge of data consolidation and interpretation."

            } 
           
        ]
    }

    render(){
        return(
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="hrnewclassblog col-lg-offset-5 col-md-offset-5 hidden-sm hidden-xs"></div>
                       <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 newblogsTitle text-center">Latest Blogs</span>
                    </div>                       
                   {/* <hr/>
                    <h1 className="lightbluetext latestblog">
                        <b>Latest Blogs</b>
                    </h1>*/}
               
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
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blogdate">July 5,2019</div>
                                                         <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                                                            <a className="" href="/blog">
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
              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-sm-offset-1 col-md-offset-1 hidden-lg hidden-md">
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
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blogdate">july 5,2019</div>
                                                         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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