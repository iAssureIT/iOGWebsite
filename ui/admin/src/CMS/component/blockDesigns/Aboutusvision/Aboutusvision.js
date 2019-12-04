import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

import './Aboutusvision.css';
import '../allCss/AboutUs.css';

export default class Aboutusvision extends Component {
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
// <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
/*
import axios from 'axios';
{this.state.blocks.blockTitle}
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
          
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img1">
                      <img src="/images/visionabout.png" alt="" className="plane" />
                 </div>
                      <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blck blck1height b1width">
                              <h2 className="line_subhead textcolorblue vision_align1">{this.state.blocks.blockTitle}</h2>
                              
                              {this.state.blocks.blockSubTitle}
                               </div>
                               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blck blck2height b2width">
                               <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                               </div>                                       
                          </div>
                      </div>
                </div>
            </div>
        );
    }
}