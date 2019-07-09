import React, {Component} from 'react';
import $                  from 'jquery';
import './Banner.css';

export default class Banner extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner-wrapper NOpadding">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner">
          <div className="row">
            <div className="bannerContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                <figure className="bannersun">
                  <img src="/images/bannersun.png"/>
                </figure>
                <figure className="cloud1">
                  <img src="/images/cloud1.png"/>
                </figure>
                <figure className="cloud2">
                  <img src="/images/cloud2.png"/>
                </figure> 
                <figure className="cloud3">
                  <img src="/images/cloud2.png"/>
                </figure>
                <figure className="cloud4">
                  <img src="/images/cloud1.png"/>
                </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}