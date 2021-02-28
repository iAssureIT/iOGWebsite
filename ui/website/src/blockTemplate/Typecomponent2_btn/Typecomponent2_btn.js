import React from 'react';
import axios from 'axios';

import './Typecomponent2_btn.css';

export default class Typecomponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent2_btn",
        "blockType"           : "",
        "blockTitle"          : "",
        "blocksubTitle"       : "",
        "blockDescription"    : "",
        "fgImage"             : "",
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
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  posRel alternateblock Textrighgtblock nopaddinginResponsive">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 posRel nopaddinginResponsive">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-12 nopaddinginResponsive">
                <div className="col-lg-6 col-md-6 col-sm-6 hidden-xs img1 Typecomp2Btn_img Typecomponent2BtnImg"style={{paddingLeft:"71px"}}>
                 <img src={this.state.blocks.fgImage} alt="" className="img-responsive Type2Img" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 TypebtnText"style={{paddingTop:"8%"}}>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blackTitle hrpadding   contentheaderNewPage AboutUsLine text-center"style={{marginBottom:"0px"}}>
                      <hr style={{float:"left"}} className="marginTopMobile"/>
                     {/*  <h2 style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>*/}
                    </div>
                   <div>
                   <h2 className="para-top"style={{color:"#333"}}>{this.state.blocks.blockTitle}</h2>
                     <p className="righttextaboutus text-justify" style={{fontsize:"17px"}}  dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                   </div>
                   <a class="col-lg-6 col-xs-10 services_title"style={{padding:"0px"}} href={this.state.blocks.blockSubTitle}>
                      <button class="col-lg-6 col-md-6 lightbluebg buttonhover servicekbtn btn">Read More 
                       <span class="servicekbtnarrow" style={{style:"#fff"}}>&gt;&gt;</span>
                     </button>
                  </a>  
                </div>
              </div>
            </div> 
           </div>   

        );
    }
}