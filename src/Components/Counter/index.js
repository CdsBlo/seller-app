import React from "react";
import { useCounter } from "react-use";

export default function Counter({ startValue = 0, step = 1 }) {
  const [currentValue, { inc, dec }] = useCounter(startValue, null, startValue);
  return (
    <>
      <p>{currentValue}</p>
      <button onClick={() => dec(step)}>- {step}</button>
      <button onClick={() => inc(step)}>+ {step}</button>
    </>
  );
}
