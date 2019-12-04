import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Commonverviewblock.css';
import axios from 'axios';

export default class Commonverviewblock extends Component {
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

OverviewData(){
        return [
            {
                overviewTitle : "Refinery Planning",
                overviewSubTitle : "Overview",
                overviewimg   : "/images/2.png",
                overviewtext  : "Crude Oil Refining is by its very nature a diversified and complex business model. Newer and specialized non-linear constraints such as volatility in oil prices, changing demand patterns for petroleum products,stringent environmental regulations related to clean fuels and start-up of new production technologies are continuously being embedded into the system resulting in more complex refining schemes.In this context, intellectual production planning plays a vital role in maximizing refinery profitability and ensuring logistic reliability, more so in the current day Refinery Downstream Model which oscillates its nature between a supply-driven and a Demand-driven model.Linear programming software such as Aspen PIMS, Haverly GRTMPS, Spiral Plan, Honeywell RPMS, etc. become handy planning tools to select crude, optimize product mix and to determine optimal operating conditions over the desired time-frame."
            } 
                        
        ]
    }


    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12">
                    <div className="line_overview col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div>
                  </div>
                   {
                    this.OverviewData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <h2 className="bluetext text-center paraaa-top">{this.state.blocks.blockTitle}</h2>
                                            <br></br>
                                            <p className="line_subheadd ">{this.state.blocks.blockSubTitle}</p>
                                            <p className="line_paraaaa" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }>
                                            <br></br>
                                            </p> 
                                         </div>
                                        </div>
                                       </div>
                                      </div>
                                    </div>         
                                  </div>
                                     );
                                  })
                               }
                          </div>
                        </div>


        );
    }
}