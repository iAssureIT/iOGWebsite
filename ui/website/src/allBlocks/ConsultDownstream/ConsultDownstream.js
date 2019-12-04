import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ConsultDownstream.css';


export default class ConsultingServices extends Component {


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktConsult NOPadding">
        <div class="Bubble">
         <div class="Main_Cards__Bubble1 bub11">
       </div>
         <div class="Main_Cards__Bubble1 bub21">
        </div>
       </div>
       {
          this.props.consultdownstream.map((data,index)=>{
           return( 
             <div>
                <h1 className="downimgtext text-center">{data.cosultheading}</h1>
                <p className="downimg_p_txt">{data.cosultsubheading}</p>
              </div>  
           );
         })
        } 
        <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
         
       {
          this.props.consultdownstream.map((data,index)=>{
            return(
             
               <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 " id={"consultdown_data"+index}>
                 <div className="col-lg-12 col-md-12">
                 <h3 id={"downimg_text"+index}>{data.ConsultDown}</h3>
                 <p id="downimg_p_text">{data.imageText}</p>
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

