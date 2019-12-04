import React from 'react';

import './AboutBanner.css';
import axios from 'axios';


export default class AboutBanner extends React.Component {
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

	render() {
		return (
			<div className="ABOUTbanerheight container-fluid">
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
				
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="pull-right mtop305">
							
							<span className="h2Title monFont">{this.state.blocks.blockTitle}
							</span><br/>
							<span className="h3Title monFont">{this.state.blocks.blockSubTitle}
							</span>
						</div>	
					</div>
					<div className=" col-lg-5 col-md-5 col-sm-6 col-xs-6 row">
						<img className="abbannerImg img-responsive" src="/images/37.png" alt="Bannerpng"/>
					</div>
				</div>
				
			</div>
		);
	}
}
