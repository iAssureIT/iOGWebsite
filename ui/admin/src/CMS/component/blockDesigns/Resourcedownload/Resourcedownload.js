import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Resourcedownload.css';
import '../allCss/AboutUs.css';

export default class Resourcedownload extends Component {
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
import axios from 'axios';


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
  VideoData(){
        return [
            {
                downstreamTitle : "iOG Corporate Brochure",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamlink  : "/images/iOG Corporate Brochure.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
                    
                
            }, 
            {
                downstreamTitle : "iOG Downstream Services_rev 1_Brochure",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamlink  : "/images/iOG Downstream Services_rev 1_brochure_190615.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
            }, 
            {
                downstreamTitle : "iOG Upstream Services_rev 5.4_Brochure",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamlink  : "/images/iOG Upstream Services_rev 5.4_brochure.docx",
                downstreamtext  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque, elit id pharetra cursus, turpis ex mollis magna, eu fringilla urna ante ut tellus."
            }
        ]
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12"><div className="line2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div></div>
                    <h2 className="lightbluetext text-center para1-top">{this.state.blocks.blockTitle}</h2>
                    <br></br>
                    
                      <div className="line_para2  text-center" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>          
                </div>
                 <div  className="col-lg-10 col-lg-offset-1">
                     {
                      this.VideoData().map((data, index)=>{
                      return (
                        <div key={index} className="col-lg-4  col-md-4 col-sm-4 col-xs-4 mt100">
                        <a className="videocard" href={data.downstreamlink} title="Click to Download" download>
                          <div className="go-corner" href={data.downstreamlink}>
                          <h3>{this.state.blocks.blockSubTitle}</h3>
                            <div className="go-arrow">
                              →
                            </div>
                          </div>
                        </a>
                        </div>
                         );
                      })
                    }   
                 </div>
            </div>
        );
    }
}