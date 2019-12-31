import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Aboutusimgright.css';

<<<<<<< Updated upstream:ui/admin/src/CMS/component/blockTemplate/Aboutustextright/Aboutustextright.js
export default class Aboutustextright extends React.Component  {
=======
export default class Aboutusimgright extends Component {
>>>>>>> Stashed changes:ui/admin/src/CMS/component/blockTemplate/Aboutusimgright/Aboutusimgright.js

   constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Aboutustextright",
        "blockType"           : "simple",
        "blockDescription"    : "Our key strength is our Team. iOG operates through a team of young and innovative consultants which has strong domain knowledge in all aspects of the O&G value chain and expertise in all leading software solutions. Needless to add, the impact of iOG interventions and its support is directly reflected in the phenomenal growth and progress of the company engaging its services.",
        "fgImage"             : "/images/imgrightabout.png",
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
<<<<<<< Updated upstream:ui/admin/src/CMS/component/blockTemplate/Aboutustextright/Aboutustextright.js

    render(){     
       return(
=======
    render(){
        return(
>>>>>>> Stashed changes:ui/admin/src/CMS/component/blockTemplate/Aboutusimgright/Aboutusimgright.js
          <div className="container-fluid g_blockOuterWrapper">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 g_blockInnerWrapper">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blockTextWrapper">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="col-lg-2"> </div>
                          <p className="l_BT1_para text-justify" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <img src={this.state.blocks.fgImage} alt="" className="truck" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        );
    }
}