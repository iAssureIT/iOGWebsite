import React,{Component} from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import $ from 'jquery';

import axios from 'axios';
import './InformationComponent.css';
import '../allCss/AboutUs.css';

class InformationComponent extends Component{
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
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                   <div className="col-lg-12">
                   <h2 className="career_para-top5">
                   The perks of<br></br>
                   working at Ixaris
                   </h2>
                   </div>
                </div>
              </div>
         </div>

             <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                 <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_1">RELOCATION ASSISTANCE</p>
                </div>
               
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_1">MODERN CENTRAL OFFICE</p>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_1">TRAINING & DEVELOPMENT</p>
               </div>
             </div>

             <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_4">HEALTH INSURANCE</p>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_5">GYM MEMBERSHIP</p>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_6">SOCIAL EVENTS</p>
               </div>
             </div>

              <div>
                <button className="button_3"><span>Learn more</span></button>
              </div>

              <div className="row row_spacingg">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h2 className="career_para-top6">
                   Get to Know <br></br>
                   the Ixarians
                   </h2>
                </div> 
             </div> 

             <div className="col-lg-12 blk_ht1">
              <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12">
                <div className="">
                <div className="career_people">
                <img src="/images/Icon_1.png" alt=""/>  
                </div>
                  <p className="career_txt1">{this.state.blocks.blockTitle}</p>
                  <div className="team-member-position">{this.state.blocks.blockSubTitle}</div>
                  <div className="quote_1">
                <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                </div>
                </div>
               </div>

                <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12">
                <div className="">
                <div className="career_people">
                <img src="/images/Icon_1.png" alt=""/>  
                </div>
                  <p className="career_txt1">{this.state.blocks.blockTitle}</p>
                  <div className="team-member-position">{this.state.blocks.blockSubTitle}</div>
                  <div className="quote_1">
                 <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                </div>
                </div>
               </div>

               <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12">
                <div className="">
                <div className="career_people">
                <img src="/images/Icon_1.png" alt=""/>  
                </div>
                  <p className="career_txt1">{this.state.blocks.blockTitle}</p>
                  <div className="team-member-position">{this.state.blocks.blockSubTitle}</div>
                  <div className="quote_1">
                  <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                </div>
                </div>
               </div>
               
             </div>
             <div>
                <button className="col-lg-12 button_4"><span>Browse jobs</span></button>
             </div>

    </div>    
    );
  }
}

export default InformationComponent;



