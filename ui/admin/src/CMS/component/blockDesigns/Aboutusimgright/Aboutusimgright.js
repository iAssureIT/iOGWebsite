import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

import './Aboutusimgright.css';
import '../allCss/AboutUs.css';


export default class Aboutusimgright extends Component {
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
}
    render(){
        return(
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 posRel">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mtop50">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="btm_txt">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-2">
                            </div>
                            <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>

                           {/* <p className="line_para3 text-justify">
                            Our key strength is our Team. iOG operates through a team
                            of young and innovative consultants which has strong
                            domain knowledge in all aspects of the O&G value chain
                            and expertise in all leading software solutions. Needless to
                            add, the impact of iOG interventions and its support is directly reflected in the phenomenal growth and progress of
                            the company engaging its services.
                            </p>*/}
                        </div>
                      </div>
                  </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <img src="/images/imgrightabout.png" alt="" className="truck" width="400"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}