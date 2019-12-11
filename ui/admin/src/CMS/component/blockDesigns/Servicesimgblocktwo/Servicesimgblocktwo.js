import React, {Component} from 'react';
import $                  from 'jquery';
import './Servicesimgblocktwo.css';
import axios from 'axios';

export default class Servicesimgblocktwo extends Component {
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
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top lightbluetext">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 commonback">
              <div className="commonblocktext col-lg-10 col-lg-offset-1">
                <h1>{this.state.blocks.blockTitle}</h1>
                {/*
                <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>

                */}
              </div>
            </div>
          </div>
      </div>
    );  
  }
}