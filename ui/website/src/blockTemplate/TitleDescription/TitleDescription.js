import React from 'react';
import axios from 'axios';
import $                  from 'jquery';
import './TitleDescription.css';

export default class TitleDescription extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"    : "TitleDescription",
        "blockType"             : "simple",
        "blockTitle"            : "",
        "blockDescription"      : "This is a Description. Some text goes here. You can replace the text as per your choice.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
       
      },
      blockID:"",
      block_id:""
    }; 

    
  }
componentDidMount(){
  var pageUrl = window.location.pathname;
       if(pageUrl =="/asset-strategy-management"){
         $('.title_Description').addClass('title_In_safari');
       }

                                
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
                       
                      }
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
}
    render()
    {
        return(
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 title_description_div posRel"
                 id="Type1Component" 
                 data-field1="blockTitle" 
                 data-field2="blockDescription" 
                 data-field3="fgImage">
                 
                {/*<div className="col-lg-2">
                  <div className="col-lg-11 col-lg-offset-1">
                    <div className="line1 col-lg-1 pull-right "></div>
                  </div>                    
                </div> */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"style={{marginBottom:"50px"}}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_left_TDesc">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <h2 style={{marginBottom:"30px"}} className="title_Description para-top">{this.state.blocks.blockTitle} </h2>
                              <div> 
                                <p className="energypagedata text-justify" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
                              </div>   
                            </div>
                        </div>
                       
                    </div>
                          
            </div>   
        );
    }
}