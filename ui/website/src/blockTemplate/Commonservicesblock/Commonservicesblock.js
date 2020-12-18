import React, { Component } from 'react';
import axios from 'axios';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commonservicesblock.css';


export default class Commonservicesblock extends Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks:{
        
        "blockComponentName"  : "CommonservicesblockTitle",
         blockTitle : "This is Block Title",
        "blockType"           : "simple",
        "repeatedBlocks"    : [
                      {
                          "Title"       : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/"
                      },
                      {
                          "Title"       : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/iogimplement"
                      },
                      {
                          "Title"       : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/iogtrain"
                      },
                      {
                          "Title"       : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/iogstudy"
                      },
                       {
                          "Title"       : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/iogstudy"
                      }

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
// console.log("==>",this.props.block_id);
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                /*var blocks = this.state.blocks;
                blocks.push(response.data);*/
                console.log("response in Commonservicesblock===",response);
                this.setState({
                  blocks:response.data
                  });
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
  var plength =this.state.blocks.repeatedBlocks ? this.state.blocks.repeatedBlocks.length : 0;
  var productlength = plength % 3;
   if(productlength == 2){
      var classfor4="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1";

    }
    else if(productlength == 1){
      var classfor4="col-lg-12 col-md-12 col-sm-12 col-xs-12";

    }
    else{
      var classfor4="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1";

    }

    return(
      
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contentWraper">
          <div className="">
            <div className="Bubble" >
              <div className="Main_Cards__Bubble bub1"></div>
              <div className="Main_Cards__Bubble bub2"></div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lightbluetext contentheader text-center">
           {/*   <hr/>
              <h1 className="lightbluetext">Services</h1>*/}
            </div>
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{padding:"0px"}}>
              <div className="">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{padding:"0px"}}>
                  <div className="">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className=""> 
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className={classfor4} style={{paddingLeft:"0px"}}> 
                            {
                             this.state.blocks.repeatedBlocks.map((data, index)=>{
                                console.log("dta=======>",data);
                                if(productlength == 2){
                                  if(plength === index+2){
                                    var classes = "col-lg-offset-2 col-lg-4 col-md-6 col-md-offset-1 col-sm-4 col-xs-4";
                                   
                                  }else{
                                    var classes="webshopmargintop webpageshopcont col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center";
                                 
                                }
                                }else if(productlength == 1){
                                  // console.log('productlength')
                                  if(plength === index+1){
                                    var classes = "webpageshopcont col-lg-3 col-md-3 col-xs-3   text-center";                                   
                                  }else{
                                    var classes="webpageshopcont col-lg-3 col-md-6  col-sm-12 col-xs-12  text-center";                                 
                                }
                                }else{
                                  var classes="webpageshopcont col-lg-4 col-md-6 col-xs-12 col-sm-6  text-center";                               
                                }
                                 return (
                                 <div key={index} className={classes} style={{paddingRight:"0px"}}>
                                  <a href={data.Link} data-toggle="tooltip" title="Click me to read more!">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="">
                                          <div className="text-center">
                                            <div className="serflip-cardservices newcard_landscape"style={{width:"285px"}}>
                                              <div className="serflip-card-inner">
                                                  <div className="serflip-card-front hidden-sm hidden-xs">
                                                    <img src={data.Image} className="text-center" alt=""/>
                                                    <div className="dwstmTitle">{data.Title}</div> 
                                                  </div>
                                                  <div className="serflip-card-front hidden-lg hidden-md">
                                                    <img src={data.Image} className="text-center img-responsive" alt=""/>
                                                    <div className="dwstmTitle">{data.Title}</div> 
                                                  </div>
                                                  <div className="serflip-card-back">
                                                      <p className="text-justify downstreamtxt" dangerouslySetInnerHTML={ { __html: data.Description } }></p>
                                                  </div>
                                               </div>
                                              </div>
                                          </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                 );
                              })
                            }
                          </div>
                        </div>
                      </div>
                     </div> 
                   </div> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
               
      
    );
  } 
}
