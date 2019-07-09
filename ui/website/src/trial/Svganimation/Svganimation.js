import React, { Component } from 'react';
// import { render } from 'react-dom';

// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import ReactSVG from 'react-svg'


import './Svganimation.css';
export default class Svganimation extends Component {

  componentDidMount(){

  }

   

  render(){

       return(
        <div>
            {/*<ReactSVG
              src="/images/svg.svg"
              afterInjection={(error, svg) => {
                if (error) {
                  console.error(error)
                  return
                }
                console.log(svg)
              }}
              beforeInjection={svg => {
                svg.classList.add('svg-class-name')
                svg.setAttribute('style', 'width: 800px')
              }}
              evalScripts="always"
              fallback={() => <span>Error!</span>}
              loading={() => <span>Loading</span>}
              renumerateIRIElements={false}
              wrapper="span"
              className="wrapper-class-name"
              onClick={() => {
                console.log('wrapper onClick')
              }}
            />        */}

              <ReactSVG className="wrapper" src="/images/ioglogosvg.svg" />
        </div>



        );
  } 

}