
import React,{Component} from 'react';
// import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $ from 'jquery';
import axios from 'axios';


import './Maincomponent.css';
import'../InformationComponent/InformationComponent.css';
import '../Careerimpact/Careerimpact.css';
// import informationComponent from '../informationComponent/informationComponent.js';




class Maincomponent extends Component{
   constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockTitle"          : "Employee-centric Work Culture",
        "blockComponentName"  : "Maincomponent",
        "blockType"           : "simple",
        "blockDescription"    : "At iOG Solutions we are passionately committed to a value-driven approach to do business – the journey is as important as the  destination. We are committed to creating a world-class workplace for all employees. ",
        "fgImage"             : "/images/career_3.png",
        "repeatedBlocks"      : 
                          [
                            {
                              "Title"       : "Flat Organization",
                              "SubTitle"    : "",
                              "Description" : "iOG Solutions promotes responsibility and ownership mindset. We are a flat organization in which employees are encouraged to communicate freely with teammates and management.",
                              "Image"       : "images/career_6.png",
                              
                          },
                          {
                            "Title"         : "Jack of all fields, Master of ONE",
                              "SubTitle"    : "",
                              "Description" : "We are team of people who do what they love, and we are doing it since our inception.iOG Solutions fosters cross-functional skill  developement while strengthening the existing skillset of our employees.",
                              "Image"       : "images/career_5.png",
                             
                          },
                          {
                              "Title"       : "Honesty and Integrity Principles",
                              "SubTitle"    : "",
                              "Description" : "Our employees are guided by the principles that are laid down to  help them conduct business  honestly and with integrity.Our  Code and Conduct & Ethics Policies are designed to addresses company's core value system.Read them here.",
                              "Image"       : "images/career_4.png",
                              
                          }
        ],
      },
      blockID:"",
      block_id:""
    }; 

    
  }
componentDidMount(){
/*console.log("==>",this.props.block_id);*/
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                    if(response.data){
                      this.setState({
                          blocks:response.data
                      });
                    }                  
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
    /*console.log("this.state.blockTitle")*/
    return(
      <div className="ht_top col-lg-12 col-md-12 col-sm-12 hidden-xs">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <div className="ht_row1 col-lg-12 col-md-12 col-sm-12  hidden-xs">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 iogimgblock1 NOPadding">
                   <img className="img-responsive" src={this.state.blocks.fgImage} />
                </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 CareerBlockHighDef NOPadding">
                    <div className="iogblock1text col-lg-12 col-md-12 col-sm-12 col-xs-12 bckgblck_color_blue">
                        <span><b className="head_firstblock">{this.state.blocks.blockTitle}</b></span>
                        <p className="firstblockk" dangerouslySetInnerHTML={{ __html: this.state.blocks.blockDescription}}></p>
                    </div>
                  </div>
             </div>
        </div>
        <div className="ht_row2 col-lg-12 col-md-12 col-sm-12 hidden-xs">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 alignment_rw">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 NOPadding">
              <div className="iogblock2text col-lg-12  col-md-12 col-sm-12 col-xs-12 bckgblck_color_white">
              <span><b>{this.state.blocks.repeatedBlocks[0].Title}</b></span>
              <p className="secondblockk" dangerouslySetInnerHTML={{ __html: this.state.blocks.repeatedBlocks[0].Description}}></p>
              </div>
              </div>
              
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 iogimgblock2 NOPadding">
                <img className="img-responsive" src={this.state.blocks.repeatedBlocks[0].Image} />
              </div>
            </div>
        </div>
        <div className="ht_row3 col-lg-12 col-md-12 col-sm-12 hidden-xs">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 iogimgblock3 NOPadding NOPadding">
            <img className="img-responsive" src={this.state.blocks.repeatedBlocks[1].Image} />
          </div>
          <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 NOPadding">
            <div className="iogblock3text col-lg-12 col-md-12 col-sm-12 col-xs-12 bckgblck_color_blue">
              <span><b className="center_block_text">{this.state.blocks.repeatedBlocks[1].Title}</b></span>
              <p className="thirdblockk" dangerouslySetInnerHTML={{ __html: this.state.blocks.repeatedBlocks[1].Description}}></p>                         
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no_padding_left">
          <div className="ht_row4 mb_100 col-lg-12 col-md-12 col-sm-12 col-xs-12 no_padding_left">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-11 NOPadding">
              <div className="iogblock4text col-lg-12 col-md-12 col-sm-12 col-xs-12 bckgblck_color_white">
                <b className=""></b><b>{this.state.blocks.repeatedBlocks[2].Title}</b>
                <p className="fourthblockk" dangerouslySetInnerHTML={{ __html: this.state.blocks.repeatedBlocks[2].Description}}></p>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 iogimg_4 NOPadding">
                <img className="img-responsive" src={this.state.blocks.repeatedBlocks[2].Image} />
            </div>
          </div>
        </div>
      </div> 
    </div>  
    );
  }
}

export default Maincomponent;



