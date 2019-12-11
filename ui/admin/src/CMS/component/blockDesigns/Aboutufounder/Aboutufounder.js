import React, { Component } from 'react';
import { render } from 'react-dom';
import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../allCss/AboutUs.css';

export default class Aboutufounder extends Component {
constructor(props) {
    super(props);
    this.state = {
      blocks:"",
      blockID:"",
      block_id:""
    }; 
  }
componentDidMount(){
// console.log("==>",this.props.block_id);
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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
              {this.props.founderData && this.props.founderData.length>0?
                this.props.founderData.map((data, index)=>{
                  return (
                            <div key={index} className="backgrd_curve1 col-lg-12 col-md-12 col-sm-12 col-xs-12 head_spacing">
                                  <div className="col-lg-5 col-md-4 col-sm-4 col-xs-4">
                                    <div className="col-lg-8 col-lg-offset-2 col-md-8 col-sm-8 col-xs-8">
                                          <a href={data.founderlink} target="_blank"><img src={data.founderimg} alt="" className="director_img"/></a>
                                    </div>
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                          <h2 className="para-top3 txt-size-director textcoloryellow"><b>{data.foundername}</b></h2>
                                          <h1 className="txt-size-founder lightbluetext">{data.foundertag}</h1>
                                            <p className="para_spacing text-justify pull-right">{data.foundertext}</p> 
                                           <ul className="alg_lft">
                                           {
                                                data.founderli.map((liDetail, index)=>{
                                                    return(
                                                        <li className="line_ht" key={index}>{liDetail.liData}</li>
                                                    );
                                                })
                                            }
                                          </ul>                                     
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            );
                        })
                        :
                        null  
                     }
              </div>
            </div>
        );
    }
}