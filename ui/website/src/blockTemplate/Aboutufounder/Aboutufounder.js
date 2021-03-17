import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutufounder.css';

export default class Aboutufounder extends Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {

        "blockComponentName"  : "Aboutufounder",
        "blockType"           : "",
        "blockTitle"          : "",
        "blocksubTitle"       : "",
        "blockDescription"    : "",
        "fgImage"             : "/images/bgimage1.jpg",

        blockDescription : "",
        fgImage: "/images/bgimage1.jpg",
      },
      blockID:"",
      block_id:""

    }; 
    
  }

componentDidMount(){
/*console.log("==>",this.props.block_id);*/
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
    render(){
        return(
          
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container-fluid">
                <div  className="backgrd_curve1 col-lg-12 col-md-12 hidden-sm hidden-xs head_spacing">
                 <div className="col-lg-10 col-md-10 col-sm-10 col-lg-offset-1 col-xs-10 foundermainDiv">
                  <div className="col-lg-4  col-md-3 col-sm-12 col-xs-12 director_img ">
                      <a href="" target="_blank">
                          <img src={this.state.blocks.fgImage} alt="" className="img-responsive"/>
                        </a>
                    </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 DirectorText"style={{height:"auto"}}>
                        <div className="">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "style={{paddingLeft:"50px"}}>
                              <h2 className="para-top3 txt-size-director textcoloryellow"style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>
                              <h1 className="txt-size-founder "style={{color:"#333"}} dangerouslySetInnerHTML={ { __html: this.state.blocks.blocksubTitle}}></h1>
                                <p className="para_spacing para_Spacingforfounder text-justify pull-right foundertext" style={{letterSpacing:"1px"}} dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription}}></p>                                      
                          </div>
                        </div>
                      </div>
                     </div> 
                  </div> 
                   <div  className="backgrd_curve1_mob col-sm-12 colxs-12 hidden-lg hidden-md head_spacing">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 foundermainDiv"style={{height:"900px"}}>
                    <div className="col-sm-8 col-sm-offset-2 col-xs-12 director_img">
                        <a href="" target="_blank">
                          <img src={this.state.blocks.fgImage} alt="" className="img-responsive"/></a>
                      </div>
                        <div className="col-sm-12 col-xs-12 col-lg-offset-1"style={{height:"auto"}}>
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 director_img_para ">
                                <h2 className="para-top3 txt-size-director textcoloryellow"><b>{this.state.blocks.blockTitle}</b></h2>
                                <h1 className="txt-size-founder lightbluetext " dangerouslySetInnerHTML={ { __html: this.state.blocks.blocksubTitle}}></h1>
                                  <p className=" text-justify pull-right para_Spacingforfounder foundertext" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription}}></p>                                      
                            </div>
                          </div>
                        </div>
                       </div> 
                  </div>              
              </div>
           
        );
    }
}