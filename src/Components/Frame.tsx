import React, {useState} from 'react';
//import Consultas from '../Zabbix/Consultas'
import 'bootstrap/dist/css/bootstrap.min.css';
//import DataTable from 'react-data-table-component';
//import LoginServices from '../Services/LoginServices';
//import RegServices from '../Services/RegServices';
//import { titulos } from '../Components/Columnas';
//import { config } from '../Graph/Config';
//import { postPush  } from '../Graph/GraphService';

function Frame (props:any) {
     
    const [registros, setRegistros] = useState<Object[]>([]);
    const [selectedRegistros, setSelectedRegistros] = useState([]);
    const [push, setPush] = useState<boolean>(true);

    const changeState = async () => {
        setRegistros([])
        //await loguear();
    }
/*
    const loguear = async () => {
        const loginSrv = new LoginServices();        
        const tokenChango = await loginSrv.login();
        await loadTable(tokenChango);        
        await loginSrv.logout(tokenChango);
        debugger;       
    }    
*/
    const loadTable = async (tokenChango: string) => {    
        setRegistros([]) 
        setSelectedRegistros([]);
        debugger      
        //var Consulta = new Consultas();
        //var regServices = new RegServices();
        //const problemas = Consulta.getProblemas(tokenChango);        
        //const alarms = await regServices.postProblems(problemas, tokenChango!)  
        debugger
        //setRegistros(alarms);
    }
/*
    function onRegistroChange(state:any) {
        setSelectedRegistros(state.selectedRows);            
        if (state.selectedRows.length >0) {
            setPush(false);
        }
        else {
            setPush(true);
        }
    }

    const onPush = async () => {
        if (props.user)
        {
            try {var accessToken = await props.getAccessToken(config.scopes);
            await postPush(accessToken, selectedRegistros); 
            alert("saved");
            }
            catch (err) {
            props.setError('ERROR', JSON.stringify(err));
            }
        }
    }
*/    
    return (
        <div className="App-body">
            
            <iframe src="https://prezi.com/p/embed/8ssi4mrhldsj/" id="iframe_container" title="try1" frameBorder="0" allow="autoplay; fullscreen" height="567" width="1008"></iframe>
        </div>
    );
}
export default Frame;

