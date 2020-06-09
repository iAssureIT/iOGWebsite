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
        blockTitle : "Overview",
        blockDescription : "The Production accounting application performs reconciliation of the measured raw data and provides accurate data for daily production accounting and performance reporting. It provides reconciled data for daily, weekly and monthly reporting and provides key inputs for fiscal / revenue accounting. It also provides other tangible and nontangible benefits such as loss minimization, quality giveaway minimization, etc.",
        fgImage: "/images/block1.png",
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
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container-fluid innerBlocktepmlate1 NOPadding">
          {console.log(".blockDescription",this.state.blockDescription)}
        <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
           <div class="B2T1_line col-lg-1 col-lg-offset-2">
         </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3 className="B2T_overviewTitle text-center">{this.state.blocks.blockTitle}</h3>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 websiteclass ">
              <div className="col-lg-6 col-md col-sm-12 col-xs-12">
                <p className="B2T_p" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                  {/*<div>
                  <input type="button" className="col-lg-3 col-md-3 col-sm-8 col-xs-8 btn blogbtn1 lightbluebg buttonhover B2T_btn" value="Read More"/>
                   <i className=" col-lg-1 readmore fa fa-angle-double-right"></i>
                  </div>*/}
                </div>
                <div className="col-lg-6 col-md col-sm-12 col-xs-12">
                  <img src={this.state.blocks.fgImage}className=" col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 img-responsive B2T_overviewTxt"/>
                </div>
            </div>
          </div> 
        </div>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

