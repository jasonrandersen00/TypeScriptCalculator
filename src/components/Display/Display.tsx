import React from 'react'


interface Props {
    leftOperand: number;
    rightOperand: number;
    operator: string;
    result: number;
}

const Display: React.FC<Props> = ({
    leftOperand,
    rightOperand,
    operator,
    result
}) => {
    return (
        <React.Fragment>
            <div
                style={{
                    border: "line",
                    backgroundColor: "white",
                    height: "25px",
                }}>{leftOperand ? leftOperand : ""}{leftOperand ? (operator) : ""}{rightOperand ? rightOperand + "=" + result : ""}</div>
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