import React from "react";

export default function Counter({ startValue = 0, step = 1 }) {
  const [currentValue, updateValue] = React.useState(startValue);
  return (
    <>
      <p>{currentValue}</p>
      <button
        onClick={() => {
          console.log("click");
          updateValue(currentValue + step);
        }}
      >
        Click me
      </button>
    </>
  );
}
