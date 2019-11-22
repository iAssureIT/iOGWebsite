import React, {Component} from 'react';
import $                  from 'jquery';

import swal                 from 'sweetalert';
import axios                    from "axios";

import './Ourjournyblock.css';
import Journycaro                     from '../Journycaro/Journycaro.js';

export default class Eventblock1 extends Component {

  constructor(){
        super();
       this.state={
        Name            : "",
        desc            : "",
        frmDate         : "",
        toDate          : "",
        frmTime         : "",
        toTime          : "",
        venue           : "",
        img             : "",

        transactionType:"false",
        shown:true,


   }
 }

 toglehidden()
    {
     this.setState({
         shown: !this.state.shown
        });
    }
   

 handleChange(event){
    event.preventDefault();
    this.setState({
             
      "Name"            : this.refs.Name.value,          
      "desc"            : this.refs.desc.value,  
      "frmDate"         : this.refs.frmDate.value,  
      "toDate"          : this.refs.toDate.value,  
      "frmTime"         : this.refs.frmTime.value,  
      "toTime"          : this.refs.toTime.value,  
      "venue"           : this.refs.venue.value,  
      "img"             : this.refs.img.value,  
   });
  }

  submitevent(event){
    event.preventDefault();   
    var submitcategoryValuePost = {
            'Name'             : this.state.Name,
            'desc'             : this.state.desc,
            'frmDate'          : this.state.frmDate,
            'toDate'           : this.state.toDate,
            'frmTime'          : this.state.frmTime,
            'toTime'           : this.state.toTime,
            'venue'            : this.state.venue,
            'img'              : this.state.img,
       } 


     
       axios
       .post('http://jsonplaceholder.typicode.com/posts',{submitcategoryValuePost})
       .then (function (response){
      console.log(response);
      swal("Good job!", "Details Submited!", "success")

    })
      .catch(function(error){
      console.log(error);
        swal("", "Details submition failed!", "Danger")
    })
     .finally(function () {
      // always executed
    });
   
  
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


  render() {  

    var shown = {
      display: this.state.shown ? "block" : "none"
    };
   
    var hidden = {
      display: this.state.shown ? "none" : "block"
    }
    return (
      <div>
       <div className="col-lg-12 col-md-12 eventtogglediv">
         <div className="col-lg-4 col-lg-offset-5 toggle_fix">
           <div className="can-toggle demo-rebrand-2 ">
            <input id="e" type="checkbox"/>
            <label className="formLable" htmlFor="e">

              <div className="can-toggle__switch" data-checked="News" data-unchecked="Events" onClick={this.toglehidden.bind(this)}></div>
              <div className="can-toggle__label-text"></div>
            </label>
          </div>
        </div>
           <form className="skillForm" id="skills">
               <div style={shown}>
           <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="">
              </div>
            </div>
            <div class="commentBox newcommentbox newcommentbox1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="comment">Event Title<span className="redFont"></span></label>
              <input class="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12  newcommentboxArea" ref="Name" value={this.state.Name}   id="Name" ref="Name" />
            </div>
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="userName">Description<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control nameSpaceUpper col-lg-12 col-md-12 col-sm-12 col-xs-12 newcommentboxArea" id="desc" type="text" name="desc"  ref="desc" value={this.state.desc}   placeholder="" />
              </div>
            </div>
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
             <div className="col-lg-6 col-md-6">
              <label htmlFor="email">From Date<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control newcommentboxArea" id="email" type="date" name="frmDate" ref="frmDate"  value={this.state.frmDate} placeholder="" />
              </div>
             </div> 
              <div className="col-lg-6 col-md-6">
              <label htmlFor="contactNumber">To Date<span className="redFont"></span></label>
              <div className="">
                <input className="form-control" id="contactNumber newcommentboxArea" type="date" name="toDate" value={this.state.toDate} maxLength={10}   ref="toDate" placeholder="" />
              </div>
            </div>
          </div> 
          <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
             <div className="col-lg-6 col-md-6">
              <label htmlFor="email">From Time<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control newcommentboxArea" id="email" type="text" name="frmTime" ref="frmTime"  value={this.state.frmTime} placeholder="" />
              </div>
             </div> 
              <div className="col-lg-6 col-md-6">
              <label htmlFor="contactNumber">To Time<span className="redFont"></span></label>
              <div className="">
                <input className="form-control" id="contactNumber newcommentboxArea" type="text" name="toTime" value={this.state.toTime} maxLength={10}   ref="toTime" placeholder="" />
              </div>
            </div>
          </div> 
          <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="userName">Venue<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control nameSpaceUpper col-lg-12 col-md-12 col-sm-12 col-xs-12 newcommentboxArea" id="userName" type="text" name="venue"  ref="venue" value={this.state.venue}   placeholder="" />
              </div>
            </div>
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="userName">Image<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control nameSpaceUpper col-lg-12 col-md-12 col-sm-12 col-xs-12 newcommentboxArea" id="img" type="text" name="img"  ref="img" value={this.state.img}   placeholder="" />
              </div>
            </div>
            <div className="formcontent col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <button className="btn lightbluebg commentBoxbtn buttonhover newbtncommentbox" onClick={this.submitevent.bind(this)}>Submit</button>
            </div>
          </div>
                </div>  
            <div style={hidden}>
            <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="">
              </div>
            </div>
            <div class="commentBox newcommentbox newcommentbox1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="comment">News Headline<span className="redFont"></span></label>
              <input class="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12  newcommentboxArea"  id="comment" />
            </div>
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="userName">Detailed News<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control nameSpaceUpper col-lg-12 col-md-12 col-sm-12 col-xs-12 newcommentboxArea" id="userName" type="text" name="userName"  ref="userName" value={this.state.userName}   placeholder="" />
              </div>
            </div>
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
             <div className="col-lg-6 col-md-6">
              <label htmlFor="email">Date<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control newcommentboxArea" id="email" type="date" name="email" ref="email"  value={this.state.email} placeholder="" />
              </div>
             </div> 
              <div className="col-lg-6 col-md-6">
              <label htmlFor="contactNumber">Place<span className="redFont"></span></label>
              <div className="">
                <input className="form-control" id="contactNumber newcommentboxArea" type="date" name="contactNumber" value={this.state.contactNumber} maxLength={10}   ref="contactNumber" placeholder="" />
              </div>
            </div>
          </div> 
          <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="userName">Venue<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control nameSpaceUpper col-lg-12 col-md-12 col-sm-12 col-xs-12 newcommentboxArea" id="userName" type="text" name="userName"  ref="userName" value={this.state.userName}   placeholder="" />
              </div>
            </div>
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="userName">Image<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control nameSpaceUpper col-lg-12 col-md-12 col-sm-12 col-xs-12 newcommentboxArea" id="userName" type="text" name="userName"  ref="userName" value={this.state.userName}   placeholder="" />
              </div>
            </div>
            <div className="formcontent col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <button className="btn lightbluebg commentBoxbtn buttonhover newbtncommentbox">Submit</button>
            </div>
          </div>
                </div>
          </form>


       </div>  
      </div>
              
      
    );  
  }
}







