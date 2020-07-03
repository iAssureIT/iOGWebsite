import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutufounder.css';

export default class Aboutufounder extends Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {

        "blockComponentName"  : "Aboutufounder",
        "blockType"           : "simple",
        "blockTitle"          : "This is Block Title",
        "blocksubTitle"       : "This is Block subTitle",
        "blockDescription"    : "This is a Description. Some text goes here. You can replace the text as per your choice.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "fgImage"             : "/images/bgimage1.jpg",

        blockDescription : "This is a Description. Some text goes here. You can replace the text as per your choice.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fgImage: "/images/bgimage1.jpg",
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
              <div className="row">
                <div  className="backgrd_curve1 col-lg-12 col-md-12 col-sm-12 col-xs-12 head_spacing">
                  <div className="col-lg-3 col-lg-offset-1 col-md-3 col-sm-3 col-xs-3">
                      <a href="" target="_blank">
                        <img src={this.state.blocks.fgImage} alt="" className="director_img img-responsive" style={{"height":"350px","width":"100%"}}/></a>
                    </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-lg-offset-1">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                              <h2 className="para-top3 txt-size-director textcoloryellow"><b>{this.state.blocks.blockTitle}</b></h2>
                              <h1 className="txt-size-founder lightbluetext">{this.state.blocks.blocksubTitle}</h1>
                              <p className="para_spacing text-justify pull-right" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription}}></p>                                      
                          </div>
                        </div>
                      </div>
                  </div>          
              </div>
            </div>
        );
    }
}