import React, {Component} from 'react';

// import $                  from 'jquery';
import './BlogContent.css';

/*import Commonoverviewblock  from '../../allBlocks/Commonoverviewblock/Commonoverviewblock.js';
*/
export default class BlogContent extends Component {

 
  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
          {
          // this.BlogData().map((data, index)=>{

            this.props.infodata.map((data, index)=>{
              return (
              <div className="col-lg-12" key={index}>
              {this.props.infoId==index? 
                <div className="">
                  <div className={" index"+index}>
                      <div className=" blogcontenttext">
                           <div className=" col-lg-12">
                            {/*  <div className="row blogsimg">
                                <img alt="" src={data.BlogImg}/>
                              </div>*/}
                                <div className="blogContentDiv">
                                  {
                                    data.BlogContent1 || data.BlogContent2 || data.BlogText1 || data.BlogContent11 ||  data.BlogContent12?
                                      <div>  
                                        <p className="text-justify">{data.BlogContent1}</p>
                                        <p className="text-justify">{data.BlogContent2}</p>
                                        <p className="text-justify"><b>{data.BlogText1}</b></p>
                                      </div>
                                  :null
                                  }
                                  {
                                    data.commonulliUl &&  data.commonulliUl.length > 0 ?
                                      data.commonulliUl.map((ulDetail, index)=>{

                                          return(
                                            <div className=""  key={index}>
                                                <p><b>{ulDetail.ulTitle}</b></p>
                                                <p>{ ulDetail.ulData}</p>                                              
                                            </div> 
                                          );
                                      })
                                    :
                                    null
                                  }
                                  {
                                    data.BlogSubImg1 && data.BlogSubImg2 ?
                                  <div>
                                    <div className="row">
                                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><img className="blogSubImg" src={data.BlogSubImg1} /></div>
                                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                        <p className="text-justify">{data.BlogContent3}</p>
                                        <p className="text-justify">{data.BlogText2}</p>
                                        <p className="text-justify"><b>{data.BlogContent4}</b></p>
                                        <p className="text-justify">{data.BlogContent5}</p>
                                      </div>
                                    </div> 
                                    <br/>
                                    <div className="row">
                                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                       <p className="text-justify"><b>{data.BlogContent6}</b></p>
                                       <p className="text-justify">{data.BlogText3}</p>
                                       <p className="text-justify">{data.BlogContent7}</p>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><img className="blogSubImg" src={data.BlogSubImg2} /></div>
                                    </div><br/>
                                  </div>
                                  : null
                                  }
                                  {
                                    data.BlogContent8 || data.BlogText4 || data.BlogContent9 || data.BlogContent10 || data.BlogContent11 ||  data.BlogContent12?
                                      <div>  
                                        <p className="text-justify"><b>{data.BlogContent8}</b></p>
                                        <p className="text-justify">{data.BlogText4}</p>
                                        <p className="text-justify">{data.BlogContent9}</p>
                                        <p className="text-justify">{data.BlogContent10}</p>
                                        <p className="text-justify">{data.BlogContent11}</p>
                                        <p className="text-justify"><b>{data.BlogContent12}</b></p>
                                      </div>
                                  :null
                                  }
                                  {
                                    data.commonulliUl1 &&  data.commonulliUl1.length > 0 ?
                                      data.commonulliUl1.map((ulDetail, index)=>{
                                          return(
                                            <ul className=""  key={index}>
                                              <li className="" key={index}>
                                                <div><b>{ulDetail.ulTitle}</b></div>
                                                <p>{ ulDetail.ulData}</p>
                                              </li>
                                            </ul> 
                                          );
                                      })
                                    :
                                    null
                                  }
                                  {
                                    data.BlogContent13 || data.BlogContent14  ?
                                      <div>  
                                        <p className="text-justify">{data.BlogContent13}<br/></p>
                                        <p className="text-justify">{data.BlogContent14}<br/></p>
                                      </div>
                                  :null
                                }
                           </div>
                          </div>
                      </div>                       
                   </div>
                </div>   
              :null
              }
              </div>
              );
          })
      }

      </div>
    );  
  }
}

