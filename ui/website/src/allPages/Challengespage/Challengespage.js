import React, {Component} from 'react';

// import $                  from 'jquery';
import './Challengespage.css';

import Commonchallengesblock  from '../../allBlocks/Commonchallengesblock/Commonchallengesblock.js';

export default class Challengespage extends Component {
 ChallengesData(){
        return [
            {
                challengesTitle : "Planning Challenges",
                challengestext  : "At this juncture, it is worthwhile to mention that the challenges involved in devising a robust plan are many.Following are a partial list of these challenges:"
            }, 
                  
        ]
    }

    ChallengesData1(){
        return [
            {
                
                challengestext2  : "Usage of advanced techniques in LP tools such as advanced optimization, adherent recursion; non-linear optimization and mixed integer programming resolve the above issues to a great extent."
            }, 
                        
        ]
    }



  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="">
          <Commonchallengesblock data3={this.ChallengesData()} />
          <Commonchallengesblock data4={this.ChallengesData1()} />
        </div>
      </div>
    );  
  }
}

