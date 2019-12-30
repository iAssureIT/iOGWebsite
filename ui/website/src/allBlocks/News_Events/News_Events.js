import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './News_Events.css';


export default class News_Events extends Component {

 


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate4 NOPadding">  
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 maindivNews">
         
        {
          this.props.News_Events.map((data,index)=>{
            return(
             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
               
              <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2 yearbox">
              {data.Newsyear}
              </div>
               <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="">
                 <img className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Newsbannerimg" src={data.bannerimg}/>          
                </div>
                <div className="col-lg-12 col-md-12">
                 <h4 className=" newsheading ">{data.NewsHeading}</h4>
                 
                </div>
                <div className="col-lg-12 col-md-12">
                 <p className="text-justify">{data.overviewtext}</p>
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

