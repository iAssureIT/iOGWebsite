import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutusvision.css';

export default class Aboutusvision extends Component {

constructor(props) {
    super(props);
    this.state = {
      blocks:{
        "blockTitle"      : "About US right",
        "fgImage"   : "/images/10.png",
        "blockDescription"  : "",
        "blockComponentName"  : "Aboutusvision",
        "blockType"       : "simple",
        "repeatedBlocks"    : [
                      {
                        "Title"     : "VISION",
                          "SubTitle"    : "",
                          "Description" : "To be a global market leader in Intelligent Support Systems for Oil and Gas Industry.",
                          "Image"     : "",
                          "Link"      : "/xyz"
                      },
                      {
                        "Title"     : "MISSION",
                          "SubTitle"    : "",
                          "Description" : "Nurture a talented team of professionals to provide best-in-class consulting and implementation servic- es improving the profitability of our valued clients across the globe.",
                          "Image"     : "",
                          "Link"      : "/abc"
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
    render(){
        return(
          
          <div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img1">
                      <img src={this.state.blocks.fgImage} alt="" className="plane" />
                  </div>
                      <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                         { 
                          this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                          this.state.blocks.repeatedBlocks.map((result, index)=>{
                          return(
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blck blck1height b1width">
                              <h2 className="line_subhead textcolorblue vision_align1">{result.Title}</h2>
                              <p className="text-justify vision_align"dangerouslySetInnerHTML={ { __html: result.Description } } ></p>
                           </div>
                              )
                           })
                          : null
                        }                                   
                    </div>
                  </div>
                  {/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-md hidden-lg">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img1">
                      <img src="/images/visionabout.png" alt="" className="plane" />
                 </div>
                      <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blck1 blck1height1 b1width">
                              <h2 className="line_subhead textcolorblue vision_align1">VISION</h2>
                              <p className="text-justify vision_align">
                              <b>To be a global market leader in Intelligent Support
                              Systems for Oil and Gas Industry.</b>
                               </p>
                               </div>
                               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blck1 blck2height1 b2width">
                               <h2 className="line_subhead textcolorblue mission_align">MISSION</h2>
                               <p className="text-justify">
                                  <b>Nurture a talented team of professionals to provide
                                  best-in-class consulting and implementation servic-
                                  es improving the profitability of our valued clients
                                  across the globe.</b>
                               </p>
                               </div>                                    
                          </div>
                      </div>  */}
                </div>
            </div>
           </div> 
        );
    }
}


