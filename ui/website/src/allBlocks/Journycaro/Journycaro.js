import React, { Component } from 'react';
// import { render } from 'react-dom';
// import axios from 'axios';
// import $                  from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Journycaro.css';


export default class Journycaro extends Component {

 componentDidMount(){
  var dataCount1=[];
  var dataCount=this.props.journyData;
  dataCount1.push(dataCount);
  console.log("dataCount----",dataCount1);
 
 }


    render(){
        return(
             <div>
                <div className="col-lg-7 col-md-3 col-sm-12 col-xs-12">
                  <div className="row">
                      <div className="webclientbackimg  col-lg-12 col-md-12 col-sm-12 coll-xs-12">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-pause="false">
                              <div className="carousel-inner webclientcaro">
                                    
                                    {this.props.journyData && this.props.journyData.length>0?
                                      this.props.journyData.map((data, index)=>{
                                        // console.log("data----",data);
                                        if(index == 0){
                                            return (
                                                <div key={index} className="item active webclientcaro ">
                                                  <h3 className=""style={{color:"#333"}}>{data.journyTitle}</h3>
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