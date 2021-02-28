import React, { createContext, useCallback, useState } from "react";

interface CountdownContextData {
  hasFinished: boolean;
  setHasFinishedStatus(): void;
  time: number;
  setTimeValue(value: number): void;
  isActive: boolean;
  setIsActiveStatus(): void;
  resetCountdown(): void;
}

export const CountdownContext = createContext({} as CountdownContextData);

const defaultCountdownTime = 0.1 * 60;

export const CountdownProvider: React.FC = ({ children }) => {
  const [hasFinished, setHasFinished] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(defaultCountdownTime);

  function setHasFinishedStatus() {
    setHasFinished(!hasFinished);
  }

  function setIsActiveStatus() {
    setIsActive(!isActive);
  }

  function setTimeValue(value: number) {
      setTime(value);
  }

  function resetCountdown() {
    setIsActive(false);
    setTime(defaultCountdownTime);
    setHasFinished(false);
  }

  return (
    <CountdownContext.Provider value={{ hasFinished, setHasFinishedStatus, time, setTimeValue, isActive, setIsActiveStatus, resetCountdown}}>
      {children}
    </CountdownContext.Provider>
  );
};
