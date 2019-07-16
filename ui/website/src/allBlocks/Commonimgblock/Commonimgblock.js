import React, {Component} from 'react';
// import $                  from 'jquery';
import './Commonimgblock.css';

export default class Commonimgblock extends Component {
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lightbluetext">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 commonback">
              <div className="commonblocktext col-lg-10 col-lg-offset-1">
                <h1>iOG Services</h1>
              </div>
            </div>
          </div>
      </div>
    );  
  }
}