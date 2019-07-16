/*import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";

import "./Effectslide.css";
export default class Effectslide extends Component {

    componentDidMount(){var accordions = document.querySelectorAll('.accordion-item');

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function(e) {
        this.querySelector('.accordion-item__content').classList.toggle('is-open');
    });
}

 }

    BlogsData(){
        return [
            {
                blogsTitle : "Supply Chain Management",
                blogsimg   : "/images/Illustration_2.png",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            },
            {
                blogsTitle : "Supply Chain Management",
                blogsimg   : "/images/Illustration_2.png",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            },
            {
                blogsTitle : "Supply Chain Management",
                blogsimg   : "/images/Illustration_2.png",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            },
            {
                blogsTitle : "Supply Chain Management",
                blogsimg   : "/images/Illustration_2.png",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            },
            {
                blogsTitle : "Supply Chain Management",
                blogsimg   : "/images/Illustration_2.png",
                blogstext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus. Cras imperdiet tristique venenatis Vivamus elementum enim ipsum, nec pharetra sapien ornare eu. Mauris quis arcu quis tortor imperdiet viverra. Sed ut iaculis"
                    
                
            }
            
        ]
    }

    render(){
        return(
                    <div className="col-lg-12 NOpadding">
                        <div className="container">
                          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        {
                          this.BlogsData().map((data, index)=>{
                           return (
                                    <div key={index} className="panel panel-default">
                                      <div className="panel-heading" role="tab" id="headingThree">
                                        <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapseThree"+index} aria-expanded="false" aria-controls="collapseThree">
                                          {data.blogsTitle}
                                        </a>
                                      </h4>
                                      </div>
                                      <div id={"collapseThree"+index} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div className="panel-body">
                                        {data.blogstext}
                                        </div>
                                      </div>
                                    </div>
                                    );
                                })
                          }
                          </div>
                        </div>             
                    </div>   
             );
         }
    }*/