import React, { Component } from 'react';
import { render }           from 'react-dom';
// import TimePicker           from 'rc-time-picker';
import moment               from 'moment';
import jQuery               from 'jquery';
import $                    from 'jquery';
import axios                from 'axios';
import IAssureTable         from '../IAssureTable/IAssureTable.jsx';

// import OneFieldForm         from '../OneFieldForm/OneFieldForm.js';
// import 'rc-time-picker/assets/index.css';
// import '../css/AttendanceManagement.css';

const format = "h:mm a";
class careersNotification extends Component{
   constructor(props) {
    super(props);
    this.state = {

        tabledata:[],
      "tableHeading": {
          position         : "Position Applied For",
          name1            : "Email",
          contactNumber    : "City",
          city             : "State",
          state1           : "Country",
          country          : "Education",
          education        : "College Name",
          college          : "Passing Year",
          year             : "Experience",
          experience       : "Current CTC",
          curr_ctc         : "Expected CTC",
          exp_ctc          : "Phone No.",
          name1            : "Name",
          // resume           : "",
          skills           : "Skills",
          noticePeriod     : "Notice period",
          // actions          : 'Action',
         
      },
      "tableObjects"  : 
      {
          deleteMethod   : 'delete',
          apiLink        : '/api/jobform/',
          paginationApply: false,
          searchApply    : false,
          editUrl        : '/brands/'
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
    axios.get('/api/jobform/get/list')

    .then((response)=>{
      var tableData = response.data;
      var tableData = tableData.map((a, i)=>{
        return {
          _id              : a._id,
          Name             : a.name1,
          email            : a.email,
          contactNumber    : a.contactNumber,
          city             : a.city,
          // state1           : a.State,
          // country          : a.Country,
          // education        : a.Education,
          // college          : a.College Name,
          // year             : a.Year of Passing,
          // experience       : a.Experience,
          // curr_ctc         : a.Current CTC,
          // exp_ctc          : a.Expected CTC,
          // position         : a.Position Applied For,
          // // resume           : "",
          // skills           : Skills,
          // noticePeriod     : Notice period,

         
        }
      })
      console.log("tabledata===>",response);
      this.setState({
        tableData : response.data
      })
    })
    .catch(function(error){
      console.log("error = ",error);
    });
  }

  // getData(){
  //   axios.get('/api/jobform/get/list')
  //      .then((response) => {
  //               console.log(" response.data for careers Post==>", response.data);
  //               var tableData = response.data.map((a, i)=>{
  //                 console.log("a44444",a);
  //                   return({
  //                       _id         : a._id,
  //                       Name        : a.name1,
  //                       // environment : a.environment,
  //                       // status      : a.status,
  //                       // secretkey   : a.secretkey,
  //                       // partnerid   : a.partnerid,
  //                   })
  //               })
             
  //               this.setState({ 
  //                 paymentgatewayInfo: response.data, 
  //                 tableData: tableData
  //               });
  //               console.log("tableData",this.state.tableData);
  //           })
  //           .catch((error) => {});
  // }

    
 handleChange(event){
     const target = event.target;
     const name   = target.name;
     this.setState({
      [name]: event.target.value,
     });
  }
  render(){
   console.log(this.getData());
    return(
                
                <div>
                 <div className="col-lg-12 col-md-12 col-xs-12 col-xs-12 text-center">
                   <h3><b>Job Applications</b></h3>
                  </div> 
                   <IAssureTable
                      tableHeading={this.state.tableHeading}
                      dataCount={this.state.dataCount}
                      tableData={this.state.tableData}
                      getData={this.getData.bind(this)}
                      tableObjects={this.state.tableObjects}
                      />
                  </div>

                 
    );
  }
 }

 export default careersNotification;