import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

// import $                  from 'jquery';
import './TemplateOverview.css';


export default class TemplateOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: {
        blockTitle : "",
        blockDescription : "",
        fgImage: "",
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
                    if(response.data){
                      this.setState({
                          blocks:response.data
                      });
                      
                    }                  
                  }
                  )           
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
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container-fluid innerBlocktepmlate1 NOPadding ">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12   websiteclass tempaltepadding ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ContentHeadreMargin  contentheaderNewPage text-center">
                <hr/>
                 <h2 style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>
                </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"style={{paddingTop:"80px"}}>
                <p className="B2T_p" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                  {/*<div>
                  <input type="button" className="col-lg-3 col-md-3 col-sm-8 col-xs-8 btn blogbtn1 lightbluebg buttonhover B2T_btn" value="Read More"/>
                   <i className=" col-lg-1 readmore fa fa-angle-double-right"></i>
                  </div>*/}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  B2T_overviewTxt">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  {/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
*/}
                    <img src={this.state.blocks.fgImage}className=" img-responsive"/>
                </div>
               </div> 
              </div> 
            </div>
          </div>  
 /*       </div> 
     </div>      */
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    );  
  }
}

