import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ConsultingServices.css';


export default class ConsultingServices extends Component {

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate3 NOPadding">
      
       {
          this.props.consultingservices.map((data,index)=>{
            return(
             <div>
                <h1 className="text-center"><b>{data.servicetitle}</b></h1>
             </div>
               )
            })
        }



     <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">  
        {
          this.props.consultingservices.map((data,index)=>{
            return(
             <div>
               <div className=" col-lg-3 col-md-3 col-sm-12 col-xs-12 BT3_dataDiv">
               <div className="col-lg-12 col-md-12">
                <div className="BT4_imgBack col-lg-offset-5"></div>
                 <img src={data.bannerimg} className="BT3_img"/>
                </div>
                <div className="col-lg-12 col-md-12">
                 <h4 className="BT3_subhead text-center">{data.Consultservive}</h4>
                 <p className="BT4_txt">{data.overviewtext}</p>
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

