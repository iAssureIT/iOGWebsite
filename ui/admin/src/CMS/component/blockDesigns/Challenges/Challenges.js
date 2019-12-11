import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Challenges.css';

export default class Challenges extends Component {
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
          <div  className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            {
              this.props.CommonleafblockData.map((data, index)=>{
                return (     
                         <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  {/*<p className="challenges_line_subheadd ">{data.challengesTitle2}</p>
                                  <p className="line_paraaaa">{data.challengestext3}</p> 
                                  <p className="challenges_line_subheadd ">{data.challengesTitle}</p>
                                  <p className="line_paraaaa">{data.challengestag}</p>
                                  <p className="line_paraaaa">{data.challengestext}</p> 
                                  <p className="line_paraaaa">{data.challengestext5}</p> */}
                                  <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                                  
                                  <ul className="line_paraaaa">
                                      {
                                          data.commonulliUl.map((ulDetail, index)=>{
                                              return(
                                                  <li className="line_paraaaa" key={index}>{ulDetail.ulData}
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
                                       }
                                  </ul>                                      
                                 {/* <p className="challenges_line_paraaaa2">{data.challengestext2}</p>
                                  <p className="challenges_line_paraaaa2">{data.challengestext4}</p>
                                  <p className="challenges_line_paraaaa2">{data.challengestext6}</p>
                                  <p className="challenges_line_paraaaa2">{data.challengestext7}</p>
                                  <p className="challenges_line_paraaaa2">{data.challengestext8}</p>*/}
                                  <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>

                            </div>
                        </div>
                      );
                  })
               }
          </div>
        );
    }
}