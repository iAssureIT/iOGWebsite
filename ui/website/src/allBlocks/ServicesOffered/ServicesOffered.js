import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ServicesOffered.css';


export default class ServicesOffered extends Component {

 ChallengesData(){
        return [
            
            {
                
                bannerimg      : "/images/s1.png",
                serviceTitle   : "Service1",
                serviceText    : "Accuracy in data imported as garbage-in garbage-out",
               
            }, 
            {
               
                bannerimg      : "/images/s2.png",
                serviceTitle   : "Service2",
                serviceText    : "Accuracy in data imported as garbage-in garbage-out",
               
            },  
            {
               
                bannerimg   : "/images/s3.png",
                serviceTitle   : "Service3",
                serviceText    : "Accuracy in data imported as garbage-in garbage-out",

            },  
            {
               
                bannerimg   : "/images/s4.png",
                serviceTitle   : "Service4",
                serviceText    : "Accuracy in data imported as garbage-in garbage-out",

            },    
            {
               
                bannerimg   : "/images/s5.png",
                serviceTitle   : "Service5",
                serviceText    : "Accuracy in data imported as garbage-in garbage-out",

            },
            {
               
                bannerimg   : "/images/s6.png",
                serviceTitle   : "Service6",
                serviceText    : "Accuracy in data imported as garbage-in garbage-out",

            },            
               
        ]
    }


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlock5tepmlate NOPadding">
        <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
           <div class="B2T1_line col-lg-1 col-lg-offset-2">
         </div>
        </div>
        <h1 className="B2T_serviceTitle">Services Offered</h1>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
         
        {
          this.ChallengesData().map((data,index)=>{
            return(

              <div>
               <div className="col-lg-offset-1 col-lg-5 col-md-5 col-sm-12 col-xs-12 B4T_ServicesDiv">
               <div className="col-lg-4 col-md-4 NOPadding">
                 <img src={data.bannerimg} className="B5T_img"/>
                </div>
                <div className="col-lg-8 col-md-8 innerServiceDiv NOPadding">
                 <h5 className="B5T_txt">{data.serviceTitle}</h5>
                 <p  className="ServiceTxt">{data.serviceText}</p>
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

