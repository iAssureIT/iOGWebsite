import React, { Component }        from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import './CircleMenuBars.css';


export default class CircleMenuBars extends Component{
    constructor(props) {
    super(props);
    this.state = {
      urlParam                : "",
      blocks                  :{
        "blockTitle"          : "Challenges",
        "blockSubTitle"       : "",
        "blockDescription"    : "",
        "blockComponentName"  : "CircleMenuBars",
        "blockType"           : "simple",
        "repeatedBlocks"      : [
                      {
                        "Title"         : "Page1",
                          "SubTitle"    : "",
                          "Description" : "Identification of loop holes in historical data and forecasts",
                          "Image"       : "/images/challenges1.jpeg",
                          "Link"        : "/"
                      },
                      {
                        "Title"         : "page2",
                          "SubTitle"    : "",
                          "Description" : " Choosing the right statistical model for forecasting",
                          "Image"       : "/images/challenges1.jpeg",
                          "Link"        : ""
                      },
                      {
                        "Title"         : "page3",
                          "SubTitle"    : "",
                          "Description" : "Identification of elements which can be forecasted and which cannot be",
                          "Image"       : "/images/challenges1.jpeg",
                          "Link"        : ""
                      },
                      {
                        "Title"         : "page4",
                          "SubTitle"    : "",
                          "Description" : "Over dependability on automatic forecasting",
                          "Image"       : "/images/challenges1.jpeg",
                          "Link"        : ""
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
/*console.log("==>",this.props.block_id);*/
          var pageUrl = window.location.pathname;;
      console.log("pageUrl = ",pageUrl);
      let a = pageUrl ? pageUrl.split('/') : "";
          console.log("a==>",a[1]); 
          const urlParam =a[2];
          console.log("urlparam.-",urlParam);
          this.setState({
                      urlParam:urlParam
                    });
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

   

    render() {
     
       
       var length=this.state.blocks.repeatedBlocks.length;
        console.log("result length--------->",length);

        console.log("this.state.urlParam",this.state.urlParam);
        if(length>4){
           return (
                <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 new_connecting-line"></div>
                  <div className="wizard-inner col-lg-10 col-lg-offset-2 col-md-12 col-xs-12 col-sm-12">
                    <h2 className="navigationTitle">You May Also Visit</h2>
                    { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return(
                           
                           <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={result.Link}>
                                    

                                        <span className={"new_round-tab "+(this.state.urlParam === result.Link ? "active": "")}>
                                            
                                        </span>
                                   
                                    <div className="new_wizardNote ">{result.Title}</div>
                                    </a>
                                </div>
                               
                            </div>
                           </div>  
                            )
                     })
                    : null
                  }


                        </div>
                    </div>
                );
             }
             else if(length<4){
              return(
                     
                 <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <div className="wizard-inner col-lg-9 col-lg-offset-3 col-md-12 col-xs-12 col-sm-12">
                          <h2 className="navigationTitle">You May Also Visit</h2>
                            { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return(
                           
                           <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={result.Link}>
                                    <div className="new_connecting-line"></div>

                                        <span className={"new_round-tab "+(this.state.urlParam === result.Link ? "active": "")}>
                                            
                                        </span>
                                   
                                    <div className="new_wizardNote ">{result.Title}</div>
                                    </a>
                                </div>
                               
                            </div>
                           </div>  
                            )
                     })
                    : null
                  }


                        </div>
                    </div>
                );

             }   
             else{
               return(
                     
                 <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <div className="wizard-inner col-lg-9 col-lg-offset-3 col-md-12 col-xs-12 col-sm-12">
                         <h2 className="navigationTitle">You May Also Visit</h2>
                            { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return(
                           
                           <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={result.Link}>
                                    <div className="new_connecting-line"></div>

                                        <span className={"new_round-tab "+(this.state.urlParam === result.Link ? "active": "")}>
                                            
                                        </span>
                                   
                                    <div className="new_wizardNote ">{result.Title}</div>
                                    </a>
                                </div>
                               
                            </div>
                           </div>  
                            )
                     })
                    : null
                  }


                        </div>
                    </div>
                );

             }
          }
        }


