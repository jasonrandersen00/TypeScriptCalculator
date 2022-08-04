import React, { useState } from 'react'
import Button from './components/Button/Button'

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

  const onMinusPlusClick = (operation: string) => {
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
      <div
        style={{
          border: "line",
          backgroundColor: "white",
          height: "25px",
        }}>{leftOperand ? leftOperand : ""}{leftOperand ? (operation) : ""}{rightOperand ? rightOperand + "=" : ""}</div>
      <div
        style={{
          border: "line",
          backgroundColor: "white",
          height: "25px",
        }}>{result}</div>
      <div>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(0)}
          width="50px">{0}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(1)}
          width="50px">{1}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(2)}
          width="50px">{2}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(3)}
          width="50px">{3}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(4)}
          width="50px">{4}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(5)}
          width="50px">{5}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(6)}
          width="50px">{6}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(7)}
          width="50px">{7}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(8)}
          width="50px">{8}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onNumberClick(9)}
          width="50px">{9}</Button>
      </div>

      <div>
        <Button
          border="line"
          height="50px"
          onClick={() => onClearClick()}
          width="50px">{"Clear"}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onMinusPlusClick('+')}
          width="50px">{"+"}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onMinusPlusClick('-')}
          width="50px">{"-"}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onEqualClick()}
          width="50px">{"="}</Button>
      </div>
    </React.Fragment>
  )
}
