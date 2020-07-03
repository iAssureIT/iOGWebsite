import React, { Component } from 'react';
// import { render } from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './IogconsultTxtRight.css';

export default class IogconsultTxtRight extends Component {

 constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "IogconsultTxtRight",
        "blockType"           : "simple",
        "blockTitle"          : "Our Approach",
        "blockDescription"    : "iOG follows a structured methodology to assess goals and objectives, diagnose problems, define roadmaps and blueprints and finally implement the solution.",
        "fgImage"             : "/images/consultrightimg.png",
      },
      blockID:"",
      block_id:""
    }; 

    
  }
componentDidMount(){
/*console.log("==>",this.props.block_id);*/
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
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
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            
                  <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 BT3_innerBlock">
                    <div className="col-lg-6 col-md-6 hidden-sm hidden-xs img1">
                     <img src={this.state.blocks.fgImage} alt="" className="BT3_iogconsult col-lg-offset-2 img-responsive" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 BT3_text1">
                    <h1><b>{this.state.blocks.blockTitle}</b></h1>
                      <p className="BT3_text text-justify "dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                    </div>
                  </div>
            </div>   
        );
    }
}