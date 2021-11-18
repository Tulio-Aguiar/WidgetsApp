import React,{useState} from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';


const options = [
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Dutch',
        value:'nl'
    },
    {
        label:'Portuguese',
        value:'pt-br'
    },
    {
        label:'Deutsch',
        value:'de'
    },
    {
        label:'Frances',
        value:'fr'
    }
]

const Translate = () => {
    const [language,setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return ( 
        <div>
            <div className="ui form">
               <div className="field"> 
                <label><h1>Enter Text</h1></label>
                    <input value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            </div>
            <Dropdown 
            label="Select a Language"
            selected={language}
            onSelectedChange={setLanguage}
            options={options} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>

     );
}
 
export default Translate;