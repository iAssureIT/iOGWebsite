import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../allCss/AboutUs.css';

import './Overview.css';
import axios from 'axios';

export default class Overview extends Component {
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
            <div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
           
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="line_overview col-lg-3 col-md-3 col-sm-3 col-xs-3 col-lg-offset-5"></div>
                        </div>
                        <h2 className="bluetext text-center paraaa-top">{this.state.blocks.blockTitle}</h2>
                        <p className="line_subheadd ">{this.state.blocks.blockSubTitle}</p>
                       {/* <p >{data.overviewtext1}</p>*/}
                        <div className="line_paraaaa" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                        <ul className="challenges_list">
                          <li className="refinery_list">
                              <ul className="">
                                  <li className="refinery_sublist" ></li>
                              </ul>
                          </li>  
                        </ul>                                      
                        {/*<p className="line_paraaaa">{data.overviewtext3}</p>
                        <p className="line_paraaaa">{data.overviewtext4}</p>*/}
                       {/* <ul className="challenges_list">
                            {
                              data.commonulliUl2  && data.commonulliUl2.length > 0 ? 
                                data.commonulliUl2.map((ulDetail, index)=>{
                                    return(
                                        <li className="refinery_list" key={index}>{ulDetail.ulData}
                                            <ul className="">
                                                {
                                                    ulDetail.commonulliLi  && ulDetail.commonulliLi.length > 0 ? 
                                                    ulDetail.commonulliLi.map((liDetail, index)=>{
                                                        return(
                                                            <li className="refinery_sublist" key={index}>{liDetail.liData}</li>
                                                        );
                                                    })
                                                    :
                                                    null
                                                }
                                            </ul>
                                        </li>
                                    );
                                })
                                :
                                null
                             }
                        </ul> */}
                        {/*<p className="line_paraaaa">{data.overviewtext5}</p> */  }                                  

                    </div>
                     
              </div>
              );
          }
        }