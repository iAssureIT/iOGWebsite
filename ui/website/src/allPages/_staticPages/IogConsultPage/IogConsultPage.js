/*import React, { Component, Suspense } from 'react';
// import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import swal from 'sweetalert';

import './IogConsultPage.css';

import ServiceImage            from '../../blockTemplate/ServiceImage/ServiceImage.js';
import TitleDesc                  from '../../../blockTemplate/TitleDesc/TitleDesc.js';
import ImgTitleDesc               from '../../../blockTemplate/ImgTitleDesc/ImgTitleDesc.js';
import TitleRepeatGrp             from '../../../blockTemplate/TitleRepeatGrp/TitleRepeatGrp.js';
import ServiceImage               from '../../../blockTemplate/ServiceImage/ServiceImage.js';
import IogconsultTxtRight      from '../../allBlocks/IogconsultTxtRight/IogconsultTxtRight.js';
import ConsultingServices      from '../../allBlocks/ConsultingServices/ConsultingServices.js';
import ConsultDownstream      from '../../../blockTemplate/ConsultDownstream/ConsultDownstream.js';

export default class IogConsultPage extends Component {
    constructor(props) {
    super(props);
      var id = this.props.match.params.url;
    this.state = {
      Newpagecomponent: "",
      urlId:id,
        blocks:"",
        Blocks:[],
        ListOfBlocks:{},
          addedBlocks:[],
        listOfBlocks:false,
        urlParam:"",
        block_id:"",
        pageData  :""
    }
  }



    componentDidMount(){
      // console.log("pageUrl = ",pageUrl);
      this.getAllBlockList();
      var pageUrl = window.location.pathname;;
      // console.log("pageUrl = ",pageUrl);
      let a = pageUrl ? pageUrl.split('/') : "";
          console.log("a==>",a[1]); 
          const urlParam =a[2];
          this.setState({
                      urlParam:urlParam
                    });

      axios
      .get('http://iogapi.iassureit.com/api/pages/get/page_block/'+urlParam)
          .then((response)=>{
            console.log("data in page=",response.data);
            if (response.data) {
              this.setState({
                pageData:response.data,
              });
         }
      })
        .catch(function(error){
          console.log(error);
            if(error.message === "Request failed with status code 401")
                {
                     swal("Your session is expired! Please login again.","", "error");
                }
        })
    }

  render() {
    var listBlock = this.state.pageData.pageBlocks;
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        {
                    listBlock && listBlock.length>0?
                      listBlock.map((result, index)=>{
                        
                        var componentTemp = result.block_id.blockComponentName ? result.block_id.blockComponentName : 'Block1Sample';
                        
                        const NewPageComponent = React.lazy(() => import('../../..blockTemplate/'+componentTemp+'/'+componentTemp+'.js'));
                        //const NewPageComponent = loadable(() => import('../blockTemplate/'+componentTemp));
                        var Block_id=result.block_id._id;
                        var block_id=result._id;

                        return(
                          <Suspense fallback={<div>Loading...</div>} key={index}>
                            <i className="fa fa-trash deletbtnIcon pull-right" id={block_id} onClick={this.deleteBlocks.bind(this)}></i>
                            <i className="fa fa-pencil editIcon pull-right" id={Block_id} onClick={this.editBlock.bind(this)} data-toggle="modal" data-target="#editBlockForm"></i>
                              <NewPageComponent block_id={Block_id}/>
                            </Suspense>
                          );
                      })
                    :
                    null
                  }
             </div>
          );  
        }
    }

*/