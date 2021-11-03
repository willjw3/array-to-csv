import React, {useState} from 'react';
import { AppProvider, TextField } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
//import '@shopify/polaris/build/esm/styles.css';
import './pageStyles.css';

export default function Test() {
    const [inputText, setInputText] = useState('');
    const [isOpen, setIsOpen] = useState(false)

    function showModal() {
        setIsOpen(opened => !opened);
    }

    function handleInputTextChange(e) {
        setInputText(e.target.value)
    }

    console.log(inputText)


    return (
        <AppProvider i18n={enTranslations} >
            <div className="container d-flex flex-column justify-content-around w-25" >
                <h1 className="text-info">This is Input Test</h1>
                <button type="button" className="btn btn-primary mb-3" onClick={showModal}>Show Input Form</button>
                {/* <TextField
                    label="Test Input Field 1"
                    onChange={handleInputTextChange}
                    value={inputText}
                /> */}
                {
                    isOpen && (
                        <div className={`myModal bg-white`} style={{height: "25vh"}}>
                            <label htmlFor="inputText">Input Text</label>
                            <input 
                                type="text" 
                                onChange={handleInputTextChange}
                                value={inputText}
                                autoFocus
                            />
                            <button type="button" className="btn btn-success" onClick={() => { setInputText('');}}>Clear Input Field</button>
                        </div>
                    )
                }
            </div>
        </AppProvider>
       
    )
}
