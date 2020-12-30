import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

import $                  from 'jquery';
import './ConsultDownstream.css';


export default class ConsultDownstream extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "blocks":{
        "blockTitle"         : "",
        "blockSubTitle"      : "",
        "blockDescription"   : "",
        "blockComponentName" : "",
        "fgImage"            : "",
        "blockType"          : "simple",
        "repeatedBlocks"    : [
                      {
                          "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"     : "",
                          "Link"      : "/xyz"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"     : "",
                          "Link"      : "/xyz"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"     : "",
                          "Link"      : "/xyz"
                      },
                     
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"     : "",
                          "Link"      : "/xyz"
                      },
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"     : "",
                          "Link"      : "/xyz"
                      },
                      
                      {
                        "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"     : "",
                          "Link"      : "/xyz"
                      },
                      {
                          "Title"         : "",
                          "SubTitle"    : "",
                          "Description" : "",
                          "Image"     : "",
                          "Link"      : "/xyz"
                      },
                      {
                          "Title"         : "",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "Review of performance on key metrics Identification of opportunities for Infrastructure Rationalizationscing",
                          "Image"     : "/images/consultsrvice.png",
                          "Link"      : "/xyz"
                      },
                     
                      
                      
                      

        ],
        
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
      console.log("pageUrl now = ",pageUrl);
      let a = pageUrl ? pageUrl.split('/') : "";
      console.log("consult url",a);
      if(pageUrl =="/masterpage/iog-consult"){
        // $('.innerBlocktConsult').css('height','1230px');
        // $('.innerBlocktConsult').css('marginTop','-143px');

// 

      }
       if(pageUrl =="/iog-implement"){
        $('.innerBlocktConsult').css('marginTop','-143px');
      }
       if(pageUrl =="/iog-study"){
        $('.innerBlocktConsult').css('marginTop','-36px');
        $('.downimgtext').css('left','20em');
      }
      if(pageUrl=="/masterpage/sample_repeateddelete"){
        $('.downimg_p_txt').css('top','-1.5em');

      }
       if(pageUrl=="/iog-train"){
        $('.downimgtext').css('left','17em');

      }
          if(pageUrl=="/iog-train")
     {
         window.matchMedia('screen and (max-width: 480px) and (min-width:320px)') 
         {
         // $('.downimgtext').css('left','6em');
         }
     }
     else{
       // $('.downimgtext').css('left','8em');

     }



console.log("10 sep==>",this.props.block_id);
          console.log("this.props.block_id0000",this.props.block_id);
          
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                  console.log("response.data.length>>>>>>>>>>>>>",response.data.repeatedBlocks.length);
                  if(response.data.repeatedBlocks.length == 10){
                    $('.innerBlocktConsult').css('height','2200px');
                    
                  }
                   if(response.data.repeatedBlocks.length == 8){
                    $('.innerBlocktConsult').css('height','2000px');
                    
                  }
                    if(response.data.repeatedBlocks.length == 6){
                    $('.innerBlocktConsult').css('height','1570px');
                    
                  }
                   if(response.data.repeatedBlocks.length == 4){
                    $('.innerBlocktConsult').css('height','1200px');
                    
                  }
                  if (($(window).width() <= 480) && (response.data.repeatedBlocks.length == 6) ) {
                     console.log("hiiiiiiiii......")
                      $( ".innerBlocktConsult" ).css( 'height','2700px' );
                      }
                       if (($(window).width() <= 480) && (response.data.repeatedBlocks.length == 4) ) {
                     console.log("hiiiiiiiii......")
                      $( ".innerBlocktConsult" ).css( 'height','1865px' );
                      }
                        if (($(window).width() <= 480) && (response.data.repeatedBlocks.length == 7) ) {
                     console.log("hiiiiiiiii......")
                      $( ".innerBlocktConsult" ).css( 'height','2910px' );
                      }
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
}


  render() {  
    console.log('kghjgjgj',this.state.blocks.fgImage);
    return (
     <div> 
      <div className="container-fluid"style={{padding:"0px"}}>
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 imagesize"style={{padding:"0px"}}>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  innerBlocktConsult NOPadding "style={{backgroundImage:"url("+this.state.blocks.fgImage+")"}}>
          <div className="Bubble hidden-md hidden-sm hidden-xs">
           <div className="Main_Cards__Bubble1 bub11">
         </div>
           <div className="Main_Cards__Bubble1 bub21">
          </div>
         </div>
         <div>
             <div className="downimgtext text-center hidden-xs">{this.state.blocks.blockTitle}</div>
            <p className="col-lg-10 col-md-10 col-sm-10 col-xs-10 downimg_p_txt" dangerouslySetInnerHTML={{ __html:this.state.blocks.blockDescription}}></p>
          </div>  
          <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 container">  
           <div className="">
           { 
              this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
              this.state.blocks.repeatedBlocks.map((result, index)=>{
              return(
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <img src={result.Image} id={"consultdown_img"+index}/>
               </div>
                <div className=" col-lg-9 col-md-9 col-sm-9 col-xs-12 " id={"consultdown_data"+index}>
                  <div className="col-lg-12 col-md-12">
                   <h3 id={"downimg_text"+index}>{result.Title}</h3>
                   <p id="downimg_p_text"dangerouslySetInnerHTML={ { __html: result.Description } }></p>
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

      {/*res*/}



     


     {/*  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  innerBlocktConsult_new NOPadding hidden-lg hidden-md hidden-sm">
       
       <div>
          <div className="downimgtext_new text-center">{this.state.blocks.blockTitle}</div>
          <p className="col-lg-10 col-md-10 col-sm-10 col-xs-10 downimg_p_txt_new text-center ">We at iOG Solutions believe in providing solutions that are as unique as our clients requirements.Following is a partial listof our consulting services under our iOGConsult service arm </p>
        </div>  
        <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">     
         { 
            this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
            this.state.blocks.repeatedBlocks.map((result, index)=>{
            return(
              <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 " id={"consultdown_data_new"+index}>
                <div className="col-lg-12 col-md-12">
                 <h3 id={"downimg_text_new"+index}>{result.Title}</h3>
                 <p id="downimg_p_text_new"dangerouslySetInnerHTML={ { __html: result.Description } }></p>
                </div>
               </div>
              );
          })
            :
            null
        }
        </div>
       </div> */}
      
    {/*end res*/}
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    );  
  }
}

