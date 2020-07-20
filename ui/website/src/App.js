import React from 'react';
import axios from 'axios';

import Routes from './lib/Routes';
import './App.css';


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
console.log("process.env.REACT_APP_BASE_URL:",process.env.REACT_APP_BASE_URL);
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
return (
<div className="App">
   <Routes />
</div>
);
}
export default App;


/*import React from 'react';
import axios from 'axios';
import {useTranslation} from 'react-i18next'; 
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import Routes from './lib/Routes';
import './App.css';

counterpart.registerTranslations('en' ,{
	title:'Title'
});


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
console.log("process.env.REACT_APP_BASE_URL:",process.env.REACT_APP_BASE_URL);
axios.defaults.headers.post['Content-Type'] = 'application/json';


function App() {
 const { t , i18n }=useTranslation(); 

	function handleClick(lang){
		i18n.changeLanguage('lang');

	}
	return (
	<div className="App">
	 <div style={{width:"300px"},{backgroundColor:"grey"}}>
		 <button onClick={()=>handleClick('en')}>English</button>
		 <button onClick={()=>handleClick('ko')}>Korean</button>
		 <button onClick={()=>handleClick('chi')}>Chinese</button>
	 </div>
	 <p>{t('Thanks.1')}</p>
	 <p>{t('Why.1')}</p>
	</div>
	);
 }
export default App;
*/