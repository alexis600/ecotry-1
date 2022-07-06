import React from 'react';
//import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
//import { config } from '../Graph/Config';
//import { postPush  } from '../Graph/GraphService';
import Referencias from './Ref.png'
import './Frame.css'
import '../index.css';

function Frame (props:any) {
    return (
        <div className="App-body">
            
            <iframe src="https://prezi.com/p/embed/8ssi4mrhldsj/" id="iframe_container" title="try1" frameBorder="0" allow="autoplay; fullscreen" height="567" width="1008"></iframe>
        
            <div className='test'>
                <p></p>
                <img src={Referencias} className="referencia" alt="Italian Trully"/>
            </div>
            
        </div>
    );
}
export default Frame;

