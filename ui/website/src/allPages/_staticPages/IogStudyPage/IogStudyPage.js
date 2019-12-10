import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './IogStudyPage.css';

// import ServiceImage            from '../../blockTemplate/ServiceImage/ServiceImage.js';
import TitleDesc                  from '../../../blockTemplate/TitleDesc/TitleDesc.js';
import ImgTitleDesc               from '../../../blockTemplate/ImgTitleDesc/ImgTitleDesc.js';
import TitleRepeatGrp             from '../../../blockTemplate/TitleRepeatGrp/TitleRepeatGrp.js';
import ServiceImage               from '../../../blockTemplate/ServiceImage/ServiceImage.js';
// import IogconsultTxtRight      from '../../allBlocks/IogconsultTxtRight/IogconsultTxtRight.js';
// import ConsultingServices      from '../../allBlocks/ConsultingServices/ConsultingServices.js';
// import ConsultDownstream      from '../../../blockTemplate/ConsultDownstream/ConsultDownstream.js';

export default class IogStudyPage extends Component {

  render() {

    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        
          	<ServiceImage block_id="5def5e35709f91c8f84be1d9" />

            <TitleDesc block_id="5dedf190709f91c8f84be1b9" />

            <ImgTitleDesc block_id="5def73de709f91c8f84be1df"/>

           <TitleRepeatGrp block_id="5dee1176709f91c8f84be1c9"/>

          {/* <ConsultDownstream block_id="5dee0894709f91c8f84be1bf" />
*/}
        </div>
    );  
  }
}

