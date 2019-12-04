import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

import './Aboutustextcenter.css';
import '../allCss/AboutUs.css';

export default class Aboutustextcenter extends Component {
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
// this.getBlockData();
}
    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 posRel">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12"><div className="line2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div></div>
                    <h2 className="lightbluetext text-center para1-top">{this.state.blocks.blockTitle}
                    </h2>
                        
                    <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>

                </div>
                <div  className="col-lg-12 blk_ht">
                  <a href="/iogstudy">
                    <div className="col-lg-3  col-md-3 col-sm-12 col-xs-12">
                      <div className="aboutus_block aboutus_block1height">
                      <div className="icon1">
                      <img src="/images/Icon_1.png" alt="" className="icn_1" />
                      {/*<img src="/images/11.png" alt="" className="icn1_hover"  />*/}
                      </div>
                        <p className="iog_txt"><b>iOG</b>Study</p>
                      </div>
                    </div>
                  </a>
                  <a href="/iogimplement">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <div className="aboutus_block aboutus_block1height">
                      <div className="icon2">
                      <img src="/images/Icon_2.png" alt="" className="icn_2" />
                      {/*<img src="/images/12.png" alt="" className="icn2_hover"  />*/}
                      </div>
                      <p className="iog_txt "><b>iOG</b>Implement</p>
                      </div>
                    </div>
                  </a>
                  <a href="/iogconsult">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <div className="aboutus_block aboutus_block1height">
                      <div className="icon3">
                      <img src="/images/Icon_3.png" alt="" className="icn_3" />
                      {/*<img src="/images/13.png" alt="" className="icn3_hover"  />*/}
                      </div>
                      <p className="iog_txt "><b>iOG</b>Consult</p>
                      </div>
                    </div>
                  </a>
                  <a href="/iogtrain">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <div className="aboutus_block aboutus_block1height">
                      <div className="icon4">
                      <img src="/images/Icon_4.png" alt="" className="icn_3" />
                      {/*<img src="/images/14.png" alt="" className="icn4_hover"  />*/}
                      </div>
                      <p className="iog_txt "><b>iOG</b>Train</p>
                    </div>
                    </div>
                  </a>
                </div>
            </div>

        );
    }
}