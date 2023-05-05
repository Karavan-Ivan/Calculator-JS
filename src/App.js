import NumbersBlock from './components/NumbersBlock'
import '../src/Styles/styles.scss'
import Operators from './components/Operators'
import React, { useState } from 'react'

function App() {
    const [result, setResult] = useState('')

    const changeResultOnClick = (e) => {
        setResult(result + e)
    }

    const changeResultOnClickMinus = (e) => {
        if (result.slice(result.length - 1) === '-') {
            setResult(result)
        } else {
            setResult(result + e)
        }
    }

    const changeResultOnClickOperatots = (e) => {
        if (
            result.slice(result.length - 1) === '+' ||
            result.slice(result.length - 1) === '-' ||
            result.slice(result.length - 1) === '*' ||
            result.slice(result.length - 1) === '/'
        ) {
            setResult(result)
        } else {
            setResult(result + e)
        }
    }

    const clearResult = () => {
        setResult('')
    }

    const deleteLastSumbol = () => {
        setResult(result.substring(0, result.length - 1))
    }

    const countResult = () => {
        try {
            if (eval(result) % 1 !== 0) {
                setResult(eval(result).toFixed(6))
            } else {
                setResult(eval(result))
            }
        } catch {
            alert('Некоректно введені дані')
        }
    }

    const countPercent = () => {
        setResult(eval(result) / 100)
    }

    const changeInputFontsize = (value) => {
        if (value.length > 9 && value.length <= 16) {
            return '30px'
        } else if (value.length > 16 && value.length <= 24) {
            return '20px'
        } else if (value.length > 24 && value.length <= 30) {
            return '15px'
        } else {
            return '50px'
        }
    }

    const addBrackets = () => {
        let leftBracket = '('
        let rightBracket = ')'
        if (
            result.split(leftBracket).length - 1 >
            result.split(rightBracket).length - 1
        ) {
            setResult(result + ')')
        } else {
            setResult(result + '(')
        }
    }

    return (
        <div className="container">
            <div className="calculator">
                <input
                    value={result}
                    className="inputDisplay"
                    style={{ fontSize: `${changeInputFontsize(result)}` }}
                    readOnly
                    type="text"
                />
                <div className="calculatorButtons">
                    <Operators
                        clearResult={clearResult}
                        changeResultOnClickOperatots={
                            changeResultOnClickOperatots
                        }
                        countResult={countResult}
                        countPercent={countPercent}
                        addBrackets={addBrackets}
                        changeResultOnClickMinus={changeResultOnClickMinus}
                    />
                    <NumbersBlock
                        changeResultOnClick={changeResultOnClick}
                        deleteLastSumbol={deleteLastSumbol}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
