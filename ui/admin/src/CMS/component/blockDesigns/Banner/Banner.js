import React, {Component} from 'react';
// import $                  from 'jquery';
import './Banner.css';

export default class Banner extends Component {
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
// <div dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></div>
/*
import axios from 'axios';
{this.state.blocks.blockTitle}
{this.state.blocks.blockSubTitle}
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
  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner-wrapper NOpadding ">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner">
          <div className="row">
            <div className="bannerContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                <figure className="bannersun">
                  <img alt="" src="/images/bannersun.png"/>
                </figure>
                <figure className="tree1">
                  <img alt="" src="/images/tree1.png"/>
                </figure>
                <figure className="tree2">
                  <img alt="" src="/images/tree2.png"/>
                </figure>
                <figure className="tree3">
                  <img alt="" src="/images/tree3.png"/>
                </figure>
                <figure className="tree4">
                  <img alt="" src="/images/tree4.png"/>
                </figure>
                <figure className="cloud1">
                  <img alt="" src="/images/cloud1.png"/>
                </figure>
                <figure className="cloud2">
                  <img alt="" src="/images/cloud2.png"/>
                </figure> 
                <figure className="cloud3">
                  <img alt="" src="/images/cloud2.png"/>
                </figure>
                <figure className="cloud4">
                  <img alt="" src="/images/cloud1.png"/>
                </figure>
                <figure className="boat">
                  <img alt="" src="/images/boat.png"/>
                </figure>
                <figure className="up">
                  <img alt="" src="/images/37.png"/>
                </figure>
                <figure className="up1">
                  <img alt="" src="/images/up2.png"/>
                </figure>
                <figure className="oilsign">
                  <img alt="" src="/images/oilsign.png"/>
                </figure>
                <figure className="oilsign2">
                  <img alt="" src="/images/oilsign.png"/>
                </figure>
                <figure className="oilsign3">
                  <img alt="" src="/images/oilsign.png"/>
                </figure>
                <figure className="oilsign4">
                  <img alt="" src="/images/oilsign.png"/>
                </figure>
                <figure className="oilsign5">
                  <img alt="" src="/images/oilsign.png"/>
                </figure>
                <figure className="oilsign6">
                  <img alt="" src="/images/oilsign.png"/>
                </figure>
                <figure className="oilsign7">
                  <img alt="" src="/images/oilsign.png"/>
                </figure>
                <figure className="oilsign8">
                  <img alt="" src="/images/oilsign.png"/>
                </figure>
                <figure className="anim">
                  <img alt="" src="/images/anim.png"/>
                </figure>
                <figure className="tank">
                  <img alt="" src="/images/tank.png"/>
                </figure>
                <figure className="car">
                  <img alt="" src="/images/car.png"/>
                  <img alt="" className="wheel1" src="/images/wheel1.png"/>
                  <img alt="" className="wheel2" src="/images/wheel2.png"/>
                </figure>
                <figure className="contanim">
                  <img alt="" src="/images/container.png"/>
                </figure>
                <div className="truckanim1">
                  <figure className="truckanim">
                    <img alt="" src="/images/truck.png"/>
                    <img alt="" className="twheel1" src="/images/wheel1.png"/>
                    <img alt="" className="twheel2" src="/images/wheel2.png"/>
                    <img alt="" className="twheel3" src="/images/wheel2.png"/>
                  </figure>
                </div>
                <div className="truckanim2">
                  <figure className="truckanimtion">
                    <img alt="" src="/images/truck.png"/>
                    <img alt="" className="twheel4" src="/images/wheel1.png"/>
                    <img alt="" className="twheel5" src="/images/wheel2.png"/>
                    <img alt="" className="twheel6" src="/images/wheel2.png"/>
                  </figure>
                </div>
                <figure className="truckfront">
                  <img alt="" src="/images/truckfront.png"/>
                </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}