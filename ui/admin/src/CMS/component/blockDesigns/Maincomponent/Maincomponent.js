
import React,{Component} from 'react';
// import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $ from 'jquery';
import axios from 'axios';

import '../allCss/AboutUs.css';

import './Maincomponent.css';
import'../InformationComponent/InformationComponent.css';
import '../Careerimpactcomponent/Careerimpact.css'
// import informationComponent from '../informationComponent/informationComponent.js';




class Maincomponent extends Component{
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


  render(){
    return(
      <div className="ht_top col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="row">
           <div className="ht_row1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                     <div className="row">
                       <img className="iogimgblock1" src="images/career_3.png" />
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                     <div className="iogblock1text col-lg-10 col-md-12 col-sm-12 col-xs-12 bckgblck_color_blue">
                      <span className="head_firstblock">{this.state.blocks.blockTitle}</span>
                    
                     <div className="firstblockk" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                         
                         </div>
                  </div>
             </div>
        </div>
       {/* <div className="ht_row2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row alignment_rw">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="iogblock2text col-lg-4  col-md-4 col-sm-12 col-xs-12 bckgblck_color_white">
              <span><b>Flat Organization</b></span>
              <p className="secondblockk">iOG Solutions promotes responsibility and ownership mindset. We are a flat organi-<br></br>zation in which employees are encouraged to communicate freely with teammates<br></br>
               and management.<br></br> 
              </p>
              </div>
              </div>
              
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="row">
                <img className="iogimgblock2" src="images/career_6.png" />
                </div>
              </div>
            </div>
        </div>
        <div className="ht_row3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <img className="iogimgblock3" src="images/career_5.png" />
              </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="iogblock3text col-lg-10 col-md-12 col-sm-12 col-xs-12 bckgblck_color_blue">
              <span><b className="center_block_text">Jack of all fields, Master of ONE</b></span>
              <p className="thirdblockk">We are team of people who do<br></br>
                 what they love, and we are doing<br></br>
                 it since our inception.iOG Solu- <br></br>
                 tions fosters cross-functional skill <br></br>
                 developement while strengthening<br></br>
                 the existing skillset of our em-<br></br>
                  ployees.<br></br>
              </p>                         
            </div>
          </div>
        </div>
        <div className="row">
          <div className="ht_row4 mb_100 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="iogblock4text col-lg-10 col-md-12 col-sm-12 col-xs-12 bckgblck_color_white">
                <span><b className="">Honesty and Integrity Principles</b></span>
                  <p className="fourthblockk">Our employees are guided by the<br></br>
                    principles that are laid down to <br></br>
                    help them conduct business <br></br>
                    honestly and with integrity.Our <br></br>
                    Code and Conduct & Ethics Policies<br></br>
                    are designed to addresses com-<br></br>
                    pany's core value system.Read<br></br>
                    them here.<br></br>
                  </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="row">
                <img className="iogimg_4" src="images/career_4.png" />
              </div>
            </div>
          </div>
        </div>*/}
      </div> 
    );
  }
}

export default Maincomponent;



