import { useEffect, useState } from 'react'
import Display from './Display'
import Button from './Button'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false)

  const inputNumber = (number) => {
    if (display === 'Error') {
      setDisplay(number)
      return
    }

    if (waitingForSecondNumber) {
      setDisplay(number)
      setWaitingForSecondNumber(false)
      return
    }

    if (display === '0') {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }

  const inputDecimal = () => {
    if (display === 'Error') {
      setDisplay('0.')
      return
    }

    if (waitingForSecondNumber) {
      setDisplay('0.')
      setWaitingForSecondNumber(false)
      return
    }

    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const calculate = (number1, number2, selectedOperator) => {
    switch (selectedOperator) {
      case '+':
        return number1 + number2

      case '-':
        return number1 - number2

      case '*':
        return number1 * number2

      case '/':
        if (number2 === 0) {
          return 'Error'
        }
        return number1 / number2

      default:
        return number2
    }
  }

  const chooseOperator = (selectedOperator) => {
    if (display === 'Error') {
      return
    }

    const currentNumber = parseFloat(display)

    if (firstNumber === null) {
      setFirstNumber(currentNumber)
    } else if (operator) {
      const result = calculate(firstNumber, currentNumber, operator)

      if (result === 'Error') {
        setDisplay('Error')
        setFirstNumber(null)
        setOperator(null)
        return
      }

      setDisplay(String(result))
      setFirstNumber(result)
    }

    setOperator(selectedOperator)
    setWaitingForSecondNumber(true)
  }

  const handleEquals = () => {
    if (firstNumber === null || operator === null || display === 'Error') {
      return
    }

    const secondNumber = parseFloat(display)
    const result = calculate(firstNumber, secondNumber, operator)

    if (result === 'Error') {
      setDisplay('Error')
    } else {
      setDisplay(String(result))
    }

    setFirstNumber(null)
    setOperator(null)
    setWaitingForSecondNumber(false)
  }

  const clearCalculator = () => {
    setDisplay('0')
    setFirstNumber(null)
    setOperator(null)
    setWaitingForSecondNumber(false)
  }

  const handleKeyboard = (event) => {
    const key = event.key

    if (key >= '0' && key <= '9') {
      inputNumber(key)
    }

    if (key === '.') {
      inputDecimal()
    }

    if (key === '+' || key === '-') {
      chooseOperator(key)
    }

    if (key === '*') {
      chooseOperator('*')
    }

    if (key === '/') {
      event.preventDefault()
      chooseOperator('/')
    }

    if (key === 'Enter' || key === '=') {
      handleEquals()
    }

    if (key === 'Escape' || key === 'Delete') {
      clearCalculator()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboard)

    return () => {
      window.removeEventListener('keydown', handleKeyboard)
    }
  })

  return (
    <section className="rounded-3xl bg-white p-5 shadow-xl sm:p-6">

      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">
          Calculator
        </h2>

        <p className="text-sm text-slate-500">
          Use the buttons or your keyboard
        </p>
      </div>

      <Display value={display} />

      <div className="mt-4 grid grid-cols-4 gap-3">

        <Button
          label="AC"
          onClick={clearCalculator}
          className="bg-red-500 text-white hover:bg-red-600"
        />

        <Button
          label="÷"
          onClick={() => chooseOperator('/')}
          className="bg-blue-200 text-blue-900 hover:bg-blue-300"
        />

        <Button
          label="×"
          onClick={() => chooseOperator('*')}
          className="bg-blue-200 text-blue-900 hover:bg-blue-300"
        />

        <Button
          label="−"
          onClick={() => chooseOperator('-')}
          className="bg-blue-200 text-blue-900 hover:bg-blue-300"
        />

        <Button
          label="7"
          onClick={() => inputNumber('7')}
        />

        <Button
          label="8"
          onClick={() => inputNumber('8')}
        />

        <Button
          label="9"
          onClick={() => inputNumber('9')}
        />

        <Button
          label="+"
          onClick={() => chooseOperator('+')}
          className="bg-blue-200 text-blue-900 hover:bg-blue-300"
        />

        <Button
          label="4"
          onClick={() => inputNumber('4')}
        />

        <Button
          label="5"
          onClick={() => inputNumber('5')}
        />

        <Button
          label="6"
          onClick={() => inputNumber('6')}
        />

        <Button
          label="="
          onClick={handleEquals}
          className="row-span-2 bg-blue-700 text-white hover:bg-blue-800"
        />

        <Button
          label="1"
          onClick={() => inputNumber('1')}
        />

        <Button
          label="2"
          onClick={() => inputNumber('2')}
        />

        <Button
          label="3"
          onClick={() => inputNumber('3')}
        />

        <Button
          label="0"
          onClick={() => inputNumber('0')}
          className="col-span-2"
        />

        <Button
          label="."
          onClick={inputDecimal}
        />

      </div>
    </section>
  )
}

export default Calculator