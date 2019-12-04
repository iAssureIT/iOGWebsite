import React from 'react';
import './block1Sample.css';

import axios        from 'axios';
import swal from 'sweetalert';

export default class Block1Sample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blocks:"",
			blockID:"",
      block_id:""

		}; 
		
	}

/*  getBlockData(){

        {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
            
                })
                .catch(function(error){
                  console.log(error);
                    if(error.message === "Request failed with status code 401")
                      {
                          swal("Your session is expired! Please login again.","", "error");
                      }
              })
            }

  }
*/
componentDidMount(){
// console.log("==>",this.props.block_id);
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
                          swal("Your session is expired! Please login again.","", "error");
                      }
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
// this.getBlockData();
}
	render() {
    // console.log("==s>",this.state.blocks);
		return (
			<div>
				<div className="heightblock">
					<div>
						<p className="dp-blockTitle">{this.state.blocks.blockTitle}</p>
            <p className="text-center">{this.state.blocks.blockSubTitle}</p>

					</div>
					<div className="row inputrow">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="form-group col-lg-12 col-md-6 col-xs-12 col-sm-12 dp-pageswscription">
                 		<label className="label-category page-Description">
                    <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
                    
                    </label>
                	</div>
              </div>
           	<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 row">
            		<div className="form-group">
            			<img src="/images/Background.png" className="img-responsive blockimage1"/>
            		</div>
          	</div>
			    </div>
				</div>
			</div>
		);
	}
}
