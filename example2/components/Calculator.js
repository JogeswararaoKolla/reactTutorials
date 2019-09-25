import React from "react";

function Math(props) {
  let result = 0;
  const arg1 = props.num1;
  const arg2 = props.num2;
  const operator = props.operator;
  if (operator == "+") {
    result = arg1 + arg2;
  } else if (operator == "-") {
    result = arg1 - arg2;
  } else if (operator == "*") {
    result = arg1 * arg2;
  } else if (operator == "/") {
    result = arg1 / arg2;
  }

  console.log(result);
  return <span style={{ fontSize: result }}>{result}</span>;
}

function Calculator() {
  return (
    <div>
      <p>
        19 + 341 = <Math num1={19} num2={341} operator="+" />
      </p>
      <p>
        42 - 17 = <Math num1={42} num2={17} operator="-" />
      </p>
      <p>
        100 * 3 = <Math num1={100} num2={3} operator="*" />
      </p>
      <p>
        96 / 4 = <Math num1={96} num2={4} operator="/" />
      </p>
    </div>
  );
}

export default Calculator;
