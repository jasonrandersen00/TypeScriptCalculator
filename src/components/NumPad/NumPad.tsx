import React from 'react'
import Button from '../Button/Button'

interface Props {
  onNumberClick: (number: number) => void;
  onClearClick: () => void;
  onOperatorClick: (operation: string) => void;
  onEqualClick: () => void;
}

const NumPad: React.FC<Props> = ({
  onNumberClick,
  onClearClick,
  onOperatorClick,
  onEqualClick,
}) => {
  return (
    <React.Fragment>
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
          onClick={() => onOperatorClick('+')}
          width="50px">{"+"}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onOperatorClick('-')}
          width="50px">{"-"}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onOperatorClick('*')}
          width="50px">{"*"}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onOperatorClick('/')}
          width="50px">{"/"}</Button>
        <Button
          border="line"
          height="50px"
          onClick={() => onEqualClick()}
          width="50px">{"="}</Button>
      </div>
    </React.Fragment>
  );
}
export default NumPad;