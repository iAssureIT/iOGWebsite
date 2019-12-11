import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

import './Aboutustextleft.css';
import '../allCss/AboutUs.css';

export default class Aboutustextleft extends Component {
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

  ServicesData(){
        return [
            {
                servicesTitle : "Company Profile",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/companyp.png",
                servicestext  : "iOG Solutions is an independent and reputed provider of consulting and implementation services on advanced and intelligent Software solutionsin the Oil & Gas industry. Our headquarters have been established since 2013 in Pune (India)."
                    
                
            } 
                        
        ]
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top posRel">
                <div className="col-lg-2">
                  <div className="col-lg-11">
                    <div className="line1 col-lg-1 pull-right "></div>
                  </div>                    
                </div> 
                 {
                    this.ServicesData().map((data, index)=>{
                      return (   
                                <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                              <h2 className="lightbluetext para-top">{this.state.blocks.blockTitle}</h2>
                                              <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                                                 
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                          <div className="col-lg-12">
                                            <div className="img1">
                                              <img src={data.servicesimg} alt="" className="intro_img" hight="250" width="400" />
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