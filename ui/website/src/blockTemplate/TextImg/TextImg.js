import React from 'react';
import axios from 'axios';

import './TextImg.css';

export default class TextImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: {
        blockTitle : "",
        blockDescription : "",
        fgImage: "/images/bgimage1.jpg",
      },
      blockID:"",
      block_id:""

    }; 
    
  }

componentDidMount(){
// console.log("==>",this.props.block_id);
                   // <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>

          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                /*var blocks = this.state.blocks;
                blocks.push(response.data);*/
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
// this.getBlockData();
}
    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 posRel ">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-6 col-md-6 hidden-sm hidden-xs img1">
                 <img src={this.state.blocks.fgImage} alt="" className="third_img" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                   {/*<h2 className="lightbluetext para-top">{this.state.blocks.blockTitle}</h2>*/}
                   <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                                                 
                </div>
              </div>
            </div>   
        );
    }
}