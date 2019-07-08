import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
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
    upstreamData(){
        return [
            {
                upstreamTitle : "iOG offerings to Set-up Centers of Excellence",
                downstreamimg : "/images/nature1.jpeg",
                upstreamLi    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"

            }, 
            {
                upstreamTitle : "iOG offerings to Set-up Centers of Excellence",
                downstreamimg : "/images/nature1.jpeg",
                upstreamLi    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"

            }, 
            {
                upstreamTitle : "iOG offerings to Set-up Centers of Excellence",
                downstreamimg : "/images/nature1.jpeg",
                upstreamLi    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"

            },
            {
                upstreamTitle : "iOG offerings to Set-up Centers of Excellence",
                downstreamimg : "/images/nature1.jpeg",
                upstreamLi    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"

            },
            {
                upstreamTitle : "iOG offerings to Set-up Centers of Excellence",
                downstreamimg : "/images/nature1.jpeg",
                upstreamLi    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"

            } 
           
        ]
    }

    render(){
        return(
            <div className="container mt100">
            <div className="row">
                <div className="upstreamcontentheader col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 text-center ">                        
                    <hr/>
                    <h1 className="darkbluetext latestblog">
                        <b>Latest</b> Blogs
                    </h1>
                </div>
                <div id="price" className="col-lg-12">
                  <div className="row">
                        <OwlCarousel
                        className="owl-theme"
                        loop
                        nav
                        dots={false}
                        items={3}
                        margin={0}
                        // slideBy={2}
                        navText={["<div class='fa fa-angle-left'></div>","<div class='fa fa-angle-right'></div>"]}
                        // responsive={
                        // {'0':{items:this.props.items},'768':{items:this.props.items}, '992':{items:this.props.items}, '1200':{items:this.props.items}}
                        // }
                        autoplay={true}
                        autoplayHoverPause={true}
                        >
                        {
                            this.upstreamData().map((data, index)=>{
                                return (
                                <div className="col-lg-12">
                                  <div className="row">
                                    <div key={index} className={"col-lg-12 col-md-12 col-sm-12 col-xs-12  pricehover-float NOpadding index"+index}>
                                        <div className="col-lg-12 blogtext">
                                            <div className="price price-three col-lg-12">
                                                <div className="col-lg-12">
                                                  <div className="row blogsimg">
                                                    <img src={data.downstreamimg}/>
                                                  </div>
                                                </div>

                                                <div className="col-lg-12"><h4>{data.upstreamTitle}</h4></div>
                                                <div className=" col-lg-12">
                                                <p>{data.upstreamLi}</p>
                                                </div>
                                                <div className="price-footer col-lg-12">
                                                    <div className="row">
                                                        <p className="col-lg-12 ">july 5,2019</p>
                                                        <div className="col-lg-12">
                                                            <input type="button" className="col-lg-5 col-lg-offset-6 btn pricebtn1 darkbluebg" value="Read More"/>                                    
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