import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Commonulliblock.css';

export default class Commonulliblock extends Component {
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
// this.getBlockData();
}
render(){
  return(
          <div  className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div  className="row">
            {
              this.props.CommonulliData.map((data, index)=>{
                return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                              <p className="rp_line_subheadd plan_line_subsubheadd">{data.commonulliheading}</p>
                                              <p className="rp_line_paraaaa">{data.commonullitext}</p> 
                                              <p className="rp_line_subsubheadd">{data.commonullisubheading}</p>
                                      </div>
                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">         
                                          <ul>
                                              {
                                                  data.commonulliUl.map((ulDetail, index)=>{
                                                      return(
                                                          <li className="refinery_list" key={index}>{ulDetail.ulData}
                                                          {
                                                            ulDetail.commonulliLi  && ulDetail.commonulliLi.length > 0 ? 
                                                              <ul className="">
                                                                  {
                                                                      ulDetail.commonulliLi.map((liDetail, index)=>{
                                                                          return(
                                                                              <li className="refinery_sublist" key={index}>{liDetail.liData}
                                                                              {
                                                                                liDetail.commonulliLast  && liDetail.commonulliLast.length > 0 ? 
                                                                                  <ul className="">
                                                                                      {
                                                                                          liDetail.commonulliLast.map((lastDetail, index)=>{
                                                                                              return(
                                                                                                  <li className="refinery_sublist" key={index}>{lastDetail.lilastData}</li>
                                                                                              );
                                                                                          })
                                                                                          
                                                                                      }
                                                                                  </ul>
                                                                                    :
                                                                                  null 
                                                                                  }                                                                                 
                                                                              </li>
                                                                              );
                                                                         })
                                                                  }
                                                              </ul>
                                                                :
                                                                null
                                                              }
                                                          </li>
                                                      );
                                                  })
                                               }
                                          </ul>
                                      </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                              <p className="rp_line_paraaaa">{data.commonullitext2}</p> 
                                        </div>
                                  </div>
                            </div>
                          );
                      })
                  }
            </div>
          </div>
        );
    }
}