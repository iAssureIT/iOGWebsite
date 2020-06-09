import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ConsultingServices.css';


export default class ConsultingServices extends Component {
constructor(){
    super();
    this.state = {
        challengesDataArray : [],
    }
}
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

    getChallenges(){
        var challengesData = this.ChallengesData();
        if(challengesData.length > 0){
            var htmlCode = "";
            for(var i=0; i<challengesData.length; i++){
                htmlCode = htmlCode + 
               '<div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 BT3_dataDiv">' +
               '<div className="col-lg-12 col-md-12">' + 
                '<div className="BT4_imgBack col-lg-offset-5"></div>' + 
                 '<img src={data.bannerimg} className="BT3_img"/>' + 
                '</div>' + 
                '<div className="col-lg-12 col-md-12">' + 
                 '<h4 className="BT3_subhead text-center">{data.Consultservive}</h4>' + 
                 '<p className="BT4_txt">{data.overviewtext}</p>' + 
                '</div>' + 
               '</div>' ;
            }

            if(i==challengesData.length){
                return htmlCode;
            }
        }
    }

    getChallengesArray(num){
        var challengesData = this.ChallengesData();
        
        if(challengesData.length > 0){
            for(var i=0; i<challengesData.length; i++){
                var tempArray = [];
                for(var j=0; j<num; j++){
                    tempArray.push(challengesData[i]);
                    i++;
                }
                if(tempArray.length == num){
                    this.state.challengesDataArray.push(tempArray)
                }
            }
        }

        console.log("challengesDataArray = ", this.state.challengesDataArray);
        return this.state.challengesDataArray; 
    }

    getItems(dataGroup){
        return dataGroup.map((item,i)=>{
            return(
                <div key={"item-"+i} className="col-lg-4 col-md-4 col-sm-12 col-xs-12 container-fluid BT3_dataDiv">
                    <div className="col-lg-12 col-md-12">
                        <div className="BT4_imgBack col-lg-offset-5"></div>
                        <img src={item.bannerimg} className="BT3_img"/>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <h4 className="BT3_subhead text-center">{item.Consultservive}</h4>
                        <p className="BT4_txt">{item.overviewtext}</p>
                    </div>
                </div>                                
            )
        })
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
            this.state.challengesDataArray.length > 0
            ?
                this.state.challengesDataArray.map((dataGroup,index)=>{
                    return(
                        <div key={"row-"+index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 BT3_dataDiv">
                                <div className="col-lg-12 col-md-12">
                                    <div className="BT4_imgBack col-lg-offset-5"></div>
                                    <img src={this.state.challengesDataArray[0].bannerimg} className="BT3_img"/>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <h4 className="BT3_subhead text-center">{this.state.challengesDataArray[0].Consultservive}</h4>
                                    <p className="BT4_txt">{this.state.challengesDataArray[0].overviewtext}</p>
                                </div>
                            </div>                                

                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 BT3_dataDiv">
                                <div className="col-lg-12 col-md-12">
                                    <div className="BT4_imgBack col-lg-offset-5"></div>
                                    <img src={this.state.challengesDataArray[1].bannerimg} className="BT3_img"/>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <h4 className="BT3_subhead text-center">{this.state.challengesDataArray[1].Consultservive}</h4>
                                    <p className="BT4_txt">{this.state.challengesDataArray[1].overviewtext}</p>
                                </div>
                            </div>                                

                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 BT3_dataDiv">
                                <div className="col-lg-12 col-md-12">
                                    <div className="BT4_imgBack col-lg-offset-5"></div>
                                    <img src={this.state.challengesDataArray[1].bannerimg} className="BT3_img"/>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <h4 className="BT3_subhead text-center">{this.state.challengesDataArray[1].Consultservive}</h4>
                                    <p className="BT4_txt">{this.state.challengesDataArray[1].overviewtext}</p>
                                </div>
                            </div>                                
                        </div>
                    );
                })
            :
                ""
         }
        {/*
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
        */}
        </div>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

