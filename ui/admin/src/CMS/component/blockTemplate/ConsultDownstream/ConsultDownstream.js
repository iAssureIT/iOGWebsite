import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

// import $                  from 'jquery';
import './ConsultDownstream.css';


export default class ConsultDownstream extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "blocks":{
        "blockTitle"         : "Our Consulting Service differentiators",
        "blockSubTitle"      : "",
        "blockDescription"   : "",
        "blockComponentName" : "",
        // "bgImage"            : "/images/consultdown.png",
        "blockType"          : "simple",
        "repeatedBlocks"    : [
                      {
                          "Title"         : "BUSINESS PROCESS MAPPING",
                          "Image"         : "",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "Design Efficient FEED that strikes the right balance of IT investments and the business",
                          "Image"     : "/images/consultsrvice.png",
                          "Link"      : "/xyz"
                      },
                      {
                        "Title"         : "FEED FOR INTEGRATED",
                         "Image"         : "",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "Detailed Analysis of Business Processes & Client quirement Reengineering processes to align",
                          "Image"     : "/images/consultsrvice.png",
                          "Link"      : "/xyz"
                      },
                      {
                          "Title"         : "DOWNSTREAM OIL & EXPERT",
                          "Image"         : "",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "Assessment of the business requirements, analyze and enhance the Downstream",
                          "Image"     : "/images/consultsrvice.png",
                          "Link"      : "/xyz"
                      },
                     
                      {
                          "Title"         : "OPTIMIZE THE OF EXISTING",
                          "Image"         : "",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "Finding simplification opportunities to reduce the cost of application support",
                          "Image"     : "/images/consultsrvice.png",
                          "Link"      : "/xyz"
                      },
                      {
                          "Title"         : "BUSINESS CASE",
                          "Image"         : "",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "Device structured ap-proach to transition and manage applications",
                          "Image"     : "/images/consultsrvice.png",
                          "Link"      : "/xyz"
                      },
                      
                      {
                         "Title"         : "REVIEW OF AREAS NEEDING",
                          "Image"         : "",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "Detailed Analysis of Business Processes & Client quirement Reengineering processes to align",
                          "Image"     : "/images/consultsrvice.png",
                          "Link"      : "/xyz"
                      },
                      {
                          "Title"         : "ESTABLISHING INDUSTRY",
                           "Image"         : "",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "Ensure process streamlining & standardization and efficiency improvements",
                          "Image"     : "/images/consultsrvice.png",
                          "Link"      : "/xyz"
                      },
                      {
                          "Title"         : "ASSESSMENT OF READINESS",
                           "Image"         : "",
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
// console.log("==>",this.props.block_id);
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                  console.log("response for downstream",response);
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
    console.log('kghjgjgj',this.state.blocks.bgImage);
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktConsult NOPadding">
        <div class="Bubble">
         <div class="Main_Cards__Bubble1 bub11">
       </div>
         <div class="Main_Cards__Bubble1 bub21">
        </div>
       </div>
       <div>
          <h1 className="downimgtext text-center">{this.state.blocks.blockTitle}</h1>
          <p className="downimg_p_txt"dangerouslySetInnerHTML={ { __html:this.state.blocks.blockDescription } }></p>
        </div>  
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">     
         { 
            this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
            this.state.blocks.repeatedBlocks.map((result, index)=>{
            return(
              <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 " id={"consultdown_data"+index}>
                <div className="col-lg-12 col-md-12">
                 <h3 id={"downimg_text"+index}>{result.Title}</h3>
                 <p id="downimg_p_text"dangerouslySetInnerHTML={ { __html: result.Description } }></p>
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

