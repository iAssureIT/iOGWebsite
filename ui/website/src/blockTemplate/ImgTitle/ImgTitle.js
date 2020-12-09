import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';


// import $                  from 'jquery';
import './ImgTitle.css';


export default class ImgTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: {
        blockTitle : "",
        bgImage    : "/images/images/acc.png",
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
 

 


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate NOPadding">
         {/* <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
           <div class="BT1_line col-lg-1 col-lg-offset-2">
         </div>
        </div>*/}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
        		  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
        		   <h2 className="BT1_bannerTitle text-center HistorianTitle"><b>{this.state.blocks.blockTitle}</b></h2>
                   <div className="dynamicpageimg BT1_img"></div>
        		  </div>
        </div>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

