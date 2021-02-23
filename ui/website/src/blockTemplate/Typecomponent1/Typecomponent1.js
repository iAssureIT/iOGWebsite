import React from 'react';
import axios from 'axios';

import './Typecomponent1.css';

export default class Typecomponent1 extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent1",
        "blockType"       : "",
        blockTitle : "",
        blockDescription : "",
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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 posRel MobileDivHeight onselecthover Type1_comp_marg_top"
                 id="Type1Component" 
                 data-field1="blockTitle" 
                 data-field2="blockDescription" 
                 data-field3="fgImage">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Type1_comp_padd">
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
                         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 BtnImageDown">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Typecomponent1Img">
                              <img src={this.state.blocks.fgImage} alt="" className="img-responsive"/>
                          </div>
                        </div>
                    </div>            
                </div>   
        );
    }
}