import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import $                  from 'jquery';
import './ConsultingServices.css';

export default class ConsultingServices extends Component {
 constructor(props) {
    super(props);
    this.state = {
      blocks:{
        "blockTitle"      : "Our Consulting Service differentiators",
        "blockSubTitle"   : "",
        "blockDescription"  : "",
        "blockComponentName"  : "",
        "blockType"       : "simple",
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
                          "Link"        : "/xyz"
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
                          "Link"        : "/xyz"
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
                          "Link"        : "/xyz"
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
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"       : "",
                          "Link"        : "/xyz"
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


  var pageUrl = window.location.pathname;
   if(pageUrl =="/iog-consult"){
     $('.services_title').addClass('services_title_safari');

   }
// console.log("==>",this.props.block_id);
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                /*var blocks = this.state.blocks;
                blocks.push(response.data);*/
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

            var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

            if (isSafari){
              $('.BT4_txt').addClass('safari_BT4_txt');
              $('.services_title').addClass('chrome_BT4_txt_title');
            }else{
              if (isChrome){
                $('.BT4_txt').addClass('chrome_BT4_txt');
                


              }else{
                $('.BT4_txt').removeClass('chrome_BT4_txt');
                $('.BT4_txt').removeClass('safari_BT4_txt');
              }
            }
}
  render() {  
    return (
     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container-fluid"> 
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate3 servivesblockIog NOPadding">
         <div>
            <div className="text-center services_title "><b>{this.state.blocks.blockTitle}</b></div>
         </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 servivesblockIog">
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_5E">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_MobNokia">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_MobNokia">
               { 
                this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                this.state.blocks.repeatedBlocks.map((result, index)=>{
                  console.log("repeatedBlocks from consultsrvice=",result);
                return(
                 
                   <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_Mob"style={{marginBottom:"60px"}}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 New_Study_shadow">
                     <div className="col-md-12 col-lg-12 col-lg-12 col-md-12 FirstPart">
                      <div class="iconCircle">
                       <img src={result.Image} alt="enteprice" class="innerCircle img-responsive"/>
                       </div>
                     {/* <div className=" text-center">
                                         <img src={result.Image}className="BT3_img1"/>
                                        </div>*/}
                      </div>
                      <div className="col-lg-12 col-md-12">
                       <h4 className="headingPadding text-center"><b>{result.Title}</b></h4>
                      </div>
                       <div className="col-lg-12 col-md-12 endofsubblock">
                        <p className="BT4_txt  text-center"dangerouslySetInnerHTML={ { __html: result.Description } }></p>
                       </div>
                     </div> 
                   </div>
                
                 );
                })
                :
                null
              }
         </div> 
        </div>
       </div>  
      </div>
     </div>  
   </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    );  
  }
}

