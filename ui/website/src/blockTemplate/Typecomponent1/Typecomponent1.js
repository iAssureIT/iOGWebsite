import React from 'react';
import axios from 'axios';

import './Typecomponent1.css';

export default class Typecomponent1 extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent1",
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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 posRel onselecthover" style={{marginTop:"60px"}}
                 id="Type1Component" 
                 data-field1="blockTitle" 
                 data-field2="blockDescription" 
                 data-field3="fgImage">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{paddingLeft:"40px"}}>
                       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 takebuttonDown">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12   contentheaderNewPage AboutUsLine text-center"style={{marginBottom:"0px"}}>
                              <hr style={{float:"left"}}/>
                             {/*  <h2 style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>*/}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <h2 className=" para-top"style={{color:"#333"}}>{this.state.blocks.blockTitle}</h2>
                              <div> 
                                <p className="energypagedata text-justify" style={{fontSize:"17px"}}dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                              </div> 
                            </div>
                        </div>
                         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 BtnImageDown"style={{paddingLeft:"100px"}}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 TypecomponentBtnImg">
                              <img src={this.state.blocks.fgImage} alt="" className="img-responsive"/>
                          </div>
                        </div>
                    </div>            
                </div>   
        );
    }
}