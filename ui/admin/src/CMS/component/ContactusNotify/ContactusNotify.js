import React, { Component } from 'react';
import { render }           from 'react-dom';
// import TimePicker           from 'rc-time-picker';
import moment               from 'moment';
import jQuery               from 'jquery';
import $                    from 'jquery';
import axios                from 'axios';
import IAssureTable         from '../IAssureTable/IAssureTable.jsx';

const format = "h:mm a";
class Contactus extends Component{
   constructor(props) {
    super(props);
    this.state = {

      tabledata:[],
      "tableHeading": {
          dateTime         : "Date & Time",
          userName         : "Person Name",
          companyName      : "Company Name",
          country          : "Country",
          email            : "Email ID",
          contactNumber    : "Phone No",          // // actions          : 'Action',
          enquiry          : "Enquiry For",
          subject          : "Subject",
          message          : "Message",         
      },
      "tableObjects"  : 
      {
          deleteMethod   : 'delete',
          apiLink        : '',
          paginationApply: false,
          searchApply    : false,
          editUrl        : ''
      },
          "startRange"   : 0,
          "limitRange"   : 10,
          "fields"       : 
      {
            placeholder   : "Enter Brand ..",
            title         : "Brand",
            attributeName : "brand"
      }
    };
  }
  componentDidMount(){
    this.getData();
    
   
  }
   getData(){
    axios.get('/api/contactModal/get/list')

    .then((response)=>{
      console.log("contact Response",response.data);
      var tableData = [];
      for(var i=0; i<response.data.length; i++ ){
        var dateTime         = response.data[i].hasOwnProperty('createdAt')     ? moment(response.data[i].createdAt).format("ddd, MMM Do YYYY, h:mm:ss a")      : "-NA-";
        var userName         = response.data[i].hasOwnProperty('userName')      ? response.data[i].userName       : "-NA-";
        var companyName      = response.data[i].hasOwnProperty('companyName')   ? response.data[i].companyName    : "-NA-";
        var country          = response.data[i].hasOwnProperty('country')       ? response.data[i].country        : "-NA-";
        var email            = response.data[i].hasOwnProperty('email')         ? response.data[i].email          : "-NA-";
        var contactNumber    = response.data[i].hasOwnProperty('contactNumber') ? response.data[i].contactNumber  : "-NA-";
        var enquiry          = response.data[i].hasOwnProperty('enquiry')       ? response.data[i].enquiry        : "-NA-";
        var subject          = response.data[i].hasOwnProperty('subject')       ? response.data[i].subject        : "-NA-";
        var message          = response.data[i].hasOwnProperty('message')       ? response.data[i].message        : "-NA-";

        console.log("companyName => ", companyName);

        tableData.push({
          _id              : response.data[i]._id,
          dateTime         : dateTime,
          userName         : userName,
          companyName      : companyName,
          country          : country,
          email            : email,
          contactNumber    : contactNumber,
          enquiry          : enquiry,
          subject          : subject,
          message          : message,
        });
      }

      if(i >= response.data.length){
        this.setState({
          tableData : tableData
        },()=>{
          console.log("this.state.tableData = ",this.state.tableData);
        })        
      }

    })
    .catch(function(error){
      console.log("error = ",error);
    });
  }

    
 handleChange(event){
     const target = event.target;
     const name   = target.name;
     this.setState({
      [name]: event.target.value,
     });
  }

  render(){
    return(
            <div>
              <div className="col-lg-12 col-md-12 col-xs-12 col-xs-12 text-center">
               <h3><b>Contact Details</b></h3>
              </div> 
              <IAssureTable
                tableHeading={this.state.tableHeading}
                dataCount={this.state.dataCount}
                tableData={this.state.tableData}
                getData={this.getData.bind(this)}
                tableObjects={this.state.tableObjects} />
            </div>     
                 
    );
  }
 }

 export default Contactus;