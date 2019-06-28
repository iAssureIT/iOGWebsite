import React, {Component} from 'react';
import $                  from 'jquery';
import './Banner.css';

export default class Banner extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner-wrapper NOpadding">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner">
          <div className="bannerContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="row">
              </div>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}