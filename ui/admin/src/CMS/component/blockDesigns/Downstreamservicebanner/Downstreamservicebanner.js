import React, { Component } from 'react';
// import { render } from 'react-dom';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Downstreamservicebanner.css';


export default class Downstreamservicebanner extends Component {
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
// <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
/*
import axios from 'axios';
{this.state.blocks.blockTitle}
{this.state.blocks.blockSubTitle}
*/
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
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
            <div className="">
                 { 
                    this.props.infodata.map((data, index)=>{
                      return ( 
                            <div key="index">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                  <div className="img1 row">
                                    <img src={data.servicesimg} alt="" className="services_img" />
                                  </div>
                                </div>
                              </div>
                                 );
                              })
                            
                            }
                     </div>   
        );
    }
}