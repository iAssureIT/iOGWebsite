import React, { Component } from 'react';
// import { render } from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './ConsultOverview.css';

export default class ConsultOverview extends Component {

 constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "",
        "blockType"           : "",
         blockTitle           : "",
        blockDescription      : "",
     
      },
      blockID:"",
      block_id:""
    }; 

    
  }
componentDidMount(){
/*console.log("==>",this.props.block_id);*/
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
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 overviewPadding">
              <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 BT3_innerBlock new_BT3_innerBlock">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 BT3_text1">
                <div className="services_title"><b>{this.state.blocks.blockTitle}</b></div>
                  <p className="BT3_text text-justify "dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                </div>
              </div>
            </div>   
        );
    }
}