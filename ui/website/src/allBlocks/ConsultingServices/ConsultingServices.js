import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ConsultingServices.css';


export default class ConsultingServices extends Component {

 ChallengesData(){
        return [
            
            {
                Consultservive : "Strong domain",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Strong domain knowledge of refining, petrochemicals & other process industries",
               
            }, 
            {
                Consultservive : "Technical Expertise",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"World-class technical expertise in all the leading advanced software solutions in the industries",
               
            },  
            {
               Consultservive : "Domain Experts",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"The unparalleled combination ofdomain-experts & subjectmatter experts, that are qualified to meet our clients’ needs and expectations."
            },  
            {
                Consultservive : "Implementation",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"End-to-end Implementation and Integration skills",
               
            },  
             {
                Consultservive : "Extensive",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Extensive experience  on  software applications",
               
            },
             {
                Consultservive : "Ability",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Ability to review problems independently and bring fresh perspectives to clients.",
               
            },     
            {
                Consultservive : "Consultative",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"An open mind and consultative approach to evolving best solutions that meet client requirements",
               
            },  
             {
                Consultservive : "Proprietary Analysis",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Proprietary analysis,structured consulting and decision-making approaches",
               
            },
             {
                Consultservive : "Value creation",
                bannerimg   : "/images/consultsrvice.png",
                overviewtext:"Focus on value creation and ensuring a good return on investments",
               
            },          
               
        ]
    }


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate3 NOPadding">
       <div class="Bubble">
        <div class="Main_Cards__Bubble bub1">
       </div>
       <div class="Main_Cards__Bubble bub2">
       </div>
       </div>
        <h1 className="text-center"><b>Our Consulting<br/>
                            Service differentiators</b></h1>
        <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
         
        {
          this.ChallengesData().map((data,index)=>{
            return(
             
               <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 BT3_dataDiv">
               <div className="col-lg-12 col-md-12">
                <div className="BT4_imgBack col-lg-offset-5"></div>
                 <img src={data.bannerimg} className="BT3_img"/>
                </div>
                <div className="col-lg-12 col-md-12">
                 <h4 className="BT3_subhead text-center">{data.Consultservive}</h4>
                 <p className="BT4_txt">{data.overviewtext}</p>
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

