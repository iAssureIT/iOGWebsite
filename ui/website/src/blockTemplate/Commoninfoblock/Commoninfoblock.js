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
        "blockType"            : "simple",
        "blockTitle"           : "This is Block Title",
        "blockDescription"     : "This is a Description. Some text goes here. You can replace the text as per your choice.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "fgImage"              : "/images/bgimage1.jpg",
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
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding ">
                <div className="img1 ">
                  <img src={this.state.blocks.fgImage} alt="" className="services_img img-responsive" />
                </div>
              </div>
              <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding"style={{paddingTop:"30px"}}>
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center NOPadding">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  contentheader text-center">
                    <hr/>
                     <h2 style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>
                  </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                        <div className="col-lg-offset-1 col-md-offset-1 col-lg-10 col-md-10 col-sm-12 col-xs-10">
                          <p className="line_para B2T_p text-justify" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>   
                        </div>       
                      </div>    
                  </div>
                </div>
              </div>
        );
    }
}