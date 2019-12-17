import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './News_Events.css';


export default class News_Events extends Component {

 


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate4 NOPadding">  
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
         
        {
          this.props.News_Events.map((data,index)=>{
            return(
             
               <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 B3T_NewsDiv">
               <div className="col-lg-12 col-md-12">
                 <img src={data.bannerimg} className="news_img"/>
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

