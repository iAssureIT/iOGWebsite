import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

// import $                  from 'jquery';
import './TitleDesc.css';


export default class TitleDesc extends Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        blockTitle : "*** Overview ***",
        blockDescription : "iOG provides expert consulting services to improve a client’s business process & raising them up to the best practices in the industry iOGConsult is our service arm through which we provide extensive or specific consultation by our domain experts. Our consultants help clients in assessing their current business processes, identifying gaps and opportunities for improvement. Utilizing our strong knowledge and experience in the various aspects of the global Oil and Gas value chain, we help our clients in filling up their operational gaps and eventually unlocking hidden value delivery opportunities.",
        fgImage: "/images/bgimage1.jpg",
      },
      blockID:"",
      block_id:""
    }; 

    
  }
  
componentDidMount(){
    console.log("this.props.block_id = ",this.props.block_id);
    var url = '/api/blocks/get/'+this.props.block_id;
    console.log("url",url);
    

    axios.get(url)
        .then((response)=>{
            if(response.data){
              console.log("response.data = ", response.data);
              this.setState({
                  blocks:response.data
              });
            }                  
          })           
        .catch((error)=>{
            console.log(error);
              if(error.message === "Request failed with status code 401"){
                  
            }
    })

    this.setState({
        block_id:this.props.block_id
    });
}
 

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate1 NOPadding">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <h3 className="col-lg-offset-1 Service_overview">{this.state.blocks.blockTitle}</h3>
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div ></div>   

            <p className="serviceOverview_txt text-justify col-lg-offset-1" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
         </div>
        </div> 
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    );  
  }
}

