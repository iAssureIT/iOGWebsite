import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Resourceprivacy.css';
import '../allCss/AboutUs.css';

export default class Resourceprivacy extends Component {
        constructor(props) {
    super(props);
    this.state = {
      blocks:"",
      blockID:"",
      block_id:""
    }; 
  }
componentDidMount(){
console.log("==>",this.props.block_id);
// 
/*
import axios from 'axios';


*/
          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
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
    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 {/*   <p className="line_para2  text-center">
                        The privacy and security of the personal information that we hold about you are very important to us and is an important part<br></br>
                        of our relationship with our clients. The following privacy policy applies to all clients of iOG Solutions Pvt. Ltd. It is designed <br></br>to assist you in understanding how we collect and deal with your personal information. By dealing with us, you consent to  <br></br>the collection, use, and disclosure of your personal information as described in this privacy policy.<br></br>
                    </p>     */}     
                </div>
                <div  className="col-lg-12">
                        <div className="col-lg-12  col-md-12 col-sm-12 col-xs-12  center_block">
                          <div className="resource_blck blckk-ht">
                            <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12"><div className="line2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div></div>
                            <h2 className="lightbluetext text-center para1-top">{this.state.blocks.blockTitle}</h2>
                            <br></br>
                           
                                <div className="resource_para" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                            <p className="resource_txt">{this.state.blocks.blockSubTitle}</p>                            
                            <div className="price-footer price-bodyhover col-lg-12 ">
                                <a className="upstreamfoot" href="/privacypolicy"><input type="button" className="btn pricebtn1 buttonhover upbuttonhover lightbluebg" value="Read More"/></a>                                    
                            </div>
                          </div>
                        </div>                        
                 </div>
            </div>

        );
    }
}