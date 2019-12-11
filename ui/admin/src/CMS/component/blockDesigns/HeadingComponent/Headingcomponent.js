import React,{Component} from 'react';
/*import { render } from 'react-dom';
import {Link} from 'react-router';
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $ from 'jquery';

import './Headingcomponent.css';
import '../InformationComponent/InformationComponent.css';
import '../Careerimpactcomponent/Careerimpact.css';
import '../Maincomponent/Maincomponent.css';

// import informationComponent from '../informationComponent/informationComponent.js';
import axios from 'axios';

class Headingcomponent extends Component{
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
    <div>
         <div className="line_headd col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                  {/* <hr></hr>*/}
                  <div className="career_linee_1  ">
                  </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 NOpadding">
                    <div className="row">
                        <div className="col-lg-12">
                          <p className="text-justify ">
                           <div className="col-lg-offset-1 colorblue_txt career_line_subhead">
                           <b> {this.state.blocks.blockTitle} </b>
                           <br></br>
                          
                            {this.state.blocks.blockSubTitle}
                            <br></br>
                           </div>
                           <br></br>
                           <p className="col-lg-offset-1 career_line_paraone" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }>
                           </p>
                           </p>
                        </div>
                    </div>
                     {/*<div>
                    <p className="col-lg-offset-6 rcorners1">Browse Jobs <b> >></b></p>
                    </div>*/}
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                      <div className="img1">
                          <img src="/images/career_1.png" alt="" className="career_intro_img" />
                      </div>
                    </div>
          </div> 
  </div> 
    );
  }
}

export default Headingcomponent;



