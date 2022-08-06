import React from 'react'
import Button from '../Button/Button'

interface Props {
  onNumberClick: (number: number) => void;
  onClearClick: () => void;
  onOperatorClick: (operation: string) => void;
  onEqualClick: () => void;
  onDeleteClick: () => void;
}

const NumPad: React.FC<Props> = ({
  onNumberClick,
  onClearClick,
  onOperatorClick,
  onEqualClick,
  onDeleteClick
}) => {
  return (
    <React.Fragment>
      <div>
        <Button
          onClick={() => onNumberClick(0)}>{0}</Button>
        <Button
          onClick={() => onNumberClick(1)}>{1}</Button>
        <Button
          onClick={() => onNumberClick(2)}>{2}</Button>
        <Button
          onClick={() => onNumberClick(3)}>{3}</Button>
        <Button
          onClick={() => onNumberClick(4)}>{4}</Button>
        <Button
          onClick={() => onNumberClick(5)}>{5}</Button>
        <Button
          onClick={() => onNumberClick(6)}>{6}</Button>
        <Button
          onClick={() => onNumberClick(7)}>{7}</Button>
        <Button
          onClick={() => onNumberClick(8)}>{8}</Button>
        <Button
          onClick={() => onNumberClick(9)}>{9}</Button>
      </div>

      <div>
        <Button
          onClick={() => onClearClick()}>{"Clear"}</Button>
        <Button
          onClick={() => onOperatorClick('+')}>{"+"}</Button>
        <Button
          onClick={() => onOperatorClick('-')}>{"-"}</Button>
        <Button
          onClick={() => onOperatorClick('*')}>{"*"}</Button>
        <Button
          onClick={() => onOperatorClick('/')}>{"/"}</Button>
        <Button
          onClick={() => onDeleteClick()}>{"<-"}</Button>
        <Button
          onClick={() => onEqualClick()}>{"="}</Button>
      </div>
    </React.Fragment>
  );
}
export default NumPad;