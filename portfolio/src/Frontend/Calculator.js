import React, { useState, useEffect, useCallback  } from 'react';
import '../css/Calculator.css';

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputDigit = useCallback((digit) => {
        //If curren value includes error message, clear it
        console.log(currentValue);
        if (currentValue.includes('Cannot divide by zero!')) {
            // Clear current value if previous operation was an error
            setCurrentValue(String(digit));
            console.log('clearing');
            return;
        }
        if (waitingForOperand) {
            setCurrentValue(String(digit));
            setWaitingForOperand(false);
        } else {
            setCurrentValue(currentValue === '0' ? String(digit) : currentValue + digit);
        }
    }, [currentValue, waitingForOperand]);

    const inputDot = useCallback(() => {
        if (waitingForOperand) {
            setCurrentValue('0.');
            setWaitingForOperand(false);
        } else if (!currentValue.includes('.')) {
            setCurrentValue(currentValue + '.');
            setWaitingForOperand(false);
        }
    }, [currentValue, waitingForOperand]);

    const clearAll = () => {
        setCurrentValue('0');
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(false);
    };

    const performOperation = (nextOperator) => {

        // ei voi jakaa nollalla
        if (currentValue === '0' && operator === '/') {
            setCurrentValue('Cannot divide by zero!');
            setPreviousValue(null);
            setOperator(null);
            setWaitingForOperand(false);
            return;
        }
        const inputValue = parseFloat(currentValue);

        if (previousValue == null) {
            setPreviousValue(inputValue);
        } 
        else if (operator) {
            const previousValueFloat = parseFloat(previousValue);
            const newValue = performCalculation[operator](previousValueFloat, inputValue);
            setCurrentValue(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperator(nextOperator);
    };

    const performCalculation = {
        '/': (firstValue, secondValue) => firstValue / secondValue,
        '*': (firstValue, secondValue) => firstValue * secondValue,
        '+': (firstValue, secondValue) => firstValue + secondValue,
        '-': (firstValue, secondValue) => firstValue - secondValue,
        '=': (firstValue, secondValue) => secondValue
    };

    //Removee last digit
    const removeLastDigit = () => {
        if (currentValue.length === 1) {
            setCurrentValue('0');
        } else {
            setCurrentValue(currentValue.slice(0, -1));
        }
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key >= 0 && event.key <= 9) {
                inputDigit(event.key);
            } else if (event.key === '.' || event.key === ',') {
                inputDot();
            } else if (event.key === 'Enter' || event.key === '=') {
                performOperation('=');
            } else if (event.key === '+') {
                performOperation('+');
            } else if (event.key === '-') {
                performOperation('-');
            } else if (event.key === '*') {
                performOperation('*');
            } else if (event.key === '/') {
                performOperation('/');
            } else if (event.key === 'Escape') { // Use Escape to clear
                clearAll();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentValue, performOperation, inputDigit, inputDot, clearAll]);

    return (
        <div class ="wrapper">
            <section class="screen">
                <div class="output">{currentValue}</div>
            </section>

            <section class="calc-buttons">
                <div class="calc-button-row">
                    <button class="calc-button double"  onClick={clearAll}>C</button>
                    <button class="calc-button" onClick={() => removeLastDigit()}>&larr;</button>
                    <button class="calc-button" onClick={() => performOperation('/')}>&divide;</button>
                </div>
                <div class="calc-button-row">
                    <button class="calc-button"onClick={() => inputDigit('7')}>7</button>
                    <button class="calc-button"onClick={() => inputDigit('8')}>8</button>
                    <button class="calc-button"onClick={() => inputDigit('9')}>9</button>
                    <button class="calc-button" onClick={() => performOperation('*')}>&times;</button>
                </div>

                <div class="calc-button-row">
                    <button class="calc-button"onClick={() => inputDigit('4')}>4</button>
                    <button class="calc-button"onClick={() => inputDigit('5')}>5</button>
                    <button class="calc-button"onClick={() => inputDigit('6')}>6</button>
                    <button class="calc-button" onClick={() => performOperation('-')}>-</button>
                </div>

                <div class="calc-button-row">
                    <button class="calc-button"onClick={() => inputDigit('1')}>1</button>
                    <button class="calc-button"onClick={() => inputDigit('2')}>2</button>
                    <button class="calc-button"onClick={() => inputDigit('3')}>3</button>
                    <button class="calc-button" onClick={() => performOperation('+')}>+</button>
                </div>

                <div class="calc-button-row">
                    <button class="calc-button triple"onClick={() => inputDigit('0')}>0</button>
                    <button class="calc-button" onClick={() => performOperation('=')}>=</button>
                </div>
            </section>
        </div>
    );
};

export default Calculator;