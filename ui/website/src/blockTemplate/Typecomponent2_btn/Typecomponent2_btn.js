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
          <div className="col-lg-offset-1 col-lg-10 col-md-12 col-sm-12 col-xs-12  posRel">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 posRel ">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-6 col-md-6 hidden-sm hidden-xs img1">
                 <img src={this.state.blocks.fgImage} alt="" className="third_img typebtn_img" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                 
                  <div className="col-lg-12  NOpadding">
                    <div className="line2 "></div>
                  </div>                    
          
                   <h2 className="lightbluetext"><b>{this.state.blocks.blockTitle}</b></h2>
                   <div>
                     <p className="righttextaboutus"  dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                   </div>
                   <a class="col-lg-4 col-md-6 services_title" href={this.state.blocks.blockSubTitle}>
                    <button class="lightbluebg buttonhover servicekbtn btn">Read More 
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