import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ChallengesTemp.css';


export default class ChallengesTemp extends Component {

 ChallengesData(){
        return [
            
            {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch1.png",
                overviewtext:"Accuracy in data imported as garbage-in garbage-out",
               
            }, 
            {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch2.png",
                overviewtext:"Accuracy in data imported as garbage-in garbage-out",
               
            },  
            {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch3.png",
                overviewtext:"Accuracy in data imported as garbage-in garbage-out",
               
            },  
            {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch4.png",
                overviewtext:"Accuracy in data imported as garbage-in garbage-out",
               
            },  
             {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch5.png",
                overviewtext:"Accuracy in data imported as garbage-in garbage-out",
               
            },
             {
                ChallengeTitle : "Challenges",
                bannerimg   : "/images/ch6.png",
                overviewtext:"Accuracy in data imported as garbage-in garbage-out",
               
            },          
               
        ]
    }


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate4 NOPadding">
        <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
           <div class="B4T_line col-lg-1 col-lg-offset-2">
         </div>
        </div>
        <h1 className="B2T_challengesTitle">Challenges</h1>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
         
        {
          this.ChallengesData().map((data,index)=>{
            return(
             
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 B3T_challengesDiv">
               <div className="col-lg-12 col-md-12">
                 <img src={data.bannerimg} className="B4T_img"/>
                </div>
                <div className="col-lg-12 col-md-12">
                 <p className="B4T_txt">{data.overviewtext}</p>
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

