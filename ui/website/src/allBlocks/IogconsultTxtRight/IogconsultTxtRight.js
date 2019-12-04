import React, { Component } from 'react';
// import { render } from 'react-dom';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './IogconsultTxtRight.css';

export default class IogconsultTxtRight extends Component {

  
 /*ChallengesData(){
        return [
            
            {
                Consultservive : "Our Approach",
                bannerimg   : "/images/consultrightimg.png",
                overviewtext:"iOG follows a structured methodology to assess goals and objectives, diagnose problems, define roadmaps and blueprints and finally implement the solution.",
               
            }, 
 
                  
               
        ]
    }*/
    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {
                this.props.txtRightData.map((data, index)=>{
                return(
                  <div  key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12 BT3_innerBlock">
                    <div className="col-lg-6 col-md-6 hidden-sm hidden-xs img1">
                     <img src={data.bannerimg} alt="" className="BT3_iogconsult col-lg-offset-2" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 BT3_text1">
                    <h1><b>{data.Consultservive}</b></h1>
                      <p className="BT3_text text-justify ">{data.overviewtext}</p>
                    </div>
                  </div>
                 );

          })
        }

            </div>   
        );
    }
}