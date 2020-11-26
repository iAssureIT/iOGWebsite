import React from 'react';
import axios from 'axios';

import './Typecomponent1_btn.css';

export default class Typecomponent1 extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

      blocks: {
        "blockComponentName"  : "Typecomponent1_btn",
        "blockType"           : "simple",
        "blocksubTitle"       : "",
        blockTitle            : "This is Block Title",
        blockDescription      : "This is a Description. Some text goes here. You can replace the text as per your choice.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fgImage               : "/images/bgimage1.jpg",
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
                  console.log("response btn",this.props.block_id);
                  if(this.state.blocks.blocksubTitle=="refinery"){

                  }
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
      console.log("this.state.blocks.blocksubTitle---",this.state.blocks.blockSubTitle);
      if(this.state.blocks.blockSubTitle=="refinery")
        return(

            <div className="col-lg-offset-1 col-lg-10 col-md-12 col-sm-12 col-xs-12  posRel Typecomponent1_btn  industries_imgDiv"
                 id="" 
                 data-field1="blockTitle" 
                 data-field2="blockDescription" 
                 data-field3="fgImage">
                  <div className="col-lg-12 ">
                    <div className="line3 col-lg-1 "></div>
                  </div>                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <h2 className=" para-top">{this.state.blocks.blockTitle}</h2>
                              <div> 
                                <p className="TypeBTnP text-justify" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                              </div>   
                            </div>
                            <a class="col-lg-4 col-md-6" href={this.state.blocks.blockSubTitle}>
                              <div class="lightbluebg buttonhover servicekbtn btn">Read More 
                               <span class="servicekbtnarrow"style={{color:"#fff"}}>&gt;&gt;</span>
                             </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="img1">
                              <img src={this.state.blocks.fgImage} alt="" className="intro_img" style={{width:"100%"}} />
                          </div>
                        </div>
                        </div>
                    </div>
                          
            </div>   
        );
      else{
        return(
           <div className="col-lg-offset-1 col-lg-10 col-md-12 col-sm-12 col-xs-12 Typecomponent1_btn  posRel onselecthover"
                 id="Type1Component" 
                 data-field1="blockTitle" 
                 data-field2="blockDescription" 
                 data-field3="fgImage">
                  <div className="col-lg-12 ">
                    <div className="line3 col-lg-1 "></div>
                  </div>                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <h2 className=" para-top"style={{color:"#333"}}>{this.state.blocks.blockTitle}</h2>
                              <div> 
                                <p className="TypeBTnP text-justify" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                              </div>   
                            </div>
                            <a class="col-lg-4 col-md-6" href={this.state.blocks.blockSubTitle}>
                              <div class="lightbluebg buttonhover servicekbtn btn">Read More 
                               <span class="servicekbtnarrow"style={{color:"#fff"}}>&gt;&gt;</span>
                             </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 hidden-xs">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="img1">
                              <img src={this.state.blocks.fgImage} alt="" className="intro_img "style={{width:"100%"}} />
                          </div>
                        </div>
                        </div>
                    </div>
                          
            </div>
          );
      }
    }
}