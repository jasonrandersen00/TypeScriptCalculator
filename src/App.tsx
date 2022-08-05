import React, { useState } from 'react'
import Display from './components/Display/Display'
import NumPad from './components/NumPad/NumPad'

export const App = () => {
  //Use Webhooks to setup the state
  const [displayResult, setDisplayResult] = useState<string>("0")//Result to display to the screen
  const [operation, setOperation] = useState<string>("")
  const [leftOperand, setLeftOperand] = useState<number>(0)
  const [rightOperand, setRightOperand] = useState<number>(0)
  const [result, setResult] = useState<number>(0)//Result to display to the screen


  const onNumberClick = (number: number) => {
    let currentResult = displayResult;

    if (currentResult !== "0") {
      currentResult = result + number.toString()
    } else {
      currentResult = number.toString()
    }

    setResult(Number(currentResult))
    setDisplayResult(currentResult)
  }

  const onOperatorClick = (operation: string) => {
    setOperation(operation)
    if (!leftOperand) {
      setLeftOperand(result)
      setResult(0)
      setDisplayResult("0")
    }

  }

  const onEqualClick = () => {
    if (leftOperand) {
      let newResult = 0
      setRightOperand(result)

      switch (operation) {
        case '+':
          newResult = leftOperand + result
          break
        case '-':
          newResult = leftOperand - result
          break
        case '*':
          newResult = leftOperand * result
          break
        case '/':
          newResult = leftOperand / result
          break
      }

      setResult(newResult)
      setDisplayResult(newResult.toString())
    }
  }

  const onClearClick = () => {
    setResult(0)
    setDisplayResult("0")
    setLeftOperand(0)
    setRightOperand(0)
    setOperation("")
  }

  return (
    <React.Fragment>
      <Display 
      leftOperand={leftOperand} 
      rightOperand={rightOperand} 
      operation={operation} 
      result={result}/>
      <NumPad
        onNumberClick={onNumberClick}
        onClearClick={onClearClick}
        onOperatorClick={onOperatorClick}
        onEqualClick={onEqualClick}
      />
    </React.Fragment>
  )
}
