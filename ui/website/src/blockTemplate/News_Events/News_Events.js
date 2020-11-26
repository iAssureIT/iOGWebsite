import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

// import $                  from 'jquery';
import './News_Events.css';


export default class News_Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks:{
        "blockTitle"      : "",
        "blockSubTitle"   : "",
        "blockDescription"  : "",
        "blockComponentName"  : "News_Events",
        "blockType"       : "simple",
        "repeatedBlocks"    : [
                      {
                        "Title"     : "Geology &amp; Geophysics",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface.",
                          "Image"     : "/images/Icon_1.png",
                          "Link"      : "/iogstudy"
                      },
                      {
                        "Title"     : "Geology",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface.",
                          "Image"     : "/images/Icon_2.png",
                          "Link"      : "/iogimplement"
                      },
                      {
                        "Title"     : "Geology &amp; Geophysics",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface.",
                          "Image"     : "/images/Icon_1.png",
                          "Link"      : "/iogtrain"
                      },
                      {
                        "Title"     : "Geology",
                          "SubTitle"    : "iOG understands the various paradigms",
                          "Description" : "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface.",
                          "Image"     : "/images/Icon_2.png",
                          "Link"      : "/iogstudy"
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
console.log("==>",this.props.block_id);
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                  console.log("eventsresponse--",response.data);
                /*var blocks = this.state.blocks;
                blocks.push(response.data);*/
                this.setState({
                  blocks:response.data
                  });
                this.setState({
                  blocksrepeat:response.data.repeatedBlocks.reverse()
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
    return (
      <div className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10 innerBlocktepmlate6 NOPadding">  
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 maindivNews">

        { 
          this.state.blocksrepeat && this.state.blocksrepeat.length>0 ?
          this.state.blocksrepeat.map((result, index)=>{
            return(
             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 maindivNews"> 
              <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2 yearbox">
               <b>{result.Title}</b>
              </div>
               <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 NOPadding NwesBoxShadow">
                <div className="">
                 <img className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Newsbannerimg "style={{padding:"0px"}} src={result.Image}/>          
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 {/*<h4 className=" newsheading ">{result.SubTitle}</h4>*/}
                 
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  ">
                 <p className="eventdesc text-justify" dangerouslySetInnerHTML={ { __html: result.Description } }></p>
                </div>
               </div>
             </div>
              );

          })
          : null
        }
        </div>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

