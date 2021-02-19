import React, { Component } from 'react';
// import { render } from 'react-dom';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commoninfoblock.css';


export default class Commoninfoblock extends Component {
   constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"   : "Commoninfoblock",
        "blockType"            : "",
        "blockTitle"           : "",
        "blockDescription"     : "",
        "fgImage"              : "",
      },
      blockID:"",
      block_id:""
    }; 

    
  }
componentDidMount(){
console.log("inside==>",this.props.block_id);
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                    if(response.data){
                      this.setState({
                          blocks:response.data
                      });
                    }                  
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
      console.log("========",this.state.blocks.fgImage);
        return(
            <div className="">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
                <div className="services_img ">
                  <img src={this.state.blocks.fgImage} alt="" className=" img-responsive" />
                </div>
              </div>
              <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding"style={{paddingTop:"40px"}}>
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center NOPadding">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  contentheader text-center">
                    <hr/>
                     <h2 style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>
                  </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"style={{marginBottom:"20px"}}> 
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 commonBlockpadd">
                          <p className="line_para B2T_p text-justify" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>   
                        </div>       
                      </div>    
                  </div>
                </div>
              </div>
        );
    }
}