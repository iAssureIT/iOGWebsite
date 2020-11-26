import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $                  from 'jquery';
import './Aboutusimgright.css';

export default class Aboutusimgright extends Component {

   constructor(props) {
    super(props);
    this.state = {
      blocks: {
       "blockComponentName"  : "Aboutustextright",
        "blockType"       : "simple",
        blockDescription : "Our key strength is our Team. iOG operates through a team of young and innovative consultants which has strong domain knowledge in all aspects of the O&G value chain and expertise in all leading software solutions. Needless to add, the impact of iOG interventions and its support is directly reflected in the phenomenal growth and progress of the company engaging its services.",
        fgImage: "/images/imgrightabout.png",
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
      if(pageUrl =="/masterpage/about-us"){
        // $('.innerBlocktConsult').css('height','1230px');
        $('.l_BT1_para').css('marginTop','61px');
        $('.truck').css('marginTop','7px');
      }

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
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 container-fluid g_blockOuterWrapper">
           
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 g_blockInnerWrapper">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 blockTextWrapper">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="col-lg-2"> </div>
                          <p className="righttextaboutus text-justify" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <img src={this.state.blocks.fgImage} alt="" className="truck" />
                    </div>
                  </div>
              </div>
          
          </div>
        );
    }
}