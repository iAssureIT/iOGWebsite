import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/carousel.js';
import './Effectcaro.css';
import $ from "jquery";

export default class Effectcaro extends Component {

    componentDidMount(){
        $('.carousel .item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
          }
          else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          }
        });
    }
    
    render(){
        return(
            <div className="col-lg-12 NOpadding">
            <div className="col-md-6 col-md-offset-3">
                    <div className="carousel slide" id="myCarousel" data-interval="1000">
                      <div className="carousel-inner">
                        <div className="item active">
                          <div className="col-md-4"><a href="#"><img src="http://placehold.it/500/bbbbbb/fff&amp;text=1" className="img-responsive"/></a></div>
                        </div>
                        <div className="item">
                          <div className="col-md-4"><a href="#"><img src="http://placehold.it/500/CCCCCC/fff&amp;text=2" className="img-responsive"/></a></div>
                        </div>
                        <div className="item">
                          <div className="col-md-4"><a href="#"><img src="http://placehold.it/500/eeeeee/fff&amp;text=3" className="img-responsive"/></a></div>
                        </div>
                        <div className="item">
                          <div className="col-md-4"><a href="#"><img src="http://placehold.it/500/f4f4f4/fff&amp;text=4" className="img-responsive"/></a></div>
                        </div>
                        <div className="item">
                          <div className="col-md-4"><a href="#"><img src="http://placehold.it/500/fcfcfc/333&amp;text=5" className="img-responsive"/></a></div>
                        </div>
                        <div className="item">
                          <div className="col-md-4"><a href="#"><img src="http://placehold.it/500/f477f4/fff&amp;text=6" className="img-responsive"/></a></div>
                        </div>
                      </div>
                      <a className="left carousel-control" href="#myCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
                      <a className="right carousel-control" href="#myCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>
                    </div>
                </div>
            </div>   
        );
    }
}