import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/CurrencyConverter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const CurrencyConverter = () => {
    const [valuutat, setValuutat] = useState({});
    const [muunnettavaSumma, setMuunnettavaSumma] = useState('');
    const [lahdeValuutta, setLahdeValuutta] = useState('EUR');
    const [kohdeValuutta, setKohdeValuutta] = useState('USD');
    const [muunnettuSumma, setMuunnettuSumma] = useState('');
    const [modal, setModal] = useState(false);

    const currencyDescriptions = {
        EUR: 'Euro (€)',
        USD: 'United States Dollar ($)',
        JPY: 'Japanese Yen (¥)',
        BGN: 'Bulgarian Lev (лв)',
        CZK: 'Czech Koruna (Kč)',
        DKK: 'Danish Krone (kr)',
        GBP: 'British Pound Sterling (£)',
        HUF: 'Hungarian Forint (Ft)',
        PLN: 'Polish Złoty (zł)',
        RON: 'Romanian Leu (lei)',
        SEK: 'Swedish Krona (kr)',
        CHF: 'Swiss Franc (CHF)',
        ISK: 'Icelandic Króna (kr)',
        NOK: 'Norwegian Krone (kr)',
        HRK: 'Croatian Kuna (kn)',
        RUB: 'Russian Ruble (₽)',
        TRY: 'Turkish Lira (₺)',
        AUD: 'Australian Dollar (A$)',
        BRL: 'Brazilian Real (R$)',
        CAD: 'Canadian Dollar (C$)',
        CNY: 'Chinese Yuan (¥)',
        HKD: 'Hong Kong Dollar (HK$)',
        IDR: 'Indonesian Rupiah (Rp)',
        ILS: 'Israeli New Shekel (₪)',
        INR: 'Indian Rupee (₹)',
        KRW: 'South Korean Won (₩)',
        MXN: 'Mexican Peso (Mex$)',
        MYR: 'Malaysian Ringgit (RM)',
        NZD: 'New Zealand Dollar (NZ$)',
        PHP: 'Philippine Peso (₱)',
        SGD: 'Singapore Dollar (S$)',
        THB: 'Thai Baht (฿)',
        ZAR: 'South African Rand (R)'
    };
    

    //Show modal with currency explanations
    const showCurrencyModal = (event) => {
        event.stopPropagation(); // This stops the click event from reaching the SVG element.

        if(document.getElementById('currencyModal') === null) {
            console.log("omena");
        return;
        }

        const modal = document.getElementById('currencyModal');

        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        } else
        modal.style.display = 'block';
    }
        // modal close if pressed outside
        window.onclick = function(event) {
            if(document.getElementById('currencyModal') === null) {
                console.log(event.target);
            return;    
            }

            if(document.querySelector('.CurrencyInfoModal') === null) {
                console.log(event.target);
            return;    
            }

            console.log(event.target);

            const modal = document.getElementById('currencyModal');

            const modal2 = document.querySelector('.CurrencyInfoModal');

            if (event.target !== modal && !event.target.classList.contains('CurrencyModalBtn')){
            modal.style.display = 'none';
            }

            if (event.target !== modal2 && !event.target.classList.contains('CurrencyInfoHeader')){
                modal2.style.display = 'none';
             }
        }

    const haeValuuttakurssit = async () => {
        try {
            const response = await axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_lcqdjbgILcCN0cPDzuqGnKfwqp6lrXZK979ndV8c');
            setValuutat(response.data.data);
        } catch (error) {
            console.error('Virhe valuuttakurssien haussa', error);
        }
    };

    useEffect(() => {
        haeValuuttakurssit();
    }, []);

    const muunnaValuutta = () => {
        if (!muunnettavaSumma || !valuutat || !valuutat[lahdeValuutta] || !valuutat[kohdeValuutta]) {
            return;
        }
        const tulos = (muunnettavaSumma / valuutat[lahdeValuutta]) * valuutat[kohdeValuutta];
        setMuunnettuSumma(tulos.toFixed(2));
    };

    const kasitteleEnter = (e) => {
        if (e.key === 'Enter') {
            muunnaValuutta();
        }
    };

    const showCurrencyInfoModal = (event) => {
        event.stopPropagation(); // This stops the click event from reaching the SVG element.
  
        if(document.querySelector('.CurrencyInfoModal') === null) {
            console.log("omena");
        return;
        }
  
        const modal = document.querySelector('.CurrencyInfoModal');
  
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        } else
        modal.style.display = 'block';
    }
  

    

    return (
        <div className="CurrencyInfoHeader-header">
        <h1 className="CurrencyInfoHeader" onClick={(event) => showCurrencyInfoModal(event)} >Currency converter <FontAwesomeIcon icon={faCircleInfo} /></h1>

            <div className="CurrencyContent">
                <div className="Converter">
                    <div className="ConvertInput">
                        <input
                            type="number"
                            className="ConvertInpu"
                            value={muunnettavaSumma}
                            onChange={(e) => setMuunnettavaSumma(e.target.value)}
                            onKeyDown={kasitteleEnter}
                            placeholder="Amount..."
                        />
                    </div>
                    <div className="Convert-Input-Group">
                        <select className="upperSelect" value={lahdeValuutta} onChange={(e) => setLahdeValuutta(e.target.value)}>
                            {Object.keys(valuutat).map(valuutta => (
                                <option key={valuutta} value={valuutta}>{valuutta}</option> 
                            ))}
                        </select> 
                        <a className="CurrencyModalBtn" onClick={(event) => showCurrencyModal(event)}> <FontAwesomeIcon icon={faQuestion} /></a>
                    </div>
                    <div className="Convert-Input-Group">
                        <select className="select" value={kohdeValuutta} onChange={(e) => setKohdeValuutta(e.target.value)}>
                            {Object.keys(valuutat).map(valuutta => (
                                <option key={valuutta} value={valuutta}>{valuutta}</option>
                            ))}
                        </select>
                    </div>
                    {/* Show modal button */}
                    <div className='Convert-btns'>
                    <button className="CurrencyBtn" onClick={muunnaValuutta}>Convert</button>
                    </div>
                    {muunnettuSumma && (
                  <div className="output">
                    <div>Converted amount:</div>
                    <div className="output-amount">{muunnettuSumma} {kohdeValuutta}</div>
                 </div>
                 )}
                     </div>

                {/* Modal for currency explanatiosn */}
                <div id="currencyModal" className="modal" style={{ display: 'none' }} >
                    <div className="modal-content">
                        <h2>Currency info</h2>
                        <div className="Currency-Infos">
                            {Object.entries(currencyDescriptions).map(([koodi, selitys]) => (
                                <div key={koodi}>{koodi} = {selitys}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for for info and how to use */}
            <div className="CurrencyInfoModal">
                <div className="CurrencyInfo-Modal-content">
                    <h2>Currency Converter</h2>
                    <p>Convert currency from one to another. Select the source currency and the target currency, then enter the amount to be converted. Click the "Convert" button to see the result.</p>
                </div>
                </div>
        </div>
    );
};

export default CurrencyConverter;