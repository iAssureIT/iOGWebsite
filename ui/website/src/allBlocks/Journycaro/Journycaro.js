import React, { Component } from 'react';
// import { render } from 'react-dom';
// import axios from 'axios';
// import $                  from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Journycaro.css';


export default class Journycaro extends Component {



    render(){
        return(
             <div>
                <div className="col-lg-7 col-md-3 col-sm-3 col-xs-3">
                  <div className="row">
                      <div className="webclientbackimg text-center col-lg-12">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-pause="false">
                              <div className="carousel-inner webclientcaro">
                                    
                                    {this.props.journyData && this.props.journyData.length>0?
                                      this.props.journyData.map((data, index)=>{
                                        if(index == 0){
                                            return (
                                                <div key={index} className="item active webclientcaro ">
                                                  <h3 className="lightbluetext">{data.journyTitle}</h3>
                                                  <p>{data.journytext}</p>
                                                </div>
                                            );
                                        }else{
                                            return (
                                                <div key={index} className="item webclientcaro ">
                                                  <h3 className="lightbluetext">{data.journyTitle}</h3>
                                                  <p>{data.journytext}</p>
                                                </div>
                                            );
                                        }
                                        })
                                      :
                                      null
                                     }
                                      
                                    {/*<div className="item webclientcaro">
                                        <h3 className="lightbluetext">2</h3>
                                        <p> iOGSolutions registered itself on 17th April 2013 and starts operations with an office in Pune</p>
                                    </div>
                                    <div className="item webclientcaro">
                                        <h3 className="lightbluetext">3</h3>
                                        <p> iOGSolutions registered itself on 17th April 2013 and starts operations with an office in Pune</p>
                                    </div>*/}
                              </div>
                            </div>
                      </div>
                  </div>
              </div>
            </div>   
        );
    }
}