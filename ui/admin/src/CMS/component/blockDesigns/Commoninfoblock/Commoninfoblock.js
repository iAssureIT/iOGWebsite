import React, { Component } from 'react';
// import { render } from 'react-dom';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commoninfoblock.css';


export default class Commoninfoblock extends Component {
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
                    <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt100">
                                <div className="col-lg-12">
                                      <div className="col-lg-2 col-lg-offset-5">
                                        <div className="line1 col-lg-1 col-lg-offset-2"></div>
                                      </div>                    
                                </div> 
                                <div className="col-lg-12">
                                  <h2 className="lightbluetext para-top">{data.servicesTitle}</h2>
                                    <div className="col-lg-12">
                                      <div className="col-lg-12">
                                          <div className="col-lg-12">
                                            <p className="line_para text-justify">{data.servicestext} </p>   
                                            <p className="line_para text-justify">{data.servicestext2} </p>   
                                            <p className="line_para text-justify">{data.servicestext3} </p>   
                                          </div>    
                                      </div>    
                                    </div>    
                                </div>
                            </div>
                        </div>
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