import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
// import $                  from 'jquery';
import './ChallengesTemp.css';


export default class ChallengesTemp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blocks:{
        "blockTitle"          : "Challenges",
        "blockSubTitle"       : "",
        "blockDescription"    : "",
        "blockComponentName"  : "",
        "blockType"           : "simple",
        "repeatedBlocks"    : [
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "Identification of loop holes in historical data and forecasts",
                          "Image"       : "/images/challenges1.jpeg",
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : " Choosing the right statistical model for forecasting",
                          "Image"       : "/images/challenges1.jpeg",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "Identification of elements which can be forecasted and which cannot be",
                          "Image"       : "/images/challenges1.jpeg",
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "Over dependability on automatic forecasting",
                          "Image"       : "/images/challenges1.jpeg",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "Validity of the data inputted to the forecast model",
                          "Image"       : "/images/challenges1.jpeg",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "Closeness of forecast with actual results",
                          "Image"       : "/images/challenges1.jpeg",
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
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate4 NOPadding">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <div class="B4T_line col-lg-1 col-lg-offset-2">
         </div>
        </div>
             <div className=" text-center B2T_challengesTitle">{this.state.blocks.blockTitle}</div>
        <div className="col-lg-offset-1 col-lg-10 col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1  col-xs-12">
         
        { 
          this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
          this.state.blocks.repeatedBlocks.map((result, index)=>{
            return(
             
               <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 B3T_challengesDiv">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 <img src={result.Image} className="B4T_img img-responsive"/>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 <p className="B4T_txt"dangerouslySetInnerHTML={ { __html: result.Description } } ></p>
                </div>
               </div>
             
              );

          })
          :
          null
        }
        </div>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

