import React from 'react'


interface Props {
    leftOperand: number;
    rightOperand: number;
    operation: string;
    result: number;
}

const Display: React.FC<Props> = ({
    leftOperand,
    rightOperand,
    operation,
    result
}) => {
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
        </React.Fragment>
    );
}
export default Display;