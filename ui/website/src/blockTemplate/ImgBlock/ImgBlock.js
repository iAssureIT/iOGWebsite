import React, { Component } from 'react';
// import { render } from 'react-dom';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './ImgBlock.css';


export default class ImgBlock extends Component {
   constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"   : "Commoninfoblock",
        "blockType"            : "simple",
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
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <div className="img1 row">
                  <img src={this.state.blocks.fgImage} alt="" className="services_img" />
                </div>
              </div>
        
        );
    }
}