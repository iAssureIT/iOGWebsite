import React from 'react';
import axios from 'axios';

import './Typecomponent1Img.css';

export default class Typecomponent1Img extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent1Img",
        "blockType"       : "simple",
        blockTitle : "This is Block Title",
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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top posRel onselecthover"
                 id="Type1Component" 
                 data-field1="blockTitle" 
                 data-field2="blockDescription" 
                 data-field3="fgImage">
                 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <div className="line1 col-lg-1 col-lg-offset-6 "></div>
                  </div>                    
          
                    <div className="col-lg-offset-1 col-lg-11 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <h2 className="lightbluetext para-top text-center">{this.state.blocks.blockTitle}</h2>
                              <div> 
                                <p dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                              </div>   
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="img1">
                              <img src={this.state.blocks.fgImage} alt="" className="intro_img col-lg-10 col-sm-10 col-xs-10" hight="250" width="400" />
                          </div>
                        </div>
                        </div>
                    </div>
                          
            </div>   
        );
    }
}