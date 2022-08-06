import React, { useState } from 'react'
import Display from './components/Display/Display'
import NumPad from './components/NumPad/NumPad'

export const App = () => {
  //Use Webhooks to setup the state
  const [operator, setOperator] = useState<string>("")
  const [leftOperand, setLeftOperand] = useState<number>(0)
  const [rightOperand, setRightOperand] = useState<number>(0)
  const [result, setResult] = useState<number>(0)


  const onNumberClick = (number: number) => {
    let currentResult = result.toString();

    if (currentResult !== "0") {
      currentResult = result + number.toString()
    } else {
      currentResult = number.toString()
    }

    setResult(Number(currentResult))
  }

  const onOperatorClick = (operator: string) => {
    setOperator(operator)
    if (!leftOperand) {
      setLeftOperand(result)
      setResult(0)
    }

  }

  const onEqualClick = () => {
    if (leftOperand) {
      let newResult = 0
      setRightOperand(result)

      switch (operator) {
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
          if (result === 0){
            return
          }
          newResult = leftOperand / result
          break
      }

      setResult(newResult)
    }
  }

  const onClearClick = () => {
    setResult(0)
    setLeftOperand(0)
    setRightOperand(0)
    setOperator("")
  }

  const onDeleteClick = () => {
    let currentResult = result.toString();

    if (currentResult !== "0") {
      currentResult = currentResult.slice(0,-1)
    }

    setResult(Number(currentResult))
  }

  return (
    <React.Fragment>
      <Display 
      leftOperand={leftOperand} 
      rightOperand={rightOperand} 
      operator={operator} 
      result={result}
      />
      <NumPad
        onNumberClick={onNumberClick}
        onClearClick={onClearClick}
        onOperatorClick={onOperatorClick}
        onEqualClick={onEqualClick}
        onDeleteClick={onDeleteClick}
      />
    </React.Fragment>
  )
}
