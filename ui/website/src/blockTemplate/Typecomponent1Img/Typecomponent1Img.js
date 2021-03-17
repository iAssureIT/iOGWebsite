import React from 'react';
import axios from 'axios';

import './Typecomponent1Img.css';

export default class Typecomponent1Img extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent1Img",
        "blockType"       : "",
        blockTitle : "",
        blockDescription : ""
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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  posRel onselecthover"style={{marginBottom:"50px"}}
                 id="Type1Component" 
                 data-field1="blockTitle" 
                 data-field2="blockDescription" 
                 data-field3="fgImage">
                 
                {/*<div className="col-lg-5 col-md-5 col-lg-offset-6 hidden-sm hidden-xs ">
                    <div className="line1 col-lg-1  "></div>
                  </div>       */}             
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 subpages_Title text-center">
                    <hr/>
                     <h2 className="H2weight text-center" style={{color:"#333"}}>{this.state.blocks.blockTitle}</h2>
                    </div>
                    <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12  maindivWidth_mob">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div> 
                                <p dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } } className="text-center implementApproach"></p>
                              </div>   
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " style={{padding:"0px"}}>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Typecomp_1_img ">
                            
                              <img src={this.state.blocks.fgImage} alt="" className="text-center img-responsive" />
 
                        </div>
                        </div>
                    </div>
                          
            </div>   
        );
    }
}