import React, { Component } from 'react';
import './Ourjourny.css';

  
export default class Evenblock extends Component {


    constructor(){
        super();
       this.state={
        transactionType:"true"


   }
 }

  handleToggle(event){
     event.preventDefault();
      console.log("this.state.type",this.state.type)
    if (this.state.type===true){
      this.setState({
        type: false,
        transactionType:"Rent"
      },()=>{
      console.log("this.state.type",this.state.type)

      })
    }
    else{
      this.setState({
        type: true,
        transactionType:"Sell"

      },()=>{
      console.log("this.state.type",this.state.type)
      })
    }  
  }

    render(){
        return(
          
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  {this.state.type===true ?

                   <div className="switch" onClick={this.handleToggle.bind(this)} >
                      <input type="radio" className="switch-input" name="view" value={this.state.transactionType} id="week"  checked />
                      <label htmlFor="week" className="switch-label switch-label-off">SELL</label>
                      <input type="radio" className="switch-input" name="view" value={this.state.transactionType} id="month"  />
                      <label htmlFor="month" className="switch-label switch-label-on">RENT</label>
                      <span className="switch-selection"></span>
                    </div>
                    :
                 <div className="switch" onClick={this.handleToggle.bind(this)} >
                  <input type="radio" className="switch-input" name="view" value={this.state.transactionType} id="week"   />
                  <label htmlFor="week" className="switch-label switch-label-off">Event</label>
                  <input type="radio" className="switch-input" name="view" value={this.state.transactionType} id="month" checked  />
                  <label htmlFor="month" className="switch-label switch-label-on">News</label>
                  <span className="switch-selection" ></span>
                </div>
               }
            </div>
        );
    }
}