import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutustextright_btn.css';

export default class Aboutustextright_btn extends Component {

   constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Aboutustextright_btn",
        "blockType"       : "simple",
         "blocksubTitle"       : "",
        blockDescription : "Our key strength is our Team. iOG operates through a team of young and innovative consultants which has strong domain knowledge in all aspects of the O&G value chain and expertise in all leading software solutions. Needless to add, the impact of iOG interventions and its support is directly reflected in the phenomenal growth and progress of the company engaging its services.",
        fgImage: "/images/imgrightabout.png",
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
          <div className="container-fluid g_blockOuterWrapper">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 g_blockInnerWrapper">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blockTextWrapper">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="col-lg-2"> </div>
                          <p className="l_BT1_para text-justify" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                      </div>
                      <a class="col-lg-4" href={this.state.blocks.blockSubTitle}>
                    <button class="lightbluebg buttonhover servicekbtn btn">Read More 
                     <span class="servicekbtnarrow">&gt;&gt;</span>
                   </button>
                  </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <img src={this.state.blocks.fgImage} alt="" className="truck img-responsive" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        );
    }
}