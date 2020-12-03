import React from 'react';
import axios from 'axios';

import './Typecomponent2_btn.css';

export default class Typecomponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent2_btn",
        "blockType"           : "simple",
        "blockTitle"          : "simple",
        "blocksubTitle"       : "",
        "blockDescription"    : "This is a Description. Some text goes here. You can replace the text as per your choice.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "fgImage"             : "/images/industries1.png",
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
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  posRel alternateblock Textrighgtblock nopaddinginResponsive"style={{height:"490px"}}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 posRel nopaddinginResponsive">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-12 nopaddinginResponsive">
                <div className="col-lg-6 col-md-6 hidden-sm hidden-xs img1 Typecomp2Btn_img Typecomponent2BtnImg"style={{paddingLeft:"71px"}}>
                 <img src={this.state.blocks.fgImage} alt="" className="img-responsive Type2Img" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 TypebtnText"style={{paddingTop:"8%"}}>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blackTitle hrpadding   contentheaderNewPage AboutUsLine text-center"style={{marginBottom:"0px"}}>
                      <hr style={{float:"left"}} className/>
                     {/*  <h2 style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>*/}
                    </div>
                   <div>
                   <h2 className="para-top"style={{color:"#333"}}>{this.state.blocks.blockTitle}</h2>
                     <p className="righttextaboutus text-justify" style={{fontsize:"17px"}}  dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                   </div>
                   <a class="col-lg-6 col-md-6 col-sm-10 col-xs-10 services_title"style={{padding:"0px"}} href={this.state.blocks.blockSubTitle}>
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