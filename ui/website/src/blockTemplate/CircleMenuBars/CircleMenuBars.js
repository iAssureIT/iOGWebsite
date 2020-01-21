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
     
       

        console.log("this.state.urlParam",this.state.urlParam);
            return (
                    <div className="new_wizard col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <div className="wizard-inner col-lg-10 col-lg-offset-2 col-md-12 col-xs-12 col-sm-12">
                            { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{
                          return(
                           <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">
                            <div className=" nav-tabs new_tab" role="tablist">
                                <div role="presentation" className="">
                                    <a href={"/masterpage/"+result.Link}>
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


