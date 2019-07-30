import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Etrmtradingrisk.css';

export default class Etrmtradingrisk extends Component {

EtrmData(){
        return [
            {
                etrmtradingriskTitle    : "Energy Management",
                // energyimg      : "/images/2.png",
                etrmtradingrisktext     : "Improving energy efficiency in a refinery is very critical, as Oil refining is an energy-intensive activity. Factors such as more stringent oil product standards (e.g. ultra-low-sulfur diesel),increasing demand for lighter products, and heavier crude oil slates all demand increased processing, which in turn places upward pressure on the overall energy intensity for refining."
            } 
                        
        ]
    }


    render(){
        return(
            <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12">
                    <div className="line_etrmtradingrisk col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-6"></div>
                  </div>
                   {
                    this.EtrmData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <h2 className="bluetext text-center etrmtradingrisk_paraaa-top">{data.etrmtradingriskTitle}</h2>
                                            <br></br>
                                            <p className="etrmtradingrisk_line_paraaaa">{data.etrmtradingrisktext}
                                            <br></br>
                                            </p> 
                                         </div>
                                        </div>
                                       </div>
                                      </div>
                                    </div>         
                                  </div>
                                     );
                                  })
                               }

                               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                 <div className="etrmtradingrisk_list">Energy management in a refinery can be broadly classified into:</div>
                                 <div className="etrmtradingrisk_sublist">- Optimization of energy on the supply side (steam generation from boilers and electricity produced from captive power plants, etc.)</div>
                                 <div className="etrmtradingrisk_sublist">- Optimization of energy consumed across the process units.</div>
                                 <div className="etrmtradingrisk_sublist">- Optimization of emissions.</div>
                               </div>
                          </div>
                        </div>


        );
    }
}