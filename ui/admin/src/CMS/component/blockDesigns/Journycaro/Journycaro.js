import React, { Component } from 'react';
// import { render } from 'react-dom';
import axios from 'axios';
// import $                  from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Journycaro.css';
import '../allCss/AboutUs.css';


export default class Journycaro extends Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks:"",
      blockID:"",
      block_id:""


    }; 
    
  }
componentDidMount(){
console.log("==>",this.props.block_id);
// 
/*
import axios from 'axios';

{this.state.blocks.blockSubTitle}
*/
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                /*var blocks = this.state.blocks;
                blocks.push(response.data);*/
                this.setState({
                  blocks:response.data
                  });
                })
                .catch(function(error){
                  console.log(error);
                  if(error.message === "Request failed with status code 401")
                    {
                        // swal("Your session is expired! Please login again.","", "error");
                    }
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
}



    render(){
        return(
             <div>
                <div className="col-lg-7 col-md-3 col-sm-3 col-xs-3">
                  <div className="row">
                      <div className="webclientbackimg text-center col-lg-12">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-pause="false">
                              <div className="carousel-inner webclientcaro">
                                    
                                 
                                                <div className="item webclientcaro ">
                                                  <h3 className="lightbluetext">{this.state.blocks.blockTitle}</h3>
                                                 <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                                                </div>
                                     
                                      
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