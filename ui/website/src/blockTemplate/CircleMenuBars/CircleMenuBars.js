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
     
       
       var length=this.state.blocks.repeatedBlocks.length;
        console.log("result length--------->",length);

        console.log("this.state.urlParam",this.state.urlParam);
        if(length>4 && length<6){
           return (
                <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12">
                  <h4 className="navigationTitle_for5 text-center">You May Also Visit</h4>
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 new_connecting-line"></div>
                  <div className="wizard-inner col-lg-10 col-lg-offset-2 col-md-offset-1 col-md-12 col-xs-12 col-sm-12">
                    
                    { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return(
                           
                           <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 adjustfor5 nopadding">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={"/masterpage/"+result.Link}>
                                    

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
               else if(length==3){
              return(
                     
                 <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 new_connecting-line"></div> 
                      <h4 className="navigationTitle text-center">You May Also Visit</h4>
                    <div className="wizard-inner col-lg-9 col-lg-offset-3 col-md-12 col-xs-12 col-sm-12">
                    
                            { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return(
                           
                           <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4 nopadding">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={"/masterpage/"+result.Link}>
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
              else if(length==2){
              return(
                     
                 <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 new_connecting-line"></div> 
                      <h4 className="navigationTitle text-center">You May Also Visit</h4>
                    <div className="wizard-inner col-lg-8 col-lg-offset-4 col-md-12 col-xs-12 col-sm-12">
                    
                            { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return(
                           
                           <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 nopadding">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={"/masterpage/"+result.Link}>
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

             else if(length<=4){
              return(
                     
                 <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 new_connecting-line"></div> 
                      <h4 className="navigationTitle text-center">You May Also Visit</h4>
                    <div className="wizard-inner col-lg-8 col-lg-offset-4 col-md-12 col-xs-12 col-sm-12">
                    
                            { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return(
                           
                           <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 nopadding">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={"/masterpage/"+result.Link}>
                                      <span className={"new_round-tabfor4 "+(this.state.urlParam === result.Link ? "active": "")}>
                                            
                                        </span>
                                   
                                    <div className="new_wizardNotefor4 ">{result.Title}</div>
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


             else if(length>6){
              return(
                     
                 <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12 hidden-xs">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 new_connecting-line"></div>
                     <h4 className="new_navigationTitle text-center">You May Also Visit</h4>
                    <div className="wizard-inner col-lg-12 col-md-12 col-xs-12 col-sm-12">
                     <div className="row">
                            { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return(
                           
                           <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 nopadding navigation_tab">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={"/masterpage/"+result.Link}>
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
                    </div>
                );

             } 

             else if(length==6){
              return(
                     
                 <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12 hidden-sm hidden-xs">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 new_connecting-line"></div>
                    
                    <h4 className="navigationTitle_for6">You May Also Visit</h4>
                    <div className="wizard-inner col-lg-offset-1 col-md-offset-1 col-lg-11  col-md-11 col-xs-12 col-sm-12">
                            { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return(
                           
                           <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding navigation_tab_for6">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={"/masterpage/"+result.Link}>
                                      <span className={"new_round-tab "+(this.state.urlParam === result.Link ? "active": "")}>
                                            
                                        </span>
                                   
                                    <div className="new_wizardNote_for6 ">{result.Title}</div>
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
                     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 new_connecting-line"></div>
                      <h4 className="navigationTitle">You May Also Visit</h4>
                        <div className="wizard-inner col-lg-9 col-lg-offset-3 col-md-12 col-xs-12 col-sm-12">
                            { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{

                          return( 
                           <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">
                            <div className=" nav-tabs new_tab" role="tablist">
                              <div role="presentation" className="">
                                <a href={"/masterpage/"+result.Link}> 
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


