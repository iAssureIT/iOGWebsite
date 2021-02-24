import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

import $                  from 'jquery';
import './ExpertiseServicesOffered.css';


export default class ExpertiseServicesOffered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks:{
        "blockTitle"          : "Services Offered",
        "blockSubTitle"       : "",
        "blockDescription"    : "",
        "blockComponentName"  : "",
        "blockType"           : "simple",
        "repeatedBlocks"    : [
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : ""
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/abc"
                      },

        ],
        "bgImage"       : "",
        "bgVideo"       : "",
        "fgImage"       : "",
        "fgVideo"       : ""

      },
      blockID:"",
      block_id:""

    };    
  }
componentDidMount(){

     /*var pageUrl = window.location.pathname;
       if(pageUrl =="/iog-consult"){
         $('.services_title').addClass('services_title_safari');

       }*/
     var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
      if (isSafari){
         $('.contentheaderH2Class').addClass('contentheaderH2');
      }
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

 


  render() { 
  // console.log('khj', this.state.blocks); 
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 services_block innerBlock5tepmlate  container-fluid"style={{marginBottom:"90px"}}>
        <div className="Bubble hidden-sm hidden-md hidden-xs"  >
            <div className="Main_Cards__Bubble bub1"></div>
            <div className="Main_Cards__Bubble bub2"></div>
           </div>
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12   contentheaderNewPage text-center"style={{marginBottom:"0px"}}>
              <hr/>
               <h2 className="contentheaderH2Class" style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NopaddingMob Expertise_maindiv">
            { 
              this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
              this.state.blocks.repeatedBlocks.map((result, index)=>{
                return(
                  <div>
                   <div className=" col-lg-5 col-md-12 col-sm-12 col-xs-12 B4T_ServicesDiv">
                   <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 NOPadding hidden-xs">
                     <img src={result.Image} className="B5T_img img-responsive"/>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 innerServiceDiv NOPadding">
                     <h5 className="B5T_txt">{result.Title}</h5>
                     <p  className="ServiceTxt col-lg-12 col-md-12 col-sm-12 col-xs-12"dangerouslySetInnerHTML={ { __html: result.Description } } ></p>
                    </div>
                   </div>
                   
                  </div>
                );

              })
               :
                null
            }
            </div>
     
       {/*  <div className="col-lg-12 col-md-12  hidden-lg hidden-md">
        { 
          this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
          this.state.blocks.repeatedBlocks.map((result, index)=>{
            return(
              <div>
               <div className=" col-lg-5 col-md-5 col-sm-12 col-xs-12 B4T_ServicesDiv_mob">
               <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 NOPadding">
                 <img src={result.Image} className="B5T_img"/>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 innerServiceDiv NOPadding">
                 <h5 className="B5T_txt">{result.Title}</h5>
                 <p  className="ServiceTxt"dangerouslySetInnerHTML={ { __html: result.Description } } ></p>
                </div>
               </div>
               
              </div>
            );

          })
           :
            null
        }
        </div>*/}
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

