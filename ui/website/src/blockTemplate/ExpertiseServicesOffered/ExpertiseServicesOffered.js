import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

// import $                  from 'jquery';
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
                        "Title"         : "Implementation",
                          "SubTitle"    : "",
                          "Description" : "Implementation of the Data Historian Tool",
                          "Image"       : "/images/s1.png",
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "Integration",
                          "SubTitle"    : "",
                          "Description" : " Integrate the Data Historian with your operations and front, mid and back office business systems to historize and archive data.",
                          "Image"       : "/images/s2.png",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "upgradation",
                          "Description" : "Upgrade your existing Data Historian architecture to utilize high availability, interface redundancy and the application of critical updates to all the modules.",
                          "Image"       : "/images/s3.png",
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "Update and Migration",
                          "SubTitle"    : "",
                          "Description" : "Data Historian System Update and Migration",
                          "Image"       : "/images/s4.png",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "customized Applications",
                          "SubTitle"    : "",
                          "Description" : "Develop customized applications and interfaces to fit your unique requirements",
                          "Image"       : "/images/s5.png",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "Deliver training materials",
                          "SubTitle"    : "Update and Migration",
                          "Description" : "Delivery of standard or customized training materials and one-on-one staff mentoring for users, administrators, and support personnel in your organization.",
                          "Image"       : "/images/s6.png",
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
      <div className="container-fluid">
       <div className="col-lg-offset-1 col-md-offset-1  col-lg-10 col-md-10 col-sm-10 col-xs-10 innerBlock5tepmlate services_block NOPadding">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <div class="B2T1_line1 col-lg-4 col-lg-offset-2 ">
         </div>
        </div>
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="B2T_serviceTitle text-center">{this.state.blocks.blockTitle}</div>
         </div> 
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
        { 
          this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
          this.state.blocks.repeatedBlocks.map((result, index)=>{
            return(
              <div>
               <div className=" col-lg-5 col-md-12 col-sm-12 col-xs-12 B4T_ServicesDiv">
               <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 NOPadding hidden-xs">
                 <img src={result.Image} className="B5T_img img-responsive"/>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 innerServiceDiv NOPadding">
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
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

