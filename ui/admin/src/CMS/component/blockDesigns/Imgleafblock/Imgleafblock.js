import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Imgleafblock.css';

export default class Imgleafblock extends Component {
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
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
              {
                this.props.ImgleafblockData.map((data, index)=>{
                  return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-12">
                            <p className="plan_line_subheadd">{this.state.blocks.blockTitle}</p>
                            <p className="plan_line_subsubheadd">{this.state.blocks.blockSubTitle}</p>
                            <p className="plan_line_paraaaa"dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }>
                            </p>
                            </div>
                            <div className="plans_imgg col-lg-8 col-lg-offset-2">
                                <img className="mt_plans" src={data.plansimg} alt=""/>
                            </div>
                            <div className="col-lg-12">
                            <p className="plan_line_paraaaa"dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }>
                                    </p> 
                            </div>
                        </div>
                      );
                   })
                 }
            </div>
        );
    }
}