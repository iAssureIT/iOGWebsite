import React from 'react';
import axios from 'axios';
import $     from 'jquery';

import './Typecomponent1_btn.css';

export default class Typecomponent1 extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

      blocks: {
        "blockComponentName"  : "Typecomponent1_btn",
        "blockType"           : "",
        "blocksubTitle"       : "",
        blockTitle            : "",
        blockDescription      : "",
        fgImage               : "",
      },
      blockID:"",
      block_id:""
    }; 

    
  }
componentDidMount(){

   var pageUrl = window.location.pathname;
   // console.log("pageUrl in typecomp1btn",pageUrl);
   let a = pageUrl ? pageUrl.split('/') : "";
   if(pageUrl =="/industries"){
        // $('.TypecomponentBtnImg').css('paddingTop','120px');
      }
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
   
        return(
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 posRel onselecthover type1btnDiv"
                 id="Type1Component" 
                 data-field1="blockTitle" 
                 data-field2="blockDescription" 
                 data-field3="fgImage">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopaddinginResponsive">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopaddinginResponsive">
                        <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12 takebuttonDown">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12   contentheaderNewPage AboutUsLine text-center"style={{marginBottom:"0px"}}>
                              <hr style={{float:"left"}}/>
                             {/*  <h2 style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>*/}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <h2 className=" para-top"style={{color:"#333"}}>{this.state.blocks.blockTitle}</h2>
                              <div> 
                                <p className="energypagedata text-justify" style={{fontSize:"17px"}}dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                              </div> 
                              <a class="col-lg-5 col-md-5 services_title"style={{padding:"0px"}} href={this.state.blocks.blockSubTitle}>
                                  <button class="col-lg-8 col-md-6 lightbluebg buttonhover servicekbtn btn">Read More 
                                   <span class="servicekbtnarrow" style={{style:"#fff"}}>&gt;&gt;</span>
                                 </button>
                              </a>  
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-6 hidden-xs BtnImageDown">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 TypecomponentBtnImg">
                              <img src={this.state.blocks.fgImage} alt="" className="img-responsive"/>
                          </div>
                        </div>
                    </div>   
                   </div>          
                </div>   
          );

    }
}