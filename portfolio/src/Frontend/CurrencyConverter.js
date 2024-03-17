import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/CurrencyConverter.css';

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
    const showCurrencyModal = () => {
        if(document.getElementById('currencyModal') === null) 
        return;

        const modal = document.getElementById('currencyModal');

        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        } else
        modal.style.display = 'block';
    }
        // modal close if pressed outside
        window.onclick = function(event) {
            if(document.getElementById('currencyModal') === null) {
            return;    
            }

            const modal = document.getElementById('currencyModal');

            if (event.target !== modal && !event.target.classList.contains('CurrencyModalBtn')){
            modal.style.display = 'none';
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
    

    return (
        <div className="container">
            <div className="CurrencyContent">
                <div className="muunnin">
                    <h2>Currency converter</h2>
                    <div className="ConvertInput">
                        <input
                            type="number"
                            className="ConvertInpu"
                            value={muunnettavaSumma}
                            onChange={(e) => setMuunnettavaSumma(e.target.value)}
                            onKeyDown={kasitteleEnter}
                            placeholder="Enter the amount..."
                        />
                    </div>
                    <div className="Convert-Input-Group">
                        <select className="select" value={lahdeValuutta} onChange={(e) => setLahdeValuutta(e.target.value)}>
                            {Object.keys(valuutat).map(valuutta => (
                                <option key={valuutta} value={valuutta}>{valuutta}</option>
                            ))}
                        </select>
                    </div>
                    <div className="Convert-Input-Group">
                        <select className="select" value={kohdeValuutta} onChange={(e) => setKohdeValuutta(e.target.value)}>
                            {Object.keys(valuutat).map(valuutta => (
                                <option key={valuutta} value={valuutta}>{valuutta}</option>
                            ))}
                        </select>
                    </div>
                    {/* Show modal button */}
                    <button className="CurrencyModalBtn" onClick={showCurrencyModal}>Currency info</button>
                    <button className="CurrencyBtn" onClick={muunnaValuutta}>Convert</button>
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

                {/* <div className="selitykset">
                    <h2>Selitykset</h2>
                    <div className="valuutta-selitykset">
                        {Object.entries(valuuttaSelitykset).map(([koodi, selitys]) => (
                            <div key={koodi}>{koodi} = {selitys}</div>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CurrencyConverter;