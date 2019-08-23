import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import $ from "jquery";

import "./BlogPagecomponent.css";
import BlogContent from "../BlogContent/BlogContent.js";
export default class BlogPagecomponent extends Component {

    componentDidMount(){
      var accordions = document.querySelectorAll('.accordion-item');

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function(e) {
        this.querySelector('.accordion-item__content').classList.toggle('is-open');
    });
}

 }

    BlogsData(){
        return [
            {
                blogDate  : "June 28 ,2019",
                numOfLike  : "209",
                blogsTitle : "iOG Offering to Set-up Centers  of  Excellance",
                blogsimg   : "/images/blog1.jpg",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            },
            {
                blogDate  : "June 28 ,2019",
                numOfLike  : "209",
               blogsTitle : "iOG Offering to Set-up Centers  of  Excellance",
                blogsimg   : "/images/blog1.jpg",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            },
            {
                blogDate  : "June 28 ,2019",
                numOfLike  : "209",
                blogsTitle : "iOG Offering to Set-up Centers  of  Excellance",
                blogsimg   : "/images/blog1.jpg",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                
            },
            /*{
                blogsTitle : "Supply Chain Management",
                blogsimg   : "/images/Illustration_2.png",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    

            },
            {
                blogsTitle : "Supply Chain Management",
                blogsimg   : "/images/Illustration_2.png",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                
            }*/
            
        ]
    }

    render(){
        return(
                    <div className="col-lg-12 NOpadding ">
                        <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12  ">
                        <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12  ">
                          <div className="panel-group customPanel" id="accordion" role="tablist" aria-multiselectable="true">
                        {
                          this.BlogsData().map((data, index)=>{
                           return (
                                    <div key={index} className="panel panel-default customDefaultPanel">
                                      <div className="panel-heading" role="tab" id="headingThree">
                                        <h4 className="panel-title">
                                        <a className="collapsed customPanel" role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapseThree"+index} aria-expanded="false" aria-controls="collapseThree">
                                        <div className="col-lg-4 blogImgContainer"><img src={data.blogsimg} /></div>
                                          <label className="mt80 blogDate">{data.blogDate}</label><br/>
                                          <label className="blogTitle">{data.blogsTitle}</label><br/>
                                          <label className="likeDiv"><i class="fa fa-thumbs-up"></i> &nbsp;&nbsp;{data.numOfLike}</label><br/>
                                        </a>
                                      </h4>
                                      </div>
                                      <div id={"collapseThree"+index} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div className="panelBody ht1100">
                                        <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12 ">
                                          <div className="col-lg-12 blogImgContainerInner"><div className="col-lg-12 col-md-6 col-sm-12 col-xs-12"><img src={data.blogsimg}/></div></div>
                                        </div>
                                          <BlogContent />
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